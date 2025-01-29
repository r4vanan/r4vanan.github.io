var beforeEl, linerEl, commandEl, textareaEl, terminalEl;
var cmdIndex = 0;
var isPwdMode = false;
let isPwdCorrect = false;
var cmdHistory = [];

function initializeElements() {
  beforeEl = document.getElementById("before");
  linerEl = document.getElementById("liner");
  commandEl = document.getElementById("typer");
  textareaEl = document.getElementById("texter");
  terminalEl = document.getElementById("terminal");

  setTimeout(function() {
    loopLines(bannerDetails, "", 80);
    textareaEl.focus();
  }, 100);

  window.addEventListener("keyup", handleKeyUp);

  document.addEventListener('click', function() {
    textareaEl.focus();
  });

  document.addEventListener('touchstart', function() {
    textareaEl.focus();
  });

  document.addEventListener('paste', handlePaste);

  // Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Disable developer tools
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.shiftKey && e.keyCode == 67) || // Ctrl+Shift+C
        (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
      e.preventDefault();
    }
  });

  console.log(
    "%cYou hacked my password damn!😠",
    "color: #04ff00; font-weight: bold; font-size: 24px;"
  );
  console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

  //init
  textareaEl.value = "";
  commandEl.innerHTML = textareaEl.value;
}

// Fetch a specific background image based on the current time
function fetchTimedBackground() {
  fetch('https://raw.githubusercontent.com/r4vanan/wallpapers/refs/heads/main/wall.txt')
    .then(response => response.text())
    .then(data => {
      const urls = data.split('\n').filter(url => url.trim() !== '');
      const randomIndex = Math.floor(Math.random() * urls.length);
      const randomImageUrl = urls[randomIndex];
      setBackground(randomImageUrl, initializeElements);
    })
    .catch(error => console.error('Error fetching background image:', error));
}

function setBackground(url, callback) {
  const img = new Image();
  img.onload = function() {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Add a semi-transparent black overlay
    document.body.style.backgroundBlendMode = 'overlay'; // Blend the overlay with the background image
    if (callback) callback();
  };
  img.src = url;
}

// Check if a background image is already stored in local storage
const storedBackgroundImage = localStorage.getItem('backgroundImage');
if (storedBackgroundImage) {
  setBackground(storedBackgroundImage, initializeElements);
} else {
  fetchTimedBackground();
}

// Change wallpaper every 30 minutes (1800000 milliseconds)
setInterval(fetchTimedBackground, 1800000);

function handleKeyUp(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (isPwdMode) {
    let maskedPwd = "*".repeat(textareaEl.value.length);
    commandEl.innerHTML = maskedPwd;
    if (textareaEl.value === password) {
      isPwdCorrect = true;
    }
    if (isPwdCorrect && e.keyCode == 13) {
      loopLines(secretDetails, "color2 margin", 100);
      commandEl.innerHTML = "";
      textareaEl.value = "";
      isPwdCorrect = false;
      isPwdMode = false;
      linerEl.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      commandEl.innerHTML = "";
      textareaEl.value = "";
      isPwdMode = false;
      linerEl.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      cmdHistory.push(commandEl.innerHTML.trim()); // Trim spaces
      cmdIndex = cmdHistory.length;
      addLine("r4vanan@kali:~$ " + commandEl.innerHTML.trim(), "no-animation", 0); // Trim spaces
      executeCommand(commandEl.innerHTML.trim().toLowerCase()); // Trim spaces
      commandEl.innerHTML = "";
      textareaEl.value = "";
      //addPrompt(); // Add new prompt after executing command
    } else {
      commandEl.innerHTML = textareaEl.value.trim(); // Ensure typed text is shown without extra spaces
    }
    if (e.keyCode == 38 && cmdIndex != 0) {
      cmdIndex -= 1;
      textareaEl.value = cmdHistory[cmdIndex];
      commandEl.innerHTML = textareaEl.value;
    }
    if (e.keyCode == 40 && cmdIndex != cmdHistory.length) {
      cmdIndex += 1;
      if (cmdHistory[cmdIndex] === undefined) {
        textareaEl.value = "";
      } else {
        textareaEl.value = cmdHistory[cmdIndex];
      }
      commandEl.innerHTML = textareaEl.value;
    }
  }
}

function handlePaste(event) {
  const paste = (event.clipboardData || window.clipboardData).getData('text');
  textareaEl.value += paste;
  commandEl.innerHTML = textareaEl.value;
  event.preventDefault();
}

function executeCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(helpDetails, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whoisDetails, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoamiDetails, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      openNewTab(youtubeLink);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
      break;
    case "social":
      loopLines(socialLinks, "color2 margin", 80);
      break;
    case "secret":
      linerEl.classList.add("password");
      isPwdMode = true;
      break;
    case "projects":
      loopLines(projectDetails, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(cmdHistory, "color2", 80);
      addLine("<br>", "command", 80 * cmdHistory.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:lawrencetheworldhacker99@gmail.com">lawrencetheworldhacker99@gmail.com</a>...', "color2", 80);
      openNewTab(emailURL);
      break;
    case "clear":
      setTimeout(function() {
        terminalEl.innerHTML = ''; // Clear the terminal content
        beforeEl = document.createElement("a");
        beforeEl.id = "before";
        terminalEl.appendChild(beforeEl);
        linerEl = document.createElement("div"); // Recreate linerElement
        linerEl.id = "liner";
        linerEl.innerHTML = '<span id="typer"></span><b class="cursor" id="cursor">█</b>';
        //terminalEl.appendChild(linerEl);
        textareaEl.value = ""; // Clear the textarea value
        commandEl.innerHTML = ""; // Clear the command element
        textareaEl.focus(); // Ensure the textarea is focused
      }, 1);
      break;
    case "banner":
      loopLines(bannerDetails, "", 80);
      break;
    // socials
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      openNewTab(youtubeLink);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      openNewTab(twitterURL);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      openNewTab(linkedinURL);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      openNewTab(instagramURL);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      openNewTab(githubURL);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function openNewTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t.replace(/<br>/g, ""); // Remove any <br> elements
    next.className = style;

    beforeEl.parentNode.insertBefore(next, beforeEl);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function addPrompt() {
  linerEl = document.createElement("div"); // Recreate linerElement
  linerEl.id = "liner";
  linerEl.innerHTML = '<span id="typer"></span><b class="cursor" id="cursor">█</b>';
  terminalEl.appendChild(linerEl);
  textareaEl.focus();
  window.scrollTo(0, document.body.scrollHeight); // Ensure the prompt is at the bottom
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

var beforeEl = document.getElementById("before");
var linerEl = document.getElementById("liner");
var commandEl = document.getElementById("typer");
var textareaEl = document.getElementById("texter");
var terminalEl = document.getElementById("terminal");

var cmdIndex = 0, isPwdMode = false, isPwdCorrect = false, cmdHistory = [];

setTimeout(() => { loopLines(bannerDetails, "", 80); textareaEl.focus(); }, 100);
window.addEventListener("keyup", handleKeyUp);
document.addEventListener('click', () => textareaEl.focus());
document.addEventListener('touchstart', () => textareaEl.focus());
document.addEventListener('paste', handlePaste);
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
  if ([123, 73, 74, 67, 85].includes(e.keyCode) || (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode))) e.preventDefault();
});

console.log("%cYou hacked my password damn!😠", "color: #04ff00; font-weight: bold; font-size: 24px;");
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

// Fetch and set wallpaper with fallback
function fetchTimedBackground() {
  fetch('https://raw.githubusercontent.com/r4vanan/wallpapers/refs/heads/main/wall.txt')
    .then(res => res.text())
    .then(data => {
      let urls = data.split('\n').filter(url => url.trim() !== '');
      let timeUrls = getTimeBasedUrls(urls);
      tryNextUrl(timeUrls);
    })
    .catch(err => console.error('Error fetching wallpaper list:', err));

  function getTimeBasedUrls(urls) {
    const hours = new Date().getHours();
    return urls.filter(url => (hours < 12 && url.includes('morning')) || 
                               (hours < 18 && url.includes('afternoon')) || 
                               (hours < 21 && url.includes('evening')) || 
                               (hours >= 21 || hours < 6 && url.includes('night')));
  }

  function tryNextUrl(urls) {
    if (!urls.length) return console.error('No valid URLs found');
    fetch(urls.pop())
      .then(res => res.ok ? setBackground(res.url) : tryNextUrl(urls))
      .catch(() => tryNextUrl(urls));
  }
}

function setBackground(url) {
  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  document.body.style.backgroundBlendMode = 'overlay';
}

const storedBackgroundImage = localStorage.getItem('backgroundImage');
if (storedBackgroundImage) setBackground(storedBackgroundImage);
else fetchTimedBackground();

setInterval(fetchTimedBackground, 1800000);

textareaEl.value = "";
commandEl.innerHTML = textareaEl.value;

function handleKeyUp(e) {
  if (e.keyCode === 181) document.location.reload(true);
  if (isPwdMode) handlePwdMode(e);
  else handleCommandInput(e);
}

function handlePwdMode(e) {
  let maskedPwd = "*".repeat(textareaEl.value.length);
  commandEl.innerHTML = maskedPwd;
  if (textareaEl.value === password) isPwdCorrect = true;

  if (isPwdCorrect && e.keyCode === 13) {
    loopLines(secretDetails, "color2 margin", 100);
    resetPwdMode();
  } else if (e.keyCode === 13) {
    addLine("Wrong password", "error", 0);
    resetPwdMode();
  }
}

function resetPwdMode() {
  commandEl.innerHTML = "";
  textareaEl.value = "";
  isPwdCorrect = false;
  isPwdMode = false;
  linerEl.classList.remove("password");
}

function handleCommandInput(e) {
  if (e.keyCode === 13) {
    cmdHistory.push(commandEl.innerHTML.trim());
    cmdIndex = cmdHistory.length;
    addLine(`r4vanan@kali:~$ ${commandEl.innerHTML.trim()}`, "no-animation", 0);
    executeCommand(commandEl.innerHTML.trim().toLowerCase());
    commandEl.innerHTML = "";
    textareaEl.value = "";
  } else {
    commandEl.innerHTML = textareaEl.value.trim();
  }

  if (e.keyCode === 38 && cmdIndex !== 0) {
    cmdIndex -= 1;
    textareaEl.value = cmdHistory[cmdIndex];
    commandEl.innerHTML = textareaEl.value;
  }
  if (e.keyCode === 40 && cmdIndex !== cmdHistory.length) {
    cmdIndex += 1;
    textareaEl.value = cmdHistory[cmdIndex] || "";
    commandEl.innerHTML = textareaEl.value;
  }
}

function handlePaste(event) {
  const paste = (event.clipboardData || window.clipboardData).getData('text');
  textareaEl.value += paste;
  commandEl.innerHTML = textareaEl.value;
  event.preventDefault();
}

function executeCommand(cmd) {
  const commands = {
    help: () => loopLines(helpDetails, "color2 margin", 80),
    whois: () => loopLines(whoisDetails, "color2 margin", 80),
    whoami: () => loopLines(whoamiDetails, "color2 margin", 80),
    video: () => { addLine("Opening YouTube...", "color2", 80); openNewTab(youtubeLink); },
    sudo: () => { addLine("Oh no, you're not admin...", "color2", 80); setTimeout(() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 1000); },
    social: () => loopLines(socialLinks, "color2 margin", 80),
    secret: () => { linerEl.classList.add("password"); isPwdMode = true; },
    projects: () => loopLines(projectDetails, "color2 margin", 80),
    password: () => addLine("<span class=\"inherit\"> Lol! You're joking, right? You\'re gonna have to try harder than that!😂</span>", "error", 100),
    history: () => { addLine("<br>", "", 0); loopLines(cmdHistory, "color2", 80); addLine("<br>", "command", 80 * cmdHistory.length + 50); },
    email: () => { addLine('Opening mailto:<a href="mailto:lawrencetheworldhacker99@gmail.com">lawrencetheworldhacker99@gmail.com</a>...', "color2", 80); openNewTab(emailURL); },
    clear: () => { terminalEl.innerHTML = ''; addLine("", "command", 0); },
    banner: () => loopLines(bannerDetails, "", 80),
    youtube: () => { addLine("Opening YouTube...", "color2", 80); openNewTab(youtubeLink); },
    twitter: () => { addLine("Opening Twitter...", "color2", 0); openNewTab(twitterURL); },
    linkedin: () => { addLine("Opening LinkedIn...", "color2", 0); openNewTab(linkedinURL); },
    instagram: () => { addLine("Opening Instagram...", "color2", 0); openNewTab(instagramURL); },
    github: () => { addLine("Opening GitHub...", "color2", 0); openNewTab(githubURL); },
    default: () => addLine("<span class=\"inherit\">Command not found. Type <span class=\"command\">'help'</span>.</span>", "error", 100),
  };

  (commands[cmd] || commands.default)();
}

function openNewTab(link) { setTimeout(() => window.open(link, "_blank"), 500); }

function addLine(text, style, time) {
  let t = text.replace(/\s+/g, m => m === '  ' ? "&nbsp;&nbsp;" : ' ');
  setTimeout(() => {
    let next = document.createElement("p");
    next.innerHTML = t.replace(/<br>/g, "");
    next.className = style;
    beforeEl.parentNode.insertBefore(next, beforeEl);
    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach((item, index) => addLine(item, style, index * time));
}

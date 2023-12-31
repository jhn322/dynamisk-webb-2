// Functions to redirect to specific link onClick as assigned in HTML

// ###############################
// # Denna kod är skriven av mig.#
// ###############################

// function with variabel assigned in HTML to work onclick
function redirectToAbout() {
  // Redirects to respective page or external webpage on click
  window.location.href = "html/about.html";
}

function redirectToCv() {
  window.location.href = "html/cv.html";
}

function redirectToPortfolio() {
  window.location.href = "html/portfolio.html";
}

function redirectToGithub1() {
  window.location.href =
    "https://github.com/jhn322/plex-meta-manager-config.git";
}

function redirectToGithub2() {
  window.location.href = "https://github.com/jhn322/guess-the-number.git";
}

function redirectToGithub3() {
  window.location.href = "https://github.com/jhn322/responsive-sidebar-1.git";
}

function redirectToGithub4() {
  window.location.href =
    "https://github.com/jhn322/docker-linux-server-setup.git";
}
console.log(
  redirectToAbout,
  redirectToCv,
  redirectToPortfolio,
  redirectToGithub1,
  redirectToGithub2,
  redirectToGithub3,
  redirectToGithub4
);

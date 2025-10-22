//// /////////////////////////    Common header and footer object ///////////////////////////
const headerFooter = {
    header:`
        <div class="logo-container">
            <a href="/">
                <img src="assets/logo.png" alt="Logo" class="logo" width="80">
            </a>
        </div>
        <div class="nav-links">
            <a href="/" class="active">Home</a>
            <a href="about.html">About</a>
            <a href="projects.html">Projects</a>
            <a href="articles.html">Articles</a>
            <a href="contact.html">Contact</a>
        </div>`,

    footer:`
        <div class="footer-content">
            <p>Made with ❤️ by Saheb Das</p>
            <p>© <span class="current-year">${new Date().getFullYear()}</span> github.org/whosaheb. All rights reserved.</p>
        </div>`
}

/// add common header to the page
let pageNav = document.getElementsByTagName('nav')[0]
if (pageNav) pageNav.innerHTML = headerFooter.header;

/// add coomon footer to the page
let pageFooter = document.getElementsByTagName('footer')[0]
if (pageFooter) pageFooter.innerHTML = headerFooter.footer;

/// add active link to the menu link
const activeUrl = window.location.pathname;
document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === activeUrl || (activeUrl === "/" && linkPath === "/index.html")) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


/**************** helpers functions are below  ****************/
function loadSocialLinks(socialLinks) {
    // Select all anchors with data-social attribute
    document.querySelectorAll('a[data-social]').forEach(anchor => {
        const key = anchor.getAttribute('data-social');        
        if (socialLinks[key]) {
            anchor.href = socialLinks[key];
            anchor.target = "_blank";
            anchor.rel = "noreferrer";
        }
    });
}

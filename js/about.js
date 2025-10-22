// load about page title and intro content
function loadAboutPageHeading() {
    document.querySelector('.about-title').innerHTML = INFO.about.title;
    document.querySelector('.about-subtitle').innerHTML = INFO.about.description;    
}

// Initialize about page
document.addEventListener('DOMContentLoaded', () => {
    document.title = INFO.main.title + " | About";
    loadAboutPageHeading();
    loadSocialLinks(INFO.socials);
});
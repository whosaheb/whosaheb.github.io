// Handle logo resize on scroll
let logoSize = 80;
let oldLogoSize = 80;
let stayLogo = false;

window.addEventListener('scroll', () => {
    const scroll = Math.round(window.pageYOffset, 2);
    let newLogoSize = 80 - (scroll * 4) / 10;

    if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
            logoSize = newLogoSize;
            oldLogoSize = newLogoSize;
            stayLogo = false;
        } else {
            stayLogo = true;
        }
    } else {
        logoSize = newLogoSize;
        stayLogo = false;
    }

    const logo = document.querySelector('.logo-wrapper img');
    if (logo) {
        logo.style.width = `${logoSize}px`;
        logo.parentElement.style.position = stayLogo ? 'fixed' : 'relative';
        logo.parentElement.style.top = stayLogo ? '3vh' : 'auto';
        logo.parentElement.style.zIndex = stayLogo ? '999' : 'auto';
        logo.parentElement.style.border = stayLogo ? '1px solid white' : 'none';
        logo.parentElement.style.borderRadius = stayLogo ? '50%' : 'none';
        logo.parentElement.style.boxShadow = stayLogo ? '0px 4px 10px rgba(0, 0, 0, 0.25)' : 'none';
    }
});

function loadHomapageIntro() {
    const homePageIntroArea = document.getElementById('homepage-intro-area');
    if (!homePageIntroArea) return;

    const homePageIntroHTML = `
        <div class="title homepage-title">${INFO.homepage.title}</div>

        <div class="subtitle homepage-subtitle">${INFO.homepage.description}</div>
    `;
    homePageIntroArea.innerHTML = homePageIntroHTML;
}

// Load projects
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    const projectsData = (typeof INFO !== 'undefined' && Array.isArray(INFO.projects)) ? INFO.projects : [];
    if (projectsData.length === 0) {
        projectsContainer.innerHTML = '<div class="no-projects">No projects available.</div>';
        return;
    }

    const hrqualifierProject = projectsData.find(project => project.title === 'Hrqualifier');
    // Get the first two projects and conditionally add the Hrqualifier project if found
    let projectsToRender = projectsData.slice(0, 2);
    if (hrqualifierProject && !projectsToRender.some(p => p.title === 'Hrqualifier')) {
        projectsToRender.push(hrqualifierProject);
    }

    // Map the selected projects to HTML
    const projectsHTML = projectsToRender.map(project => {
        // Optional chaining and nullish coalescing are great modern ways to handle missing properties
        const logo = project?.logo ?? 'placeholder.png';
        const title = project?.title ?? 'Untitled';
        const description = project?.description ?? '';
        const company = project?.company ?? 'N/A';

        return `
            <div class="project-card">
                <img src="${logo}" alt="${title} logo">
                <h3>${title}</h3>
                <p>${description}</p>
                <strong>Provided by: ${company}</strong><br/>
            </div>
        `;
    }).join('');

    projectsContainer.innerHTML = projectsHTML + `<a href="projects.html" rel="noreferrer" class="view-all-link">View All Projects</a>`;
}

// Load articles
function loadArticles() {
    const articlesContainer = document.getElementById('articles-container');
    if (!articlesContainer) return;

    const articlesData = (typeof INFO !== 'undefined' && Array.isArray(INFO.articles_content)) ? INFO.articles_content : [];
    if (articlesData.length === 0) {
        projectsContainer.innerHTML = '<div class="no-articles">No articles available.</div>';
        return;
    }

    const articlesHTML = articlesData.slice(0, 3).map((article, index) => {
        const date = article && article.date ? article.date : '2025-10-19';
        const title = article && article.title ? article.title : 'Untitled';
        const summary = article && article.summary ? article.summary : '';
        return `
            <div class="article-card">
                <div class="article-date">${date}</div>
                <h3 class="article-title">${title}</h3>
                <p class="article-summary">${summary}</p>
                <a href="articles.html?article=${index}" rel="noreferrer" class="read-more-link">Read More</a>
            </div>
        `;
    }).join('');

    articlesContainer.innerHTML = articlesHTML + `<a href="articles.html" rel="noreferrer" class="view-all-link">View All Articles</a>`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadHomapageIntro();
    loadProjects();
    loadArticles();
    loadSocialLinks(INFO.socials);
    // Update page title
    document.title = INFO.main.title;
});
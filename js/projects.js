// Load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const projectsHTML = INFO.projects.map(project => `
        <div class="project-card">
            <img src="${project.logo}" alt="${project.title} logo">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <strong>Provided by: ${project.company ? project.company : 'N/A'}</strong><br/>
        </div>
    `).join('');

    projectsGrid.innerHTML = projectsHTML;
}

// Initialize projects page
document.addEventListener('DOMContentLoaded', () => {
    document.title = INFO.main.title + " | Projects";
    loadProjects();
});
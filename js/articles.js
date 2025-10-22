// load article page title and intro content
function loadArticlesPageHeading() {
    const articleHeading = document.getElementsByClassName('articles-title');
    if(!articleHeading.length) return;
    const headingHTML = `
        <div class="title">${INFO.articles.title}</div>
        <div class="subtitle">${INFO.articles.description}</div>
    `;
    articleHeading[0].innerHTML = headingHTML;    
}

// Load articles
function loadArticles() {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;

    const articlesHTML = INFO.articles_content.map((article, index) => `
        <div class="article-card">
            <div class="article-date">${article.date}</div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary}</p>
            <a href="articles.html?article=${index}" rel="noreferrer" class="read-more-link">Read More</a>
        </div>
    `).join('');

    articlesGrid.innerHTML = articlesHTML;
}

function loadArticleDetails(articleIndex) {
    const articlesGrid = document.getElementById('articles-grid');
    if(!articlesGrid) return;

    const articleHTML = `
        <div class="article-card">
            <h3 class="article-title">${INFO.articles_content[articleIndex].title}</h3><br/>
            <div class="article-date">${INFO.articles_content[articleIndex].date}</div><br/>
            <p class="article-summary">${INFO.articles_content[articleIndex].description}</p>
            <br/><br/><br/>
            <a href="articles.html" rel="noreferrer" class="read-more-link">Back to articles</a>
        </div>
    `;
    articlesGrid.innerHTML = articleHTML;
}

// Initialize articles page
document.addEventListener('DOMContentLoaded', () => {
    document.title = INFO.main.title + " | Articles";
    const urlParams = new URLSearchParams(window.location.search);
    const articleIndex = urlParams.get('article');

    if (articleIndex !== null && INFO.articles_content[articleIndex]) {
        document.title = INFO.articles_content[articleIndex].title + " | " + INFO.main.title;
        loadArticleDetails(articleIndex);
    } else {
        loadArticlesPageHeading();
        loadArticles();
        loadSocialLinks(INFO.socials);
    }
});
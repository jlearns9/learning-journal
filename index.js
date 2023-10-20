import articles from "./blog.js";

const blogLayout = document.getElementById('blog-layout')

articles.forEach((article, index) => {
    blogLayout.innerHTML += `
        <div class='article-card'>
            <img class='article-img' src=${article.image}>
            <h2>${article.title}</h2>
            <p>${article.text}<p>
        </div>`
})
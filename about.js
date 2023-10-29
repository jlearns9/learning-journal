import { articles } from "./blog.js";

const recent = document.getElementById('recent')

for (let i = 0; i < 3 && i < articles.length; i++) {
    let article = articles[i]
    recent.innerHTML += `
    <div class='article-card'>
        <img src="${article.image}">
        <h5>${article.date}</h5>
        <h2>${article.title}</h2>
        <p>${article.text}</p>
    </div>`
}
import { articles } from "./blog.js";
import { aboutMe } from "./blog.js";

const blogLayout = document.getElementById('blog-layout')
const aboutMeLayout = document.getElementById('about-me-layout')

articles.forEach((article, index) => {
    blogLayout.innerHTML += `
        <div class='article-card'>
            <img class='article-img' src=${article.image}>
            <h2>${article.title}</h2>
            <p>${article.text}<p>
        </div>
        `
})

function aboutMeDisplay() {
    aboutMeLayout.innerHTML = `
    <div class='about-me-info'>
        <h3>${aboutMe.date}</h3>
        <h1>${aboutMe.title}</h1>
        <p>${aboutMe.text}</p>
    </div>
    `
}

aboutMeDisplay()
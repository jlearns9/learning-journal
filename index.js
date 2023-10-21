import { articles } from "./blog.js";
import { aboutMe } from "./blog.js";

const blogLayout = document.getElementById('blog-layout')
const aboutMeLayout = document.getElementById('about-me-layout')

function aboutMeDisplay() {
    aboutMeLayout.innerHTML = `
    <div>
        <h5>${aboutMe.date}</h5>
        <h1>${aboutMe.title}</h1>
        <h4>${aboutMe.text}</h4>
    </div>
    `
}

aboutMeDisplay()

articles.forEach((article, index) => {
    blogLayout.innerHTML += `
        <div class='article-card'>
            <img src=${article.image}>
            <h5>${article.date}<h5>
            <h2>${article.title}</h2>
            <p>${article.text}<p>
        </div>
        `
})
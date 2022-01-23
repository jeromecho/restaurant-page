import './reset.css'; 
import './style.css';
import homePage from './home';
import menu from './menu'; 
import about from './about'; 

const homeLink = document.querySelector("#home");
const aboutLink = document.querySelector("#about");
const menuLink = document.querySelector("#menu")

// on first load 
homePage(); 

homeLink.addEventListener("click", function () {
    clearPage(); 
    homePage(); 
})

aboutLink.addEventListener("click", function () {
    clearPage(); 
    about(); 
})

menuLink.addEventListener("click", function () {
    clearPage(); 
    menu(); 
})

// remove all children of content 
function clearPage() {

}
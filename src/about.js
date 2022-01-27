import mainImage from './assets/ww-one.jpeg';
import enableTab from './tabs';

const content = document.querySelector("#content");

// appends child elements to page 
const homePage = function () { 
    const page = document.createElement("div");  
    page.id = "page"; 

    page.appendChild(makeHeader()); 
    page.appendChild(makeMain()); 
    page.appendChild(makeFooter()); 
    content.appendChild(page); 
}

function makeHeader() {
    const header = document.createElement("header");
    const title = document.createElement("h1"); 
    const caption = document.createElement("h2");

    title.id = "title";
    caption.id = "caption"; 

    title.textContent = "Boilerinos"; 
    caption.textContent = "Italian style boiled water"; 

    header.appendChild(title);
    header.appendChild(caption);
    header.appendChild(makeNav());

    return header;
}

function makeNav() {
    const nav = document.createElement("nav");
    const about = document.createElement("a");
    const home = document.createElement("a");
    const menu = document.createElement("a");

    about.id = "about";
    home.id = "home"; 
    menu.id = "menu"; 

    enableTab(about);
    enableTab(home);
    enableTab(menu);

    about.textContent= "About"; 
    home.textContent = "Home";
    menu.textContent = "Menu";

    nav.appendChild(about);
    nav.appendChild(home); 
    nav.appendChild(menu); 

    return nav; 
}

function makeMain() {
    const main = document.createElement("main"); 
    main.appendChild(makeContainer());
    return main; 
}

function makeContainer() {
    const container = document.createElement("div");
    container.id = "container"; 

    const img = document.createElement("img");
    const imgCaption = document.createElement("p");

    img.src = mainImage; 
    img.alt = "boiling water in cup";
    imgCaption.id = "img-caption"; 

    imgCaption.textContent = `"It all started in 1917."`;

    container.appendChild(img);
    container.appendChild(imgCaption);
    // appends story 
    container.appendChild(makeStory());

    return container; 
}

function makeStory() {
    const story = document.createElement("div"); 
    const text = document.createElement("p"); 
    const sincerely = document.createElement("p"); 

    story.id = "story-container";
    text.id = "story-text";
    sincerely.id = "sincerely";

    text.textContent = "The first Boilerinos was set up in 1917, in Milan, Italy. \
      It was a shop built to warm up the war-weary people who walked into its doors, \
      and gave comfort to many. Today, we continue on their legacy at our US location\
      We hope you drop by - we would\
      love to serve you something warm.";
    sincerely.textContent = "Sincerely, \n \n the Matizzio Twins"; 

    story.appendChild(text); 
    story.appendChild(sincerely); 

    return story; 
}

function makeFooter() {
    const footer = document.createElement("footer");
    const madeBy = document.createElement("p"); 
    madeBy.textContent = "Made with 💦 by Jerome Cho"; 

    footer.appendChild(madeBy);

    return footer; 
}

export default homePage; 

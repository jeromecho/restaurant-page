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
    
    const menuTitle = document.createElement("h3"); 
    menuTitle.id = "menu-title"; 

    menuTitle.textContent = "Menu"; 

    container.appendChild(menuTitle);
    container.appendChild(makeMenuContent());

    return container; 
}

function makeMenuContent() {
    const menu = document.createElement("div"); 
    const currentMenu = ["Classic Boiled Water", 
    "Parsley Lover", "Frozen Water", "Boiling Water", 
    "Tomato Delight", "Water"];
    const menuCaption = ["Italian spring water, ceramic mug", 
    "Parsely leaves, Italian fountain water, ceramic mug", 
    "Ice, ceramic mug" ,"Italian fountain water ceramic mug",
     "Tomatoes, Italian fountain water, ceramic mug", 
     "Spirytus 96%, hint of Italian fountain water"];  
    menu.id = "menu-content"; 

    for (let i = 0; i< 6; i++) {
        let item = document.createElement("div");
        item.className = "item";
        item.id = `item-${i}`; 

        let itemContent = document.createElement("p");
        itemContent.className = "item-content";
        itemContent.textContent = currentMenu[i];
        
        let itemCaption = document.createElement("p");
        itemCaption.className = "item-caption";
        itemCaption.textContent = menuCaption[i];

        item.appendChild(itemContent);
        item.appendChild(itemCaption);

        menu.appendChild(item);
    }

    return menu;
}

function makeFooter() {
    const footer = document.createElement("footer");
    const madeBy = document.createElement("p"); 
    madeBy.textContent = "Made with 💦 by Jerome Cho"; 

    footer.appendChild(madeBy);

    return footer; 
}

export default homePage; 

import homePage from './home';
import menu from './menu'; 
import about from './about'; 

// attaches event listeners to all tabs in menu 
// Nav Element -> Nav eleemtn
function enableTab (ne) {
    switch(ne.id) {
        case "about": 
            ne.addEventListener("click", function (){
                clearPage(); 
                about();
            })
            break; 
        case "home":
            ne.addEventListener("click", function() {
                clearPage(); 
                homePage();
            })
            break; 
        case "menu":
            ne.addEventListener("click", function() {
                clearPage(); 
                menu(); 
            });
    }
}

// remove all children of content 
function clearPage() {
    while (content.lastChild) {
        content.removeChild(content.lastChild); 
    }
}

export default enableTab; 
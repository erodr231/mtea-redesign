// 1. Your JS should "use strict"; globally
"use strict"


// ***** element selectors *****
const moonToggle = document.querySelector(".moonToggle");
const sunToggle = document.querySelector(".sunToggle");

// ***** event listeners*****
moonToggle.addEventListener("click", darkModeToggle);
sunToggle.addEventListener("click", lightModeToggle);

// ***** functions *****

//dark mode toggles
function darkModeToggle(){
    document.body.classList.add("darkMode");

    moonToggle.hidden = true;
    sunToggle.hidden = false
}
function lightModeToggle(){
    document.body.classList.remove("darkMode");

    moonToggle.hidden = false;
    sunToggle.hidden = true;
}


// ****** initialize ******

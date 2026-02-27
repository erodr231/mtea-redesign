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
    moonToggle.hidden = true;
    sunToggle.hidden = false
}
function lightModeToggle(){
    moonToggle.hidden = false;
    sunToggle.hidden = true;
}


// ****** initialize ******

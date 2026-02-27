// 1. Your JS should "use strict"; globally
"use strict"

// ***** element selectors *****
const moonToggle = document.querySelector(".moonToggle");
const sunToggle = document.querySelector(".sunToggle");

const drinkImage = document.getElementById("drinkImage"); // product display
const drinkName = document.getElementById("drinkName");
const drinkDescription = document.getElementById("drinkDescription");
const productDisplayBtn = document.querySelectorAll(".drinkButtons button") // all individual buttons

let userInput = document.getElementById("userInput"); // game play all elements
let guessBtn = document.getElementById("guessBtn")
let gameMessage = document.getElementById("gameMessage")
let displayUserGuess = document.getElementById("userGuess");
let displayWinningNum = document.getElementById("winningNum");

// ***** INFO *****
const drinks = [ // array containing 5 different drinks
    {
        name: "Brown Sugar Milk Tea",
        description: "Brown Sugar Milk Tea is our best seller and most popular drink, loved for its rich caramel flavor and creamy, comforting texture. Originating from Taiwan, the birthplace of bubble tea, this classic features freshly brewed black tea blended with silky milk and swirled with deep, molasses-like brown sugar syrup. The warm, chewy tapioca pearls are coated in caramelized brown sugar, creating a smooth, sweet, and slightly smoky flavor in every sip, perfectly balanced and delicious!",
        image: "images/brown-sugar-milktea.jpg",
        alt: "Brown Sugar Milk Tea served in a clear cup, with caramelized brown sugar swirls and tapioca pearls at the bottom.",
    },

    {
        name: "Creme Brulee Milk Tea",
        description: "A rich and creamy milk tea topped with torched creme brulee cream. The caramelized top adds a sweet, slightly smoky flavor that pairs perfectly with the smooth tea. Each sip is indulgent yet balanced. This drink is a favorite for anyone who loves dessert in a cup. It’s a luxurious twist on traditional milk tea.",
        image: "images/creme-brulee-milktea.jpg",
        alt: "Creme Brulee Milk Tea with a torched caramelized cream layer on top, in a clear cup.",
    },

    {
        name: "Dragonfruit Peach Tea",
        description: "A bright and refreshing tea that blends dragonfruit and peach flavors. Served over ice, it has a vibrant pink and orange color that’s as fun as it tastes. The fruity sweetness is perfectly balanced with a light, crisp tea base. It’s tropical, energizing, and perfect for a hot day. A colorful treat for the senses.",
        image: "images/dragonfruit-peachtea.jpg",
        alt: "Dragonfruit Peach Tea in a clear cup, vibrant pink and orange colors with ice.",
    },

    {
        name: "Mangonada",
        description: "A sweet and tangy mango drink with a kick of chamoy and chili. The slushy texture combines with the spicy-sour flavors for a bold, unforgettable taste. It’s both refreshing and exciting, a favorite for adventurous drink lovers. Each sip is a playful mix of sweet, sour, and spicy. A Mexican-inspired drink that stands out in any lineup.",
        image: "images/mangonada.jpg",
        alt: "Mangonada in a cup, mango slush with chamoy drizzle and chili powder on top.",
    },

    {
        name: "Taro Milk Tea",
        description: "A smooth, creamy milk tea made with taro for a subtly sweet, nutty flavor. The light purple drink is fun to look at and delicious to sip. Tapioca pearls add a chewy texture that complements the creamy base. It’s gentle, comforting, and loved by fans of unique, sweet flavors. A classic alternative to traditional milk tea.",
        image: "images/taro-milktea.jpg",
        alt: "Taro Milk Tea in a clear cup, light purple color with tapioca pearls at the bottom.",
    }
];


// ***** event listeners*****
moonToggle.addEventListener("click", darkModeToggle);
sunToggle.addEventListener("click", lightModeToggle);

guessBtn.addEventListener("click", gamePlay);// gamePlay guess btn

// product display, add event listeners for each buttons, needs to loop through array, then go to function we created
productDisplayBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        displayProduct(index); // initialize function
    });
});

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

function displayProduct(index){ // needs to replace the img, alt text, h3 and description at click, through array
    const drink = drinks[index]; // define a single drink in the drinks array

    drinkImage.src = drink.image;
    drinkImage.alt = drink.alt;
    drinkName.textContent = drink.name;
    drinkDescription.textContent = drink.description;

}

function gamePlay(){ // this function will run the game. 
    let userGuess = Number(userInput.value) // get the user input, make sure it's a number
    let randomNum = Math.floor(Math.random() * 10) + 1; // generate random number from 1-10, look at zyBooks
    
    // display the user's number in userGuess
    displayUserGuess.textContent = "Your guess: " + userGuess;

    // display the winner number in winningNum
    displayWinningNum.textContent = "Winning Number: " + randomNum;

    // display diff message if they won or not in gameMessage
    if (userGuess === randomNum){
        gameMessage.textContent = "Congrats! You won 10% off your next order."
    } else{
        gameMessage.textContent = "Try again next time!"
    }

    // ability to play again, clear input
    userInput.value = "";
}
// ****** initialize ******

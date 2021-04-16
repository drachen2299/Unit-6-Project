const qwerty = document.getElementById("qwerty");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const lives = document.querySelectorAll(".tries img");
const title = document.querySelector("h2.title");


let missed = 0;

startGame.addEventListener("click", () => {
    //hides the section with the ID of 'overlay' with style.display = 'none';
    if (startGame.textContent === "Start Game"){
        overlay.style.display = "none";
    } else if (startGame.textContent === "Play Again"){
        location.reload();
    } 
    
});

const phrases = [
    "The Kama Sutra",
    "Pin Wheel",
    "Ace of Spades",
    "Nintendo Switch",
    "Caramel Macchiato"
];

//Get random phrase and add all the letters as an array

const getRandomPhraseAsArray = arr => {
    let rnNumber = arr.length;
    let i = Math.floor(Math.random() * rnNumber);
    arr[i].split("");
    return arr[i];
}

getRandomPhraseAsArray(phrases);

//add phrase to display

const addPhrasesToDisplay = arr => {
    for (let i = 0; i < arr.length; i++ ){
        let ul = document.getElementsByTagName("ul")[0];
        let li = document.createElement("li");
        li.textContent = arr[i];
        ul.appendChild(li);
    
        if (arr[i] === " "){
            li.classList.add("space");
        } else {
            li.classList.add("letter");
        }
    }
}

const getPhrase = getRandomPhraseAsArray(phrases);
addPhrasesToDisplay(getPhrase);


//Check if a letter is in the phrase
const checkLetter = button => {
    let liItems = document.querySelectorAll(".letter");
    let match = null;
    for (let i = 0;i < liItems.length;i++){
        if (button === liItems[i].textContent.toLocaleLowerCase()){
            liItems[i].classList.add("show");
            liItems[i].style.transition = "all 2s";
            match = button.textContent;
        }
    }
    return match;
}

// //Listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON"){
        
        e.target.className = "chosen";
        e.target.disabled = true;
        const picked = checkLetter(e.target.textContent.toLowerCase());
        if (picked === null) {
            lives[missed].src = "images/lostHeart.png";
            missed++;
        }
        checkWin(); 
    }
});



// //Check of the game has been won or lost
const checkWin = () => {
    let letter = document.querySelectorAll(".letter");
    let show = document.querySelectorAll(".show");
    if (letter.length === show.length) {
        overlay.classList.remove("start");
        overlay.classList.add("win");
        title.textContent = "You Win!";
        overlay.style.display = "flex";  
        startGame.textContent = "Play Again";   
    }else if (missed > 4 ) {
        overlay.classList.remove("start");
        overlay.classList.add("lose");
        title.textContent= "Sorry, you're out of guesses!";
        overlay.style.display = "flex";
        startGame.textContent = "Play Again";  
    }
    
}









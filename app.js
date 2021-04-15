const qwerty = document.getElementById("#qwerty");
const phrase = document.getElementById("#phrase");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

let missed = 0;

startGame.addEventListener("click", () => {
    //hides the section with the ID of 'overlay' with style.display = 'none';
    if (startGame.textContent === 'Start Game'){
        overlay.style.display = 'none';
    } else {
        overlay.style.display = '';
    } 
    
});

const phrases = [
    'The Kama Sutra',
    'Pin Wheel',
    'Ace of Spades',
    'Nintendo Switch',
    'Caramel Macchiato'
];

//Get random phrase and add all the letters as an array

const getRandomPhraseAsArray = arr => {
    let rnNumber = arr.length;
    let i = Math.floor(Math.random() * rnNumber);
    arr[i].split("");
}

getRandomPhraseAsArray(phrases);

//add phrase to display

const addPhrasesToDisplay = arr => {
    for (let i = 0; i < arr.length; i++ ){
        let li = document.createElement("li");
        let characters = document.createTextNode(li[i]);
        characters.appendChild(li);
    
        if (li.textContent(" ")){
            li.classList.add("space");
        } else {
            li.classList.add("letter");
        }
    }
}

const getPhrase = getRandomPhraseAsArray(phrases);
addPhrasesToDisplay(getPhrase);

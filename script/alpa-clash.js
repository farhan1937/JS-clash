// function play(){

//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     const playSection = document.getElementById('play-game')
//     playSection.classList.remove('hidden')
// }


function continuGame() {

    const allLetters = getArendomAlfabet();
    console.log('your random alpabet',allLetters);

    const currentLetter = document.getElementById('current-letter')
    currentLetter.innerText = allLetters;

    setColorById(allLetters)

}

function play() {
    hideElement('home-screen')
    showElement('play-game')
    continuGame(); 
}


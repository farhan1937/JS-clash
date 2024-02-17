function hideElement(elementId) {
    const elemet = document.getElementById(elementId)
    elemet.classList.add('hidden')


}

function showElement(elementId) {
    const elemet = document.getElementById(elementId)
    elemet.classList.remove('hidden')
}

function setColorById(elementId){
    const elemet = document.getElementById(elementId)
    elemet.classList.add('bg-orange-400')
}

function getArendomAlfabet() {
    const alpabetString = 'abcdefghijklmnopqrstwxyz';
    
    const alpabetitem = alpabetString.split('');
    
    console.log(alpabetitem);

    const randomAlpa = Math.random() * 25;
    const index = Math.round(randomAlpa);


    const letter = alpabetitem[index];
    // console.log(index, letter);
    return letter;


}
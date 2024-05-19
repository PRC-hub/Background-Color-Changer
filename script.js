const button = document.getElementById('btn');
const colourText=document.querySelector('.colour');

const hex= ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']

button.addEventListener('click',()=>{
    const hexColour= generateHexColour();
    document.body.style.backgroundColor=hexColour;
    colourText.textContent=hexColour;
})

const generateHexColour=()=>{
    let Colour="#";

    for(let i =0;i<6;i++){
        Colour += hex[generateRandomNumber()]
    }
    return Colour;
}

function generateRandomNumber(){
    return (Math.floor(Math.random()*16))
}
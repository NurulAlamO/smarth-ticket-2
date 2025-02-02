function showElementById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.remove('hidden');
}

function hiddElementById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.add('hidden');
}


function setBackgrounColor (elementId){
    const Element = document.getElementById(elementId);
    Element.classList.add('bg-green-400');
}
function inputValue (elementId){
    const Element = document.getElementById(elementId);
    const Elements = Element.value.trim();
    Element.value = '';
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText= value;
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
const element = document.querySelector('.typing');

const words = ["Developer","Designer","SEO Expert"];

let index = 0;
let letters = "";
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
let typingSpeed = 400;

function type(){

    if(isDeleting){
        letters = currentWord.slice(0,--letterIndex);
        element.textContent = letters;
        typingSpeed = 250;

        if(letterIndex === 0){
            isDeleting = false;
        }
    }else{

        typingSpeed = 400;

        if(index === words.length){
            index = 0;
        }
    
        currentWord = words[index];
        letters = currentWord.slice(0,++letterIndex);
    
        element.textContent = letters;
    
        if(letterIndex === currentWord.length){
            index++;
            isDeleting = true;
            typingSpeed = 2000;
        }
    
    }
    setTimeout(type,typingSpeed);
    }

    

type();
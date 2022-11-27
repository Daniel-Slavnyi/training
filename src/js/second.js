'use strict';

import voca from 'voca';


const inputEl = document.querySelector('.form-field');
const controlsEl = document.querySelector('.controls');



controlsEl.addEventListener('click', (e) => {

    if (e.target.tagName !== 'BUTTON') {
        return;
    }

    const valueInput = inputEl.value;
    const dataName = e.target.dataset.name;
    e.target.nextElementSibling.innerHTML = voca[dataName](valueInput);
});



// if (e.target.className === 'btn-camel') {
        //     e.target.nextElementSibling.innerHTML = voca.camelCase(valueInput);
        // }

        // if (e.target.className === 'btn-kebab') {
        //     e.target.nextElementSibling.innerHTML = voca.kebabCase(valueInput);
        // }

        // if (e.target.className === 'btn-snake') {
        //     e.target.nextElementSibling.innerHTML = voca.snakeCase(valueInput);
        // }

        // if (e.target.className === 'btn-swap') {
        //     e.target.nextElementSibling.innerHTML = voca.swapCase(valueInput);
        // }

        // if (e.target.className === 'btn-lower') {
        //     e.target.nextElementSibling.innerHTML = voca.lowerCase(valueInput);
        // }

        // if (e.target.className === 'btn-upper') {
        //     e.target.nextElementSibling.innerHTML = voca.upperCase(valueInput);
        // }

function transformCase(dataName) {
    switch (dataName) {
            case "camelCase":
                e.target.nextElementSibling.innerHTML = voca.camelCase(valueInput);
                break;
            
            case 'btn-kebab':
                e.target.nextElementSibling.innerHTML = voca.kebabCase(valueInput);
                break;
            
            case 'btn-snake':
                e.target.nextElementSibling.innerHTML = voca.snakeCase(valueInput);
                break;
            
            case 'btn-swap':
                e.target.nextElementSibling.innerHTML = voca.swapCase(valueInput);
                break;
            
            case 'btn-lower':
                e.target.nextElementSibling.innerHTML = voca.lowerCase(valueInput);
                break;
            
            case 'btn-upper':
                e.target.nextElementSibling.innerHTML = voca.upperCase(valueInput);
                break;
        
            default:
                break;
        }
}
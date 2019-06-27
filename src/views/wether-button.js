import { scriptId, getData } from '../services';
import html from './wether-button.html';
import  './wether-button.css';



let elements = [];
let mainDiv;
let toggleState = false;

export function show(c) {


    let country = getData(c);
    // convert plain HTML string into DOM elements
    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    temporary.getElementsByClassName('js-widget-button')[0].style.backgroundColor = country.color;
    temporary.getElementsByClassName('js-widget-text')[0].textContent = country.name;
    temporary.getElementsByClassName('js-widget-info')[0].textContent = country.wether;

    // append elements to body
    mainDiv = document.getElementById('widget_'+scriptId);


    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        mainDiv.appendChild(temporary.children[0]);
    }

    mainDiv.addEventListener('click', showInfo);
}

export function showInfo() {
    if(!toggleState){
        mainDiv.children[0].children[1].style.display = "block";
        toggleState = true;
    }
    else {
        mainDiv.children[0].children[1].style.display = "none";
        toggleState = false;
    }
}
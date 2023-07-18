//menu mobile

const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.mobile-cont');

hamburger.addEventListener('click', () => {
container.classList.toggle('show-menu')
});

//------------------------------------------------

function defaultOpen() {

    let body = document.querySelector('body')
    let activeDefault = document.querySelector('.default')

    activeDefault.classList.add('click-d')
    body.style = 'overflow: hidden;'

};

function defaultClose() {

    let body = document.querySelector('body')
    let activeDefault = document.querySelector('.default')

    activeDefault.classList.remove('click-d')
    body.style = 'overflow: auto;'
    

};

function thanksOpen() {

    let activeThanks = document.querySelector('.thanks')
    let body = document.querySelector('body')

        activeThanks.classList.add('click-t')
    
        body.style = 'overflow: hidden;'

};

function thanksClose() {

    let closeThanks = document.querySelector('.thanks')
    let body = document.querySelector('body')

    closeThanks.classList.remove('click-t')

    body.style = 'overflow: auto;'

};

function show() {

    let activeCard = document.querySelector('#color')

    if(activeCard.classList.contains('show')) {
        activeCard.classList.remove('show')
        activeCard.style = 'background-color: #fff;';
    }else {
        activeCard.classList.add('show')
        activeCard.style = 'background-color: hsl(176, 50%, 47%);';
    }

};

function buy() {
    
    let activeCard = document.querySelector('.a1')

    if(activeCard.classList.contains('open')) {
        activeCard.classList.remove('open')
        document.querySelector('#background').style = 'background-color: #fff;';
    }else {
        activeCard.classList.add('open')
        document.querySelector('#background').style = 'background-color: hsl(176, 50%, 47%);';
    }

};

function buy2() {

    let activeCard = document.querySelector('.a2')

    if(activeCard.classList.contains('open')) {
        activeCard.classList.remove('open')
        document.querySelector('#background2').style = 'background-color: #fff;';
    }else {
        activeCard.classList.add('open')
        document.querySelector('#background2').style = 'background-color: hsl(176, 50%, 47%);';
    }

};

function buy3() {

    let activeCard = document.querySelector('.a3')

    if(activeCard.classList.contains('open')) {
        activeCard.classList.remove('open')
        document.querySelector('#background3').style = 'background-color: #fff;';
    }else {
        activeCard.classList.add('open')
        document.querySelector('#background3').style = 'background-color: hsl(0, 0%, 48%);';
    }

};

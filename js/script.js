const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.mobile-cont');

hamburger.addEventListener('click', () => {
container.classList.toggle('show-menu')
});

function defaultOpen() {

    let activeDefault = document.querySelector('.default')

    activeDefault.classList.add('click-d')
    

};

function defaultClose() {

    let activeDefault = document.querySelector('.default')

    activeDefault.classList.remove('click-d')
    

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

function closed() {
    let closeCard = document.querySelector('.a1')

    closeCard.classList.remove('open')
    document.querySelector('#background').style = 'background-color: #fff;';

}

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

function closed2() {
    let closeCard = document.querySelector('.a2')

    closeCard.classList.remove('open')
    document.querySelector('#background2').style = 'background-color: #fff;';

}

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

function closed3() {
    let closeCard = document.querySelector('.a3')

    closeCard.classList.remove('open')
    document.querySelector('#background3').style = 'background-color: #fff;';

}

function tanksOpen() {
    let activeTanks = document.querySelector('.tanks')

        activeTanks.classList.add('click-t')

};

function tanksClose() {
    let closeTanks = document.querySelector('.tanks')

    closeTanks.classList.remove('click-t')

}
'use strict';
const uni = document.getElementById('uni');
const listItems = document.querySelectorAll('.sidebar__listItems');
const navbar = document.querySelector('.sidebar__list');
const search = document.getElementById('search');
const uniList = document.getElementById('uni-list');

const showNav = () =>{
    for (const i of listItems) {
        i.classList.toggle('responsive');
    }

    navbar.classList.toggle('responsive__nav');
    search.style.display = 'flex';
    search.style.top = '32rem';
    uniList.style.marginTop = '8rem';

    if(!navbar.classList.contains('responsive__nav')){
        search.style.removeProperty('top');
        search.style.removeProperty('display');
        uniList.style.marginTop = '0';
    }
}

uni.addEventListener('click', showNav);
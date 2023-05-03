const btnEl = document.getElementById('modal-btn');
const initDivEl = document.getElementById('initial-div');
const secDivEl = document.getElementById('sec-div');
const crossBtnEl = document.getElementById('cross-btn');

btnEl.addEventListener('click', () => {
    secDivEl.style.visibility = 'visible';
    initDivEl.style.visibility = 'hidden';
    console.log( initDivEl.style.visibility)
})

crossBtnEl.addEventListener('click', () => {
    secDivEl.style.visibility = 'hidden';
    initDivEl.style.visibility = 'visible';
    
})
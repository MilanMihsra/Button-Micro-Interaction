const body = document.querySelector('body');
const icon = document.querySelector('.icon');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const secondLine = document.querySelector('.icon span:nth-child(2)');

let clicked = false;

icon.addEventListener('click', () => {
    if (!clicked) {
        body.style.backgroundColor = 'rgb(212,66,66)';
        off.style.color = '#fff';
        on.style.color = 'rgb(126,13,13)';
        icon.style.background = 'rgb(231,97,97)';
        icon.style.boxShadow = '7px 7px 10px rgb(126,13,13)';
        secondLine.classList.add('secondLine');
        
        clicked = true;
    } else {
        body.style.backgroundColor = 'rgb(76, 173, 76)';
        off.style.color = 'rgb(34, 136, 34)';
        on.style.color = '#fff';
        icon.style.background = 'rgb(109, 204, 109)';
        icon.style.boxShadow = '7px 7px 10px  rgb(34, 136, 34)';
        secondLine.classList.remove('secondLine'); 
        
        clicked = false;
    }
})

import './index.scss';

let div = document.getElementsByClassName('firstBack')[0]
let opacityStart = 1

document.body.addEventListener('scroll', (event) => {
    div.style.opacity = opacityStart
    opacityStart = opacityStart - 0.01
});
let langArrow = document.querySelector('.prenav__langs-arrow');
let langBox = document.querySelector('.prenav__langs-box');

langBox.addEventListener('mouseover', () =>{

    langArrow.style.transform ="rotateX(180deg)";
    langArrow.style.transition ="all ease 0.5s";


})

langBox.addEventListener('mouseout', () =>{

        langArrow.style.transform ="rotateX(0deg)";
        langArrow.style.transition ="all ease 0.5s";


})
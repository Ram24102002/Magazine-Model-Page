let line1=document.querySelector('.line-1');
let line2=document.querySelector('.line-2');
let carosuel1=document.querySelector('.carosuel-ass');

window.onscroll = () =>{
    let pos=window.scrollY -0;
    let poss=window.scrollY -950;
    line1.style.left=`${pos}px`
    line2.style.right=`${pos}px`
    carosuel1.style.right=`${poss}px`
}


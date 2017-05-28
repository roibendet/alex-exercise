const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const square = document.querySelector('.square');
const squareStyle = document.querySelector('.square').style;
const up = 38;
const right = 39;
const down = 40;
const left = 37;
let lastTopValue;
let lastRightValue;
let lastLeftValue;

square.style.left = ((body.offsetWidth / 2) - 75 ) + 'px';
square.style.top = ((body.offsetHeight / 2) - 75) + 'px';

window.addEventListener('keydown', clickHandler);


for (let btn of buttons) {
  btn.addEventListener('click', clickHandler);
}


function clickHandler(event) {
  const button = event.target.textContent;
  let topValue = parseInt(square.style.top);
  let leftValue = parseInt(square.style.left);
  event.target.blur();



  if (button === 'up' || event.keyCode === up) {

    if (square.offsetTop <= 5) {
      document.querySelector('.upborder').style.opacity = '1';
      document.querySelector('.square').style.top = `0px`
    }

    if (square.offsetTop >= 5) {
      document.querySelector('.upborder').style.opacity = '0';
      let newTopValue = topValue - 5;
      document.querySelector('.square').style.top = `${newTopValue}px`;

    }


    if (body.offsetHeight - (square.offsetTop + 150) <= 5) {
      document.querySelector('.downborder').style.opacity = '0';
      document.querySelector('.square').style.top = lastTopValue;
    }

  }

  if (button === 'right' || event.keyCode === right) {


    if (body.offsetWidth - (square.offsetLeft + 150) >= 5) {
      lastRightValue = document.querySelector('.square').style.left;

      let newLeftValue = leftValue + 5;
      document.querySelector('.square').style.left = `${newLeftValue}px`;

    }

    if (body.offsetWidth - (square.offsetLeft + 150) <= 5) {
      document.querySelector('.rightborder').style.opacity = '1';
      document.querySelector('.square').style.left = `${(body.offsetWidth - 150)}px`;

    }


    if (square.offsetLeft <= 5) {
      document.querySelector('.leftborder').style.opacity = '0';
      document.querySelector('.square').style.left = lastLeftValue
    }
  }


  if (button === 'down' || event.keyCode === down) {
    if (body.offsetHeight - (square.offsetTop + 150) >= 5) {
      let newTopValue = topValue + 5;
      document.querySelector('.square').style.top = `${newTopValue}px`;
      lastTopValue = document.querySelector('.square').style.top;

    }
    if (body.offsetHeight - (square.offsetTop + 150) <= 5) {
      document.querySelector('.square').style.top = `${body.offsetHeight - 150}px`;
      document.querySelector('.downborder').style.opacity = '1';
    }


    if (square.offsetTop >= 0) {
      document.querySelector('.upborder').style.opacity = '0';
    }
  }


      if (button === 'left' || event.keyCode === left) {

   if (square.offsetLeft >= 5) {
   lastLeftValue = document.querySelector('.square').style.left;
   let newLeftValue = leftValue - 5;
   document.querySelector('.square').style.left = `${newLeftValue}px`;
   }

   if (square.offsetLeft <= 5) {

   document.querySelector('.leftborder').style.opacity = '1';
   document.querySelector('.square').style.left = `0px`;
   }


   if (body.offsetWidth - (square.offsetLeft + 150) >= 5) {
   document.querySelector('.rightborder').style.opacity = '0'
   }

   if (body.offsetWidth - (square.offsetLeft + 150) <= 5) {
   document.querySelector('.rightborder').style.opacity = '0';
   document.querySelector('.square').style.left = lastRightValue;

   }

   }


}
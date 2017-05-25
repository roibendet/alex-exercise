const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const square = document.querySelector('.square');
const squareStyle = document.querySelector('.square').style;
const up = 38;
const right = 39;
const down = 40;
const left = 37;
let lastBottomValue;
let lastRightValue;


window.addEventListener('keydown', clickHandler);


for (let btn of buttons) {
  btn.addEventListener('click', clickHandler);
}


function clickHandler(event) {

  const button = event.target.textContent;
  let bottomValue = parseInt(squareStyle.bottom.slice(10, 15));
  let leftValue = parseInt(squareStyle.left.slice(10, 15));

  if (button === 'up' || event.keyCode === up) {


    if (square.offsetTop <= 5) {
      document.querySelector('.upborder').style.opacity = '1';
      document.querySelector('.square').style.top = `calc(50% - 50% )`
    }

    if (square.offsetTop >= 5) {
      document.querySelector('.upborder').style.opacity = '0';
      let newBottomValue = bottomValue - 5;
      document.querySelector('.square').style.bottom = `calc(50% - ${newBottomValue}px)`;
    }


    if (body.offsetHeight - (square.offsetTop + 150) <= 5) {
      document.querySelector('.downborder').style.opacity = '0';
      document.querySelector('.square').style.bottom = lastBottomValue;
    }

  }

  if (button === 'right' || event.keyCode === right) {



    if (body.offsetWidth - (square.offsetLeft + 150) >= 5) {
      lastRightValue = document.querySelector('.square').style.left;

      let newLeftValue = leftValue - 5;
      document.querySelector('.square').style.left = `calc(50% - ${newLeftValue}px)`;

    }

    if (body.offsetWidth - (square.offsetLeft + 150) <= 5) {
      document.querySelector('.rightborder').style.opacity = '1';
      document.querySelector('.square').style.left = '';
      document.querySelector('.square').style.right = '0'

    }

    if (square.offsetLeft >= 5) {
      document.querySelector('.leftborder').style.opacity = '0';
    }


  }


  if (button === 'down' || event.keyCode === down) {

    if (body.offsetHeight - (square.offsetTop + 150) >= 5) {
      let newBottomValue = bottomValue + 5;
      document.querySelector('.square').style.bottom = `calc(50% - ${newBottomValue}px)`;

      lastBottomValue = document.querySelector('.square').style.bottom;

    }
    if (body.offsetHeight - (square.offsetTop + 150) <= 5) {
      document.querySelector('.square').style.bottom = 'calc(50% - 50%)';
      document.querySelector('.downborder').style.opacity = '1'
    }


    if (square.offsetTop >= 0) {
      document.querySelector('.upborder').style.opacity = '0';
      document.querySelector('.square').style.top = ``;
    }


  }


  if (button === 'left' || event.keyCode === left) {

    if (square.offsetLeft >= 5) {
      let newLeftValue = leftValue + 5;
      document.querySelector('.square').style.left = `calc(50% - ${newLeftValue}px)`;
      document.querySelector('.square').style.marginLeft = '0'
    }

    if (square.offsetLeft <= 5) {
      document.querySelector('.leftborder').style.opacity = '1';
      document.querySelector('.square').style.marginLeft = '-4px'
    }


    if (body.offsetWidth - (square.offsetLeft + 150) >= 5) {
      document.querySelector('.rightborder').style.opacity = '0'
    }

    if (body.offsetWidth - (square.offsetLeft + 150) <= 5) {
      document.querySelector('.rightborder').style.opacity = '0';
      console.info(lastRightValue);
      document.querySelector('.square').style.left = lastRightValue;
      document.querySelector('.square').style.right = ''

    }

  }


}
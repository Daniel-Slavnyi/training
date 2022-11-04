'use strict';

const boxEl = document.querySelector('.content');

let player = "X";

let marcUp = '';

for (let i = 0; i < 9; i += 1) {
  marcUp += `<div class="item"></div>`;
}

boxEl.insertAdjacentHTML('beforeend', marcUp);

const onBoxElClick = (e) => {
  console.log(e.target);
  if (e.target.textContent) {
    return;
  }
  
  e.target.textContent = player;

  player = player === "X" ? "0" : "X";
  
  
};

boxEl.addEventListener('click', onBoxElClick);
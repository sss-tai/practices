'use strict';

{
  // id振っている
  const open = document.getElementById('open');
  // id振ってない。classのみ振っている。
  const overlay = document.querySelector('.overlay');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
}
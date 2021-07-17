'use strict';

{
  // id振っている
  const open = document.getElementById('open');
  // id振ってない。classのみ振っている。
  const overlay = document.querySelector('.overlay');
  // id振っている
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}
'use strict';

{
  // 取得した要素を定数で扱える
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  // openクリック時の処理
  open.addEventListener('click', () => {
    // 非表示を解除する
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  // closeクリック時の処理
  close.addEventListener('click', () => {
    // 非表示に戻す
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  // maskクリック時の処理
  mask.addEventListener('click', () => {
    // 非表示に戻す
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });


}
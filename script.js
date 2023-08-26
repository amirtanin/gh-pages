'use strict';
const modalItem = document.querySelector('.modalItem');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const text_modal = document.querySelector('.text_modal');
const overlay = document.querySelector('.overlay');
const btnExit = document.querySelector('.btnExit');
const routineFunction = function () {
  modalItem.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const exitModal = function () {
  modalItem.classList.add('hidden');
  overlay.classList.add('hidden');
};
//action button 1
button1.addEventListener('click', function () {
  routineFunction();
  text_modal.textContent =
    'My name is Amir Hossein Homayoun Mehr. I was born in the city of Torbat Heydarieh and I lived in this city until I was eight years old.';
});
//action button 2
button2.addEventListener('click', function () {
  routineFunction();
  text_modal.textContent =
    'Until today, I have experienced many jobs, I have been a bank employee, I have been a programmer and I have done many things';
});
//action button 3
button3.addEventListener('click', function () {
  routineFunction();
  text_modal.textContent =
    'My goals in life are to make a lot of money and become a great programmer.';
});

//action button exit modal
btnExit.addEventListener('click', exitModal);
overlay.addEventListener('click', exitModal);
document.addEventListener('keydown', function (l) {
  if (l.key === 'Escape') {
    exitModal();
  }
});

'use strict';
// Save html elemnts into variable
const showButtons = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

function showModal() {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Add showModal for each button
showButtons.forEach(button => {
  button.addEventListener('click', showModal);
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

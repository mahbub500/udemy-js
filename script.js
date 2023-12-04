'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach( btn => btn.addEventListener('click', openModal) );

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////

// Selecting Elements

const header = document.querySelector('.header');

const allSecTions =  document.querySelectorAll( '.section' );

const allButtons = document.getElementsByTagName( 'button' );

// console.log( allButtons );

// Creating & inserting Element 


const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for imporved you ui & ux';
message.innerHTML = 'We use cookie for imporved you ui & ux <buton class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// header.append( message );
// header.append( message.cloneNode(true) );
// header.before(message);
header.after(message);

document
.querySelector('.btn--close-cookie')
.addEventListener('click', function(){
  message.parentElement.removeChild(message);
}); 

// console.log( header );
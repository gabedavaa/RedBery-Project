'use strict';
////////////////////////////
////////////////////////////
let sectionVisibility = {
  section1: true,
  section2: false,
  section3: false,
};

const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');
const section5 = document.getElementById('section-5');

const starterBtnSection_1 = document.getElementById('starter-btn-section-1');
const nextBtnSection_2 = document.getElementById('next-page-section-2');
const nextBtnSection_3 = document.getElementById('next-page-section-3');
const nextBtnSection_4 = document.getElementById('finish-page-section-4');

starterBtnSection_1.addEventListener('click', e => {
  console.log(e);
  section1.style.display = 'none';
  section2.style.display = 'block';
  section5.style.display = 'block';
});

nextBtnSection_2.addEventListener('click', e => {
  console.log(e);
  section2.style.display = 'none';
  section3.style.display = 'block';
});

nextBtnSection_3.addEventListener('click', e => {
  console.log(e);
  section3.style.display = 'none';
  section4.style.display = 'block';
});

nextBtnSection_4.addEventListener('click', e => {
  console.log(e);
  section4.style.display = 'none';
  section5.classList.add('finished-editing');
});

////////////////////////////////////////
////////////////////////////////////////////
// const starterBtn = document.querySelector('.starter-btn');
// const starterWindowElement = document.querySelector('.starter-container');
// const containerEdits = document.querySelectorAll('.container-edit');
// const arrowBackIcons = document.querySelectorAll('.arrow-back--btn');
// ////////////////////////////////////////
// // console.log(containerEdits);

// const arrowBackIconBtn = function () {
//   for (let i = 0; i < arrowBackIcons.length; i++) {
//     starterBtn.addEventListener('click', e => {
//       // console.log(e);
//       starterWindowElement.classList.add('hidden');
//       containerEdits[i].classList.remove('hidden');
//       console.log(i);
//     });
//     arrowBackIcons[i].addEventListener('click', event => {
//       containerEdits[i].toggleAttribute('hidden');
//       containerEdits[i - 1].classList.remove('hidden');
//     });
//   }
// };

// arrowBackIconBtn();

/*
const prevNextPageBtn = function () {};
*/

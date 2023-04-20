'strict mode';
////////////////////////////
////////////////////////////
const containerEdits = document.querySelectorAll('.container-edit');
const arrowBackIcons = document.querySelectorAll('.arrow-back--btn');
////////////////////////////////////////
console.log(containerEdits);

const arrowBackIconBtn = function () {
  for (let i = 0; i < arrowBackIcons.length; i++) {
    arrowBackIcons[i].addEventListener('click', event => {
      containerEdits[i].toggleAttribute('hidden');
      containerEdits[i - 1].classList.remove('hidden');
    });
  }
};

arrowBackIconBtn();

/*
const prevNextPageBtn = function () {};
*/

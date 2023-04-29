'use strict';

///////////////////////////////////////////
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');
const section5 = document.getElementById('section-5');
//////////////////////////////////////////
export let sectionVisibility = {
  section1: true,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
};

console.log(sectionVisibility);

export const loc = function (sectionVisibilityLocalStorage = null) {
  if (sectionVisibilityLocalStorage === null) return;
  else sectionVisibility = sectionVisibilityLocalStorage;
};

export const s1 = function () {};
/** DOMContentLoaded event to wait for the HTML and CSS to finish loading before executing the JavaScript code */
// export const localStorageReload = function () {
//   document.addEventListener('DOMContentLoaded', function () {
//     console.log('localStorageSectionVisibility');

//     const localStorageSectionVisibility = function () {
//       let sectionVisibilityLocalStorage = JSON.parse(
//         localStorage.getItem('sectionVisibility')
//       );

//       if (sectionVisibilityLocalStorage === null) return;
//       else sectionVisibility = sectionVisibilityLocalStorage;
//       console.log(sectionVisibility);
//       if (sectionVisibility.section2) {
//         section1.style.display = 'none';
//         section2.style.display = 'block';
//         section5.style.display = 'block';
//       }

//       if (sectionVisibility.section3) {
//         section1.style.display = 'none';
//         section2.style.display = 'none';
//         section3.style.display = 'block';
//         section5.style.display = 'block';
//       }

//       if (sectionVisibility.section4) {
//         section1.style.display = 'none';
//         section2.style.display = 'none';
//         section3.style.display = 'none';
//         section4.style.display = 'block';
//         section5.style.display = 'block';
//       }

//       if (
//         !sectionVisibility.section1 &&
//         !sectionVisibility.section2 &&
//         !sectionVisibility.section3 &&
//         !sectionVisibility.section4 &&
//         sectionVisibility.section5
//       ) {
//         section1.style.display = 'none';
//         section2.style.display = 'none';
//         section3.style.display = 'none';
//         section4.style.display = 'none';
//         section5.style.display = 'block';
//         section5.classList.add('finished-editing');
//       }

//       let inputValuesLocalStorage = JSON.parse(
//         localStorage.getItem('inputValues')
//       );
//       if (inputValuesLocalStorage === null) return;
//       else inputValues = inputValuesLocalStorage;

//       if (inputValues.nameInputValue)
//         nameOutput.textContent = inputValues.nameInputValue;

//       if (inputValues.lastNameInputValue)
//         lastNameOutput.textContent = inputValues.lastNameInputValue;

//       if (inputValues.mailTextValue) {
//         mailText.textContent = inputValues.mailTextValue;
//         mailOutput.href = inputValues.mailOutputHref;
//       }

//       if (inputValues.phoneNumberValue) {
//         phoneOutput.href = inputValues.phoneNumberHref;
//         phoneNumber.textContent = `+995${inputValues.phoneNumberValue}`;
//       }

//       if (inputValues && inputValues.profileIMG)
//         profileImageOutput.src = inputValues.profileIMG;

//       if (inputValues.aboutMeInputValue)
//         aboutMeOutput.textContent = inputValues.aboutMeInputValue;
//     };
//   });
// };
export const firstBtn = function () {
  sectionVisibility.section1 = false;
  sectionVisibility.section2 = true;
  sectionVisibility.section5 = true;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
};

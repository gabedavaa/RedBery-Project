'use strict';
////////////////////////////
////////////////////////////

const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');
const section5 = document.getElementById('section-5');

const starterBtnSection_1 = document.getElementById('starter-btn-section-1');
const nextBtnSection_2 = document.getElementById('next-page-section-2');
const backtBtnSection_3 = document.getElementById('back-page-section-3');
const nextBtnSection_3 = document.getElementById('next-page-section-3');
const backBtnSection_4 = document.getElementById('back-page-section-4');
const finishBtnSection_4 = document.getElementById('finish-page-section-4');

////////////////////////////
////////////////////////////

/** SECTION VISIBILITY */
let sectionVisibility = {
  section1: true,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
};

/** ONLOADING */
window.onload = function () {
  let sectionVisibilityLocalStorage = JSON.parse(
    localStorage.getItem('sectionVisibility')
  );

  if (sectionVisibilityLocalStorage === null) return;
  else sectionVisibility = sectionVisibilityLocalStorage;

  if (sectionVisibility.section2) {
    section1.style.display = 'none';
    section2.style.display = 'block';
    section5.style.display = 'block';
  }

  if (sectionVisibility.section3) {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'block';
    section5.style.display = 'block';
  }

  if (sectionVisibility.section4) {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = 'block';
    section5.style.display = 'block';
  }

  if (
    !sectionVisibility.section1 &&
    !sectionVisibility.section2 &&
    !sectionVisibility.section3 &&
    !sectionVisibility.section4 &&
    sectionVisibility.section5
  ) {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = 'none';
    section5.style.display = 'block';
    section5.classList.add('finished-editing');
  }
};

/** STARTER BTN */
starterBtnSection_1.addEventListener('click', e => {
  section1.style.display = 'none';
  section2.style.display = 'block';
  section5.style.display = 'block';

  sectionVisibility.section1 = false;
  sectionVisibility.section2 = true;
  sectionVisibility.section5 = true;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
  console.log(sectionVisibility);
});

/** NEXT BTN SECTION_2 */
nextBtnSection_2.addEventListener('click', e => {
  section2.style.display = 'none';
  section3.style.display = 'block';

  sectionVisibility.section2 = false;
  sectionVisibility.section3 = true;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
});

/** NEXT BTN SECTION_3 */
nextBtnSection_3.addEventListener('click', e => {
  section3.style.display = 'none';
  section4.style.display = 'block';

  sectionVisibility.section3 = false;
  sectionVisibility.section4 = true;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
});

/** BACK BTN SECTION_3 */
backtBtnSection_3.addEventListener('click', e => {
  section2.style.display = 'block';
  section3.style.display = 'none';

  sectionVisibility.section2 = true;
  sectionVisibility.section3 = false;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
});

/** FINISH BTN SECTION_4 */
finishBtnSection_4.addEventListener('click', e => {
  section4.style.display = 'none';
  section5.classList.add('finished-editing');

  sectionVisibility.section4 = false;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
});

/** BACK BTN SECTION_4 */
backBtnSection_4.addEventListener('click', e => {
  section3.style.display = 'block';
  section4.style.display = 'none';

  sectionVisibility.section3 = true;
  sectionVisibility.section4 = false;

  localStorage.setItem('sectionVisibility', JSON.stringify(sectionVisibility));
});

//////////////////////
////////////////////////
///////////////////////
/* closing pop-up */
const closeBtn = document.getElementById('btn-close');
const closeBtnContainer = document.querySelector('.btn-close');

closeBtn.addEventListener('click', e => {
  closeBtnContainer.style.display = 'none';
});

////////////////////////////////////////
////////////////////////////////////////////

const nameInput = document.getElementById('name-input');
const lastNameInput = document.getElementById('lastname-input');
const nameOutput = document.getElementById('name-output');
const lastNameOutput = document.getElementById('lastname-output');

const mailInput = document.getElementById('mail-input');
const phoneInput = document.getElementById('phone-input');
const mailOutput = document.getElementById('mail-output');
const mailText = document.getElementById('mail-text');
const phoneOutput = document.getElementById('phone-output');
const phoneNumber = document.getElementById('phone-number');

const profileImageInput = document.getElementById('profile-image');
const profileImageOutput = document.getElementById('profile-img-output');

const aboutMeInput = document.getElementById('about-me-input');
const aboutMeOutput = document.getElementById('about-me-output');

//////////////////////////////////////////////
///////////////////////////////////////////////
let inputValues = {};

// NAME
nameInput.addEventListener('input', e => {
  inputValues.nameInputValue = nameInput.value;
  nameOutput.textContent = inputValues.nameInputValue;
});

// LAST-NAME
lastNameInput.addEventListener('input', e => {
  inputValues.lastNameInputValue = lastNameInput.value;
  lastNameOutput.textContent = inputValues.lastNameInputValue;
});

// PROFILE IMAGE
profileImageInput.addEventListener('change', e => {
  const selectedIMG = e.target.files[0];

  if (!selectedIMG) profileImageOutput.setAttribute('alt', 'not found');
  const reader = new FileReader();

  reader.addEventListener('load', e => {
    profileImageOutput.setAttribute('src', reader.result);
    console.log(reader.result);
  });

  inputValues.profileIMG = selectedIMG;
  reader.readAsDataURL(inputValues.profileIMG);
});
console.log(inputValues);
// ABOUT ME
aboutMeInput.addEventListener('input', e => {
  if (!aboutMeInput && aboutMeInput === null) return;

  inputValues.aboutMeInputValue = aboutMeInput.value;
  aboutMeOutput.textContent = inputValues.aboutMeInputValue;
});

//PHONE
phoneInput.addEventListener('input', e => {
  inputValues.phoneNumberValue = phoneInput.value;
  phoneNumber.textContent = inputValues.phoneNumberValue;

  inputValues.phoneNumberHref = `tel:+${phoneInput.value}`;
  phoneOutput.href = inputValues.phoneNumberHref;
});

// MAIL
mailInput.addEventListener('input', e => {
  inputValues.mailTextValue = mailInput.value;
  mailText.textContent = inputValues.mailTextValue;

  inputValues.mailOutputHref = `mailto:${mailInput.value}`;
  mailOutput.href = inputValues.mailOutputHref;
});

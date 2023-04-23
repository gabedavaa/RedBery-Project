'use strict';
// ////////////////////////////
import { NAEMLASTNAME_REGEX } from './config.js';
import { ABOUTME_REGEX } from './config.js';
import { PHONENUMBER_REGEX } from './config.js';
import { EMAIL_REGEX } from './config.js';
// ////////////////////////////
// import nameLastname from './views/nameLastname.js';
import nameElemet from './views/nameElemet.js';
import lastnameElemet from './views/lastnameElemet.js';

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
const arrowBtnSection_1 = document.getElementById('arrow-btn-section-1');
////////////////////////////////////////////
////////////////////////////////////////////
const nameInputParentDIV = document.getElementById('name-input-parentDIV');
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const lastNameParentDIV = document.getElementById('lastname-input-parentDIV');
const lastNameInput = document.getElementById('lastname-input');
const lastNameOutput = document.getElementById('lastname-output');

const mailInputParentDIV = document.getElementById('mail-input-parentDIV');
const mailInput = document.getElementById('mail-input');
const mailOutput = document.getElementById('mail-output');
const mailText = document.getElementById('mail-text');
const phoneInputParentDIV = document.getElementById('phone-input-parentDIV');
const phoneInput = document.getElementById('phone-input');
const phoneOutput = document.getElementById('phone-output');
const phoneNumber = document.getElementById('phone-number');

const profileImageInput = document.getElementById('profile-image');
const profileImageOutput = document.getElementById('profile-img-output');

const aboutMeParentDIV = document.getElementById('aboutme-input-parentDIV');
const aboutMeInput = document.getElementById('about-me-input');
const aboutMeOutput = document.getElementById('about-me-output');

//////////////////////////////////////////////
///////////////////////////////////////////////
/**INPUT VALUES IN OBJECT */
let inputValues = {};
////////////////////////////
////////////////////////////
/** ONLOADING */
window.onload = function () {
  section1.classList.remove('hidden');
};

/** SECTION VISIBILITY */
let sectionVisibility = {
  section1: true,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
};

/** DOMContentLoaded event to wait for the HTML and CSS to finish loading before executing the JavaScript code */
document.addEventListener('DOMContentLoaded', function () {
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

  let inputValuesLocalStorage = JSON.parse(localStorage.getItem('inputValues'));
  if (inputValuesLocalStorage === null) return;
  else inputValues = inputValuesLocalStorage;

  if (inputValues.nameInputValue)
    nameOutput.textContent = inputValues.nameInputValue;

  if (inputValues.lastNameInputValue)
    lastNameOutput.textContent = inputValues.lastNameInputValue;

  if (inputValues.mailTextValue) {
    mailText.textContent = inputValues.mailTextValue;
    mailOutput.href = inputValues.mailOutputHref;
  }

  if (inputValues.phoneNumberValue) {
    phoneOutput.href = inputValues.phoneNumberHref;
    phoneNumber.textContent = `+995${inputValues.phoneNumberValue}`;
  }

  if (inputValues && inputValues.profileIMG)
    profileImageOutput.src = inputValues.profileIMG;

  if (inputValues.aboutMeInputValue)
    aboutMeOutput.textContent = inputValues.aboutMeInputValue;
});

/////////////////////////////////
///////////////////////////////
////////////////////////////////
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

// NAME AND LAST-NAME
const init = function () {
  nameInput.addEventListener('input', function () {
    inputValues.nameInputValue = this.value.trim();
    let nameValue = inputValues.nameInputValue;

    nameElemet.outputRender(nameValue);

    // nameOutput.textContent = nameValue;
    // if (nameValue.length < 2 || !NAEMLASTNAME_REGEX.test(nameValue)) {
    //   nameInputParentDIV.classList.add('alert--input');
    // } else {
    //   nameInputParentDIV.classList.remove('alert--input');
    //   nameInputParentDIV.classList.add('valid--input');
    // }
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // LAST-NAME
  lastNameInput.addEventListener('input', function () {
    inputValues.lastNameInputValue = this.value.trim();
    let lastNameValue = inputValues.lastNameInputValue;

    lastnameElemet.outputRender(lastNameValue);

    // lastNameOutput.textContent = lastNameValue;
    // if (lastNameValue.length < 2 || !NAEMLASTNAME_REGEX.test(lastNameValue)) {
    //   lastNameParentDIV.classList.add('alert--input');
    // } else {
    //   lastNameParentDIV.classList.remove('alert--input');
    //   lastNameParentDIV.classList.add('valid--input');
    // }
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // PROFILE IMAGE
  profileImageInput.addEventListener('change', function (e) {
    const selectedIMG = e.target.files[0];

    if (!selectedIMG) profileImageOutput.setAttribute('alt', 'not found');

    const reader = new FileReader();
    reader.addEventListener('load', e => {
      profileImageOutput.src = reader.result;
      inputValues.profileIMG = reader.result;
      localStorage.setItem('inputValues', JSON.stringify(inputValues));
    });

    reader.readAsDataURL(selectedIMG);
  });

  // ABOUT ME
  aboutMeInput.addEventListener('input', function () {
    if (!aboutMeInput && aboutMeInput === null) return;

    inputValues.aboutMeInputValue = this.value;

    let aboutMeValue = inputValues.aboutMeInputValue;
    aboutMeOutput.textContent = aboutMeValue;

    if (!ABOUTME_REGEX.test(aboutMeValue)) {
      aboutMeParentDIV.classList.add('alert--input');
    } else {
      aboutMeParentDIV.classList.remove('alert--input');
      aboutMeParentDIV.classList.add('valid--input');
    }
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  //PHONE
  phoneInput.addEventListener('input', function () {
    inputValues.phoneNumberValue = this.value.trim();
    let numberValue = inputValues.phoneNumberValue;
    inputValues.phoneNumberHref = `tel:+${995 + numberValue}`;
    phoneNumber.textContent = `+995${numberValue}`;

    if (!PHONENUMBER_REGEX.test(numberValue)) {
      phoneInputParentDIV.classList.add('alert--input');
    } else {
      phoneOutput.href = inputValues.phoneNumberHref;
      phoneInputParentDIV.classList.remove('alert--input');
      phoneInputParentDIV.classList.add('valid--input');
    }
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // MAIL
  mailInput.addEventListener('input', function () {
    inputValues.mailTextValue = this.value.trim();
    let mailValue = inputValues.mailTextValue;
    inputValues.mailOutputHref = `mailto:${mailValue}`;
    mailText.textContent = mailValue;

    if (!EMAIL_REGEX.test(mailValue)) {
      mailInputParentDIV.classList.add('alert--input');
    } else {
      mailOutput.href = inputValues.mailOutputHref;
      mailInputParentDIV.classList.remove('alert--input');
      mailInputParentDIV.classList.add('valid--input');
    }
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });
};
init();

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
arrowBtnSection_1.addEventListener('click', function (e) {
  console.log(56);
  localStorage.removeItem('inputValues');

  if (
    !sectionVisibility.section1 &&
    sectionVisibility.section2 &&
    !sectionVisibility.section3 &&
    !sectionVisibility.section4 &&
    sectionVisibility.section5
  ) {
    section1.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = 'none';
    section5.style.display = 'none';
  }

  nameOutput.textContent = 'ანზორ';
  nameInput.value = '';

  lastNameOutput.textContent = 'მუმლაძე';
  lastNameInput.value = '';

  mailText.textContent = 'anzor434@redberry.ge';
  mailOutput.href = `mailto:anzor434@redberry.ge`;
  mailInput.value = '';

  phoneInput.value = '';
  phoneNumber.textContent = `+995568300123`;
  phoneOutput.href = `tel:+${995568300123}`;

  profileImageOutput.src = './images/author photo.png';

  aboutMeInput.value = '';
  aboutMeOutput.textContent =
    'ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.';
});

////////////////////////////////
//////////////////////////////////////
const moreEperienceBtn = document.getElementById('more-experience-btn');
const moreExperienceContainer = document.getElementById(
  'more-experience-container'
);

moreEperienceBtn.addEventListener('click', function (e) {
  let moreExperienceData = {};
  const html = `
    <div class="experience">
      <!-- experience and employer -->
      <form class="contact--form margin-top--37">
        <div class="mail-container">
          <label for="text">თანამდებობა</label>
          <input id="${moreExperienceData}" type="text" required placeholder="თანამდებობა" />
          <p>მინიმუმ 2 სიმბოლო</p>

          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>

        <div class="mail-container margin-top--31">
          <label for="text">დამსაქმებელი</label>
          <input type="text" required placeholder="დამსაქმებელი" />
          <p>მინიმუმ 2 სიმბოლო</p>

          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>
      </form>

      <!-- start date and end date -->
      <form class="names--form margin-top--31">
        <div class="name">
          <label for="name">დაწყების რიცხვი</label>
          <input id="name" type="date" class="name--input" required />
          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>
        <div class="name">
          <label for="last-name">დამთავრების რიცხვი</label>
          <input
            id="last-name"
            type="date"
            class="name--input"
            required
          />
          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>
      </form>

      <!-- job description -->
      <div class="about--me job-description">
        <label for="about-me">აღწერა</label>
        <textarea
          class="name--input"
          type="text"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        ></textarea>
        <ion-icon
          class="checkmark-icon hidden"
          name="checkmark-outline"
        ></ion-icon>
        <ion-icon
          class="alert-icon hidden"
          name="alert-circle-outline"
        ></ion-icon>
        <div class="border-bottom margin-top--58"></div>
      </div>
    </div>
      `;

  moreExperienceContainer.insertAdjacentHTML('beforebegin', html);
});

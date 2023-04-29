'use strict';
// ////////////////////////////
import nameElemet from './views/genInfo/nameElemet.js';
import lastnameElemet from './views/genInfo/lastnameElemet.js';
import aboutMeelment from './views/genInfo/aboutMeelment.js';
import phoneElement from './views/genInfo/phoneElement.js';
import mailElement from './views/genInfo/mailElement.js';
import positionElement from './views/experience/positionElement.js';
import employerElement from './views/experience/employerElement.js';
import startEndDate from './views/experience/startEndDate.js';
import aboutExpElement from './views/experience/aboutExpElement.js';
import moreExpEmpElement from './views/experience/moreExpEmpElement.js';
import markupExpElement from './views/experience/markupExpElement.js';
//////////////////////////////////////////////////

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
/** GENERAL INFO */
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

/** WORKING EXPERIENCE */
const positionInputParentDIV = document.getElementById(
  'position-input-parentDIV'
);
const positionInput = document.getElementById('position-input');
const positionOutput = document.getElementById('position-output');

const employerInputParentDIV = document.getElementById(
  'employer-input-parentDIV'
);
const employerInput = document.getElementById('employer-input');
const employerOutput = document.getElementById('employer-output');

const startDateInputParentDIV = document.getElementById(
  'startDate-input-parentDIV'
);
const startDateInput = document.getElementById('startDate-input');
const startDateOutput = document.getElementById('startDate-output');

const endDateInputParentDIV = document.getElementById(
  'endDate-input-parentDIV'
);
const endDateInput = document.getElementById('endDate-input');
const endDateOutput = document.getElementById('endDate-output');

const aboutExperienceParentDIV = document.getElementById(
  'aboutExp-input-parentDIV'
);
const aboutExperienceInput = document.getElementById('about-exp-input');
const aboutExperienceOutput = document.getElementById('about-exp-output');
////////////////////////////////////////////
////////////////////////////
/** ONLOADING */
window.onload = function () {
  section1.classList.remove('hidden');
};
///////////////////////////////////////////

//////////////////////////////////////////////
///////////////////////////////////////////////
/**INPUT VALUES IN OBJECT */
let inputValues = {};
// Data More Experience
let moreExperienceData = [];

////////////////////////////

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

  // GENERAL INFO
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

  // EXPERIENCE INFO
  if (inputValues.positionValue)
    positionOutput.textContent = inputValues.positionValue;

  if (inputValues.employerValue)
    employerOutput.textContent = inputValues.employerValue;

  if (inputValues.employerValue)
    employerOutput.textContent = inputValues.employerValue;

  if (inputValues.expStartDateValue)
    startDateOutput.textContent = inputValues.expStartDateValue;

  if (inputValues.expEndDateValue)
    endDateOutput.textContent = inputValues.expEndDateValue;

  if (inputValues.aboutExpInputValue)
    aboutExperienceOutput.textContent = inputValues.aboutExpInputValue;
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

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // LAST-NAME
  lastNameInput.addEventListener('input', function () {
    inputValues.lastNameInputValue = this.value.trim();
    let lastNameValue = inputValues.lastNameInputValue;

    lastnameElemet.outputRender(lastNameValue);

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
    aboutMeelment.describeRender(aboutMeValue);

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  //PHONE
  phoneInput.addEventListener('input', function () {
    inputValues.phoneNumberValue = this.value.trim();
    let numberValue = inputValues.phoneNumberValue;

    inputValues.phoneNumberHref = `tel:${+995 + numberValue}`;
    let hrefValue = inputValues.phoneNumberHref;

    phoneElement.phoneEmailRender(numberValue, hrefValue);

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // MAIL
  mailInput.addEventListener('input', function () {
    inputValues.mailTextValue = this.value.trim();
    let mailValue = inputValues.mailTextValue;

    inputValues.mailOutputHref = `mailto:${mailValue}`;

    let hrefValue = inputValues.mailOutputHref;

    mailElement.phoneEmailRender(mailValue, hrefValue);

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  ////////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  // POSITION
  positionInput.addEventListener('input', function () {
    inputValues.positionValue = this.value.trim();
    let posValue = inputValues.positionValue;

    positionElement.outputRender(posValue);

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // EMPLOYER
  employerInput.addEventListener('input', function () {
    inputValues.employerValue = this.value.trim();
    let empValue = inputValues.employerValue;

    employerElement.outputRender(empValue);

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // START DATE EXPERIENCE
  startDateInput.addEventListener('change', function () {
    inputValues.expStartDateValue = this.value;
    let startValue = inputValues.expStartDateValue;

    startEndDate.moreStartEndDateRender(
      startValue,
      startDateOutput,
      startDateInputParentDIV
    );
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // END DATE EXPERIENCE
  endDateInput.addEventListener('change', function () {
    inputValues.expEndDateValue = this.value;
    let endValue = inputValues.expEndDateValue;

    startEndDate.moreStartEndDateRender(
      endValue,
      endDateOutput,
      endDateInputParentDIV
    );

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // ABOUT EXPERIENCE
  aboutExperienceInput.addEventListener('input', function () {
    if (!aboutExperienceInput && aboutExperienceInput === null) return;

    inputValues.aboutExpInputValue = this.value;
    let aboutExpValue = inputValues.aboutExpInputValue;

    aboutExpElement.moreDescribeRender(
      aboutExpValue,
      aboutExperienceOutput,
      aboutExperienceParentDIV
    );

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });
};
init();

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
arrowBtnSection_1.addEventListener('click', function (e) {
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

    sectionVisibility.section1 = true;
    sectionVisibility.section2 = false;
    sectionVisibility.section3 = false;
    sectionVisibility.section4 = false;
    sectionVisibility.section5 = false;
    localStorage.setItem(
      'sectionVisibility',
      JSON.stringify(sectionVisibility)
    );
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
  phoneOutput.href = `tel:${+995568300123}`;

  profileImageOutput.src = './images/author photo.png';

  aboutMeInput.value = '';
  aboutMeOutput.textContent =
    'ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.';
});

////////////////////////////////
/** ADDING MORE EXPERIENCE */
//////////////////////////////////////
const moreEperienceBtn = document.getElementById('more-experience-btn');
const moreExperienceContainer = document.getElementById(
  'more-experience-container'
);
const studyContainer = document.getElementById('study');

// More Experience BTN
moreEperienceBtn.addEventListener('click', function (e) {
  const myDate = new Date();
  const dateNum = myDate.getTime();
  const last10Digits = dateNum.toString().slice(-10);

  // Markup HTML
  markupExpElement.markupExp(
    last10Digits,
    moreExperienceContainer,
    studyContainer
  );

  // Saving data
  moreExperienceData.push({
    id: last10Digits,
    positionDiv: `position-input-parentDIV--${last10Digits}`,
    positionInput: `position-input--${last10Digits}`,
    employerDiv: `employer-input-parentDIV--${last10Digits}`,
    employerInput: `employer-input--${last10Digits}`,
    starterDiv: `startDate-input-parentDIV--${last10Digits}`,
    starterInput: `startDate-input--${last10Digits}`,
    endDateDiv: `endDate-input-parentDIV--${last10Digits}`,
    endDateInput: `endDate-input--${last10Digits}`,
    aboutExpDiv: `aboutExp-input-parentDIV--${last10Digits}`,
    aboutExpInput: `about-exp-input--${last10Digits}`,
    positionOutput: `position-output--${last10Digits}`,
    employerOutput: `employer-output--${last10Digits}`,
    startDateOutput: `startDate-output--${last10Digits}`,
    endDateOutput: `endDate-output--${last10Digits}`,
    aboutExpOutput: `about-exp-output--${last10Digits}`,
  });

  /////////////////////////////////////////////
  // TO GET VALUE
  moreExperienceData.forEach((data, i) => {
    // POSITION
    document
      .getElementById(moreExperienceData[i].positionInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.positionOutput);
        const parentDiv = document.getElementById(data.positionDiv);

        data.positionValue = this.value.trim();
        let value = data.positionValue;

        moreExpEmpElement.moreExpPosEmp(value, output, parentDiv);

        localStorage.setItem(
          'moreExperienceData',
          JSON.stringify(moreExperienceData)
        );

        console.log(moreExperienceData);
      });

    // EMPLOYER
    document
      .getElementById(moreExperienceData[i].employerInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.employerOutput);
        const parentDiv = document.getElementById(data.employerDiv);

        data.emplyerValue = this.value.trim();
        let value = data.emplyerValue;

        moreExpEmpElement.moreExpPosEmp(value, output, parentDiv);

        localStorage.setItem(
          'moreExperienceData',
          JSON.stringify(moreExperienceData)
        );

        console.log(moreExperienceData);
      });

    // START DATE
    document
      .getElementById(moreExperienceData[i].starterInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.startDateOutput);
        const parentDiv = document.getElementById(data.starterDiv);

        data.startDateValue = this.value.trim();
        let value = data.startDateValue;

        startEndDate.moreStartEndDateRender(value, output, parentDiv);
        localStorage.setItem(
          'moreExperienceData',
          JSON.stringify(moreExperienceData)
        );
      });

    // END DATE
    document
      .getElementById(moreExperienceData[i].endDateInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.endDateOutput);
        const parentDiv = document.getElementById(data.endDateDiv);

        data.endDateValue = this.value.trim();
        let value = data.endDateValue;

        startEndDate.moreStartEndDateRender(value, output, parentDiv);
        localStorage.setItem(
          'moreExperienceData',
          JSON.stringify(moreExperienceData)
        );
      });

    // DESCRIPTION
    document
      .getElementById(moreExperienceData[i].aboutExpInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.aboutExpOutput);
        const parentDiv = document.getElementById(data.aboutExpDiv);

        data.aboutValue = this.value.trim();
        let value = data.aboutValue;

        aboutExpElement.moreDescribeRender(value, output, parentDiv);

        localStorage.setItem(
          'moreExperienceData',
          JSON.stringify(moreExperienceData)
        );
      });
  });
});

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
import universityElement from './views/education/universityElement.js';
import markupEduElement from './views/education/markupEduElement.js';
//////////////////////////////////////////////////
/////////////////////////////////////////////////
const moreEperienceBtn = document.getElementById('more-experience-btn');
const moreExperienceContainer = document.getElementById(
  'more-experience-container'
);
const studyContainer = document.getElementById('study');
const moreEducationBtn = document.getElementById('more-university-btn');
const moreEducationContainer = document.getElementById(
  'more-education-container'
);
const moreEduViewContainer = document.getElementById('moreEduView-lastDiv');

//////////////////////////////////////////////////////////
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
const arrowBtnSection_2 = document.getElementById('arrow-btn-section-2');
const arrowBtnSection_3 = document.getElementById('arrow-btn-section-3');
const arrowBtnSection_4 = document.getElementById('arrow-btn-section-4');

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
/////////////////////////////////////
// Education
const universityInputParentDIV = document.getElementById(
  'university-input-parentDIV'
);
const levelInputParentDIV = document.getElementById('level-input-parentDIV');
const endDateStudyInputParentDIV = document.getElementById(
  'endDateStudy-input-parentDIV'
);
const aboutStudyInputParentDIV = document.getElementById(
  'aboutStd-input-parentDIV'
);
const universityInput = document.getElementById('university-input');
const levelInput = document.getElementById('level-input');
const endDateEduInput = document.getElementById('endDateStudy-input');
const aboutStudyInput = document.getElementById('about-std-input');

const universityOutput = document.getElementById('university-output');
const levelOutput = document.getElementById('level-output');
const endDateStudyOutput = document.getElementById('endDate-edu-output');
const aboutStudyOutput = document.getElementById('about-edu-output');

//////////////////////////////////////////
///////////////////////////////////////////
const removeValidationMarks = function (div) {
  console.log(div);
  div.classList.remove('alert--input');
  div.classList.remove('valid--input');
};
///
const GENERAL_INFO_DEFAULT = function () {
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

  removeValidationMarks(nameInputParentDIV);
  removeValidationMarks(lastNameParentDIV);
  removeValidationMarks(mailInputParentDIV);
  removeValidationMarks(phoneInputParentDIV);
  removeValidationMarks(aboutMeParentDIV);
};
console.log(nameInputParentDIV);

const EXPERIENCE_INFO_DEFAULT = function () {
  positionOutput.textContent = `React Native Developer`;
  positionInput.value = ``;
  employerOutput.textContent = `Microsoft`;
  employerInput.value = ``;
  startDateOutput.textContent = `2020-09-23`;
  startDateInput.value = ``;
  endDateOutput.textContent = `2028-12-28`;
  endDateInput.value = ``;
  aboutExperienceOutput.textContent = `Experienced Javascript Native Developer with 5 years in the industry. proficient withreact. Used problem-solving aptitude to encahge application performance by 14%.created data visualisation tools and integrated designs.`;
  aboutExperienceInput.value = ``;

  removeValidationMarks(positionInputParentDIV);
  removeValidationMarks(employerInputParentDIV);
  removeValidationMarks(startDateInputParentDIV);
  removeValidationMarks(endDateInputParentDIV);
  removeValidationMarks(aboutExperienceParentDIV);
};

const EDUCATION_INFO_DEFAULT = function () {
  universityOutput.textContent = `საქართველოს მეცნიერების აკადემია`;
  universityInput.value = ``;
  levelOutput.textContent = `სტუდენტი`;
  levelInput.value = ``;
  endDateStudyOutput.textContent = `2020-09-23`;
  endDateEduInput.value = ``;
  aboutStudyOutput.textContent = `ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?`;
  aboutStudyInput.value = ``;

  removeValidationMarks(universityInputParentDIV);
  removeValidationMarks(levelInputParentDIV);
  removeValidationMarks(aboutStudyInputParentDIV);
  removeValidationMarks(endDateStudyInputParentDIV);
};

//////////////////////////////////////////////
///////////////////////////////////////////////
/**INPUT VALUES IN OBJECT */
let inputValues = {};
// Data More Experience
let moreExperienceData = [];
// Data More Education
let moreEducationData = [];

////////////////////////////

/** SECTION VISIBILITY */
let sectionVisibility = {
  section1: true,
  section2: false,
  section3: false,
  section4: false,
  section5: false,
};

//////////////////////
let popupAlert = {
  popup: true,
};

////////////////////////////
/** ONLOADING */
window.onload = function () {
  section1.classList.remove('hidden');
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

  /////////////////////////
  // popup
  let popupAlertLocalStorage = JSON.parse(localStorage.getItem('popupAlert'));

  if (popupAlertLocalStorage === null) return;
  else popupAlert = popupAlertLocalStorage;

  if (popupAlert.popup) closeBtnContainer.style.display = 'flex';
  else closeBtnContainer.style.display = 'none';
  ///////////
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

  // EDUCATION INFO
  if (inputValues.universityValue) {
    universityOutput.textContent = inputValues.universityValue;
  }

  if (inputValues.educationLevel) {
    levelOutput.textContent = inputValues.educationLevel;
  }

  if (inputValues.educationEndDate) {
    endDateStudyOutput.textContent = inputValues.educationEndDate;
  }

  if (inputValues.aboutStudyValue) {
    aboutStudyOutput.textContent = inputValues.aboutStudyValue;
  }

  // ADDED EXPERIENCE
  let addedMoreExpLocalStorage = JSON.parse(
    localStorage.getItem('moreExperienceData')
  );

  if (addedMoreExpLocalStorage === null) return;
  else moreExperienceData = addedMoreExpLocalStorage;

  console.log(addedMoreExpLocalStorage);
  moreExperienceData.forEach((data, i) => {
    // Markup HTML
    markupExpElement.markupExp(
      data.id,
      moreExperienceContainer,
      studyContainer
    );

    if (!data.positionValue) {
      console.log(data.positionValue);
      document.getElementById(
        data.positionOutput
      ).textContent = `React Native Developer`;
    } else {
      document.getElementById(data.positionOutput).textContent =
        data.positionValue;
      document.getElementById(data.positionInput).value = data.positionValue;
    }

    if (!data.emplyerValue) {
      console.log(data.emplyerValue);
      document.getElementById(data.employerOutput).textContent = `Microsoft`;
    } else {
      document.getElementById(data.employerOutput).textContent =
        data.emplyerValue;
      document.getElementById(data.employerInput).value = data.emplyerValue;
    }

    if (!data.startDateValue) {
      console.log(data.startDateValue);
      document.getElementById(data.startDateOutput).textContent = `2020-09-23`;
    } else {
      document.getElementById(data.startDateOutput).textContent =
        data.startDateValue;
      document.getElementById(data.starterInput).value = data.startDateValue;
    }

    if (!data.endDateValue) {
      console.log(data.endDateValue);
      document.getElementById(data.endDateOutput).textContent = `2028-12-28`;
    } else {
      document.getElementById(data.endDateOutput).textContent =
        data.endDateValue;
      document.getElementById(data.endDateInput).value = data.endDateValue;
    }

    if (!data.aboutValue) {
      console.log(data.aboutValue);
      document.getElementById(
        data.aboutExpOutput
      ).textContent = `Experienced Javascript Native Developer with 5 years in the industry. proficient withreact. Used problem-solving aptitude to encahge application performance by 14%.created data visualisation tools and integrated designs.`;
    } else {
      document.getElementById(data.aboutExpOutput).textContent =
        data.aboutValue;
      document.getElementById(data.aboutExpInput).value = data.aboutValue;
    }

    // POSITION
    document
      .getElementById(data.positionInput)
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
      });

    // EMPLOYER
    document
      .getElementById(data.employerInput)
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
      });

    // START DATE
    document
      .getElementById(data.starterInput)
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
      .getElementById(data.endDateInput)
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
      .getElementById(data.aboutExpInput)
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

  // ADDED EDUCATION
  let addedMoreEduLocalStorage = JSON.parse(
    localStorage.getItem('moreEducationData')
  );

  if (addedMoreEduLocalStorage === null) return;
  else moreEducationData = addedMoreEduLocalStorage;

  console.log(addedMoreEduLocalStorage);

  //////////////////////////////////////
  // Getting Values
  moreEducationData.forEach((data, i) => {
    // Markup HTML
    markupEduElement.markupEdu(
      data.id,
      moreEducationContainer,
      moreEduViewContainer
    );

    // UNIVERSITY
    if (!data.universityValue) {
      console.log(data.universityValue);
      document.getElementById(
        data.universityOutput
      ).textContent = `საქართველოს მეცნიერების აკადემია`;
    } else {
      document.getElementById(data.universityOutput).textContent =
        data.universityValue;
      document.getElementById(data.universityInput).value =
        data.universityValue;
    }

    // LEVEL
    if (!data.levelValue) {
      console.log(data.levelValue);
      document.getElementById(data.levelOutput).textContent = `სტუდენტი`;
    } else {
      document.getElementById(data.levelOutput).textContent = data.levelValue;
      document.getElementById(data.levelInput).value = data.levelValue;
    }

    // END DATE
    if (!data.endDateValue) {
      console.log(data.endDateValue);
      document.getElementById(data.endDateOutput).textContent = `2020-09-23`;
    } else {
      document.getElementById(data.endDateOutput).textContent =
        data.endDateValue;
      document.getElementById(data.endDateInput).value = data.endDateValue;
    }

    // DESCRIPTION
    if (!data.aboutValue) {
      console.log(data.aboutValue);
      document.getElementById(
        data.aboutEduOutput
      ).textContent = `ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?`;
    } else {
      document.getElementById(data.aboutEduOutput).textContent =
        data.aboutValue;
      document.getElementById(data.aboutEduInput).value = data.aboutValue;
    }
    ////

    // UNIVERSITY
    document
      .getElementById(data.universityInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.universityOutput);
        const parentDiv = document.getElementById(data.universityDiv);

        data.universityValue = this.value.trim();
        let value = data.universityValue;

        moreExpEmpElement.moreExpPosEmp(value, output, parentDiv);

        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    // LEVEL
    document
      .getElementById(data.levelInput)
      .addEventListener('change', function () {
        const output = document.getElementById(data.levelOutput);
        const parentDiv = document.getElementById(data.levelDiv);

        data.levelValue = this.value.trim();
        let value = data.levelValue;

        moreExpEmpElement.moreExpPosEmp(value, output, parentDiv);

        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    // END DATE
    document
      .getElementById(data.endDateInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.endDateOutput);
        const parentDiv = document.getElementById(data.endDateDiv);

        data.endDateValue = this.value.trim();
        let value = data.endDateValue;

        startEndDate.moreStartEndDateRender(value, output, parentDiv);
        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    // DESCRIPTION
    document
      .getElementById(data.aboutEduInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.aboutEduOutput);
        const parentDiv = document.getElementById(data.aboutEduDiv);

        data.aboutValue = this.value.trim();
        let value = data.aboutValue;

        aboutExpElement.moreDescribeRender(value, output, parentDiv);

        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });
  });
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

  // popup
  popupAlert.popup = true;
  closeBtnContainer.style.display = 'flex';
  localStorage.setItem('popupAlert', JSON.stringify(popupAlert));
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
///////////////////////
/* closing pop-up */
const closeBtn = document.getElementById('btn-close');
const closeBtnContainer = document.querySelector('.btn-close');

closeBtn.addEventListener('click', e => {
  if (popupAlert.popup) closeBtnContainer.style.display = 'none';

  popupAlert.popup = false;

  localStorage.setItem('popupAlert', JSON.stringify(popupAlert));
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

  /////////////////////
  /////////////////////
  // Education Section
  universityInput.addEventListener('input', function () {
    inputValues.universityValue = this.value.trim();
    let uniValue = inputValues.universityValue;

    universityElement.outputRender(uniValue);
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // Education Level
  levelInput.addEventListener('change', function () {
    inputValues.educationLevel = this.value.trim();
    let eduValue = inputValues.educationLevel;

    startEndDate.moreStartEndDateRender(
      eduValue,
      levelOutput,
      levelInputParentDIV
    );
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // Education End Date
  endDateEduInput.addEventListener('change', function () {
    inputValues.educationEndDate = this.value.trim();
    let eduEndValue = inputValues.educationEndDate;

    startEndDate.moreStartEndDateRender(
      eduEndValue,
      endDateStudyOutput,
      endDateStudyInputParentDIV
    );
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });

  // ABOUT EDUCATION
  aboutStudyInput.addEventListener('input', function () {
    if (!aboutExperienceInput && aboutExperienceInput === null) return;

    inputValues.aboutStudyValue = this.value;
    let aboutEduValue = inputValues.aboutStudyValue;

    aboutExpElement.moreDescribeRender(
      aboutEduValue,
      aboutStudyOutput,
      aboutStudyInputParentDIV
    );

    localStorage.setItem('inputValues', JSON.stringify(inputValues));
  });
};
init();

///////////////////////////////////
///////////////////////////////////
// Top-Left Arrow BTN General Imfo Section
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
  GENERAL_INFO_DEFAULT();
});

////////////////////////////////////////////
// Top-Left Arrow BTN Experience Section
arrowBtnSection_2.addEventListener('click', function (e) {
  moreExperienceData.forEach((data, i) => {
    console.log(data);
    document.getElementById(data.sectionEdit).remove();
    document.getElementById(data.sectionView).remove();
  });
  ////
  localStorage.removeItem('moreExperienceData');
  moreExperienceData = [];
  console.log(moreExperienceData);

  if (
    !sectionVisibility.section1 &&
    !sectionVisibility.section2 &&
    sectionVisibility.section3 &&
    !sectionVisibility.section4 &&
    sectionVisibility.section5
  ) {
    section1.style.display = 'none';
    section2.style.display = 'block';
    section3.style.display = 'none';
    section4.style.display = 'none';
    section5.style.display = 'block';

    sectionVisibility.section1 = false;
    sectionVisibility.section2 = true;
    sectionVisibility.section3 = false;
    sectionVisibility.section4 = false;
    sectionVisibility.section5 = true;
    localStorage.setItem(
      'sectionVisibility',
      JSON.stringify(sectionVisibility)
    );
  }

  EXPERIENCE_INFO_DEFAULT();
});

////////////////////////////////////////////
// Top-Left Arrow BTN Education Section
arrowBtnSection_3.addEventListener('click', function (e) {
  moreEducationData.forEach((data, i) => {
    console.log(data);
    document.getElementById(data.sectionEdit).remove();
    document.getElementById(data.sectionView).remove();
  });
  ////
  localStorage.removeItem('moreEducationData');
  moreEducationData = [];
  console.log(moreExperienceData);

  if (
    !sectionVisibility.section1 &&
    !sectionVisibility.section2 &&
    !sectionVisibility.section3 &&
    sectionVisibility.section4 &&
    sectionVisibility.section5
  ) {
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'block';
    section4.style.display = 'none';
    section5.style.display = 'block';

    sectionVisibility.section1 = false;
    sectionVisibility.section2 = false;
    sectionVisibility.section3 = true;
    sectionVisibility.section4 = false;
    sectionVisibility.section5 = true;
    localStorage.setItem(
      'sectionVisibility',
      JSON.stringify(sectionVisibility)
    );
  }

  EDUCATION_INFO_DEFAULT();
});

////////////////////////////////////////////
// Top-Left Last Arrow BTN Section
arrowBtnSection_4.addEventListener('click', function (e) {
  if (
    !sectionVisibility.section1 &&
    !sectionVisibility.section2 &&
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
  section5.classList.remove('finished-editing');

  // General info
  localStorage.removeItem('inputValues');
  GENERAL_INFO_DEFAULT();

  // Experience info
  moreExperienceData.forEach((data, i) => {
    console.log(data);
    document.getElementById(data.sectionEdit).remove();
    document.getElementById(data.sectionView).remove();
  });
  localStorage.removeItem('moreExperienceData');
  moreExperienceData = [];
  EXPERIENCE_INFO_DEFAULT();

  // Education info
  moreEducationData.forEach((data, i) => {
    console.log(data);
    document.getElementById(data.sectionEdit).remove();
    document.getElementById(data.sectionView).remove();
  });
  ////
  localStorage.removeItem('moreEducationData');
  moreEducationData = [];
  EDUCATION_INFO_DEFAULT();
});

////////////////////////////////
/** ADDING MORE EXPERIENCE */
//////////////////////////////////////
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
    sectionEdit: `experience--${last10Digits}`,
    sectionView: `experience-view--${last10Digits}`,
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

  localStorage.setItem(
    'moreExperienceData',
    JSON.stringify(moreExperienceData)
  );
  /////////////////////////////////////////////
  // TO GET VALUE
  moreExperienceData.forEach((data, i) => {
    console.log(data.id);
    // POSITION
    document
      .getElementById(data.positionInput)
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
      });

    // EMPLOYER
    document
      .getElementById(data.employerInput)
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
      });

    // START DATE
    document
      .getElementById(data.starterInput)
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
      .getElementById(data.endDateInput)
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
      .getElementById(data.aboutExpInput)
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

    localStorage.setItem(
      'moreExperienceData',
      JSON.stringify(moreExperienceData)
    );
  });
});

/////////////////////////////////////////////
////////////////////////////////////////////
// More Education
moreEducationBtn.addEventListener('click', function (e) {
  const myDate = new Date();
  const dateNum = myDate.getTime();
  const last10Digits = dateNum.toString().slice(-10);

  markupEduElement.markupEdu(
    last10Digits,
    moreEducationContainer,
    moreEduViewContainer
  );

  // Saving data
  moreEducationData.push({
    id: last10Digits,
    sectionEdit: `education--${last10Digits}`,
    sectionView: `study-view--${last10Digits}`,
    universityDiv: `university-input-parentDIV--${last10Digits}`,
    universityInput: `university-input--${last10Digits}`,
    levelDiv: `level-input-parentDIV--${last10Digits}`,
    levelInput: `level-input--${last10Digits}`,
    endDateDiv: `endDateStudy-input-parentDIV--${last10Digits}`,
    endDateInput: `endDateStudy-input--${last10Digits}`,
    aboutEduDiv: `aboutStd-input-parentDIV--${last10Digits}`,
    aboutEduInput: `about-std-input--${last10Digits}`,
    universityOutput: `university-output--${last10Digits}`,
    levelOutput: `level-output--${last10Digits}`,
    endDateOutput: `endDate-edu-output--${last10Digits}`,
    aboutEduOutput: `about-edu-output--${last10Digits}`,
  });

  localStorage.setItem('moreEducationData', JSON.stringify(moreEducationData));

  //////////////////////////////////////
  // Getting Values

  moreEducationData.forEach((data, i) => {
    // UNIVERSITY
    document
      .getElementById(data.universityInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.universityOutput);
        const parentDiv = document.getElementById(data.universityDiv);

        data.universityValue = this.value.trim();
        let value = data.universityValue;

        moreExpEmpElement.moreExpPosEmp(value, output, parentDiv);

        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    // LEVEL
    document
      .getElementById(data.levelInput)
      .addEventListener('change', function () {
        const output = document.getElementById(data.levelOutput);
        const parentDiv = document.getElementById(data.levelDiv);

        data.levelValue = this.value.trim();
        let value = data.levelValue;

        moreExpEmpElement.moreExpPosEmp(value, output, parentDiv);

        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    // END DATE
    document
      .getElementById(data.endDateInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.endDateOutput);
        const parentDiv = document.getElementById(data.endDateDiv);

        data.endDateValue = this.value.trim();
        let value = data.endDateValue;

        startEndDate.moreStartEndDateRender(value, output, parentDiv);
        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    // DESCRIPTION
    document
      .getElementById(data.aboutEduInput)
      .addEventListener('input', function () {
        const output = document.getElementById(data.aboutEduOutput);
        const parentDiv = document.getElementById(data.aboutEduDiv);

        data.aboutValue = this.value.trim();
        let value = data.aboutValue;

        aboutExpElement.moreDescribeRender(value, output, parentDiv);

        localStorage.setItem(
          'moreEducationData',
          JSON.stringify(moreEducationData)
        );
      });

    localStorage.setItem(
      'moreEducationData',
      JSON.stringify(moreEducationData)
    );
  });
});

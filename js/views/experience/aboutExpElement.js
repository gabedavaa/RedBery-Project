'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class AboutExperienceElemet extends View {
  _output = document.getElementById('about-exp-output');
  _inputParentDIV = document.getElementById('aboutExp-input-parentDIV');
  _aboutMeRegex = /^[ა-ჰA-Za-z0-9,.!?()@#$%&*~`{}_-\s]+$/;
}

export default new AboutExperienceElemet();

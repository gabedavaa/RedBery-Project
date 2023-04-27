'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class AboutMeElemet extends View {
  _output = document.getElementById('about-me-output');
  _inputParentDIV = document.getElementById('aboutme-input-parentDIV');
  _aboutMeRegex = /^[ა-ჰ0-9,.!?()@#$%&*~`{}"_\s]+$/;
}

export default new AboutMeElemet();

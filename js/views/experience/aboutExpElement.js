'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class AboutExperienceElemet extends View {
  _aboutMeRegex = /^[ა-ჰA-Za-z0-9,.!?()@#$%&*~`{}_-\s]+$/;
}

export default new AboutExperienceElemet();

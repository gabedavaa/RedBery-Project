'use strict';
import { sectionVisibility } from '../model.js';
/////////////////////////////////
import View from './view.js';
/////////////////////////////////

class BtnNextBack extends View {
  _section1 = document.getElementById('section-1');
  _section2 = document.getElementById('section-2');
  _section3 = document.getElementById('section-3');
  _section4 = document.getElementById('section-4');
  _section5 = document.getElementById('section-5');
  _starterBtnSection_1 = document.getElementById('starter-btn-section-1');

  constructor() {
    super();
  }

  hideStarterPage() {
    this._section1.style.display = 'none';
    this._section2.style.display = 'block';
    this._section5.style.display = 'block';
  }

  starterBTN(sectionVisibility) {
    this._starterBtnSection_1.addEventListener('click', e => {
      this.hideStarterPage();
      sectionVisibility();
    });
  }
}

export default new BtnNextBack();

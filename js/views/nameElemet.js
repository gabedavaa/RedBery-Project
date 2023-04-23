'use strict';
/////////////////////////////////
import View from './view.js';
/////////////////////////////////

class NameElement extends View {
  _output = document.getElementById('name-output');
  _inputParentDIV = document.getElementById('name-input-parentDIV');
  _nameLastNameRegex = /^[\u10D0-\u10FF\s]+$/;
}

export default new NameElement();

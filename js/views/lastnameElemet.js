'use strict';
/////////////////////////////////
import View from './view.js';
/////////////////////////////////

class LastnameElement extends View {
  _output = document.getElementById('lastname-output');
  _inputParentDIV = document.getElementById('lastname-input-parentDIV');
  _nameLastNameRegex = /^[\u10D0-\u10FF\s]+$/;
}

export default new LastnameElement();

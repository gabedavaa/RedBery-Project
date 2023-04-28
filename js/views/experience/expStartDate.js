'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class expStartDateElement extends View {
  _output = document.getElementById('startDate-output');
  _inputParentDIV = document.getElementById('startDate-input-parentDIV');
}

export default new expStartDateElement();

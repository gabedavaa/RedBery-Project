'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class expEndDateElement extends View {
  _output = document.getElementById('endDate-output');
  _inputParentDIV = document.getElementById('endDate-input-parentDIV');
}

export default new expEndDateElement();

'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class EmployerElement extends View {
  _output = document.getElementById('employer-output');
  _inputParentDIV = document.getElementById('employer-input-parentDIV');
  _nameLastNameRegex = /^(?=.*[a-zA-Zა-ჰ].*[a-zA-Zა-ჰ])[\w,.;:'"/()ა-ჰ ]+$/;
}

export default new EmployerElement();

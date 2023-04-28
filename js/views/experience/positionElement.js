'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class PositionElement extends View {
  _output = document.getElementById('position-output');
  _inputParentDIV = document.getElementById('position-input-parentDIV');
  _nameLastNameRegex =
    /^(?=.*[a-zA-Zა-ჰ].*[a-zA-Zა-ჰ])[\w,.;:'"/()\sა-ჰ]+(?:-?[\w,.;:'"/()\sა-ჰ]+)*$/;
}

export default new PositionElement();

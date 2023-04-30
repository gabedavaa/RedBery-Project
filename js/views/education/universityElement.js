'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class UniversityElement extends View {
  _output = document.getElementById('university-output');
  _inputParentDIV = document.getElementById('university-input-parentDIV');
  _nameLastNameRegex =
    /^(?=.*[a-zA-Zა-ჰ].*[a-zA-Zა-ჰ])[\w,.;:'"/()\sა-ჰ]+(?:-?[\w,.;:'"/()\sა-ჰ]+)*$/;
}

export default new UniversityElement();

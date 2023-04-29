'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class MoreExpEmpElement extends View {
  _nameLastNameRegex =
    /^(?=.*[a-zA-Zა-ჰ].*[a-zA-Zა-ჰ])[\w,.;:'"/()\sა-ჰ]+(?:-?[\w,.;:'"/()\sა-ჰ]+)*$/;
}

export default new MoreExpEmpElement();

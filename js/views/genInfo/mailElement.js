'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class EmailElement extends View {
  _output = document.getElementById('mail-text');
  _inputParentDIV = document.getElementById('mail-input-parentDIV');
  _phoneEmailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  _phoneEmailHref = document.getElementById('mail-output');
}

export default new EmailElement();

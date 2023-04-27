'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class PhoneElement extends View {
  _output = document.getElementById('phone-number');
  _inputParentDIV = document.getElementById('phone-input-parentDIV');
  _phoneEmailRegex =
    /^(\+995)?(\s)?(5|8|551|555|557|558|571|574|577|579|591|592|593|595|596|597|598|599)(\s)?(\d\s?){8}$/;
  _phoneEmailHref = document.getElementById('phone-output');
}

export default new PhoneElement();

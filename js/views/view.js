'use strict';
// ////////////////////////////

////////////////////////////
////////////////////////////
export default class View {
  _data;
  _numEmail;

  outputRender(data) {
    this._data = data;

    this._output.textContent = this._data;

    if (this._data.length < 2 || !this._nameLastNameRegex.test(this._data)) {
      this._inputParentDIV.classList.add('alert--input');
    } else {
      this._inputParentDIV.classList.remove('alert--input');
      this._inputParentDIV.classList.add('valid--input');
    }
  }

  describeRender(data) {
    this._data = data;

    this._output.textContent = this._data;

    if (!this._aboutMeRegex.test(this._data)) {
      this._inputParentDIV.classList.add('alert--input');
    } else {
      this._inputParentDIV.classList.remove('alert--input');
      this._inputParentDIV.classList.add('valid--input');
    }
  }

  phoneEmailRender(data, numEmail) {
    this._data = data;
    this._numEmail = numEmail;

    this._output.textContent = this._data;

    if (!this._phoneEmailRegex.test(this._data)) {
      this._inputParentDIV.classList.add('alert--input');
    } else {
      this._phoneEmailHref.href = this._numEmail;
      this._inputParentDIV.classList.remove('alert--input');
      this._inputParentDIV.classList.add('valid--input');
    }
  }

  startEndDateRender(data) {
    this._data = data;

    this._output.textContent = this._data;

    if (this._data === '') {
      this._inputParentDIV.classList.add('alert--input');
    } else {
      this._inputParentDIV.classList.remove('alert--input');
      this._inputParentDIV.classList.add('valid--input');
    }
  }
}

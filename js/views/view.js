'use strict';
// ////////////////////////////

////////////////////////////
////////////////////////////
export default class View {
  _data;
  _numEmail;
  _moreOutput;
  _moreParentDiv;

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

  moreStartEndDateRender(data, morePosOutput, morePosEmpDiv) {
    this._data = data;
    this._moreOutput = morePosOutput;
    this._moreParentDiv = morePosEmpDiv;

    this._moreOutput.textContent = this._data;

    if (this._data === '') {
      this._moreParentDiv.classList.add('alert--input');
    } else {
      this._moreParentDiv.classList.remove('alert--input');
      this._moreParentDiv.classList.add('valid--input');
    }
  }

  moreExpPosEmp(data, morePosOutput, morePosEmpDiv) {
    this._data = data;
    this._moreOutput = morePosOutput;
    this._moreParentDiv = morePosEmpDiv;

    this._moreOutput.textContent = this._data;

    if (this._data.length < 2 || !this._nameLastNameRegex.test(this._data)) {
      this._moreParentDiv.classList.add('alert--input');
    } else {
      this._moreParentDiv.classList.remove('alert--input');
      this._moreParentDiv.classList.add('valid--input');
    }
  }

  moreDescribeRender(data, morePosOutput, morePosEmpDiv) {
    this._data = data;
    this._moreOutput = morePosOutput;
    this._moreParentDiv = morePosEmpDiv;

    this._moreOutput.textContent = this._data;

    if (!this._aboutMeRegex.test(this._data)) {
      this._moreParentDiv.classList.add('alert--input');
    } else {
      this._moreParentDiv.classList.remove('alert--input');
      this._moreParentDiv.classList.add('valid--input');
    }
  }
}

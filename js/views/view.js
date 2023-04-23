'use strict';
// ////////////////////////////

////////////////////////////
////////////////////////////
export default class View {
  _data;

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
}

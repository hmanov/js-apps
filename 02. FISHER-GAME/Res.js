import { deleteData, updateData } from '/Router.js';

const Res = {
  loadBtn: document.getElementsByClassName('load')[0],
  addBtn: document.getElementsByClassName('add')[0],
  updateBtn: () => [...document.getElementsByClassName('update')],
  deleteBtn: () => [...document.getElementsByClassName('delete')],
  addFormData: () => {
    let obj = {};
    [...document.getElementById('addForm').getElementsByTagName('input')].map(
      e => (obj[e.className] = e.value)
    );
    return obj;
  },
  updateFormData: x => {
    let obj = {};
    [
      ...document
        .querySelector(`div[data-id=${x}]`)
        .getElementsByTagName('input')
    ].map(e => (obj[e.className] = e.value));
    return obj;
  },
  deleteCatch: x => {
    document.querySelector(`div[data-id=${x}]`).remove();
  },
  getCatchId: x => x.target.parentElement.getAttribute('data-id'),
  catches: document.getElementById('catches'),
  attachBtnEvents() {
    this.deleteBtn().map(e => e.addEventListener('click', deleteData));
    this.updateBtn().map(e => e.addEventListener('click', updateData));
  }
};

export default Res;

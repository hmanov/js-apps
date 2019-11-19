import { getBtns, getFormData, resetFormData } from '/Helpers.js';
import Myfetch from '/MyFetch.js';
import View from '/View.js';

const handleClickEvents = async e => {
  e.preventDefault();
  const btn = e.target;
  const id = btn.parentElement.parentElement.id;
  const methods = { 'load all books': 'GET', edit: 'PUT', delete: 'DELETE', submit: 'POST' };
  const method = methods[btn.textContent.toLowerCase()];
  const res = await Myfetch(id, method, getFormData());
  View(id, method, res, getFormData(), resetFormData);
  addListeners();
};
const addListeners = () => getBtns().map(e => e.addEventListener('click', handleClickEvents));
addListeners();

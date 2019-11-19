const ids = ['title', 'author', 'isbn'];
export const getBtns = () => [...document.getElementsByTagName('button')];

export const getFormData = () => {
  const obj = {};
  ids.map(e => (obj[e] = document.getElementById(e).value));
  return obj;
};

export const resetFormData = () => ids.map(e => (document.getElementById(e).value = ''));

const View = (id, method, data, formData, resetFromData) => {
  const container = document.getElementsByTagName('tbody')[0];

  const creatMyElement = (tag, text) => {
    const elem = document.createElement(tag);
    elem.textContent = text;
    return elem;
  };

  const addSingleBook = (book = data) => {
    const tr = creatMyElement('tr');
    tr.id = book._id;
    [book.title, book.author, book.isbn].map(e => tr.appendChild(creatMyElement('td', e)));
    const btnTd = creatMyElement('td');
    btnTd.appendChild(creatMyElement('button', 'Edit'));
    btnTd.appendChild(creatMyElement('button', 'Delete'));
    tr.appendChild(btnTd);
    container.appendChild(tr);
    resetFromData();
  };

  const loadAllBooks = () => {
    [...container.childNodes].map(e => e.remove());
    data.map(e => addSingleBook(e));
  };

  const deleteBook = () => document.getElementById(id).remove();

  const updateBook = () =>
    Object.values(formData).map((e, i) => (document.getElementById(id).children[i].textContent = e));

  const actionObj = { GET: loadAllBooks, POST: addSingleBook, DELETE: deleteBook, PUT: updateBook };

  actionObj[method]();
};
export default View;

const View = (id, method, data, formData) => {
  console.log(id);
  const container = document.getElementsByTagName('tbody')[0];

  const creatMyElement = (tag, text) => {
    let elem = document.createElement(tag);
    elem.textContent = text;
    return elem;
  };

  const addSingleBook = (book = formData) => {
    console.log(book);
    let tr = creatMyElement('tr');
    tr.id = book._id || id;

    [book.title, book.author, book.isbn].map(e => tr.appendChild(creatMyElement('td', e)));
    let btnTd = creatMyElement('td');
    btnTd.appendChild(creatMyElement('button', 'Edit'));
    btnTd.appendChild(creatMyElement('button', 'Delete'));
    tr.appendChild(btnTd);
    container.appendChild(tr);
  };

  const loadAllBooks = () => {
    container.innerHTML = '';
    data.map(e => addSingleBook(e));
  };

  const deleteBook = () => document.getElementById(id).remove();

  const updateBook = () => {
    console.log(document.getElementById(id).children);
    Object.values(formData).map((e, i) => (document.getElementById(id).children[i].textContent = e));
  };

  const actionObj = { GET: loadAllBooks, POST: addSingleBook, DELETE: deleteBook, PUT: updateBook };
  actionObj[method]();
};
export default View;

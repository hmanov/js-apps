import Res from '/Res.js';
import { loadData, addData } from '/Router.js';
import View from '/View.js';

Res.loadBtn.addEventListener('click', async () => {
  let res = await loadData();
  Object.entries(res).forEach(e => {
    View(...e);
  });
  Res.attachBtnEvents();
});

Res.addBtn.addEventListener('click', async () => {
  let res = await addData(Res.addFormData());
  console.log(res);
  View(res.name, Res.addFormData());
  Res.attachBtnEvents();
});

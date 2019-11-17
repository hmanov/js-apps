import Res from '/Res.js';
export const loadData = async x => {
  Res.catches.innerHTML = '';
  const res = await fetch('https://fisher-game.firebaseio.com/catches.json');
  return await res.json();
};

export const addData = async obj => {
  try {
    console.log(obj);
    let res = await fetch('https://fisher-game.firebaseio.com/catches.json', {
      method: 'POST',
      body: JSON.stringify(obj)
    });
    return await res.json();
  } catch (error) {}
};

export const deleteData = async x => {
  let elem = Res.getCatchId(x);
  console.log(elem);
  let res = await fetch(
    `https://fisher-game.firebaseio.com/catches/${elem}.json`,
    {
      method: 'DELETE'
    }
  );
  Res.deleteCatch(elem);
  return await res.json();
};

export const updateData = async x => {
  let elem = Res.getCatchId(x);
  let res = await fetch(
    `https://fisher-game.firebaseio.com/catches/${elem}.json`,
    {
      method: 'PUT',
      body: JSON.stringify(Res.updateFormData(Res.getCatchId(x)))
    }
  );
  console.log(await res.json());
};

const MyFetch = async (id, method, data) => {
  const url = id
    ? `https://baas.kinvey.com/appdata/kid_HySWMhWnB/books/${id}`
    : 'https://baas.kinvey.com/appdata/kid_HySWMhWnB/books';
  const auth = btoa(`kid_HySWMhWnB:20db67f57637466ca6f8ef2193507221`);
  const reqObj = {
    method,
    headers: { Authorization: `Basic ${auth}` },
  };
  if (method === 'POST' || method === 'PUT') {
    reqObj.headers['Content-type'] = 'application/json';
    reqObj.body = JSON.stringify(data);
  } else if (method !== 'GET') {
    reqObj.body = id;
  }
  try {
    const res = await fetch(url, reqObj);
    const jsn = await res.json();
    return jsn;
  } catch (error) {
    console.log(error);
  }
};

export default MyFetch;

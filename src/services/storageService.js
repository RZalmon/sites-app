const save = (key, value) => {
  try {
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (err) {
    console.error('Save Faild', err);
  }
};


const load = (key) => {
  try {
    let item = localStorage.getItem(key);
    let value = JSON.parse(item);
    return value;
  } catch (err) {
    console.error('Load Faild', err);
  }
};

export const storageService = {
  save,
  load,
};

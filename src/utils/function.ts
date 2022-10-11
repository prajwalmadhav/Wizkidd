import { v4 as uuidv4 } from 'uuid';

// Get a random ID
const generateUniqueID = () => {
  return uuidv4();
};

// Loads JS Files to the DOM
const loadScript = (src: string) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve(true);
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });

// Save data in localstorage
const setDataInLocalStorage = (key: string, object: object) => {
  // 1. Get Stringified JSON
  const StringifiedJSON = stringifyJSON(object) || '';

  // 2. Set data in localstorage
  localStorage.setItem(key, StringifiedJSON);
};

// Get data from localstorage
const getDataInLocalStorage = (key: string): object => {
  // 1. Get data in localstorage
  const stringifiedJSON = localStorage.getItem(key) || '';

  return parseJSON(stringifiedJSON);
};

// Stringify JSON
const stringifyJSON = (object: object) => {
  try {
    return JSON.stringify(object);
  } catch (error) {
    console.log('Something went wrong with stringifyJSON');
  }
};

// Parse JSON
const parseJSON = (stringifiedJSON: string) => {
  try {
    return JSON.parse(stringifiedJSON);
  } catch (error) {
    console.log('Something went wrong with parseJSON');
  }
};

export {
  loadScript,
  generateUniqueID,
  setDataInLocalStorage,
  getDataInLocalStorage,
};

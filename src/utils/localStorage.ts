const get = (string: string) => {
  return localStorage.getItem(string);
};

const set = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export { get, set };

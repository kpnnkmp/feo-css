export function sort(key) {
  return function (a, b) {
    return a.data[key] < b.data[key] ? -1 : 1;
  };
}

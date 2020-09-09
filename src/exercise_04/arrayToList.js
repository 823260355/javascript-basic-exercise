export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  let list = null;
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], next: list };
  }
  return list;
}

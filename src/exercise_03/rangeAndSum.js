export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const arr = [];
  if (start === end) {
    return arr;
  }
  if (end > start) {
    // eslint-disable-next-line no-plusplus
    for (let num = start; num < end; num++) {
      arr.push(num);
    }
    return arr;
  }
  // eslint-disable-next-line no-plusplus
  for (let num = start; num > end; num--) {
    arr.push(num);
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let result = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

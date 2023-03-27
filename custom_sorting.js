  // loop through the array n times, where n is the length of the array
  for (let i = 0; i < arr.length; i++) {
    // loop through the array up to n-i-1, since the last i elements will already be sorted
    for (let j = 0; j < arr.length - i - 1; j++) {
      // if the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// example usage
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let sortedArr = customSort(arr);
console.log(sortedArr); // [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

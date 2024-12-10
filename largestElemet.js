function largestElemnet(arr) {
  let largest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
largestElemnet([1, 2, 3]);

function SecondLargest(arr) {
  let largest = -Infinity;
  let SecondLargest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      SecondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > SecondLargest && arr[i] < largest) {
      SecondLargest = arr[i];
    }
  }
  console.log(largest);
  console.log(SecondLargest);
}
SecondLargest([1, 2, 3, 50, 45, 49]);

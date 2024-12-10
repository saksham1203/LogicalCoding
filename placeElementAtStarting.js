function placeElementAtStarting(arr) {
  let zeroCount = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      res.push(arr[i]);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    res.unshift(0);
  }

  console.log(res);
}

placeElementAtStarting([1, 0, 2, 0, 3, 4, 0]);

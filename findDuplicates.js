function findDuplicates(arr) {
  const res = [];
  for (i = 0; i < arr.length; i++) {
    for(j=i+1; j < arr.length; j++){
        if(arr[i]===arr[j]){
            res.push(arr[i])
        }
    }
  }
  console.log(res)
}

findDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6]);

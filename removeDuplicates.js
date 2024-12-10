function removeDuplicates(arr) {
    const res = [];
    for (i = 0; i < arr.length; i++) {
      for(j=i+1; j < arr.length; j++){
          if(!res.includes(arr[i])){
              res.push(arr[i])
          }
      }
    }
    console.log(res)
  }
  
  removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6]);
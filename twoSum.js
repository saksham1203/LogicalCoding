// nums = [1,2,3,4], target = 6

function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 6) {
        console.log(i, j);
      }
    }
  }
}

const nums = [1, 2, 3, 4];
target = 6;

twoSum(nums, target);

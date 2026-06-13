let nums = [3, 7, 2, 9, 1]


// brute force
/*
function findMax(nums){
    let sortArr = nums.sort();
    let max = sortArr.length
    return sortArr[max-1]
}
    */

// other way -> Math.max(...nums)

//optimize code

function findMax(nums){
    let max =nums[0]
    for (let i = 1; i < nums.length; i++) {
       if(max < nums[i]) max = nums[i]
    }
    return max
}

console.log("input : ", nums)
console.log("output : ", findMax(nums))
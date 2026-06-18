let nums = [1,2,3,4,5,6]

function countEvenNums(nums){
    let count = 0
    for(let i=0; i<nums.length;i++){
        if(nums[i]%2) count ++
    } 
    return count
}

console.log("Input : ", nums)
console.log("Output : ", countEvenNums(nums))

// time : O(n), space: O(1)
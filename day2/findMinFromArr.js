let nums =  [5,2,8,1,9]

function findMin(nums){
    let min = nums[0]
    let read=0
    while(read < nums.length){
        if(nums[read] < min) {
            min = nums[read]
        }
        read++
    }
    return min
}

console.log("Input : ", nums)
console.log("Output : ", findMin(nums))

// time : O(n), space: O(1)
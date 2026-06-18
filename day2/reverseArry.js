let arr = [1,2,3,4]

function reveseArr(nums){
    let start = 0
    let end = nums.length - 1
    while(start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp

        start++
        end--

    }
    return nums

}

console.log("Input : ", arr)
console.log("Output : ", reveseArr(arr))


// time: O(n), space : O(1)
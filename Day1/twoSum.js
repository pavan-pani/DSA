/* 
nums = [2, 7, 11, 15]
target = 9 

exp output [0,1] -> index
*/

/*
// with brute force

let num = [2,7,11,15]
let target = 9
let out=[];
for(let i=0; i<num.length;i++){
    for(let j=i;j<num.length;j++){
        if((num[i] + num[j]) == target) out.push(i,j)
    }
    
}

console.log("input : ", num)
console.log("target : ", target)
console.log("out out : ", out)

*/

//----------------------------

// using map

let nums = [5, 12, 8, 6]
let target = 11

/*
function twoNums(nums, target){
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)

        if(map.has(target - nums[i]))
            return [map.get(target - nums[i]), i]
    }
}

*/

/// optimize 1 

function twoNums(nums, target){
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if(map.has(needed))  return [map.get(target - nums[i]), i] 
        else map.set(nums[i], i)   
    }

}

console.log("Map : ", twoNums(nums, target))
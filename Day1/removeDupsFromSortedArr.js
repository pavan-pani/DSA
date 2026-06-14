// brute fourc -> using set, filter

//here we use 2 pointer

let arr = [1,1,2,2,3,3,3,4,4,5,6,6,7]
function removeDupfromSortedArr(arr){
    var write = 0
    var read = 1

    while(read < arr.length){
        if(arr[write] == arr[read]) {
            read ++
        }
        else{
            arr[write+1]=arr[read]
            write++
            read++  
        }
    }

    return arr.slice(0, write)
}

console.log("input : ", arr)
console.log("output : ", removeDupfromSortedArr(arr))
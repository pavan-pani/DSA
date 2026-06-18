function firstNonRepeating(str){
    let counterObj = {}
    
    for(let char of str){
        counterObj[char] = (counterObj[char] || 0) + 1
    }
    
    for(let keys in counterObj){
        if(counterObj[keys] == 1) return keys
    }

    return null
}


console.log("Input : ", "aabbcde")
console.log("Output : ", firstNonRepeating("aabbcde"))
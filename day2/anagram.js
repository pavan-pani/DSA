const str1 = "listen"
const str2 = "silent"

function anagram(str1, str2){
    let obj1 = {}
    let obj2 = {}

    if(str1.length!=str2.length) return false

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1   
    }

    for (let char of str1) {
        if(obj1[char] != obj2[char]) return false
    }

    return true
}

console.log("Input : ", str1, str2)
console.log("Output : ", anagram(str1, str2))
const str = "bangfggggtgsgrgtvewtegvykuykyukana"
let out = {}

function freqCount(str){
    let out = {}
    for(let char of str){
        out[char] = (out[char] || 0) + 1
    }
    return out
}

console.log("input : ", str)
console.log("output : ", freqCount(str))
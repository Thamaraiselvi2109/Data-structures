function sameDigitPairs(array) {
    let freq = {}
    let maxCount = 0;
    for (let i of array){
      newi = i.toString().split('').sort().join('')
      freq[newi] = (freq[newi] || 0) + 1
    }
    
    for (let i in freq){
     if( freq[i] > maxCount){
         maxCount = freq[i]
     }
    }
    return maxCount
}
  

console.log(sameDigitPairs([123, 321, 213, 231, 456, 654]))
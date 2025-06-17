// Write a function sameLetterCount(str1, str2) that checks if two strings have the same character frequency.

function sameLetterCount(a, b){
    
    if(a.length !== b.length){
        return false;
    }
    
    const freqA = {};
    const freqB = {};
    
    function frequency(str, freq) {
        for (let i of str){
            freq[i] = (freq[i] || 0 ) + 1
         }
    }
    
    frequency(a, freqA)
    frequency(b, freqB)
    
    for (let i in freqA){
        if ( freqA[i] !== freqB[i]){
            return false
        }
    }
   
  return true
}

console.log(sameLetterCount("aabbcc", "abcabc")); // true
console.log(sameLetterCount("aabbc", "abbcc"));   // false
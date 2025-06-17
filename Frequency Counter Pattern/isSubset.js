// Write a function isSubset(str1, str2) that returns true if all characters in str2 exist in str1 with at least equal frequency.

js
Copy
Edit


function isSubset(a, b){
    
    if (a.length < b.length){
        return false
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
    
    for(let i in freqB){
        if(!(i in freqA) || (freqB[i] > freqA[i])){
            return false
        }
    }
    
    return true;
}

console.log(isSubset("banana", "ban")); // true
console.log(isSubset("apple", "appeal")); // false
function mostFrequentChar(str){
    
    const freq = {};
    let maxchar = ''
    let maxValue = 0;
    
        for (let i of str){
            freq[i] = (freq[i] || 0 ) + 1
            if(freq[i] > maxValue){
                maxValue = freq[i];
                maxchar = i
            }
         }
    return maxchar;
}

console.log(mostFrequentChar("hello hi"))
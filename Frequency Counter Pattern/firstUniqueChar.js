function firstUniqueChar(str) {
let freq = {}
  for (let i of str){
      freq[i] = (freq[i] || 0) + 1
  }
  for (let i of str){
     if (freq[i] === 1) return i;
   }
 return "no unique character"
}
  

console.log(firstUniqueChar("abbccdeeef"))


 


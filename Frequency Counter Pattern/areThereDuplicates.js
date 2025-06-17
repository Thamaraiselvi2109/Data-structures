// Implement a function called, areThereDuplicates which 
// accepts a variable number of arguments, and 
// checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern 
// OR the multiple pointers pattern.

function areThereDuplicates(...args) {
let freq = {}
  for (let i of args){
      freq[i] = (freq[i] || 0) + 1
        if(freq[i] > 1){
      return true
  }
  }
  return false
}


areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
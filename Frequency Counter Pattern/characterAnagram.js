// take the first word and stored in an variable split, sort and join the word
// Loop the array first 
// same the looped variable also split, sort and joined 
// check the first word and looped words are same if same return true else false


function Anagram (array){
    let word = array[0].toLowerCase().split('').sort().join('')
    for( i of array){
        let rest = i.toLowerCase().split('').sort().join('')
        if(word !== rest){
            return `no anagram`
        }
    }
    return `anagram` 
}

const sample1 = ["listen", "silent", "enlist", "tinsel", "inlets"]; // anagram
const sample2 = ["hello", "world", "below"];                        // not anagram

console.log(Anagram(sample1)); // It's an anagram
console.log(Anagram(sample2)); // Not an anagram

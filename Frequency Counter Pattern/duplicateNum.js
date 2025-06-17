const alphabets = ['q', 'g', 'r', 'v', 'd', 'c', 'h', 'p', 'j', 'j', 'x', 'h', 'v', 'r', 'm', 'b', 'l', 'w', 'n', 't', 'p', 'd', 'o', 'u', 'k', 's', 'i', 'y', 'o', 'f', 'z', 'q'];

let seen = new Set();
let duplicates = [];

function findDuplicates(array) {
    for (let i of array) {
        if (seen.has(i)) {
            duplicates.push(i);
        } else {
            seen.add(i);
        }
    }
}

findDuplicates(alphabets);

console.log("Unique values:", seen);
console.log("Duplicates found:", duplicates);

// Write a function areAnagramsInArray(arr) that returns true if any two strings in the array are anagrams of each other.
function areAnagramsInArray(array) {
    let seen = new Set();

    for (let word of array) {
        let sorted = word.split('').sort().join('');
        if (seen.has(sorted)) {
            return true;
        } else {
            seen.add(sorted);
        }
    }

    return false;
}

areAnagramsInArray(["bat", "ttb", "cat", "dog"]); // true 
areAnagramsInArray(["bat", "tab", "cat", "dog"]); //  true 
areAnagramsInArray(["cat", "dog", "bird"]);       // false
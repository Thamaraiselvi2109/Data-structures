// Reverse Array In-Place
// Input: arr = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function Reverse(arr){
    let left = 0;
    let right = arr.length - 1
    while (left < right){
        [arr[left], arr[right]] = [arr[right],arr[left]]
        left ++;
        right --;
    }
    return arr;
}
console.log(Reverse([1, 2, 3, 4, 5]))
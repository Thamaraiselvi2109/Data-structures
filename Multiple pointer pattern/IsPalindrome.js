// Check if Array is Palindrome
// Input: arr = [1, 2, 3, 2, 1]
// Output: True

function Palindrome(arr){
    let left = 0;
    let right = arr.length - 1
    while (left < right){
        if(arr[left] !== arr[right]){
            return false;
        }else{
            right --;
            left ++;
        }
    }
    return true;
}
console.log(Palindrome([1, 2, 3, 2, 1]))
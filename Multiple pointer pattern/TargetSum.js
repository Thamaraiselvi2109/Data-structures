// Pair Sum (Easy)
// Input: arr = [1, 2, 3, 4, 5], target = 6
// Output: [(1, 5), (2, 4)]

function pairSum(arr, target){
    let left = 0;
    let right = arr.length - 1
    let pairs = []
    while (left < right){
        if(arr[left] + arr[right] === target){
            pairs.push([arr[left], arr[right]])
            right --;
            left ++;
        }else if(arr[left] + arr[right] < target){
            left ++;
        }else{
            right --;
        }
    }
    return pairs;
}
console.log(pairSum([1, 2, 3, 4, 5], 6))
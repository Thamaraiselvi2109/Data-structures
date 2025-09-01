function twoPointers(arr, target){
    if (arr.length < 2) return false
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right]
        if(sum === target){
            return true
        }else if(sum > target){
            right --;
        }else{
            left ++
        }
    }
    return false;
}
console.log(twoPointers([2, 5, 9, 11, 17], 20 ))
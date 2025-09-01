function twoPointers(arr, target){
    
    let left = 0;
    let right = arr.length - 1;
    let pairs = [];
    while (left < right){
        let sum = arr[left] + arr[right]
        if(sum === target){
            pairs.push( [arr[left] , arr[right]]);
            left ++;
            right --;
        }else if(sum > target){
            right --;
        }else{
            left ++
        }
    }
    return pairs.length;
}
console.log(twoPointers([1, 2, 4, 5, 7, 11, 15], 9 ))
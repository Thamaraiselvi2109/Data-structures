function maxSubarraySum(arr, num){
    let max = 0;
    let temp = 0;
    for (let i = 0; i< num; i ++){
        temp += arr[i]
    }
    
    max = temp
    
    for (let j = num ; j < arr.length ; j++){
        temp = temp + arr[j] - arr[j-num]
        if (temp>max){
              max = temp
        }
    }
    return max
}

console.log(maxSubarraySum([1,21,3,42,5,56,7,8,20, 1,100, 50, 36], 3))

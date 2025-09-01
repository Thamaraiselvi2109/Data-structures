function SlidingWindow(arr, k) {
    let maxAvg = 0;
    let AvgSum = 0;

    for (let i = 0; i < k; i++) {
        maxAvg += arr[i];
    }
    
    maxAvg = AvgSum

    for (let j = k; j < arr.length; j++) {
        AvgSum = AvgSum + arr[j] - arr[j - k] ;
        maxAvg = Math.max(AvgSum, maxAvg)
    }
    
    return (maxAvg/k).toFixed(5);
}
console.log(SlidingWindow([1, 12, -5, -6, 50, 3], 4));
function SlidingWindow(arr, k) {
    let Minsum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    Minsum = windowSum

    for (let j = k; j < arr.length; j++) {
        windowSum = windowSum + arr[j] - arr[j - k];
        Minsum = Math.min(windowSum, Minsum)
    }
    
    return Minsum;
}
console.log(SlidingWindow([10, 4, 2, 5, 6, 3], 2));
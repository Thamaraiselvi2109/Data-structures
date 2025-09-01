function SlidingWindow(arr, k, threshold) {
    let count = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    if (windowSum >= k * threshold) {
            count ++;
    }

    for (let j = k; j < arr.length; j++) {
        windowSum = windowSum + arr[j] - arr[j - k];
        if (windowSum >= k * threshold) {
            count++;
        }
    }

    return count;
}
console.log(SlidingWindow([2, 1, 5, 1, 3, 2], 3 , 3))
console.log(SlidingWindow([1, 1, 1, 1, 1], 2, 2)); // Output: 0
console.log(SlidingWindow([5, 6, 7, 8, 9], 2, 6)); // Output: 4
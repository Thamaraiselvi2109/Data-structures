// Squares of Sorted Array
// Input: arr = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]

function Sorted(arr){
    let left = 0;
    let right = arr.length - 1
    let pos = arr.length - 1
    let result = new Array(arr.length)
    while (left <= right){   
        if(Math.abs(arr[left]) > Math.abs(arr[right])){
            result[pos] = arr[left]**2
            left ++;
        }else{
            result[pos] = arr[right]**2
            right --;
        }
        pos--;
    }
    return result;
}
console.log(Sorted([-4, -1, 0, 3, 10]))
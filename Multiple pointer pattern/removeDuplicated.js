// Remove Duplicates from Sorted Array
// Input: arr = [1, 1, 2, 2, 3]
// Output: [1, 2, 3]

function Duplicates(arr){
    let i = 0;
    for (j = 1; j<arr.length ;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return arr.slice(0, i+1);
}
console.log(Duplicates([1, 1, 2, 2, 3, 4, 4, 4, 5, 6]))
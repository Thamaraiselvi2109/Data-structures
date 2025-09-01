function uniquelength(arr){
    if (arr.length === 0) return false;
    arr.sort((a,b) => a-b)
    let i=0;
    for (j = 1 ; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}
console.log(uniquelength([1,2,3,4,5,6,3,4,7,2,4]))
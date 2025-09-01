// Reverse the string
// Input: arr = karan
// Output: narak

function Reverse(str){
    let chars = str.split("")
    let left = 0;
    let right = chars.length - 1
    while (left < right){
        [chars[left], chars[right]] = [chars[right],chars[left]]
        left ++;
        right --;
    }
    return chars.join("");
}
console.log(Reverse("karan"))
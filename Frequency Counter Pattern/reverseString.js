
function reverse(str){
   let reversed = '';
   for(i of str) {
      reversed  = i + reversed
   }
   return reversed
}
console.log(reverse("hi hello"))
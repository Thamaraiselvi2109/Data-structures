const alphabets = ['q', 'g', 'r', 'v', 'd', 'c', 'h', 'e', 'k', 'x', 'b', 'y', 'z', 'f', 'p', 'j', 'j', 'x', 'h', 'v', 'r', 'm', 'b', 'l', 'w', 'n', 't', 'p', 'd', 'o', 'u', 'k', 's', 'i', 'y', 'o', 'f', 'z', 'q']

function Charcount(array){
    let Alphaarray = {}
for (i of array){
    if(Alphaarray[i]){
        Alphaarray[i] = Alphaarray[i]++ || 1
    }else{
        Alphaarray[i] = 1
    }
}
return Alphaarray
}
console.log("alphabets count : ", Charcount(alphabets))



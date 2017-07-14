function randletter(){ 
    var ltarray =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","&z"]
    var randomlt = ltarray[Math.floor(Math.random()*26)];
    return randomlt;
};
randletter();


function randword(){
     var newstring = "";
    for (i=0;i<Math.floor(Math.random()*10);i++){
    
    newstring=newstring + randletter();
    }
return newstring
}
console.log(randword());

var array1 = ["pikachu",23,100];
var array2 =["charizard",50,200];

function pokeattack(array1,array2){

    array2[2] -= array1[1];
return array2;
}
console.log(pokeattack(array1,array2))

//var counter =1;
//while(counter<11){
  //  console.log(counter);
  //  counter++;
//}


var prompt = require('prompt-sync')();
var money = 1000
var items =[]

while (money>99){
    console.log("YOU HAVE $"+ money + "LEFT. shirt = $100,computer = $500")
    var answer = prompt("which item do i want to buy?!?!")
    if (answer=="shirt"){
        money -= 100
        items.push("push")
        console.log("YOU BOUGHT A SHIRT")
    }
    else if ( answer=="computer" ){
         money -= 400
         items.push("computer")
         console.log("YOU BOUGHT A COMPUTER")
    }
    else { console.log("SOLD OUT ITEM")

    }
}
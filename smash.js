var prompt= require('prompt-sync')();

var MashArr =["corneria","congo jungle","stage","dream Land"];
var frstQ = [45,70,85,56];
var sndQ = ["captain falcon","Mii","shulk","cloud"];

function smash(){
    var answer1 =prompt("PLAYER CHOOSE FIGHTER")
    if  (answer1 ==" cpt falcon"){
        console.log("CAPTAIN FALCON!!");}
        else if (answer1 ==" Mii"){
            console.log("Mii!!")
        }
        else if (answer1==" Shulk"){
            console.log("SHULK!!")
        }
        else if (answer1 ==" Cloud"){
            console.log("CLOUD!!")
        }
        else {console.log("NEW CHALLENGER ARRIVES!!!")
        }            
        
    
    var answer2 = prompt("HOW MANY TIMES WILL YOU STRIKE?!?!")
    
    if (answer2==" 45"){
        console.log("PLAYER STRIKES" + frstQ[0] + "TIMES!!")
    }
    else if (answer2== " 70"){
        console.log("PLAYER STRIKES " + frstQ[1] + " TIMES!!")
    }
    else if (answer2== " 85"){
        console.log("PLAYER STRIKES " + frstQ[2] + " TIMES!!" )
    }
    else if (answer2== " 56"){
        console.log("PLAYER STRIKES" + frstQ[3] + " TIMES!!")
    }
    else{console.log("PLAYER MISSED!!")
    }
};
smash()
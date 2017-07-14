function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

var lunches = ["chinese", "caribbean", "mexican", "italian"];

var lunch_today =lunches[rand(lunches.length)];
console.log(lunch_today);
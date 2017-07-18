function Starterpokemon(hp,atk,def,legend,name,type){
 this.hp = pokemonhp
 this.atk = pokemonhp
 this.def = pokemondef
 this.legend = pokemonname
 this.type =pokemontype
    
}

var charmander = new Starterpokemon(39,52,43,false,"charmander","fire");
var squirtle = new Starterpokemon(44,48,65,false,"squirtle","water");
var vulpix = new Starterpokemon(38,41,40,65,false,"vulpix","fire");
var eevee = new Starterpokemon(55,55,50,false,"eevee","nomal");
var cyndaquil = new Starterpokemon(39,52,43,false,"cyndaquil","fire");
var mudkip = new Starterpokemon(50,70,50,false,"mudkip","water");

var freshstart = [charmander,squirtle,vulpix,eevee,cyndaquil,mudkip];

function choosing(feshstart){
    console.log("CHOOSE YOUR STARTER!!!");
    for (var i=0;i<freshstarter.length;i++){
    console.log(roster[i]);
    }
    choosing(freshstart);
}

funtion pokeatk(freshstart){
    for (i=0;i<freshstart.length;i++){
        freshstart[i].hp - freshstart[i].hp - 10
    
    }
    choosing(freshstart)
}

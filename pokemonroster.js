


var roaster = [
    ["blastoise","water",79,100,83,false],
    ["ninetails","fire",73,75,76,false],
    ["vaporeon","water",130,60,65,false],
    ["charizad","fire/flying",78,78,84,false],
    ["dragonair","dragon",61,65,86,false],
    ["typhlosion","fire",78,78,84,false]
];
function pokeprint(){
for(i=0;i<roaster.length;i++){
    console.log(roaster[i]);
    }   
}
pokeprint()

function fight(){
    for (i=0;i<roaster.length;i++){
        console.log("#1 " + roaster[i][0] + "TYPE:Water")
    }

}
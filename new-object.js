function Artist(artistname,realname,numberofalbums){
 this.knownname = artistname;
 this.realname = realname;
 this.albums = numberofalbums;
} 
var jcole = new Artist("j.cole","jermain cole",9);
var kendricklamar = new Artist("kendrick lamar","kendrick duckworth",10);
console.log(jcole);
console.log(kendricklamar);
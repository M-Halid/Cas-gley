// // // //alert("dasada");
// // // //var age=20;
// // // var Name='Halid';
// // // var age=25;
// // // var year=1995;

// // // console.log(Name);
// // // console.log(age+year);
// // let den=0;
// // let den_1=20;
// // console.log(den_1+den)

// // den= String(den)
// // console.log(den_1+den)

// // let say1=parseInt(100.21);
// // let say2=parseInt(99.78);
// // let toplam=say1 + say2;
// // let say3=48.57
// // let say4=52.41
// // let toplam2=say3+say4;

// // console.log(toplam.toFixed(3))
// // console.log(toplam2.toFixed(2));

// // let txt='This year is:';
// // let dt=new Date;

// // console.log(txt+dt.getFullYear())

// // let dogTr=new Date;
// // let dogY=1995;
// // let yas=dogTr.getFullYear()-dogY;
// // let dogy=dogTr.getFullYear();


// // console.log(yas)
// var a=([7,1,3,25,5,8,-1,8,9]);
//  val=Math.min(a);
// val=Math.max(4,1,3,8,95,4,102,4);

// console.log(val);
// console.log(a);
// for(var i =0; i<100 ;i+=2)
// console.log(i+1);

/*var i =0;
while(i<5){
  
    i+=1;
    console.log(i);
}

console.log('asaad');
for(var i =0; i<10 ;i+=2)
console.log(i+1);

i =64;
a=Math.sqrt(i);
console.log(a);

 var i =8;
 while(i>2){
  
     Math.sqrt(i);
     console.log(i);
 }*/

/*var i=16;
console.log(i)
 while(i>2){
     i=Math.sqrt(i);
     console.log(i)
 }
 
 for(var i=16; i>=2; i=Math.sqrt(i)){
 console.log(i);}

 var at=2;
 switch(at){
        case 1:
            console.log("1 At");
            break;

       case 2:
           console.log("2 At");
           break;

        case 3:
            console.log("3 at");
            break;
        default:
            console.log("at mat YOK!")
}

var Name="Halid Kutsalx";
var sonH=Name[Name.length-1]

console.log(sonH);

var lst;

lst=[3,4,5,6,[21,2,36,9],[2,3,5,87],1,2,3];
console.log(lst[4][2]);
var name="Halid Kutsal";
var harfs=-1;
var sayi=name.length;
//console.log(harf);

while(harfs<sayi-1){
    harfs++;
    console.log(name[harfs]);


                    //Arrayss

var atlar=[3,5,"ATTT",["AYY"],19,"wow"];
atlar.push("bu sona gelir");
console.log(atlar);
//3 gider
atlar.shift();
console.log(atlar);
//3 geri gelir
atlar.unshift(3);
console.log(atlar);

var mtn = "Mevcut at sayisi";

function At(Sayi) {

    if (Sayi == 4) {
        return mtn + " " + Sayi + " tür";
    }
    if (Sayi == 9) {
        return mtn + " " + Sayi + " dur";
    }
    if (Sayi == 10) {
        return mtn + " " + Sayi + " dur";
    }
    if (Sayi == 3) {
        return mtn + " " + Sayi + " tür";
    }
    if (Sayi == 2) {
        return mtn + " " + Sayi + " dir";
    }
    if (Sayi == 1) {
        return mtn + " " + Sayi + " dir";
    }
    if (Sayi == 5) {
        return mtn + " " + Sayi + " dir";
    }
    if (Sayi == 6) {
        return mtn + " " + Sayi + " dir";
    }
    if (Sayi == 7) {
        return mtn + " " + Sayi + " dir";
    }
    if (Sayi == 8) {
        return mtn + " " + Sayi + " dir";
    }
    else {
        return mtn + " " + Sayi + ".";
    }


}
//console.log(At(4));

    function bilgiler(Yas,Boy,No,Sehir){
        this.Yas=Yas;
        this.Boy=Boy;
        this.No=No;
        this.Sehir=Sehir;
        this.dokum = function(){
            return "\nYas: " + this.Yas +"\nBoyu: " + 
            this.Boy + "\nNo'su: "+ this.No + 
            "\nSehiri: " +this.Sehir
        } 

    }

var Ali=new bilgiler(25,1.75,4519,"Gonya");

console.log(Ali.dokum());*/


//EVENTS//



function uyar() {
    var cikar = document.getElementById("parag1")
    cikar.innerHTML = "STOPPP!!!!!!!   WARTEE!!!!!";
    cikar.style.color = "black";
    cikar.style.background = "yellow";

}

function uyar2() {
    var cikar = document.getElementById("parag1")
    cikar.innerHTML = "OH!!! DAS IST BESSER !!!";
    cikar.style.color = "orange";
    cikar.style.background = "#ffff";

}

function change() {
    var degis = document.getElementById("parag1")
    degis.innerHTML = "WAS HAST DU GETAAAN !!!" + a;
    degis.style.color = "rgb(184, 2, 2)";
    degis.style.background = "rgb(0, 0, 0)";
    degis.style.padding = "30px";
    degis.style.border.radius = "20px";
}
// function change() {
//     var degis = document.getElementById("parag1")
//     degis.

   
// }

function myFunction() {
     
    let isim =document.getElementById("nm").value;

    console.log(isim);


}
// var a = Math.floor(Math.random() * 100);
// console.log(a);


//Stringlerde Gezinme

// var ad = "Halid ";
// var soyad = "Kutsal";
// var metin = "lorem ipsin asmina";
// var sayi = 122131;

// deg = ad.substring(2, 5);
// deg = soyad.slice(4);
// //deg=sayi.slice(3,5);
// deg = sayi;
// deg = soyad.length;
// deg = ad + soyad;
// deg = deg.toUpperCase();
// deg = deg.toLowerCase();
// deg = deg.replace(" ", "-")
// deg = deg.substring("hal".length);
// deg = ad + soyad + " lahmacun sever";
// deg = deg.replace(/ /g, "-")
// console.log(deg);


// prompt("Wer bist du?");
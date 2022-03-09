let kep_eleres_list = ["img/img_1.png", "img/img_2.png", "img/img_3.png", "img/img_4.png", "img/img_5.png", "img/img_6.png"];
let kep_cim = ["kamera", "ncicaő", "pillangó", "yoda", "narancs", "galaxis"];
let kep_ar = [1521, 1521, 1542, 14, 5477, 69585];

let sum = 0;
let draga_img = false;
let hosszu_cim = -1;
let cica_cim = -1;
for (let x = 0; x < kep_ar.length; x++)
{
    //átlag
    sum += kep_ar[x];
    //>10.000
    if(!draga_img && kep_ar[x] > 10000)
        draga_img = true;
    //hosszú cím
    if(hosszu_cim==-1 && kep_cim[x].length > 20)
        hosszu_cim = x;
    //cica
    if(cica_cim==-1 && kep_cim[x].indexOf("cica")!=-1)
        cica_cim = x;
}
//átlag
let atlag = sum / kep_ar.length;
console.log("A képek árainak az átlaga " + Math.round(atlag));
//>10.000
if(draga_img)
    console.log("Van 10.000-nél drágább kép.");
else
    console.log("Nincs 10.000-nél drágább kép.");
//hosszú cím
if(hosszu_cim!=-1)
    console.log("A " + (hosszu_cim + 1) + ". kép címe 20 karakternél hosszabb.");
else
    console.log("Nincs olyan kép aminek a címe 20 karakternél hosszabb.");
//cica
if(cica_cim!=-1)
    console.log("A " + (cica_cim + 1) + '. kép címében benne van a "cica" szó.');
else
    console.log('Nincs olyan kép aminek a címében benne van a "cica" szó.');

//"objects"
let test = {
    path: "img/1",
    name: "fff",
    price: 45
}
let test2 = {
    path: "img/3",
    name: "ggg",
    price: 5500
    }
console.log(test);
test.szin = "kék";
console.log(test);
test.path = "img/2";
console.log(test);
console.log(test2);
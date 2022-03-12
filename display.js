window.addEventListener("load", init);
function HTMLelement(name){
    return document.querySelector(name);
}


let imgs = [
    {
        path: "img/img_1.jpg",
        name: "kecske-cica",
        price: 1521
    },
    {
        path: "img/img_2.jpg",
        name: "erdőút",
        price: 1542
    },
    {
        path: "img/img_3.jpg",
        name: "erdőút 2",
        price: 14
    },
    {
        path: "img/img_4.jpg",
        name: "mező falu",
        price: 5477
    },
    {
        path: "img/img_5.jpg",
        name: "mező nap",
        price: 69585
    }
]
console.log(imgs);

function atlagar()
{
    let sum = 0;
    imgs.forEach((img) => {
        sum += img.price;
    });
    return sum / imgs.length;
}

function van_draga()
{
    for(x=0; x < imgs.length && !(imgs[x].price > 10000); x++){}
    return x < imgs.length;
}

function van_hoszu()
{
    for(x=0; x < imgs.length && !(imgs[x].name.length > 20); x++){}
    if(x < imgs.length)
        return x;
    else
        return -1;
}

function van_cica()
{
    for(x=0; x < imgs.length && imgs[x].name.indexOf("cica")==-1; x++){}
    if(x < imgs.length)
        return x;
    else
        return -1;
}

let write_out = [];
//átlag
write_out.push("A képek árainak az átlaga " + Math.round(atlagar()) + "Ft.");
//>10.000
if(van_draga())
    write_out.push("Van 10.000-nél drágább kép.");
else
    write_out.push("Nincs 10.000-nél drágább kép.");
//hosszú cím
let long_name = van_hoszu()
if(long_name!=-1)
    write_out.push("A " + (long_name + 1) + ". kép címe 20 karakternél hosszabb.");
else
    write_out.push("Nincs olyan kép aminek a címe 20 karakternél hosszabb.");
//cica
let is_cat = van_cica()
if(is_cat!=-1)
    write_out.push("A " + (is_cat + 1) + '. kép címében benne van a "cica" szó.');
else
    write_out.push('Nincs olyan kép aminek a címében benne van a "cica" szó.');

window.addEventListener("load", init);

function init()
{
    //base
    HTMLelement("body").innerHTML += "<article></article>";
    //result
    HTMLelement("article").innerHTML += "<h1>Eredmények</h1>";
    HTMLelement("article").innerHTML += '<div id="results"></div>';
    write_out.forEach(line => {
        HTMLelement("#results").innerHTML += `<p>${line}</p>`;
    });
    //main image
    HTMLelement("article").innerHTML += "<h1>Image browser</h1>";
    HTMLelement("article").innerHTML += `<div id="img_browser"><button id="btn_left"><</button><div id="curr_img"><h2>${imgs[0].name}</h2><img src="${imgs[0].path}" alt="${imgs[0].name}"><p>Ár: ${imgs[0].price}Ft</p></div><button id="btn_right">></button></div>`;
    //galery
    //base
    HTMLelement("article").innerHTML += "<h1>Galéria</h1>";
    HTMLelement("article").innerHTML += '<div id="galery"></div>';
    //elements
    imgs.forEach(img => {
        HTMLelement("#galery").innerHTML += `<div class="image_div"><h2>${img.name}</h2><img src="${img.path}" alt="${img.name}"><p>Ár: ${img.price}Ft</p></div>`;
    });
    //document.getElementById("message").innerHTML="<h1>Cím</h1>";
    //document.getElementById("message").innerHTML+="<h1>Képek</h1>";
    //document.getElementById("message").innerHTML+=`<img src="img/img_6.jpg" alt="galaxy">`;

    HTMLelement("#btn_left").addEventListener("click", img_minus);
    HTMLelement("#btn_right").addEventListener("click", img_plus);
}

var image_index = 0;

function img_plus()
{
    image_index += 1;
    if(image_index > imgs.length - 1)
        image_index = 0;
    change_img(image_index)
}

function img_minus()
{
    image_index -= 1
    if(image_index < 0)
        image_index = imgs.length - 1;
    change_img(image_index)
}

function change_img(image_index)
{
    //let image_index = Math.floor(Math.random*imgs.length)
    HTMLelement("#curr_img>h2").innerHTML = `${imgs[image_index].name}`;
    HTMLelement("#curr_img>img").src = `${imgs[image_index].path}`;
    HTMLelement("#curr_img>img").alt = `${imgs[image_index].name}`;
    HTMLelement("#curr_img>p").innerHTML = `Ár: ${imgs[image_index].price}Ft`;
}
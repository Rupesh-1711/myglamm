let hairdata = [{img:"https://files.myglamm.com/site-images/800x800/Artboard-1_27.jpg",img1:"https://files.myglamm.com/site-images/200x200/Artboard-2_9.jpg",img2:"https://files.myglamm.com/site-images/200x200/Artboard-3_12.jpg",img3:"https://files.myglamm.com/site-images/200x200/Artboard-4_12.jpg",img4:"https://files.myglamm.com/site-images/200x200/Artboard-5_9.jpg",title:"MyGlammSUPERFOODS ONION & MORINGA HAIR OIL - 100ML",use:"For Hair Fall Control",price:"261",cutPrice:"349",rating:"4.9",ratingCount:"149 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/200x200/Oil-Product_4.jpg",img1:"https://files.myglamm.com/site-images/200x200/OIl-(1)_1.jpg",img2:"https://files.myglamm.com/site-images/200x200/OIl-(2)_1.jpg",img3:"https://files.myglamm.com/site-images/200x200/OIl-(3)_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/OIl-(6)_1.jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA HAIR OIL - FLAT PRICE",use:"For Hair Fall Control",price:"199",cutPrice:"349",rating:"4.9",ratingCount:"19 ratings",quantity:1}]


import {append,productdetails} from "../componants_nitin1/script1.js"
let container= document.getElementById("container");
append(hairdata,container);
// productdetails(el);
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index.html"
})
import { navbar,displayUserName,footer } from "../Components_5/navbar_Sanjay.js";
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("footer").innerHTML=footer()
displayUserName()
let dataFromLs = JSON.parse(localStorage.getItem("userDetails"))||[];
document.getElementById("cart").addEventListener("click",()=>{
    if(dataFromLs.length==0)
    {
        alert("Please login!!")
    }
    else{
        window.location.href="./Rupesh_cart_day5/cart5.html"
    }
    
 })
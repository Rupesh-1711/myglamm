let data = [{img:"https://files.myglamm.com/site-images/800x800/Artboard-1-(3).jpg",img1:"https://files.myglamm.com/site-images/200x200/Artboard-2-(3).jpg",img2:"https://files.myglamm.com/site-images/200x200/Artboard-3-(3).jpg",img3:"https://files.myglamm.com/site-images/200x200/Artboard-3-(3).jpg",img4:"https://files.myglamm.com/site-images/200x200/Artboard-4-(3).jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA SERUM - 100ML",use:"For Hair Fall Control",price:"299",cutPrice:"399",rating:"5",ratingCount:"19 ratings",quantity:1}]

import {append,productdetails} from "../componants_nitin1/script1.js"
let container= document.getElementById("container");
append(data,container);
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
let cdata = [{img:"https://files.myglamm.com/site-images/800x800/Passion-Fruit---Olive-Conditioner-1_1.jpg",img1:"https://files.myglamm.com/site-images/200x200/Passion-Fruit---Olive-Conditioner-2_1.jpg",img2:"https://files.myglamm.com/site-images/200x200/Passion-Fruit---Olive-Conditioner-3_1.jpg",img3:"https://files.myglamm.com/site-images/200x200/Passion-Fruit---Olive-Conditioner-3_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/Passion-Fruit---Olive-Conditioner-6_1.jpg",title:"MyGlamm SUPERFOODS PASSION FRUIT & OLIVE CONDITIONER 150ML",use:"Nourishing & Moisturizing Conditioner with nourishing extracts from superfoods",price:"279",cutPrice:"399",rating:"4.9",ratingCount:"17 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/Artboard-1-(2).jpg",img1:"https://files.myglamm.com/site-images/200x200/Artboard-2-(2).jpg",img2:"https://files.myglamm.com/site-images/200x200/Artboard-3-(2).jpg",img3:"https://files.myglamm.com/site-images/200x200/Artboard-4-(2).jpg",img4:"https://files.myglamm.com/site-images/200x200/Artboard-5-(2).jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA CONDITIONER - 200ML",use:"For Hair Fall Control",price:"284",cutPrice:"299",rating:"4.8",ratingCount:"28 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/CNDTR-(1).jpg",img1:"https://i.ytimg.com/vi/Vecaeizrhzs/hqdefault.jpg",img2:"https://files.myglamm.com/site-images/200x200/CNDTR-(2).jpg",img3:"https://files.myglamm.com/site-images/200x200/CNDTR-(3).jpg",img4:"https://files.myglamm.com/site-images/200x200/CNDTR-(3).jpg",title:"MyGlamm SUPERFOODS CACAO, COCONUT & COFFEE CONDITIONER - 200ML",use:"Smoothening & Softening Hair Conditioner",price:"279",cutPrice:"299",rating:"3.9",ratingCount:"87 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/CNNN-(1).jpg",img1:"https://i.ytimg.com/vi/QE_V5Vv7VHA/hqdefault.jpg",img2:"https://files.myglamm.com/site-images/200x200/CNDTR-(1)_1.jpg",img3:"https://files.myglamm.com/site-images/200x200/CNDTR-(2)_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/CNDTR-(3)_1.jpg",title:"MyGlamm SUPERFOODS CACAO, COCONUT & COFFEE CONDITIONER WITH SUPERFOODS POUCH",use:"Smoothening & Softening Hair Conditioner",price:"301",cutPrice:"499",rating:"5",ratingCount:"65 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/CNNN-(1).jpg",img1:"https://i.ytimg.com/vi/QE_V5Vv7VHA/hqdefault.jpg",img2:"https://files.myglamm.com/site-images/200x200/CNDTR-(1)_1.jpg",img3:"https://files.myglamm.com/site-images/200x200/CNDTR-(2)_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/CNDTR-(2)_1.jpg",title:"MyGlamm SUPERFOODS CACAO, COCONUT & COFFEE CONDITIONER WITH SUPERFOODS POUCH",use:"Smoothening & Softening Hair Conditioner",price:"301",cutPrice:"464",rating:"5",ratingCount:"6 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/200x200/Product-1-2.jpg",img1:"https://files.myglamm.com/site-images/200x200/3-1-4.jpg",img2:"https://files.myglamm.com/site-images/200x200/6-1-2.jpg",img3:"https://files.myglamm.com/site-images/200x200/6-1-2.jpg",img4:"https://files.myglamm.com/site-images/200x200/1-1-2.jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA CONDITIONER - FLAT PRICE",use:"For Hair Fall Control",price:"199",cutPrice:"299",rating:"4.8",ratingCount:"67/ ratings",quantity:1}

]




//{img:"",img1:"",img2:"",img3:"",img4:"",title:"",use:"",price:"",cutPrice:"",rating:"",ratingCount:"",quantity:1}

import {append,productdetails} from "../componants_nitin1/script1.js"
let container= document.getElementById("container");
append(cdata,container);
// productdetails(el);

 import { navbar,displayUserName,footer } from "../Components_5/navbar_Sanjay.js";
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("footer").innerHTML=footer()
displayUserName()
document.getElementById("cart").addEventListener("click",()=>{
    window.location.href="./Rupesh_cart_day5/cart5.html"
 })
 document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index_Sanjay-5.html"
})
document.getElementById("cart").addEventListener("click",()=>{
    window.location.href="./Rupesh_cart_day5/cart5.html"
 })



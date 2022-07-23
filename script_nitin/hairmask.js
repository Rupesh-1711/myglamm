let data = [{img:"https://files.myglamm.com/site-images/800x800/HSPA-(1).jpg",img1:"https://i.ytimg.com/vi/Vecaeizrhzs/hqdefault.jpg",img2:"https://files.myglamm.com/site-images/200x200/HSPA-(2).jpg",img3:"https://files.myglamm.com/site-images/200x200/HSPA-(3).jpg",img4:"https://files.myglamm.com/site-images/200x200/HSPA-(4).jpg",title:"MyGlamm SUPERFOODS CACAO, COCONUT & COFFEE HAIR SPA MASK - 200G",use:"Anti-Dandruff & Moisturising Hair Mask",price:"359",cutPrice:"499",rating:"5",ratingCount:"124 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/Mangosteen---Avocado-Hair-Mask-1_2.jpg",img1:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-2_2.jpg",img2:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-3_2.jpg",img3:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-4-min.jpg",img4:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-6_2.jpg",title:"MyGlamm SUPERFOODS MANGOSTEEN & AVOCADO HAIR MASK 50G",use:"Strengthening & Repairing Hair Mask with extracts from natural superfoods",price:"399",cutPrice:"499",rating:"5",ratingCount:"32 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/Mangosteen---Avocado-Hair-Mask-1_2.jpg",img1:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-2_2.jpg",img2:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-3_2.jpg",img3:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-4-min.jpg",img4:"https://files.myglamm.com/site-images/200x200/Mangosteen---Avocado-Hair-Mask-6_2.jpg",title:"MyGlamm SUPERFOODS MANGOSTEEN & AVOCADO HAIR MASK 50G",use:"Strengthening & Repairing Hair Mask with extracts from natural superfoods",price:"399",cutPrice:"499",rating:"5",ratingCount:"32 ratings",quantity:1}
]

// {img:"",img1:"",img2:"",img3:"",img4:"",title:"",use:"",price:"",cutPrice:"",rating:"",ratingCount:"",quantity:1}

import {append,productdetails} from "../componants_nitin/script.js"
let container= document.getElementById("container");
append(data,container);
productdetails(el);
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index_Sanjay-5.html"
})
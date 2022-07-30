import { navbar, footer,displayUserName } from "../Components_5/navbar_Sanjay.js";
import {append} from "../componants_nitin1/script1.js"
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
displayUserName()
let completed=JSON.parse(localStorage.getItem("completedOrders"))||[]
let verify=JSON.parse(localStorage.getItem("userDetails_P"))||[]
let live=JSON.parse(localStorage.getItem("liveOrders"))||[]
let userName=JSON.parse(localStorage.getItem("name"))||[]
let namedisp=document.getElementById("user_name")
if(userName.length!=0)
{
    let filtered=verify.filter((el)=>{
        return el.name==userName[0]
    })
    namedisp.innerText=filtered[0].name
}
else
{
    namedisp.innerText=""
}

document.getElementById("liv").setAttribute("class","style")
document.getElementById("comp").addEventListener("click",()=>{
    document.getElementById("liv").classList.remove("style")
    document.getElementById("comp").setAttribute("class","style")
    if(completed.length==0)
    {
        document.getElementById("details_2").innerHTML=""
        let container_2=document.getElementById("details_1")
        container_2.innerHTML=""
        let spanTag=document.createElement("span")
        let p1=document.createElement("p")
        p1.innerText=`There are no completed orders, We have some recommended products for you`
        let p2=document.createElement("p")
        p2.innerText=`click here!!`
        spanTag.append(p1,p2)
        container_2.append(spanTag)
    }
    else
    {
        let container=document.getElementById("details_2")
        container.setAttribute("class","latest")
        container.innerHTML=""
        document.getElementById("details_1").innerHTML=""
            completed.forEach((el)=>{
                let card=document.createElement("div")
                let image=document.createElement("img")
                image.src=el.img
                let name=document.createElement("p")
                name.innerText=el.title;
                let price=document.createElement("p")
                price.innerText=`₹ ${el.price}`
                card.append(image,name,price)
                container.append(card)
            })
    }
})
document.getElementById("liv").addEventListener("click",()=>{
    document.getElementById("comp").classList.remove("style")
    document.getElementById("liv").setAttribute("class","style")
    if(live.length==0)
    {
        document.getElementById("details_2").innerHTML=""
        let containerLive=document.getElementById("details_1")
        containerLive.innerHTML=""
        let spanTag=document.createElement("span")
        let p1=document.createElement("p")
        p1.innerText=`There are no live orders, We have some recommended products for you`
        let p2=document.createElement("p")
        p2.innerText=`click here!!`
        spanTag.append(p1,p2)
        containerLive.append(spanTag)
    }
    else
    {
        document.getElementById("details_1").innerHTML=""
        let container=document.getElementById("details_2")
        container.innerHTML=""
        live.forEach((el)=>{
            let card=document.createElement("div")
            let image=document.createElement("img")
            image.src=el.img
            let name=document.createElement("p")
            name.innerText=el.title;
            let price=document.createElement("p")
            price.innerText=`₹ ${el.price}`
            card.append(image,name,price)
            container.append(card)
        })
    }
})
let displayLive=()=>{
    let container=document.getElementById("details_1")
    if(live.length==0)
    {
        let spanTag=document.createElement("span")
        let p1=document.createElement("p")
        p1.innerText=`There are no live orders, We have some recommended products for you`
        let p2=document.createElement("p")
        p2.innerText=`click here!!`
        spanTag.append(p1,p2)
        container.append(spanTag)
    }
    else
    {
        let container=document.getElementById("details_2")
        container.setAttribute("class","latest")
        live.forEach((el)=>{
            let card=document.createElement("div")
            let image=document.createElement("img")
            image.src=el.img
            let name=document.createElement("p")
            name.innerText=el.title;
            let price=document.createElement("p")
            price.innerText=`₹ ${el.price}`
            card.append(image,name,price)
            container.append(card)
        })
    }
}
window.addEventListener("load",displayLive)
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index_Sanjay-5.html"
})
document.getElementById("cart").addEventListener("click",()=>{
    window.location.href="./Rupesh_cart_day5/cart5.html"
 })
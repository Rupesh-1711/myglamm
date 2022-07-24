import { navbar, footer,displayUserName } from "../Components_5/navbar_Sanjay.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
displayUserName()
let completed=JSON.parse(localStorage.getItem("completedOrders"))||[]
let live=JSON.parse(localStorage.getItem("liveOrders"))||[]
let userName=JSON.parse(localStorage.getItem("name"))||[]
let namedisp=document.getElementById("user_name")
if(userName.length!=0)
{
    namedisp.innerText=userName[0]
}
else
{
    namedisp.innerText=""
}


document.getElementById("comp").addEventListener("click",()=>{
    document.getElementById("details").innerHTML=""
    let container=document.getElementById("details")
    if(completed.length==0)
    {
        let spanTag=document.createElement("span")
        let p1=document.createElement("p")
        p1.innerText=`There are no completed orders, We have some recommended products for you`
        let p2=document.createElement("p")
        p2.innerText=`click here!!`
        spanTag.append(p1,p2)
        container.append(spanTag)
    }
    else
    {
            
    }
})
document.getElementById("liv").addEventListener("click",()=>{
    document.getElementById("details").innerHTML=""
    let container=document.getElementById("details")
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

    }
})
let displayLive=()=>{
    let container=document.getElementById("details")
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

    }
}
window.addEventListener("load",displayLive)
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index_Sanjay-5.html"
})
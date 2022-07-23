import { navbar, footer,displayUserName } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
displayUserName()
document.getElementById("displayInfo").addEventListener("click",()=>{
    document.querySelector(".edit").innerHTML=""
    document.querySelector(".personalInfo").classList.add("DisplayInfo")
})
document.getElementById("displayAddress").addEventListener("click",()=>{
    window.location.reload()
    document.querySelector(".personalInfo").classList.remove("DisplayInfo")
})
let userData=JSON.parse(localStorage.getItem("userDetails_P"))||[]
document.getElementById("user_name").innerText=userData[0].name
document.getElementById("u_name").innerText=userData[0].name
document.getElementById("u_email").innerText=userData[0].emailId
document.getElementById("u_number").innerText=userData[0].mobile
document.getElementById("name").value=userData[0].name
document.getElementById("number").value=userData[0].mobile
document.getElementById("email").value=userData[0].emailId
document.getElementById("update").addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    userData[0].name=name;
    userData[0].emailId=email;
    userData[0].mobile=number;
    localStorage.setItem("userDetails_P",JSON.stringify(userData))
    let nameDetails=JSON.parse(localStorage.getItem("name"))||[]
    nameDetails[0]=name;
    localStorage.setItem("name",JSON.stringify(nameDetails))
    alert("User details updated!!")
    window.location.reload()
})
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index_day-4.html"
})
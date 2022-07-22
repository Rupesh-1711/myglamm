document.getElementById("displayInfo").addEventListener("click",()=>{
    document.querySelector(".edit").innerHTML=""
    document.querySelector(".personalInfo").classList.add("DisplayInfo")
})
document.getElementById("displayAddress").addEventListener("click",()=>{
    window.location.reload()
    document.querySelector(".personalInfo").classList.remove("DisplayInfo")
    console.log("hello")
})
let userData=JSON.parse(localStorage.getItem("userDetails"))||[]
document.getElementById("user_name").innerText=userData[0].name
document.getElementById("u_name").innerText=userData[0].name
document.getElementById("u_email").innerText=userData[0].emailId
document.getElementById("u_number").innerText=userData[0].mobile
document.getElementById("name").value=userData[0].name
document.getElementById("number").value=userData[0].mobile
document.getElementById("email").value=userData[0].emailId
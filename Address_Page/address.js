let back = document.getElementById("back")
back.style.cursor = "pointer"
back.addEventListener("click",function(){
    window.location.href = "./fakecart.html"
 })

 let continue1 = document.getElementById("continue1")
 continue1.style.cursor = "pointer"
 continue1.addEventListener("click",getData)

function getData(event) {
    event.preventDefault()

  let form = document.getElementById("rform")
  let name =document.getElementById("fName").value;
  let mobile = document.getElementById("fMobile").value;
  let email = document.getElementById("fEmail").value;
  let location = document.getElementById("select").value;
  let house = document.getElementById("fHouse").value;
  let street = document.getElementById("fStreet").value;
  let neighbourhood = document.getElementById("fnigh").value;
  let pincode = document.getElementById("fPincode").value;
  let city = document.getElementById("fCity").value;
  let state = document.getElementById("fState").value;
  let landmark = document.getElementById("fLandmark").value;
  let mark = document.getElementById("MarkDefault").checked;
  console.log(mark)
//   console.log(name,mobile,email,location,house,street,neighbourhood,pincode,city,state,landmark) 
class Info{
    constructor(name,mobile,email,location,house,street,neighbourhood,pincode,city,state,landmark) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
        this.location = location;
        this.house = house;
        this.street = street;
        this.neighbourhood = neighbourhood;
        this.pincode = pincode;
        this.city = city;
        this.state = state;
        this.landmark = landmark;
    }
}
  let obj = new Info(name,mobile,email,location,house,street,neighbourhood,pincode,city,state,landmark)
  if(name!="" && mobile!="" && pincode!="" && neighbourhood!="" && street!="")
  {
    console.log("ok")

     localStorage.setItem("address",JSON.stringify(obj));
     window.location.href = "#";
  }
  else{
      alert("please fill required fields")
  }
}
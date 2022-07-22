let dataFromLs = JSON.parse(localStorage.getItem("userDetails"))||[];
import { navbar, footer } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let i = 0;
let id;
let dataForCarousel = [
  "https://files.myglamm.com/site-images/original/1920-x-527-(1).jpg",
  "https://files.myglamm.com/site-images/original/Carousel-(Desktop)---1920-527-_1.gif",
  "https://files.myglamm.com/site-images/original/SK-Survey-1920x527_1.jpg",
  "https://files.myglamm.com/site-images/original/Homepage-desktop-lipstikcks.jpg",
  "https://files.myglamm.com/site-images/original/1920x527-(5).jpg",
];
let myCarousel = () => {
  let container = document.getElementById("Carousel");
  let image = document.createElement("img");
  id = setInterval(() => {
    image.src = dataForCarousel[i];
    container.innerHTML = "";
    container.append(image);
    i++;
    if (i == 4) {
      i = 0;
    }
  }, 2000);
};
window.addEventListener("load", myCarousel);
let slideLeft = () => {
  clearInterval(id);
  if (i < 0) {
    i = 4;
  }
  let container = document.getElementById("Carousel");
  container.innerHTML = "";
  let image = document.createElement("img");
  image.src = dataForCarousel[i];
  container.append(image);
  i--;
};
document.getElementById("left").addEventListener("click", slideLeft);
let slideRight = () => {
  clearInterval(id);
  if (i > 4) {
    i = 0;
  }
  let container = document.getElementById("Carousel");
  container.innerHTML = "";
  let image = document.createElement("img");
  image.src = dataForCarousel[i];
  container.append(image);
  i++;
};
document.getElementById("right").addEventListener("click", slideRight);
let count = 20;
let id1;
let modelButton = document.getElementById("logMe");
let modelDisplay = document.querySelector(".model-bg");
modelButton.addEventListener("click", () => {
  modelDisplay.classList.add("active-bg");
});
document.querySelector(".modelClose").addEventListener("click", () => {
  modelDisplay.classList.remove("active-bg");
});
let checkUser = document.getElementById("continue");
checkUser.addEventListener("click", () => {
  let number1 = document.getElementById("number").value;
  if (number1 != "") 
  {
      let filtered = dataFromLs.filter((el) => {
      return el.mobile == number1;
    });
    if (filtered.length >= 1) 
    {
      clearInterval(id1);
      count = 20;
      let number = document.getElementById("number").value;
        modelDisplay.classList.remove("active-bg");
        document.querySelector(".model-bg1").classList.add("active-bg1");
        document.getElementById(
          "numberDisplay"
        ).innerText = `ENTER OTP SENT ON +91 ${number}`;
        id1 = setInterval(() => {
          count--;
          console.log(count);
          document.getElementById("resendOTP").innerText = `00:${count}`;
          if (count == 0) {
            document.getElementById("resendOTP").innerText = `RESEND OTP`;
            clearInterval(id1);
          }
        }, 1000);
        document.getElementById("verify").addEventListener("click",()=>{
              // document.getElementById("username").innerText=filtered[0].name
              let nameArray=[]
              nameArray.push(filtered[0].name)
              localStorage.setItem("name",JSON.stringify(nameArray))
              displayUserName()
              document.querySelector(".model-bg1").classList.remove("active-bg1");
        })
    } 
    else 
    {
      clearInterval(id1);
      count = 20;
      let number = document.getElementById("number").value;
        modelDisplay.classList.remove("active-bg");
        document.querySelector(".model-bg2").classList.add("active-bg2");
        document.getElementById(
          "numberDisplay2"
        ).innerText = `ENTER OTP SENT ON +91 ${number}`;
        id1 = setInterval(() => {
          count--;
          console.log(count);
          document.getElementById("resendOTP1").innerText = `00:${count}`;
          if (count == 0) {
            document.getElementById("resendOTP1").innerText = `RESEND OTP`;
            clearInterval(id1);
          }
        }, 1000);
      modelDisplay.classList.remove("active-bg");
      document.querySelector(".model-bg2").classList.add("active-bg2");
      let verifyUser = () => {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;
        let d = document.getElementById("d").value;
        console.log(a,b,c,d)
        if (a != "" && b != "" && c != "" && d != "") {
                let fullName=document.getElementById("fname").value;
                let emailId=document.getElementById("femail").value;
                let details=new createObj(fullName,emailId,number)
                dataFromLs.push(details)
                localStorage.setItem("userDetails",JSON.stringify(dataFromLs))
                alert("Account Created!!")
        } else {
          alert("Plese Enter Valid OTP!!");
        }
      };
      document.getElementById("verify2").addEventListener("click", verifyUser);

    }
  }
  else
  {
    alert("Please Enter Mobile Number To Proceed!!");
  }
});
document.getElementById("resendOTP").addEventListener("click", () => {
  count = 20;
  id1 = setInterval(() => {
    count--;
    console.log(count);
    document.getElementById("resendOTP").innerText = `00:${count}`;
    if (count == 0) {
      document.getElementById("resendOTP").innerText = `RESEND OTP`;
      clearInterval(id1);
    }
  }, 1000);
});
let goBack = document.querySelector(".back");
goBack.addEventListener("click", () => {
  clearInterval(id1);
  document.querySelector(".model-bg1").classList.remove("active-bg1");
  modelDisplay.classList.add("active-bg");
});
document.querySelector(".modelClose1").addEventListener("click", () => {
  document.querySelector(".model-bg1").classList.remove("active-bg1");
  modelDisplay.classList.remove("active-bg");
  document.getElementById("number").value = "";
});
// for new user
document.getElementById("resendOTP1").addEventListener("click", () => {
  count = 20;
  id1 = setInterval(() => {
    count--;
    console.log(count);
    document.getElementById("resendOTP1").innerText = `00:${count}`;
    if (count == 0) {
      document.getElementById("resendOTP1").innerText = `RESEND OTP`;
      clearInterval(id1);
    }
  }, 1000);
});
document.querySelector(".modelClose2").addEventListener("click", () => {
  document.querySelector(".model-bg1").classList.remove("active-bg1");
  modelDisplay.classList.remove("active-bg");
  document.querySelector(".model-bg2").classList.remove("active-bg2")
  document.getElementById("number").value = "";
});
let displayUserName=()=>{
  let username=JSON.parse(localStorage.getItem("name"))||[]
  if(username.length==1)
  {
    document.getElementById("newData").innerHTML=""
    let container=document.getElementById("newData")
    let image=document.createElement("img")
    image.src=`https://media.istockphoto.com/vectors/shopping-bag-icon-store-logo-in-simple-line-style-vector-id1351258710?b=1&k=20&m=1351258710&s=612x612&w=0&h=wbaj9phrANTYYwaIzRmgYCuC0xb3tMZiAs_uKGaI97o=`
   
    let selectTag=document.createElement("select")
    let option1=document.createElement("option")
    option1.innerText=username[0]
    let option2=document.createElement("option")
    option2.innerText="My Profile"
    option2.value="myprofile"
    let option3=document.createElement("option")
    option3.innerText="My Orders"
    let option4=document.createElement("option")
    option4.innerText="My Dashboard"
    let option5=document.createElement("option")
    option5.innerText="My GlammXO Party"
    let option6=document.createElement("option")
    option6.innerText="LOGOUT"
    option6.value="logout"
    option6.setAttribute("class","editopt")
    selectTag.append(option1,option2,option3,option4,option5,option6)
    selectTag.setAttribute("class","options")
    container.append(image,selectTag)
   
  }
}
displayUserName()
function createObj(n,e,m)
{
    this.name=n;
    this.emailId=e
    this.mobile=m
}
let changOptions=document.querySelector(".options")
changOptions.addEventListener("change",()=>{
    if(changOptions.value=="myprofile")
    {
       window.location.href="myprofile.html"
    }
    if(changOptions.value=="logout")
    {
      localStorage.setItem("userDetails",JSON.stringify([]))
      localStorage.setItem("name",JSON.stringify([]))
      window.location.reload()
    }
})
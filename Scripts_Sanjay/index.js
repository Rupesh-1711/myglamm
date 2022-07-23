let dataFromLs = JSON.parse(localStorage.getItem("userDetails"))||[];
let permanentData=JSON.parse(localStorage.getItem("userDetails_P"))||[];
console.log(dataFromLs)
console.log(permanentData)
import { navbar, footer,displayUserName } from "../Components/navbar.js";

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
      let filtered = permanentData.filter((el) => {
        console.log(el.mobile)
      return +el.mobile == +number1;
    });
    console.log(filtered)
    console.log(number1)
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
          // console.log(count);
          document.getElementById("resendOTP").innerText = `00:${count}`;
          if (count == 0) {
            document.getElementById("resendOTP").innerText = `RESEND OTP`;
            clearInterval(id1);
          }
        }, 1000);
        document.getElementById("verify").addEventListener("click",()=>{
              let e=document.getElementById("1").value
              let f=document.getElementById("1").value
              let g=document.getElementById("1").value
              let h=document.getElementById("1").value
              if(e!=""&&f!=""&&g!=""&&h!="")
              {
                let nameArray=[]
                nameArray.push(filtered[0].name)
                localStorage.setItem("name",JSON.stringify(nameArray))
                displayUserName()
                document.querySelector(".model-bg1").classList.remove("active-bg1");
                window.location.reload()
              }
             else
             {
               alert("Enter Valid OTP!!")
             }
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
                permanentData.push(details)
                localStorage.setItem("userDetails",JSON.stringify(dataFromLs))
                localStorage.setItem("userDetails_P",JSON.stringify(permanentData))
                let nameArray=[]
                nameArray.push(details.name)
                localStorage.setItem("name",JSON.stringify(nameArray))
                alert("Account Created!!")
                document.querySelector(".model-bg2").classList.remove("active-bg2");
                displayUserName()
                window.location.reload()
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
    // console.log(count);
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
    // console.log(count);
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
displayUserName()
function createObj(n,e,m)
{
    this.name=n;
    this.emailId=e
    this.mobile=+m
    this.newUser=false;
}


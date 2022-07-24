
let arr = JSON.parse(localStorage.getItem("data")) || [];

let grandTotal = JSON.parse(localStorage.getItem("grandTotal"))
let findalAmount = document.querySelector(".findalAmount")
findalAmount.innerText =  `₹${grandTotal}.00`
let payMoney = document.getElementById("payMoney")
payMoney.innerText =`Pay ₹${grandTotal}.00`
   let loader =document.getElementById("loader")
// let cardNumber = document.getElementById("cardNumber")
payMoney.addEventListener("click",function(){
   let inputNumber = document.getElementById("cardNumber").value
   let inputName = document.getElementById("cardHolderName").value
   let month = document.getElementById("month").value
   let year = document.getElementById("year").value
 console.log("ok")
   if( inputNumber.length==19 &&inputName!="" && month>0 && month<=12 && year >=22){
     alert("Order Placed successfully")
     localStorage.setItem("completedOrders",JSON.stringify(arr))
     window.location.href = "../index_Sanjay-5.html"
   }
   else
   {
    alert("Invalid Inputs")
   }
})




//ProgressStepbar

// const progressBar = document.getElementById("progress-bar");
// const progressNext = document.getElementById("progress-next");
// const progressPrev = document.getElementById("progress-prev");
// progressNext.style.cursor = "pointer";
// const steps = document.querySelectorAll(".step");
// let active = 1;
// //console.log(steps)
// progressNext.addEventListener("click", () => {
//     active++;
//     if (active > steps.length) {
//       active = steps.length;
//     }
//     updateProgress();
//   });
  
//   progressPrev.addEventListener("click", () => {
//     active--;
//     if (active < 1) {
//       active = 1;
//     }
//     updateProgress();
//   });
//   const updateProgress = () => {
//     // toggle active class on list items
//     steps.forEach((step, i) => {
//       if (i < active) {
//         step.classList.add("active");
//       } else {
//         step.classList.remove("active");
//       }
//     });
//     // set progress bar width  
//     progressBar.style.width = 
//       ((active -1) / (steps.length -1)) * 100 + "%";
//     // enable disable prev and next buttons
//     if (active === 1) {
//       progressPrev.disabled = true;
//     } else if (active === steps.length) {
//       progressNext.disabled = true;
//     } else {
//       progressPrev.disabled = false;
//       progressNext.disabled = false;
//     }
//   };
let nameforcart=JSON.parse(localStorage.getItem("name"))||[]
document.getElementById("nameTocart").innerText=nameforcart[0];

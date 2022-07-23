
      let removedOrdersArr = JSON.parse(localStorage.getItem("removedOrders")) || [];
    let arr = JSON.parse(localStorage.getItem("data")) || [];
    localStorage.setItem("liveOrders",JSON.stringify(arr))





function display(data){
    let total= document.querySelector(".totalItems")
     total.innerHTML = ""
    let h1= document.createElement("h1")
    total.append(h1)
    let freeGift = document.querySelector(".freeGift")
        freeGift.innerHTML =""
      let freeP = document.createElement("p")
      freeP.innerHTML =" Congrats! You're eligible for free gift Please select."
      freeGift.append(freeP)
    let totalPriceDiv = document.getElementById("totalPriceDiv")
        totalPriceDiv.innerHTML =""
    let sum =0;
    let allSum =0
     let container = document.getElementById("rallProducts")
     container.innerHTML = ""
        data.forEach((ele,index)=>{
            let li = document.createElement("li")
            li.innerHTML=""
            li.setAttribute("class","rBox")
             let imgDiv = document.createElement("div")
             imgDiv.setAttribute("class","imgDiv")
            let img = document.createElement("img")
            img.src = ele.img

            imgDiv.append(img)

            let nameDiv = document.createElement("div")
            nameDiv.setAttribute("class","nameDiv")
            let nameP = document.createElement("p")
            nameP.innerText = ele.title;

            nameDiv.append(nameP)

            let price = document.createElement("div")
            price.setAttribute("class","price")
            let priceP = document.createElement("p")
            priceP.innerText = `₹ ${ele.quantity*ele.price}`;

            price.append(priceP)
            
            let count = document.createElement("div")
            count.setAttribute("class","count")
            let countInnerDiv = document.createElement("div")
            countInnerDiv.setAttribute("class","countInnerDiv")
            let input = document.createElement("p")
            input.setAttribute("class","input1")
             input.innerText= ele.quantity
            let increment = document.createElement("div")
             increment.setAttribute("class","increment")
             let incSpan = document.createElement("span")
                    //  incSpan.setAttribute("class","upArrow")
             incSpan.style.cursor="pointer"
             incSpan.setAttribute("class","material-icons")
             incSpan.innerText = "arrow_drop_up"
             incSpan.addEventListener("click",function(){
                increase(ele,index)
             })
             let br = document.createElement("br")
             let incSpan2 = document.createElement("span")
             incSpan2.style.cursor="pointer"
            //    incSpan2.setAttribute("class","downArrow")
             incSpan2.setAttribute("class","material-icons")
             incSpan2.innerText = "arrow_drop_down"
             incSpan2.addEventListener("click",function(){
                decrease(ele,index)
             })
             
              increment.append(incSpan,incSpan2)
              countInnerDiv.append(input,increment)
              count.append(countInnerDiv) 

              let total = document.createElement("div")
              total.setAttribute("class", "total")
              let totalP = document.createElement("p")
               totalP.innerText = `₹ ${ele.quantity*ele.price}`
             let spanClose = document.createElement("span")
             spanClose.setAttribute("class","material-icons")
             spanClose.innerText = "close"
             spanClose.style.cursor="pointer"
             spanClose.addEventListener("click",function(){
                  remove(ele,index);
             })
             total.append(totalP,spanClose)
             
            li.append(imgDiv,nameDiv,price,count,total,br)
            container.append(li)
            allSum = allSum + (ele.quantity*ele.price)
            sum = sum+ele.quantity
        })
        h1.innerText = `MY BAG(${sum})`
         let totalInnerDiv = document.createElement("div")
         totalInnerDiv.setAttribute("class","totalInnerDiv")
            totalInnerDiv.innerHTML = `
            <div class="goodPoints">
              
              <span>You will earn <strong>₹ ${Math.floor(allSum*10/100)} Good Points</strong> as cashback on this order.</span>
            </div>
            <div class="totalDisplay">
              <span>Grand Total</span>
              <span>&nbsp;<strong> ₹ ${allSum}</strong></span>
            </div>
         `
         totalPriceDiv.appendChild(totalInnerDiv)
         localStorage.setItem("grandTotal", JSON.stringify(allSum));
         localStorage.setItem("bagItem", JSON.stringify(sum));
}
display(arr)


function increase(ele,index)
{ 
    ele.quantity++
     arr = JSON.parse(localStorage.getItem("data")) || [];
     arr[index] = ele
     display(arr)
    localStorage.setItem("data",JSON.stringify(arr))
    localStorage.setItem("liveOrders",JSON.stringify(arr))


}

function decrease(ele,index)
{ 
    if(ele.quantity!=1)
    {
        ele.quantity--
     arr = JSON.parse(localStorage.getItem("data")) || [];
     arr[index] = ele
    localStorage.setItem("data",JSON.stringify(arr))
    localStorage.setItem("liveOrders",JSON.stringify(arr))
    display(arr)

    }

}

function remove(ele,index){
    arr.splice(index,1)
    removedOrdersArr.push(ele)
    localStorage.setItem("data",JSON.stringify(arr))
    localStorage.setItem("removedOrders",JSON.stringify(removedOrdersArr))
    display(arr)
}

// let button = document.getElementById("progress-prev")
// button.style.cursor = "pointer"


//ProgressStepbar

const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
progressNext.style.cursor = "pointer";
const steps = document.querySelectorAll(".step");
let active = 1;
//console.log(steps)
progressNext.addEventListener("click", () => {
    active++;
    localStorage.setItem("active",JSON.stringify(active));
    if (active > steps.length) {
      active = steps.length;
    }
    updateProgress();
  });
  
  progressPrev.addEventListener("click", () => {
    active--;
    localStorage.setItem("active",JSON.stringify(active));
    if (active < 1) {
      active = 1;
    }
    updateProgress();
  });
  const updateProgress = () => {
    // toggle active class on list items
    steps.forEach((step, i) => {
      if (i < active) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
    // set progress bar width  
    progressBar.style.width = 
      ((active -1) / (steps.length -1)) * 100 + "%";
    // enable disable prev and next buttons
    if (active === 1) {
      progressPrev.disabled = true;
    } else if (active === steps.length) {
      progressNext.disabled = true;
    } else {
      progressPrev.disabled = false;
      progressNext.disabled = false;
    }
  };

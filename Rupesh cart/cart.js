let items = [{img:"https://files.myglamm.com/site-images/200x200/Soiree-(1).jpg",price:1295,title:"MANISH MALHOTRA 9 IN 1 EYESHADOW PALETTE - SOIRÉE",quantity:1},
    {img:"https://files.myglamm.com/site-images/original/Artboard-1-(1).jpg",price:239,title:"MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",quantity:1},
    {img:"https://files.myglamm.com/site-images/200x200/Soiree-(1).jpg",price:1295,title:"MANISH MALHOTRA 9 IN 1 EYESHADOW PALETTE - SOIRÉE",quantity:3},
    {img:"https://files.myglamm.com/site-images/original/Artboard-1-(1).jpg",price:239,title:"MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",quantity:1},
]


localStorage.setItem("data",JSON.stringify(items))

    let arr = JSON.parse(localStorage.getItem("data")) || [];






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
        localStorage.setItem("grandTotal",JSON.stringify(allSum))
        localStorage.setItem("bagItems",JSON.stringify(sum))
        // let totalPrice= document.createElement("h1")
        //    totalPrice.innerHTML =""
        // // totalPrice.innerHTML = allSum
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
         let grandTotal = JSON.parse(localStorage.getItem("grandTotal")) || []
let bagItems = JSON.parse(localStorage.getItem("bagItems")) || []
         console.log(grandTotal,bagItems)
}

display(arr)


function increase(ele,index)
{ 
    ele.quantity++
     arr = JSON.parse(localStorage.getItem("data")) || [];
     arr[index] = ele
     display(arr)
    localStorage.setItem("data",JSON.stringify(arr))


}

function decrease(ele,index)
{ 
    if(ele.quantity!=1)
    {
        ele.quantity--
     arr = JSON.parse(localStorage.getItem("data")) || [];
     arr[index] = ele
    localStorage.setItem("data",JSON.stringify(arr))
    display(arr)

    }

}


function remove(ele,index){
    arr.splice(index,1)
    localStorage.setItem("data",JSON.stringify(arr))
    display(arr)
}

let button = document.getElementById("button")
button.style.cursor = "pointer"
checkout.addEventListener("click",function(){
  window.location.href = "./Address Page"
})
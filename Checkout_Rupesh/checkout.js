let obj = {
    name: "RUPESH SANJAY PATIL",
    mobile: "9172051168",
    email: "rupeshpatil3066@gmail.com",
    location: "home",
    house: "Flat:1,Patil house",
    street: "Langade galli",
    neighbourhood: "Omkar",
    pincode: "416211",
    city: "Kolhapur",
    state: "Maharashtra",
    landmark: "Near temple"
}

localStorage.setItem("address", JSON.stringify(obj));
localStorage.setItem("grandTotal", JSON.stringify(5334));
localStorage.setItem("bagItem", JSON.stringify(7));

let grandTotal = JSON.parse(localStorage.getItem("grandTotal"));
let bagItem = JSON.parse(localStorage.getItem("bagItem"));
let address = JSON.parse(localStorage.getItem("address"));
console.log(grandTotal, bagItem, address)
let nameAppend1 = address.name;
let addressLine1 = `${address.house},${address.street},${address.landmark}`;
let addressLine2 = `${address.city},${address.state},${address.zip}`


let appendName = document.getElementById("appendName");
appendName.innerText = nameAppend1
let apppendAddress = document.getElementById("appendAddress");
apppendAddress.innerHTML = ` <span>${address.house}, ${address.street}, ${address.landmark}</span>
<br>
${address.city}, ${address.state}, ${address.pincode}.`

let appendMobile =document.getElementById('appendMobile');
appendMobile.innerText = address.mobile

let appendEmail =document.getElementById('appendEamil');
appendEmail.innerText = address.email

 let grandTotalAppend = document.getElementById("grandTotalAppend")
 grandTotalAppend.innerText = `₹ ${grandTotal}.00`
 console.log(grandTotal)
     let withoutDiscout = Math.floor((100*grandTotal)/70)
     console.log(withoutDiscout)
let mrpAppend = document.getElementById("mrpAppend")
mrpAppend.innerText = `₹ ${withoutDiscout}.00`
let mrpDisAppend = document.getElementById("mrpDisAppend")
mrpDisAppend.innerText = `-₹ ${withoutDiscout-grandTotal}.00`

let goodPointsAppend = document.getElementById("goodPointsAppend")
goodPointsAppend.innerText = Math.floor((grandTotal*10)/100)
// append part
let items = [{img:"https://files.myglamm.com/site-images/200x200/Soiree-(1).jpg",price:1295,title:"MANISH MALHOTRA 9 IN 1 EYESHADOW PALETTE - SOIRÉE",quantity:1},
    {img:"https://files.myglamm.com/site-images/original/Artboard-1-(1).jpg",price:239,title:"MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",quantity:1},
    {img:"https://files.myglamm.com/site-images/200x200/Soiree-(1).jpg",price:1295,title:"MANISH MALHOTRA 9 IN 1 EYESHADOW PALETTE - SOIRÉE",quantity:3},
    {img:"https://files.myglamm.com/site-images/original/Artboard-1-(1).jpg",price:239,title:"MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",quantity:1},
    {img:"https://files.myglamm.com/site-images/200x200/Soiree-(1).jpg",price:1295,title:"MANISH MALHOTRA 9 IN 1 EYESHADOW PALETTE - SOIRÉE",quantity:1},
    {img:"https://files.myglamm.com/site-images/original/Artboard-1-(1).jpg",price:239,title:"MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",quantity:1},
    {img:"https://files.myglamm.com/site-images/200x200/Soiree-(1).jpg",price:1295,title:"MANISH MALHOTRA 9 IN 1 EYESHADOW PALETTE - SOIRÉE",quantity:3},
    {img:"https://files.myglamm.com/site-images/original/Artboard-1-(1).jpg",price:239,title:"MYGLAMM SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",quantity:1},
]


localStorage.setItem("data",JSON.stringify(items))

    let arr = JSON.parse(localStorage.getItem("data")) || [];






function display(data){


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
             
            li.append(imgDiv,nameDiv,price,count,)
            container.append(li)
 
        })
      

}
display(arr)
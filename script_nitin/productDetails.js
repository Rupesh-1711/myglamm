let data = JSON.parse(localStorage.getItem("Inproduct"))
console.log(data)

let images = (data)=>{
    data.forEach(el => {
        let img1 = document.createElement("img")
        img1.src = el.img1
        let img2 = document.createElement("img")
        img2.src = el.img2;
        let img3 = document.createElement("img");
        img3.src = el.img3;
        let img4 = document.createElement("img")
         img4.src = el.img4
         document.getElementById("images").append(img1,img2,img3,img4);
    });
}
images(data);


let image = (data)=>{
   data.forEach(el=>{
    let img = document.createElement("img")
    img.src= el.img;
    document.getElementById("image").append(img)
   })
}
image(data);

data.forEach(el => {
    
    let title = document.createElement("h2");
    title.innerText= el.title;
    let use = document.createElement("p");
    use.innerText = el.use;
    use.style.color= "gray";
    let div = document.createElement("div")
    div.setAttribute("class","rating")
    let span1 = document.createElement("span")
    span1.innerText= el.rating
    let ratingdiv = document.createElement("img")
    ratingdiv.setAttribute("class","star")
    ratingdiv.src = "data:image/jpeg;base64,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"
    let span2 = document.createElement("span")
    span2.innerText= el.ratingCount;
    div.append(span1,ratingdiv,span2)
    let div1 = document.createElement("div")
    div1.setAttribute("class","price")
    let span3 = document.createElement("span")
    span3.innerText= el.price
    let span4 = document.createElement("span")
    span4.innerText= el.cutPrice;
    span4.style.textDecoration="line-through";
    span4.style.opacity= 0.7
    div1.append(span3,span4)
    let text = document.createElement("p")
    text.innerText= "(MRP incl. of all taxes)"
    text.setAttribute("class","text")
    let btn = document.createElement("button");
    btn.innerText= "ADD TO BAG";
    btn.setAttribute("class","btn")
    btn.addEventListener("click",function(){
        storedata(el)
    })
    let point = document.createElement("p")
    point.innerText= "You will receive cashback worth ₹30 as myglammPOINTS on this purchase";
    point.setAttribute("class","point")
    let hdg = document.createElement("p")
    hdg.innerText= `HOME / HAIR CARE / ${el.title}`
    document.getElementById("heading").append(hdg)

    document.getElementById("detail").append(title,use,div,div1,text,btn,point)

});
let arr =JSON.parse(localStorage.getItem("addToCart"))|| [];
let storedata= (el)=>{
    
   if(arr.includes(el)){
       alert("This product is already in the Cart")
   }else{
    arr.push(el)
    localStorage.setItem("addToCart",JSON.stringify(arr)); 
    alert ("Product added to the cart successfully")
    //    window.location.href= "productDetails.html"
   }
 
}


function append(data,container){


data.forEach(function(el){
    let div = document.createElement("div")
    div.setAttribute("class","product")
 let img = document.createElement("img")
 img.src = el.img;
 let div1  = document.createElement("div")
 div1.innerText= el.title;
 div1.setAttribute("class","title")
 let use =  document.createElement("p")
 use.innerText= el.use;
 use.setAttribute("class","use")
 let span = document.createElement("span")
 let price =  document.createElement("span")
 price.innerText = el.price;
 let cutprice =  document.createElement("span")
 cutprice.innerText = el.cutPrice
 cutprice.style.textDecoration="line-through"
 cutprice.style.opacity= 0.7
 span.append(price,cutprice)
 span.setAttribute("class","price")
 div.append(img,div1,use,span)
//  document.getElementById("container").append(div);
container.append(div);
 div.addEventListener("click",function(){
   productdetails(el)
 });
});
}

let productdetails=(el)=>{
   console.log(el)
   let arr = [];
   arr.push(el)
   localStorage.setItem("Inproduct",JSON.stringify(arr));
   window.location.href= "index.html"
   
};

export {append,productdetails};
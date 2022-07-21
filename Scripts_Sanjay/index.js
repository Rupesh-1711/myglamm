import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let i=0;
let id;
let dataForCarousel = [
    "https://files.myglamm.com/site-images/original/1920-x-527-(1).jpg",
    "https://files.myglamm.com/site-images/original/Carousel-(Desktop)---1920-527-_1.gif",
    "https://files.myglamm.com/site-images/original/SK-Survey-1920x527_1.jpg",
    "https://files.myglamm.com/site-images/original/Homepage-desktop-lipstikcks.jpg",
    "https://files.myglamm.com/site-images/original/1920x527-(5).jpg",
  ];
let myCarousel = () => {
  let container=document.getElementById("Carousel")
  let image=document.createElement("img")
  id=setInterval(() => {
    image.src=dataForCarousel[i]
    container.innerHTML=""
    container.append(image)
    i++;
    if(i==4)
    {
        i=0
    }
  },2000);
};
window.addEventListener("load", myCarousel);
let slideLeft=()=>{
    clearInterval(id)
    if(i<0)
    {
        i=4;
    }
    let container=document.getElementById("Carousel")
    container.innerHTML=""
    let image=document.createElement("img")
      image.src=dataForCarousel[i]
      container.append(image)
      i--;
}
document.getElementById("left").addEventListener("click",slideLeft)
let slideRight=()=>{
    clearInterval(id)
    if(i>4)
    {
        i=0;
    }
    let container=document.getElementById("Carousel")
    container.innerHTML=""
    let image=document.createElement("img")
      image.src=dataForCarousel[i]
      container.append(image)
      i++;
}
document.getElementById("right").addEventListener("click",slideRight)


let back = document.getElementById("back")
back.style.cursor = "pointer"
back.addEventListener("click", function () {
    window.location.href = "../Rupesh_Cart/cart.html"
})

let continue1 = document.getElementById("continue1")
continue1.style.cursor = "pointer"
continue1.addEventListener("click", getData)

function getData(event) {
    event.preventDefault()

    let form = document.getElementById("rform")
    let name = document.getElementById("fName").value;
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
    class Info {
        constructor(name, mobile, email, location, house, street, neighbourhood, pincode, city, state, landmark) {
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
    let obj = new Info(name, mobile, email, location, house, street, neighbourhood, pincode, city, state, landmark)
    if (name != "" && mobile != "" && pincode != "" && neighbourhood != "" && street != "") {
        console.log("ok")

        localStorage.setItem("address", JSON.stringify(obj));
        window.location.href = "../Checkout_Rupesh/checkout.html";
    }
    else {
        alert("please fill required fields")
    }
}


//ProgressStepbar

const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
progressNext.style.cursor = "pointer";
const steps = document.querySelectorAll(".step");
let active = 2;
//console.log(steps)
continue1.addEventListener("click", () => {
    active++;
    if (active > steps.length) {
        active = steps.length;
    }
    updateProgress();
});

progressPrev.addEventListener("click", () => {
    active--;
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
        ((active - 1) / (steps.length - 1)) * 100 + "%";
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

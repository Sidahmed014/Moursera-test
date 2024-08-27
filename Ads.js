let list = document.querySelector(".ads-section .ads-list");
let item = document.querySelectorAll(".ads-section .ads-list .ads-item");
let dots = document.querySelectorAll(".dots li");
let prev = document.getElementById("prev")
let next = document.getElementById("next");
var image = document.getElementById("ads-item");
var listid = document.getElementById("lists");

let active = 0;

let lenghtItem = item.length - 1;



next.addEventListener("click", ()=>{

    if(active + 1 > lenghtItem){
        active = 0;
    }else{
        active = active + 1;

    }

    reloadSlider();
})

prev.addEventListener("click", ()=>{
 
    if(active - 1 < 0){
        active = lenghtItem;
    }else{
        active = active - 1;

    }

    reloadSlider();
    

})

let refreshSlider = setInterval(()=>{next.click()}, 3000)


function reloadSlider(){

    let checkLeft = item[active].offsetLeft;
    listid.style.marginLeft = -checkLeft + 'px';   

let lastdots = document.querySelector(".dots li.active");
lastdots.classList.remove("active");
dots[active].classList.add("active");
clearInterval(refreshSlider);
 refreshSlider = setInterval(()=>{next.click()}, 3000)

}

dots.forEach((li, key) =>{

    li.addEventListener("click", ()=>{
        active = key;
        reloadSlider();
    })

})


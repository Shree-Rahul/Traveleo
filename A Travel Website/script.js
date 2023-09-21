//  <!-- //javascript for responsive menu btn  -->



 let menuBtn = document.querySelector("#menu-btn");
 let navbar = document.querySelector(".header .navbar");
 
 menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
 };
 window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
 };

 var swiper = new Swiper(".home-slider",{
    loop:true,
    navigation : {
        nextEl :".swiper-button-next",
        prevEl :".swiper-button-prev",

    },
 }); 


 var swipper2 = new Swiper(".review-slider",{
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints : {
        640 : {
            slidesPerView:1,
        },
        768 : {
            slidesPerView:2,
        },
        1024 : {
            slidesPerView:3,
        },
    },
 }); 




 let loadMoreBtn = document.querySelector('.packages .load-more .btn');
 let currItem = 3;
 loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for(var i=currItem; i<boxes.length && i<currItem+3;i++){
        boxes[i].style.display = 'inline-block';
    };
    currItem += 3;
    if(currItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
        console.log("disabled");
    };
 };

 //Navigation active check 
 

 //Slider js logic 
// common.js


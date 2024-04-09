"use strict";

const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel-item');
const dogImage = document.querySelector('.dog-title');
var dogSlider=1;
var transformValue=0;
 
 

function navbarFuntion(){
  const navbar=document.querySelector(".navbar");
  var elements=document.querySelectorAll(".nav-item");
  elements.forEach(function(element) {
    if (window.getComputedStyle(element).display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
  });
  if (window.getComputedStyle(navbar).borderRadius === "5px"){
      navbar.style.borderRadius="50px";
  }else{
      navbar.style.borderRadius="5px";
  }
}

function prevSlide(xoffset) {
  transformValue=transformValue+xoffset;
  if(transformValue ==xoffset){
    transformValue=(xoffset*3)*(-1);
  }
 carousel.style.transform = `translateX(${transformValue}px)`; 
 
};

function nextSlide(xoffset) {
  transformValue=transformValue-xoffset;
  if(transformValue==(xoffset*4)*(-1)){
    transformValue=0;
  }
  carousel.style.transform = `translateX(${transformValue}px)`;
  console.log("transform:"+transformValue+"xoffset :"+xoffset) ;
};


function dogPrevSlide(){
  document.querySelector(".dog-circle-"+dogSlider).classList.remove("active");
  dogSlider-=1;
  if (dogSlider==0){
    dogSlider=4;
  }
  document.querySelector(".dog-circle-"+dogSlider).classList.add("active");
  dogImage.src="src/dog-title-"+dogSlider+".png";
}

function dogNextSlide(){
  document.querySelector(".dog-circle-"+dogSlider).classList.remove("active");
  dogSlider+=1;
  if (dogSlider==5){
    dogSlider=1;
  }
  document.querySelector(".dog-circle-"+dogSlider).classList.add("active");
  dogImage.src="src/dog-title-"+dogSlider+".png";
}

setInterval(dogNextSlide, 5000);   
setInterval(function() {
    nextSlide(400);
}, 5000);  
//COntact Modull

let contactModul=document.querySelector(".contact-modul-2");
let contactClose=document.querySelector("#close-contact");
let contact=document.querySelector("#contact");



contactModul.style.visibility="hidden";



/*
setTimeout(function () {
	contactModul.style.visibility="visible";
}, 10000);

*/
contactClose.addEventListener("click",function(){

contactModul.style.visibility="hidden";
})


contact.addEventListener("click",function(){
	contactModul.style.visibility="visible";
})



let productCaptionOne=document.querySelector(".product-0");
let productCaptionTwo=document.querySelector(".product-5");
let productCaptionThree=document.querySelector(".product-2");
let productCaptionFour=document.querySelector(".product-3");
let productCaptionFive=document.querySelector(".product-4");


let closeContentOne=document.querySelector(".proizvodi-close-1");
let closeContentTwo=document.querySelector(".proizvodi-close-2");
let closeContentThree=document.querySelector(".proizvodi-close-3");
let closeContentFour=document.querySelector(".proizvodi-close-4");
let closeContentFive=document.querySelector(".proizvodi-close-5");

closeContentOne.style.visibility="hidden";
closeContentTwo.style.visibility="hidden";
closeContentThree.style.visibility="hidden";
closeContentFour.style.visibility="hidden";
closeContentFive.style.visibility="hidden";

productCaptionOne.classList.add("hidden");

function hiddenOne(){
    productCaptionOne.classList.remove("hidden");
    closeContentOne.style.visibility="visible";

}
function closeOne(){
    productCaptionOne.classList.add("hidden");
    closeContentOne.style.visibility="hidden";
}
productCaptionTwo.classList.add("hidden");

function hiddenTwo(){
    productCaptionTwo.classList.remove("hidden");
    closeContentTwo.style.visibility="visible";
}
function closeTwo(){
    productCaptionTwo.classList.add("hidden");
    closeContentTwo.style.visibility="hidden";
}

productCaptionThree.classList.add("hidden");

function hiddenThree(){
    productCaptionThree.classList.remove("hidden");
    closeContentThree.style.visibility="visible";
}
function closeThree(){
    productCaptionThree.classList.add("hidden");
    closeContentThree.style.visibility="hidden";
}
productCaptionFour.classList.add("hidden");

function hiddenFour(){
    productCaptionFour.classList.remove("hidden");
    closeContentFour.style.visibility="visible";

}
function closeFour(){
    productCaptionFour.classList.add("hidden");
    closeContentFour.style.visibility="hidden";
}
productCaptionFive.classList.add("hidden");

function hiddenFive(){
    productCaptionFive.classList.remove("hidden");
    closeContentFive.style.visibility="visible";

}

function closeFive(){
    productCaptionFive.classList.add("hidden");
    closeContentFive.style.visibility="hidden";
}



window.onscroll = () => {
	section.forEach((i) => {
	  let top = window.scrollY;
	  let offset = i.offsetTop - 150;
	  let height = i.offsetHeight;
	  let id = i.getAttribute("id");
  
	  if (top >= offset && top < offset + height) {
		menu.forEach((link) => {
		  link.classList.remove("active");
		  document
			.querySelector("header nav a[href*=" + id + "]")
			.classList.add("active");
		});
	  }
	});
  };
  
  function reveal() {
	var reveals = document.querySelectorAll(".reveal");
  
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();
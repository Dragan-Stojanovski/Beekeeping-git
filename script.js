//Starting Slider

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch

// image list
images[0] = 'images/img-2.png';
images[1] = 'images/img-3.png';
images[2] = 'images/img-1.png';


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

//Here ends starting Slider


//Modul

let pOne=document.querySelector(".modul-info-1");
let pTwo=document.querySelector(".modul-info-2");
let pThree=document.querySelector(".modul-info-3");

let btnOne=document.querySelector(".btn-1")
let btnTwo=document.querySelector(".btn-2")
let btnThree=document.querySelector(".btn-3")



btnOne.addEventListener('click',function(){
    pOne.style.visibility="visible";
    pTwo.style.visibility="hidden";
    pThree.style.visibility="hidden";
})

btnTwo.addEventListener('click',function(){
    pOne.style.visibility="hidden";
    pTwo.style.visibility="visible";
    pThree.style.visibility="hidden";
})

btnThree.addEventListener('click',function(){
    pOne.style.visibility="hidden";
    pTwo.style.visibility="hidden";
    pThree.style.visibility="visible";
})





//COntact Modull

let contactModul=document.querySelector(".contact-modul-2");
let contactClose=document.querySelector("#close-contact");
let contact=document.querySelector("#contact");



contactModul.style.visibility="hidden";




setTimeout(function () {
	contactModul.style.visibility="visible";
}, 10000);


contactClose.addEventListener("click",function(){

contactModul.style.visibility="hidden";
})


contact.addEventListener("click",function(){
	contactModul.style.visibility="visible";
	
})




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
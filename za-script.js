let btnMapOne=document.querySelector(".map-btn-1");
let btnMapTwo=document.querySelector(".map-btn-2");
let mapContentOne=document.querySelector(".place-box-1");
let mapContentTwo=document.querySelector(".place-box-2");

mapContentTwo.classList.add("display-class");
btnMapOne.addEventListener("click",function(){
    mapContentOne.classList.remove("display-class")
    mapContentTwo.classList.add("display-class");

})

btnMapTwo.addEventListener("click",function(){
    mapContentTwo.classList.remove("display-class")
    mapContentOne.classList.add("display-class");

})



productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}




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
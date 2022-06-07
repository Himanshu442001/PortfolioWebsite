
//Responsive NavBar Component

const mobile_Nav = document.querySelector(".mobile-navbar-btn");
const headerElm = document.querySelector(".header");
mobile_Nav.addEventListener('click', () =>{
  headerElm.classList.toggle("active")
})

//Creating a sticky responsive navbar component
const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver((entries) => {
const ent = entries[0];
console.log(ent);
!ent.isIntersecting 
? document.body.classList.add("sticky")
:document.body.classList.remove("sticky");

},
{root: null, 
threshold: 0}
);




observer.observe(heroSection);
















// portfolio tabbed components

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".image-overlay");
p_btns.addEventListener('click',(e) => {
const p_btn_clicked = e.target;
// console.log(p_btn_clicked);
// if(!p_btn_clicked.classList.contains("p-btn")) return;



p_btn.forEach((curElm) => curElm.classList.remove("p-btn-active"));

p_btn_clicked.classList.add("p-btn-active");


const btn_num = p_btn_clicked.dataset.btnNum;
console.log(btn_num);
const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
p_img_elem.forEach((curElm) => curElm.classList.add("p-image-not-active"));
img_active.forEach((curElm) => curElm.classList.remove("p-image-not-active"));
});

// Swiper or testimonial js section
var swiper = new Swiper(".mySwiper", 
  {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay:2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  } 
);

const  myJsmedia  = (width_size) => {
if(width_size.matches){
  new Swiper(".mySwiper", 
  {
    slidesPerView: 1,
    spaceBetween: 30,

  } );
}else{
  new Swiper(".mySwiper", 
  {
    slidesPerView: 3,
    spaceBetween: 30,
   
  } );
};

}
 const width_size = window.matchMedia("(max-width:780px)");
// calling the listner function
myJsmedia(width_size);


// attach listner function on state change


  width_size.addEventListener('change', myJsmedia)

// scroll to top button


const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class = "scroll-top"
></ion-icon>`;
footerElem.after(scrollElement);

const scrollTop = () =>{
  heroSection.scrollIntoView({behavior: "smooth"})

};
scrollElement.addEventListener("click" ,scrollTop);

//smooth scrolling Effect

const portfolioSec = document.querySelector(".section-prtfolio");
const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({behavior:"smooth"});
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSec.scrollIntoView({behavior:"smooth"});
});

//animation number 
const counterNum = document.querySelectorAll(".counter-number");
const speed = 200;

counterNum.forEach((curElm) => {

  const updateNum = () =>
  {
    const targetNumber = parseInt(curElm.dataset.number);  
   
    const initialNum = parseInt(curElm.innerText);
    // console.log(initialNum);

    const incrementNum= Math.trunc(targetNumber / speed);
  //  console.log(incrementNum);

  if(initialNum < targetNumber)
  {
    curElm.innerText = `${initialNum + incrementNum}+`;
    setTimeout(updateNum,10);

  }
  };
 updateNum();
});
const workSection = document.querySelectorAll(".section-work-data");
 const workObserver = new IntersectionObserver((entries, observer) => {
   const[entry] = entries;
   console.log(entry);
   if (!entry.isIntersecting) return;
  
   const counterNum = document.querySelectorAll(".counter-number");
const speed = 200;

counterNum.forEach((curElm) => {

  const updateNum = () =>
  {
    const targetNumber = parseInt(curElm.dataset.number);  
   
    const initialNum = parseInt(curElm.innerText);
    // console.log(initialNum);

    const incrementNum= Math.trunc(targetNumber / speed);
  //  console.log(incrementNum);

  if(initialNum < targetNumber)
  {
    curElm.innerText = initialNum+incrementNum;
    setTimeout(updateNum,10);

  }
  };
 updateNum();
});
observer.unobserve(workSection);

 }, {
  root: null,
  threshold: 0,
});



workObserver.observe(workSection);
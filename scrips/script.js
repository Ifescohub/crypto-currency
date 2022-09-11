//STORING DOM ELEMENT
const currency = document.getElementById("currency");
const wallets = document.getElementById("wallets")
const countries = document.getElementById("countries")

const cards = document.querySelectorAll(".card");

const scrollElements = document.querySelectorAll(".scroll");



//FORMATTING COUNTER
let counts;

function counter (item, type, digit, time){
  counts = item;
  item = setInterval(updated, time);
  let start = 0;

    function updated (){
      type.innerHTML =  ++start;
      if (start === digit){
          clearInterval(item)
      }
  }

  
}



//FORMATTING ANIMATION ON SCROLL
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  ); 
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("active");
};

const hideScrollElement = (element) => {
  element.classList.remove("active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}




//Calling animation on scroll and counter
window.addEventListener("scroll", () => { 
  handleScrollAnimation();

  counter(counts, currency, 30, 50);
  counter(counts, wallets, 10, 150);
  counter(counts, countries, 195, 15);

});




//  FORMATTING CHANGE ON CARD WHEN CLICKED
cards.forEach((card) => card
    .addEventListener("click", ()=>{
        removeFocus(cards)
        changefocus(card);
    }));


function changefocus(item){
    const itemChildren  = item.children;
    
    for (let i = 0; i<itemChildren.length; i++){
        itemChildren[i].classList.add("focus");
        item.classList.add("focus")
    }
}

function removeFocus(items){
    items.forEach((item)=> {
        const itemChildren  = item.children;
         item.classList.remove("focus")
         for (let i = 0; i<itemChildren.length; i++){
             itemChildren[i].classList.remove("focus")
         } 
     })
}
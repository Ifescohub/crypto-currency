
const currency = document.getElementById("currency");
const wallets = document.getElementById("wallets")
const countries = document.getElementById("countries")

const cards = document.querySelectorAll(".card");

const slideUpward = document.querySelectorAll(".slide-up")


const scrollElements = document.querySelectorAll(".scroll");

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

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});











































// function slideUp() {
//     for (let i=0; i<slideUpward.length; i++){
//         let windowHeight = window.innerHeight;
//         let elementTop = slideUpward[i].getBoundingClientRect().top;
//         let elementVisible = 150;

//         if (elementTop > windowHeight-elementVisible){
//             slideUpward[i].classList.add("slide-up")
//         }else{
//             slideUpward[i].classList.remove("slide-up")
//         }
//     }
// }



// window.addEventListener("scroll", slideUp)




// console.log(slideUpward[0].getBoundingClientRect().top)


















// let i = 0;

// while(i<=30){
//     currency.textContent = i;
//     setInterval(() => {
//         i++;
//     }, 1000);
    
// }

let counts = setInterval(updated, 50);
let start = 0;

function updated (){
    currency.innerHTML = `$${++start}B`;
    if (start === 30){
        clearInterval(counts)
    }
}









//Changing focus on cards
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
const docsOF = document.getElementsByTagName("section");
const home= document.getElementById("home")
const about = document.getElementById("about")
const serv = document.getElementById("services")
const product = document.getElementById("product")
const footer = document.getElementById("footer")

// const aboutBurger = document.getElementById("about-bur");
// const servicesBurger = document.getElementById("services-bur");
// const productBurger = document.getElementById("product-bur");
// const contactBurger = document.getElementById("contact-bur");


// aboutBurger.addEventListener("click", ()=>{
// about.style.display = "block"
// })
// servicesBurger.addEventListener("click", () => {
//    window.scrollTo({
//       top: 1300,
//       behavior: "smooth" // Optional: adds smooth scrolling
//    });
//    // servicesBurger.style.display = "block";
// });


// productBurger.addEventListener("click", ()=>{
//       window.scrollTo({
//          top:2000,
//          behavior : "smooth"
//       })
//       })
//  contactBurger.addEventListener("click", ()=>{
//       window.scrollTo({
//          top : 3200,
//          behavior : "smooth"
//       })
//          })


// window.addEventListener("scroll", ()=>{
//     if(window.scrollY >40){
//         about.style.display = "block"
      
//     }
//      else{
//         about.style.display = "none"
//      }
//   });

//   window.addEventListener("scroll", ()=>{
//     if(window.scrollY >600){
//        serv.style.display = "block"
//     }
//      else{
//         serv.style.display = "none"
//      }
//   });

//   window.addEventListener("scroll", ()=>{
//     if(window.scrollY >1100){
//        product.style.display = "block"
//     }
//      else{
//         product.style.display = "none"
//      }
//   });
//   window.addEventListener("scroll", ()=>{
//     if(window.scrollY >2050){
//        footer.style.display = "block"
//     }
//      else{
//         footer.style.display = "none"
//      }
//   });


//   window.addEventListener("scroll", () => {
//     console.log(window.scrollY);
//     console.log(window.scrollX)
// });

const cards = document.querySelectorAll(".obs");



const observer = new IntersectionObserver(entries =>{
   entries.forEach(entry =>{
      entry.target.classList.toggle("show", entry.isIntersecting)
   })
},{
threshold: 0.1})

cards.forEach(card =>{
   observer.observe(card)
})

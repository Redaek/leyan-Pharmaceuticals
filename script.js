const docs = document.getElementsByTagName("section");
const home= document.getElementById("home")
const about = document.getElementById("about")
const serv = document.getElementById("services")
const product = document.getElementById("product")
const footer = document.getElementById("footer")





window.addEventListener("scroll", ()=>{
    if(window.scrollY >50){
        about.style.display = "block"
      
    }
     else{
        about.style.display = "none"
     }
  });

  window.addEventListener("scroll", ()=>{
    if(window.scrollY >600){
       serv.style.display = "block"
    }
     else{
        serv.style.display = "none"
     }
  });

  window.addEventListener("scroll", ()=>{
    if(window.scrollY >1100){
       product.style.display = "block"
    }
     else{
        product.style.display = "none"
     }
  });
  window.addEventListener("scroll", ()=>{
    if(window.scrollY >2050){
       footer.style.display = "block"
    }
     else{
        footer.style.display = "none"
     }
  });


  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(window.scrollX)
});







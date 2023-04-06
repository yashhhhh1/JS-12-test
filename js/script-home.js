function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

const heading = document.querySelector('.text');
let text =` I'm Yash Patel`;
let endvalue=1;
isForwards=true

let id = setInterval(() => {
  heading.textContent=text.substring(0,endvalue);
  
  if(isForwards){
    endvalue++;
  }
  else{
    endvalue--;
  }
  if (endvalue>text.length+10) {
    isForwards=false;
  }
  if(endvalue < 0){
    isForwards=true;
  }
}, 100);



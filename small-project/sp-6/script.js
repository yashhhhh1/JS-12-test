
const Panels=document.querySelectorAll('.panel');

function toggleOpen(){
  // console.log('hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  // console.log(e.propertyName);
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}
Panels.forEach(panel =>panel.addEventListener('click',toggleOpen));
Panels.forEach(panel =>panel.addEventListener('transitionend',
toggleActive));
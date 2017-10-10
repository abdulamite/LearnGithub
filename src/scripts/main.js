const title = document.querySelector('.title');

function sayHello(){
  this.style.color = "red";
}

title.addEventListener('click',sayHello);

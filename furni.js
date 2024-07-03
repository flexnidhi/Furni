'use strict';

const userEl = document.querySelectorAll(".user"); 
const overlay = document.querySelector(".overlay");
const formBodyEl = document.querySelector(".formBody");
const closeModal = document.querySelector(".close_modal");

console.log(userEl);
const close=function(){
  formBodyEl.classList.add("hidden");
    overlay.classList.add("hidden")
}

for(let i=0;i < userEl.length;i++){
  userEl[i].addEventListener("click",function(){
    formBodyEl.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}



closeModal.addEventListener("click", function() {
    close();
});


overlay.addEventListener("click", function() {
    close();
});


document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" &&!formBodyEl.classList.contains('hidden')){
        console.log(e.key);
        close();
    }
    
    
});



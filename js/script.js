const touchArea = document.getElementById("touch-area");
const counter = document.getElementById("counter");

function updateCounter(event) {

  let cantidad = event.touches.length;
  let cancionCelular = document.getElementById("cancion-celular");

  

  counter.textContent = cantidad;

  if(cantidad == 0){
    touchArea.style.backgroundColor = "rgb(255, 174, 0)"; 
    cancionCelular.pause();
  
  }
  if(cantidad == 1){
    touchArea.style.backgroundColor = "rgb(0, 174, 250)"; 

       cancionCelular.play();
    
  
  
  }
  if(cantidad == 2){
    touchArea.style.backgroundColor = "rgb(255, 0, 250)";
    cancionCelular.pause();
  }
  if(cantidad == 3){
    touchArea.style.backgroundColor = "rgb(0, 138, 255)";
  }
}

touchArea.addEventListener("touchstart", updateCounter, { passive: false });
touchArea.addEventListener("touchmove", updateCounter, { passive: false });
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);





 


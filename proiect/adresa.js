function mOver(obj) {
    obj.innerHTML = "Vis-a-vis de Universitatea din Bucuresti"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Detalii despre locatie"
  }


let b=document.getElementById("b");
b.style.top="500px";
b.style.left="500px";
document.addEventListener("keydown", (e) => {
    console.log(b.style.top)
    switch(e.code) {   
        case 'KeyW': 
            b.style.top = `${parseInt(b.style.top.slice(0, -2)) - 10}px`;
            break;
        case 'KeyS': 
            b.style.top = `${parseInt(b.style.top.slice(0, -2)) + 10}px`;
            break;
        case 'KeyA': 
            b.style.left = `${parseInt(b.style.left.slice(0, -2)) - 10}px`;
            break;
        case 'KeyD': 
            b.style.left = `${parseInt(b.style.left.slice(0, -2)) + 10}px`;
            break;          
        }
})
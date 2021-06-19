//Codigo foto
let foto = document.getElementById("imagen");
let boton = document.getElementById("boton");
let control = true;
function ocultar(){
    if(control){
        foto.style.display="none";
        boton.style.display="block";
    }
}

function mostrar(){
    foto.style.display="block";
    boton.style.display="none";
    control = false;
}
foto.addEventListener("mouseover",ocultar,false);
boton.addEventListener("click",mostrar,false);

//mover caja
let cajamover = document.getElementById("movercaja");

//Contadores
let contAbajo = 600;



function moverabajo(){
    contAbajo = contAbajo + 20;
    cajamover.style.top= contAbajo+"px";
}



cajamover.addEventListener("click",moverabajo);

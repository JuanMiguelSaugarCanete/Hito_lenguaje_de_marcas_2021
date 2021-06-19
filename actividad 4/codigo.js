
let fechafinal = new Date()

fechafinal.setHours(0,0,0,0);

function comprobar(){
    let correo = document.getElementById("email").value;
    let elegirciudad = document.getElementById("elegirciudad").value;
    let cursos = document.getElementById("cursos").value;
    let fechacurso= document.getElementById("fechacurso").value;
    
    
    fechacurso = new Date(fechacurso);
    
    
    if(fechacurso >= fechafinal){
        window.alert("Email:"+correo+", Ciudad:"+elegirciudad+", Curso:"+cursos+", Fecha del curso:"+fechacurso);
    }else{
        window.alert("La fecha del curso es incorrecta, solo puede ser igual o posterior a la de hoy");
    }
}
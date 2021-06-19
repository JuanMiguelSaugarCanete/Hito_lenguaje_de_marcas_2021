
let impares = [];
let modulo;
let sumatotal = 0;
let numero = window.prompt("Pon un número del 1 al 1000");
if(numero <=100){
    for (let index = numero; index < 1000; index++) {
        modulo = index%2;
    
        if(modulo!=0){
            impares.push(index);
            sumatotal = sumatotal + index;
        }
        
    }
    window.alert(impares);
    window.alert(sumatotal);

}else{
    window.alert("Debes de insertar un número del 0 al 100, pruebe de nuevo");
}


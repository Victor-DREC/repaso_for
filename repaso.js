function mostrar(opcion){
    switch(opcion){
        case 1: ejercicio1();
           break;
        case 2: centenas();
           break;
        case 3: centenasRegresivo();
           break;
        case 4: mostrarMensaje1();
           break;
        case 5: mostrarMensaje2();
           break;
        case 6: mostrarMensaje3();
           break;
        case 7: mostrarMensaje4();
           break;
    }
}

function ejercicio1(){
    for(let i=1; i <= 5; i++){
        console.log(i);
    }
}

function centenas(){
    for(let i=100; i <= 900; i+=100){
        console.log(i);
    }
}

function centenasRegresivo(){
    for(let i=1000; i >= 800; i-=100){
        console.log(i);
    }
}

function mostrarMensaje1(){
    for(let i=5; i < 8; i++){
        console.log("Mensaje 1 (Iteraccion: "+i+")");
    }
}

function mostrarMensaje2(){
    for(let i=10; i >= 8; i--){
        console.log("Mensaje 2 (Iteraccion: "+i+")");
    }
}

function mostrarMensaje3(){
    for(let i=0; i < 3; i++){
        console.log("Mensaje 3 (Iteraccion: "+i+")");
    }
}

function mostrarMensaje4(){
    for(let i=8; i > 5; i--){
        console.log("Mensaje 4 (Iteraccion: "+i+")");
    }
}


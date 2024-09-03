/* Funciones = Bloque de codigo que permite utilizar una estructura donde se necesita (solo con una definicion) 
- Simplificacion del Codigo
- Reutilizacion del Codigo
- Mantenimiento del Codigo

En Javascript hay 3 funciones
1- Funcion Regular/Tradicional
    -Funciones de Expresion = Es una funcion asignada a una variable que se tiene que llamar despues de su definicion
    -Funciones declarativas = Que la funcion queda guardada dentro de todo el codigo y es accesible desde cualquier parte (se puede llamar antes de definirse)
2- Funcion Flecha
    -Funciones de Expresion
3- Funcion Anonima 

1- se define una funcion (darle un nombre y agregarle el contenido de codigo a ejecutar)
2- Se llama o se invoca la funcion*/

/* Funcion regular - definicion*/
function unaFuncion(){
    console.log(25*25);
    console.log(25-25);
    console.log(25+25);
    console.log(25/25);
}
/* Funcion regular - Llamado*/
unaFuncion()

let nombre = prompt("Caray");
console.log(nombre);

let unaFuncion2 = function(){
    console.log(50*50);
    console.log(50-50);
    console.log(50+50);
    console.log(50/50);
}

unaFuncion2()

let repetir = true;
while(repetir){
    let opcion = prompt("Seleccione:\n1 - Sumar\n2 - restar\n3 - Multiplicar\n4 - Dividir\n5 - Todas\n6 - Salir");
    switch(opcion){
        case "1":
            suma();
            break;
        case "2":
            resta();
            break;
        case "3":
            multiplicacion();
            break;
        case "4":
            division();
            break;
        case "5":
            todas();
            break;
        case "6":
            console.log("Gracias, vuelva pronto");
            repetir = false;
            break;
    }
}

function suma(){
    let numeroUno = Number(prompt("Ingrese un numero: "));
    let numeroDos = Number(prompt("Ingrese un numero: "));
    console.log(numeroUno+numeroDos);
}
function resta(){
    let numeroUno = Number(prompt("Ingrese un numero: "));
    let numeroDos = Number(prompt("Ingrese un numero: "));
    console.log(numeroUno-numeroDos);
}
function multiplicacion(){
    let numeroUno = Number(prompt("Ingrese un numero: "));
    let numeroDos = Number(prompt("Ingrese un numero: "));
    console.log(numeroUno*numeroDos);
}
function division(){
    let numeroUno = Number(prompt("Ingrese un numero mayor a 0: "));
    let numeroDos = Number(prompt("Ingrese un numero mayor a 0: "));
    if(numeroUno == 0 || numeroDos == 0){
        console.log("No se puede dividir por 0");
    }
    console.log(numeroUno/numeroDos);
    
}
function todas(){
    let numeroUno = Number(prompt("Ingrese un numero: "));
    let numeroDos = Number(prompt("Ingrese un numero: "));
    console.log(numeroUno+numeroDos);
    console.log(numeroUno-numeroDos);
    console.log(numeroUno*numeroDos);
    console.log(numeroUno/numeroDos);
}


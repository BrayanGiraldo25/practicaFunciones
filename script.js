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
/* function unaFuncion(){
    console.log(25*25);
    console.log(25-25);
    console.log(25+25);
    console.log(25/25);
}
 Funcion regular - Llamado
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


Estructura de datos:

1. Arreglos (Vectores)
- Simulacion de datos (almacenamiento)
- Tamao o longitud = Dado por la cantidad dentro de su posicion
- Posicion = Esta dado por la ecuacion n-1, donde n es el elemento
  Los arreglos estan asociados al ciclo for
    --> Recorrido de un arreglo: interacion dentro del arreglo por cada elemento: buscar contenido y realizar alguna operacion matematica booleana
    --> Llenanado de un arreglo: interacion dentro  del arreglo por cada elemento: agregar contenido a una posicion del arreglo
    metodos de los arreglos:
    - push(), pop(), shift(), unshift(),
    push: metodo que agrega un elemento a la ultima posicion
    pop: metodo que elimina la ultima posicion
    shift: metodo que elimina la primer posicion
    unshift: metodo que agrega un elemento a la primer posicion
    splice(): Metodo para eliminar un elemento seleccionado
    map(): Metodo que recorre un arreglo, aplica una condicion y reotrna un nuevo arreglo con la nueva informacion
    find(): Metodo que recorre un arreglo, aplica una condicion y retorna un elemnto. El metodo filter no es mutable, significa que no cambia el valor original del arreglo
    forEach(): 
    Filter(): Metodo que recorre un arreglo aplica una condicion y retorna un arreglo, el metodo filter es no mutable, significa que no cambia el valor original del arreglo
    some():
    join(), split()
2. Objetos
- Agrupacion de informacion de un mismo elemento
} */

alert("Bienvenido a la pagina de practicas");

/* function unaFuncion(){
    let n = 5+5;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < 9; index++) {
    if(numeros[index] % 2 == 0){
        console.log("El numero: " + index + " Es un numero impar");
    }
}

let estudiantes =["Lina", "Paola", "Carol", "Emmanuel", "David", "Mateo"];
for (let index = 0; index < 2; index++){
    let estudiante = prompt("El nombre del estudiante es: ");
    if(estudiante == estudiantes[index]){
        console.log("El estudiante " + estudiante + " existe en la base de datos");
    } else{
        console.log("No existe dicho estudiante");
    }
} */

/* let personas = ["Camila", "Luisa", "Felipe", "Ana", "Tomas", "Andrea"];
let edades = [17, 27, 35, 15, 23, 18];
for (let index = 0; index < 6; index++){
    if (edades[index] > 10){
        console.log("La persona " + personas[index] + " tiene " + edades[index] + " años");
    }
} */

/* let personas = [];
let edades = [];
for (let index = 0; index < 5; index++){
    let persona = prompt("Ingresa el nombre de la persona: ");    
    let edad = prompt("Ingresa la edad de la persona: ");
    personas[index] = persona
    edades[index] = edad    
}

for (let index = 0; index < 5; index++){
    if (edades[index] >= 15){
        console.log("La persona " + personas[index] + " tiene " + edades[index] + " años");
        }
} */


   


   let nombres3 = ["Luisa", "Camila", "Ana", "Luisa", "Miguel", "Adriana", "Andrea", "Felipe", "Camilo", "Ana"];
   let nuevoNombre = nombres3.find((nombres3)=>{
    if (nombres3 == "Ana"){
        return nombres3
    }
   })
   console.log(nombres3);
   console.log(nuevoNombre);


/* numeros.splice(0,2);
console.log(numeros);
numeros.splice(3,1);
console.log(numeros); */


// let cantidad = prompt("cuantos alumnos son?");
// let alumnosTotales =[];

// for (i = 0; i < cantidad; i++){
//         alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p)=>{
//         let presencia = prompt(nombre);
//         if (presencia == "p" || presencia == "P") {
//                 alumnosTotales[p][1]++;
//         }
// }

// for(i = 0; i < 30; i++){
//         for(alumno in alumnosTotales){
//                 tomarAsistencia(alumnosTotales[alumno][0],alumno);
//         }
// }

// for(alumno in alumnosTotales){
//         let resultado = `${alumnosTotales[alumno][0]}:<br>
//         ____Presentes: <b>${alumnosTotales[alumno][1]}<b> <br>
//         ____Ausencias: <b>${30-alumnosTotales[alumno][1]} <b>`;
//         if (30- alumnosTotales[alumno][1] >18) {
//                 resultado += "Reprobado por inasistencia <br> <br>";
//         }else{
//                 resultado += "<br><br>";
//         }

//         document.write(resultado);

// }


// const sumar = (num1,num2)=>{
//         return parseInt(num1) + parseInt(num2);

// }
// const restar = (num1,num2)=>{
//         return parseInt(num1) - parseInt(num2);

// }
// const multiplicar = (num1,num2)=>{
//         return parseInt(num1) * parseInt(num2);

// }
// const dividir = (num1,num2)=>{
//         return parseInt(num1) / parseInt(num2);

// }


// alert("Que operacion quieres realizar?");
// let operacion = prompt("sumar, restar , multiplicar , dividir"); 

// if (operacion == "sumar" || operacion ==="Sumar") {
//         let numero1 = prompt("dame tu primer numero para  sumar");
//         let numero2 = prompt("dame tu segundo numero para  sumar");
//         resultado = sumar(numero1,numero2);
//         alert(`tu resultado es: ${resultado}`);
// }
// else if (operacion == "restar" || operacion ==="Restar") {
//         let numero1 = prompt("dame tu primer numero para  restar");
//         let numero2 = prompt("dame tu segundo numero para  restar");
//         resultado = restar(numero1,numero2);
//         alert(`tu resultado es: ${resultado}`);
// }
//  else if (operacion == "dividir" || operacion ==="Dividir") {
//         let numero1 = prompt("dame tu primer numero para dividir");
//         let numero2 = prompt("dame tu segundo numero para dividir");
//         resultado = dividir(numero1,numero2);
//         alert(`tu resultado es: ${resultado}`);
// }
// else if (operacion == "multiplicar" || operacion ==="Multiplicar") {
//         let numero1 = prompt("dame tu primer numero para  multiplicar");
//         let numero2 = prompt("dame tu segundo numero para  multiplicar");
//         resultado = multiplicar(numero1,numero2);
//         alert(`tu resultado es: ${resultado}`);
// }
// else {
//         alert (`lo que escribiste ${operacion} no existe cojo de mierda`); 
// }

// const tiposSuscripciones = {
//         free: "Solo puedes tomar una clase",
//         basic: "puedes tomar dos clases",
//         expert: "puedes tomar casi todo",
//         expertduo: "dos personas pueden tomar todo",
// };

// function conseguirTiposSuscripciones (suscripcion){
//         if (tiposSuscripciones[suscripcion]) {
//                 console.log(tiposSuscripciones[suscripcion]);
//                 return;
//         }
//         console.warn("no existe");

// }
// addEventListener escuchar los eventos desde JS



const h1 = document.querySelector("h1"); 
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2"); 
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector(".resultado");


btn.addEventListener("click",btnOnClick); 
//btn.addEventListener("nombre del elemeno",la funcion va sin () cuando lo ponemos dentro del addEventListener o codio JS );

function btnOnClick(){
        let resultadoFinal = parseInt(input1.value) + parseInt(input2.value);
        //alert("Tu resultado es: " + resultadoFinal);
        resultado.innerText ="Tu resultado es: " + resultadoFinal;

}





// Clase persona

alert ("Bienvenido a la evaluacion de Desempeño 2023")

class Persona {
    constructor(nombre,edad,tiempo){
        this.nombre=nombre;
        // this.edad=edad;
        // this.tiempo=tiempo;
        this.objetivos=[];
        this.performance=0;
    }

    agregarObjetivo(ListaObjetivo){
        this.objetivos=ListaObjetivo;
    }

    
}


// Definir la clase Objetivos

class Objetivo {
    constructor (obj,min,max,peso){
        this.obj= obj;
        this.min=min;
        this.max=max;
        this.peso=peso;
        this.real=0;
        this.pesoreal=0;
    }


}

//funcion para ingresar datos de persona 

function IngresarDatosPersona(){
    const nombre= prompt("Ingresar nombre de colaborador:");

    // const edad= prompt("Ingresar edad de colaborador:");
    // const tiempo= prompt("Ingresar tiempo de colaborador:");

    return new Persona(nombre);
}


//Funcion para ingresar datos de cinco objetivos

function ingresarObjetivos() {
    const objetivos = [];
    let pesototal=0;
  
    for (let i = 0; i < 4; i++) {
    
      let obj= prompt ("Ingresa nombre del objetivo "+(i+1));
      console.log(obj);
      let min = parseFloat(prompt("Ingresa el valor mínimo para el objetivo "+(i + 1)));
      console.log(min);
      let max = parseFloat(prompt("Ingresa el valor máximo para el objetivo "+(i + 1)));
      console.log(max);
      let peso= parseFloat(prompt("Ingresa el peso para el objetivo"+ (i + 1)));
      console.log(peso)

      pesototal+=peso;
        
      objetivos.push(new Objetivo(obj,min, max, peso));
      console.log(pesototal);
    }

    if (pesototal!=100){
        alert("La suma de los pesos debe ser mayor a 100");
        return ingresarObjetivos()
    }


    return objetivos;
  }
  







// haciendo la funcion del calculo inversamente proporcional 



function calculoInverso(min,max,pesos,numero) {

    let puntaje;

    if (numero>=min){
        puntaje=0;
    } 
    else if (numero <=max) {
        puntaje=pesos;
    }
    else if (numero>max && numero<min) {
        puntaje= (numero-min)*(100/(max-min))/100*pesos;
    }
    return puntaje
}


// funcion calculo directo 

function calculoDirecto(min,max,pesos,numero) {

    let puntaje;

    if (numero>=max){
        puntaje=pesos;
    } 
    else if (numero<=min) {
        puntaje=0;
    }
    // else if (numero>min && numero>max) {
    else{
        puntaje= ((pesos)/(max-min))*(numero-min);
    }
       
    
    return puntaje
}

// Haciendo funcion para  calcular resultados

function calcularResultado(colaborador){
    let perf = 0
    for(const i of colaborador.objetivos){;
        i.real = parseFloat(prompt("Ingrese valor real de objetivo "+i.obj));

        if(i.max> i.min){

            i.pesoreal=calculoDirecto(i.min,i.max,i.peso,i.real)
        }

        else{
            i.pesoreal=calculoInverso(i.min,i.max,i.peso,i.real)
        }

        perf+=i.pesoreal
    }

    colaborador.performance=perf;
}


const personas= []

while(true){
    const colab = IngresarDatosPersona();
    const objetivos = ingresarObjetivos();
    
    colab.objetivos = objetivos;
    personas.push(colab);

    const continuar = confirm("¿Quieres ingresar datos de otra persona?");
    if (!continuar) {
      break;
    }
}

let nomColabEvaluar = prompt("Ingrese nombre de la persona que quiera evaluar: ")

const personaEvaluar = personas.find((el)=> el.nombre===nomColabEvaluar);

calcularResultado(personaEvaluar)
console.log(personaEvaluar.objetivos)
console.log(personaEvaluar)

alert("El desempeño de "+personaEvaluar.nombre+" es "+personaEvaluar.performance)




// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let contador=0;

//creo la funcion de asignar texto de manera que me permita mostar el resultado de forma vertical sin perder ningun nombre
function asignartexto1(elemento, texto){
    let elementoHTML= document.getElementById(elemento);
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    elementoHTML.appendChild(nuevoItem);
}

function asignartexto(elemento, texto){

    // asigno texto que se que no nececito que cmabien mucho solo
    //  en caso especiales yq ue se pueda eliminar no que muestre una lista como en el anterior.
    let elemnto = document.getElementById(elemento);
    elemnto.innerHTML = texto;

}

function limpiarcaja(){
    //limpio la caja de texto para que no se repita el nombre
    let valorCaja=document.querySelector("#amigo");
    valorCaja.value = "";
}

function agregarAmigo(){

    // obtengo el resultado del input ya que no nececito compara un numero entero omito el parseInt
    // y guardo el valor del elemento en una variable
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
       alert("Ingrese un nombre valido de amigo.");
    }
      
 else {
    //verifico que el nombre no se repita en la lista
    if(listaAmigos.includes(amigo))
    {
        asignartexto("resultado","El amigo ya se encuentra en la lista.");
    }
    else {
        //si el nombre no se repite lo agrego a la lista y muestro el resultado
        //incremento contador que me ayudara para hacer el sorteo a traves de math.random y teniendo como maximo el contador
        console.log(contador);
        console.log(listaAmigos);
        listaAmigos.push(amigo);
        asignartexto("resultado","El amigo se ha agregado a la lista.");
        asignartexto1("listaAmigos",amigo);
        contador++;
        limpiarcaja();
    }
 }


}

function sortearAmigo(){

let numeroAleatorio = Math.floor(Math.random() * contador);

asignartexto("resultado", `El amigo seleccionado es: ${listaAmigos[numeroAleatorio]}`);

}


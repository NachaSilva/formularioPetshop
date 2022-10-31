const inputNacimiento = document.querySelector("#birth")

inputNacimiento.addEventListener("blur", (evento) => {  //blur es cuando salga, por eso es distinto a click
validarNacimiento(evento.target)
});

function validarNacimiento(input){
   const fecha = new Date(input.value)
   console.log(fecha); 
}

function mayorEdad(fecha){

}
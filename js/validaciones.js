export function valida(input) {
   const tipoDeInput = input.dataset.tipo;
   if(validadores[tipoDeInput]){
      validadores[tipoDeInput](input)
   } 

   //para que una vez que coloques el dato en una casilla, deje de estar en roo que debes completar
   if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
   } else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
   }
}

const tipoDeErrores = [
   "valueMissing", 
   "typeMismatch",
   "patternMismatch", 
   "customError",
];


const mensajesDeError = {
   nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
   },
   email: {
      valueMissing: "El campo email no puede estar vacío",
      typeMismatch: "El correo no es válido",
   },
   password: {
      valueMissing: "El campo password no puede estar vacío",
      patternMismatch: "Al menos 6 caracteres y máximo 12. Debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
   },
   nacimiento: {
      valueMissing: "Este campo no puede estar vacío",
      customError: "Debes tener al menos18 años de edad", 
   },
   numero: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El formato requerido es xxxxxxxxxx 10 números"
   },
   direccion: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "La dirección debe contener entre 10 a 40 caractereres"
   },
   ciudad: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "La ciudad debe contener entre 5 a 30 caractereres"
   },
   estado: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El estado debe contener entre 5 a 30 caractereres"
   }
};

const validadores = {
   nacimiento: input => validarNacimiento(input) //un input por cada item, recordar colocar en html data-tipo y el input
};

function mostrarMensajeDeError(tipoDeInput, input){
   let mensaje = "";
   tipoDeErrores.forEach((error) => {
      if(input.validity[error]) {
         console.log(tipoDeInput, error);
         console.log(input.validity[error]);
         console.log(mensajesDeError[tipoDeInput][error]);
         mensaje = mensajesDeError[tipoDeInput][error];
      }
   } );
      
   return mensaje
}

function validarNacimiento(input){
   const fechaCliente = new Date(input.value);
   let mensaje = "";
   if (!mayorDeEdad(fechaCliente)){   //si no eres mayor de edad, entonces al hacer click en registrar, saldrá el mensaje
      mensaje = "Debes tener al menos 18 años de edad";
   }

   input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
   const fechaActual = new Date();
   const diferenciaFechas = new Date(
   fecha.getUTCFullYear() + 18,
   fecha.getUTCMonth(), 
   fecha.getUTCDate());

   return diferenciaFechas <= fechaActual; //si tienes menos de 18 años, saldrá en consola false. Si tiene más de 18 saldrá true
}
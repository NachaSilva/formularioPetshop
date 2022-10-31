export function valida(input) {
   const tipoDeInput = input.dataset.tipo;
   if(validadores[tipoDeInput]){
      validadores[tipoDeInput](input)
   } 
}

const validadores = {
   nacimiento: input => validarNacimiento(input) //un input por cada item, recordar colocar en html data-tipo y el input
}

function validarNacimiento(input){
   const fechaCliente = new Date(input.value)
   let mensaje = ""
   if (!mayorEdad(fechaCliente)){   //si no eres mayor de edad, entonces al hacer click en registrar, saldrá el mensaje
      mensaje = "Debes tener al menos18 años de edad"
   }

   input.setCustomValidity(mensaje)
}

function mayorEdad(fecha){
   const fechaActual = new Date();
   const diferenciaFechas = new Date(
   fecha.getUTCFullYear() + 18,
   fecha.getUTCMonth(), 
   fecha.getUTCDate());

   return diferenciaFechas <= fechaActual; //si tienes menos de 18 años, saldrá en consola false. Si tiene más de 18 saldrá true
}
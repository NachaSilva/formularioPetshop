import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //va a contar todos los imput para luego al salir del blur funcione en validaciones, ya ahí se debe hacer uno por cada item

inputs.forEach( input => {
    input.addEventListener('blur', (input) =>{
        valida(input.target)
    })
})
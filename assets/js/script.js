// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            // Opcional: limpiar el formulario después de enviar
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});


function validateForm() {
    let isValid = true;
    
    // Nombre

    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '') {
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2) {
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        nombre.classList.remove('no-valid');
    }
    
    // Ciudad

    const ciudad = document.getElementById('ciudad');
    const valorCiudad = ciudad.value.trim();
    
    if (valorCiudad === '') {
        ciudad.classList.add('no-valid');
        isValid = false;
    } else if (valorCiudad.length < 2) {
        ciudad.classList.add('no-valid');
        isValid = false;
    } else {
        ciudad.classList.remove('no-valid');
    }  
       
    // Email

    const email = document.getElementById('email');
    const valorEmail = email.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (valorEmail === '' || !regexEmail.test(valorEmail)) {
        email.classList.add('no-valid');
        isValid = false;
    } else {
        email.classList.remove('no-valid');
    }
    
    // Asunto

    const asunto = document.getElementById('asunto');
    const valorAsunto = asunto.value.trim();
    const regexAsunto = /^.{10,}$/;

    if(valorAsunto == ''){
        isValid = false;
        asunto.classList.add('no-valid');
    } else if(!regexAsunto.test(valorAsunto)) {
        isValid = false;
        asunto.classList.add('no-valid');
    } else {
        asunto.classList.remove('no-valid');
    }
    
    // Descripción

    const descripcion = document.getElementById('descripcion');
    const valorDescripcion = descripcion.value.trim();
    const regexDescripcion = /^.{10,}$/;

    if(valorDescripcion == ''){
        isValid = false;
        descripcion.classList.add('no-valid');
    } else if(!regexDescripcion.test(valorDescripcion)) {
        isValid = false;
        descripcion.classList.add('no-valid');
    } else {
        descripcion.classList.remove('no-valid');
    }
   
    // Retornar el resultado final de la validación
    return isValid;
}


// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================
// Puedes crear funciones auxiliares para evitar repetir código
// Por ejemplo:

/**
 * Valida un campo de texto
 * @param {HTMLElement} campo - El elemento input a validar
 * @param {number} minLength - Longitud mínima requerida
 * @returns {boolean} - true si es válido, false si no
 */
function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}


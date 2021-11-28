const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const mensaje = document.getElementById('mensaje')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const menu = document.getElementById('menu')
const hide = document.getElementById('vecke')
const email = document.getElementById('email')
const regex = /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/i
var messages = []

email.addEventListener('keyup', (e) => {
    validar()
})

form.addEventListener('submit', (e) => {
        messages = []
        if (nombre.value === '' || nombre.value == null) {
            messages.push('Se requiere un nombre')
            nombre.classList.add('error')
        }else{nombre.classList.remove('error')}

        if (apellido.value === '' || apellido.value == null) {
            messages.push('Se requiere un apellido')
            apellido.classList.add('error')    
        }else{apellido.classList.remove('error')}

        if (email.value === '' || email.value == null) {
            email.classList.add('error')
        }
        
        if(email.classList.contains('error')){
            messages.push('Ingrese un email valido')
        }
        if (mensaje.value.length >= 1000) {
            messages.push('Limitar el mensaje a menos de 1000 caracteres')
            mensaje.classList.add('error')
        }else{mensaje.classList.remove('error')}
        
        if (mensaje.value.length == 0) {
            messages.push('Se requiere un mensaje')
            mensaje.classList.add('error')
        }else{mensaje.classList.remove('error')}

        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')   
        }
    })

form.addEventListener('submit', (e) => {
    if (messages.length == 0) {
        alert("Envio Exitoso")
    }
})
function countChars(obj){
    var maxLength = 1000;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">Superaste el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' Caracteres restantes';
    }
}

function validar (){
    if(regex.test(email.value)){
        email.classList.remove('error')
    }else {
        email.classList.add('error')}
}

/* FILTRAR CALENDARIO */

$(document).ready(function() {
    $("#filtrar").click(function() {
        filtrar();
    })
})
function filtrar() {
    const establecimiento=$("#establecimiento").val();
    const idioma=$("#idioma").val();
    
    $("#cursos article").hide();
    $(`#cursos .${establecimiento}.${idioma}`).show();  
}

/* FILTRAR NOMBRE ESTABLECIMIENTO */

$(document).ready(function() {
    $("#escuelas").hide();
    $("#filtrarprovincia").click(function() {
        filtrarprov();
        
    })
})
function filtrarprov() {
   
    const valorestablecimiento=$("#establecimientoboton").val(); 
   $(`#escuelas .${valorestablecimiento}`).show();  
   $(`#escuelas `).show();

}

//menu click
menu.addEventListener('click'), function(){
    if(hide.classList.contains('menu-hide')){
        hide.classList.remove('menu-hide')
    }else{
        hide.classList.add('menu-hide')
    }
}


  
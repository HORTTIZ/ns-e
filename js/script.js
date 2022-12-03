const contenedor = document.getElementById('container-saludo');
const boton = document.getElementById('submitname');
const loader = document.getElementById('loader');

boton.addEventListener('click', function() {
    if (nameInput.value == 0) {
        Swal.fire({
            text: 'Ingresa un nombre',
            icon: 'error',
            width: '50%',
            showDenyButton: false,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: '2000',
            timerProgressBar: true
        })
    } else {
        setTimeout(function carga(){
            loader.style.zIndex = '9999';
            setTimeout(function noCargar() {
                loader.style.zIndex = '-999';
                loader.style.opacity = '0';
            }, 1800);
        }, 0);
        setTimeout(function transicion(){
            contenedor.style.display = 'none';
        }, 2000);
    }
})




/* LOCAL STORAGE SALUDO USUARIO*/

const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");


form.addEventListener("submit", function (e) {
    e.preventDefault();
});

submitBtn.addEventListener("click", function () {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});


forgetBtn.addEventListener("click", function () {
    localStorage.removeItem("nombre");
    nameDisplayCheck();
});

// definir la función nameDisplayCheck()
function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        let name = localStorage.getItem("name");
        h1.textContent = "Bienvenido, " + name;
        personalGreeting.textContent = "¡Bienvenido a nuestro sitio web, " + name + "! Esperamos que te diviertas mientras estés aquí.";
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
    } else {
        h1.textContent = "Bienvenido a nuestro sitio web ";
        personalGreeting.textContent = "Bienvenido a nuestro sitio web. Esperamos que se diviertas mientras estés aquí.";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
    }
} 

document.body.onload = nameDisplayCheck;
/* FINAL SALUDO USUARIO*/
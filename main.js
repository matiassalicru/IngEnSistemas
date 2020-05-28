//Darkmode
function darkMode() {
    darkHead();
    myFunction();
    colorBlanco();
    linkColor();
}

//Lightmode
function lightMode() {
    darkHead();
    myFunctionLight();
    colorNegro();
    linkColor();
}


function myFunction() {
    document.getElementById("encabezado").style.backgroundImage = "url('./imagenes/darkback4.jpg')";
    document.getElementById("encabezado").style.backgroundSize = "cover";
    document.getElementById("encabezado").style.backgroundPosition = "top";
    document.getElementById("saludos").style.background = "none";
    document.getElementById("cleanName").style.color = "#eeeeee";
    let logo = document.getElementById("logoimg");
    logo.src = "/imagenes/logo3dark.png";
}


function myFunctionLight() {
    document.getElementById("encabezado").style.backgroundImage = "url('./imagenes/back.jpg')";
    document.getElementById("encabezado").style.backgroundPosition = "center";
    document.getElementById("saludos").style.backgroundColor = "#eeeeee";
    document.getElementById("cleanName").style.color = "#454545";
    let logo = document.getElementById("logoimg");
    logo.src = "/imagenes/logo3light.png";
}



// Hamburguer menú
function menu() {
    document.getElementById("menu").classList.toggle("show");
}

function hide() {
    document.getElementById("show").classList.add("mostrar");
}

function backToIndex() {
    document.documentElement.scrollTop = 0;
}

// No desarrollado aun

function noDesarrollado() {
    alert("Esto no está disponible aún gracias vuelva prontos").style.fontSize = "25";
}

//Cerrar el dropdown menu cliqueando afuera del boton
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("links");

        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Cambiar el color de los parrafos en Materias
function colorBlanco() {
    var x = document.getElementsByClassName("parrafo");

    for (let i = 0; i < x.length; i++) {
        x[i].style.color = "#fff";
    }
}

function colorNegro() {
    var x = document.getElementsByClassName("parrafo");

    for (let i = 0; i < x.length; i++) {
        x[i].style.color = "#000"
    }
}
//FIN

// Cambia el color de los Links

function linkColor() {
    var x = document.getElementsByClassName("navLink");

    for (let i = 0; i < x.length; i++) {
        x[i].classList.toggle("fontColor");
    }
}
// FIN


function darkHead() {
    document.getElementById("txtEnc").classList.toggle("darkHead");
    document.getElementById("body").classList.toggle("darkMode");
    document.getElementById("dark").classList.toggle("darkMode");
    document.getElementById("show2").classList.toggle("mostrar");
    document.getElementById("show").classList.toggle("mostrar");
}


//LOCAL STORAGE
if (typeof (Storage) != undefined) {

    function isEmpty(str = sessionStorage.getItem("usuario")) {
        return (!str || 0 === str.length || str === "null");
    }

    if (isEmpty()) {
        document.getElementById("saludo").innerHTML = "Bienvenido! <br> Te podés poner un nombre tocando acá";
    }

    else if (!isEmpty()) {
        document.getElementById("saludo").innerHTML = "¡Bienvenido/a de nuevo " + sessionStorage.getItem("usuario") + "!";
    }
}

else {
    alert("El navegador no soporta localStorage");
}


function cleanName() {

    var nombre = prompt("Como te llamas?");
    sessionStorage.setItem("usuario", nombre);

    if (isEmpty()) {
        document.getElementById("saludo").innerHTML = "Bienvenido! <br> Te podés poner un nombre tocando acá";
    }
    else {
        document.getElementById("saludo").innerHTML = "¡Te doy la bienvenida " + sessionStorage.getItem("usuario") + "!";
    }
}



document.getElementById("button").addEventListener("click", modoOscuro);

function modoOscuro() {
    // alert("Se ha activado el modo oscuro");
    document.getElementById("")
}


function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

const backToTop = document.querySelector('.volver');

backToTop.addEventListener('click', function () {
    smoothScroll('.contacto', 1000);

});

const goToBottom = document.querySelector('.contacto');

goToBottom.addEventListener('click', function () {
    smoothScroll('.volver', 1000);
});

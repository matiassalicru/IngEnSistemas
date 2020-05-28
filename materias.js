//Darkmode
function darkMode() {
    document.getElementById("show").classList.remove("mostrar");
    document.getElementById("show2").classList.add("mostrar");
    document.getElementById("body").classList.add("darkMode");
    document.getElementById("dark").classList.add("darkMode");
    document.getElementById("link1").classList.add("fontColor");
    document.getElementById("link2").classList.add("fontColor");
    document.getElementById("link3").classList.add("fontColor");
    document.getElementById("link4").classList.add("fontColor");
    let logo = document.getElementById("logoimg");
    logo.src = "/imagenes/logo3dark.png";
    toggle();
}


//Lightmode
function lightMode() {
    document.getElementById("show").classList.add("mostrar");
    document.getElementById("show2").classList.remove("mostrar");
    document.getElementById("body").classList.remove("darkMode");
    document.getElementById("dark").classList.remove("darkMode");
    document.getElementById("link1").classList.remove("fontColor");
    document.getElementById("link2").classList.remove("fontColor");
    document.getElementById("link3").classList.remove("fontColor");
    document.getElementById("link4").classList.remove("fontColor");
    let logo = document.getElementById("logoimg");
    logo.src = "/imagenes/logo3light.png";
    toggle2();
}

// Hamburguer menú
function menu() {
    document.getElementById("menu").classList.toggle("show");
}

function hide() {
    document.getElementById("show").classList.add("mostrar");
}

function noDesarrollado() {
    alert("Ups parece que eso todavía no funciona, Gracias vuelva prontos");
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

//Funcion que recorra los links

function links() {
    var a = document.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "#000";
    }
}

function toggle() {
    var x = document.getElementsByTagName("a");

    for (let i = 5; i < x.length; i++) {
        if (x[i].style.color = "rgb(171, 125, 245)") {
            x[i].style.color = "#b1adf5";
        }
    }
}

function toggle2() {
    var x = document.getElementsByTagName("a");

    for (let i = 5; i < x.length; i++) {
        if (x[i].style.color = "#b1adf5") {
            x[i].style.color = "rgb(171, 125, 245)";
        }
    }
}
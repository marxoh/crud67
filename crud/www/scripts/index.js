$(document).ready(function () { 
    obtener_datos();
    document.getElementById("tusuario").focus();
});

function obtener_datos() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        document.getElementById("result").innerHTML = xmlhttp.responseText;
        if ((document.getElementById("rojo") != null) && (document.getElementById("verde") != null)) {
            setTimeout(function () {
                document.getElementById("verde").style.left = "10px";
                document.getElementById("rojo").style.width = document.getElementById("verde").scrollWidth + "px";
                document.getElementById("verde").style.width = "300px";
            }, 0);
        }
    }
    xmlhttp.open("GET", "http://www.marxoh.hol.es/php/mostrar_datos.php", true);
    xmlhttp.send();
}

function agregar_datos() {
    var nombre_add = $("#nombre_add").text();
    var apellido_add = $("#apellido_add").text();
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            obtener_datos();
        }
    }
    alert("http://www.marxoh.hol.es/php/agregar.php?nombre_add=" + nombre_add + "&apellido_add=" + apellido_add);
    xmlhttp.open("GET", "http://www.marxoh.hol.es/php/agregar.php?nombre_add=" + nombre_add + "&apellido_add=" + apellido_add, true);
    xmlhttp.send();
}

$(document).on("blur", "#nombre_usuario", function () {
    setTimeout(function () {
        document.getElementById("wait").innerHTML = "<div class='loading'><span></span><span></span><span></span><span></span><span></span></div>";
    }, 0);
    setTimeout(function () {
        document.getElementById("wait").innerHTML = "";
    }, 2000);
    var usuarioID = $(this).data("id_usuario");
    var nombreActualizado = $(this).text();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        obtener_datos();
    }
    xmlhttp.open("GET", "http://www.marxoh.hol.es/php/actualizar.php?usuarioIDActualizado=" + usuarioID + "&nombreActualizado=" + nombreActualizado, true);
    xmlhttp.send();
})

$(document).on("click", "#eliminar", function () {
    var usuarioID = $(this).data("id");
    if (confirm("si?")) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                obtener_datos();
            }
        }
        xmlhttp.open("GET", "http://www.marxoh.hol.es/php/borrar.php?usuarioIDEliminado=" + usuarioID, true);
        xmlhttp.send();
    }
})

function aceptar() {
    var nombre = document.getElementById("tusuario").value;
    var pass = document.getElementById("tpassword").value;
    if (nombre != "") {
        var esta = "no";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.responseText == "si") {
                esta = "si";
            }
        }
        xmlhttp.open("GET", "http://www.marxoh.hol.es/php/login.php?nombre=" + nombre + "&pass=" + pass, false);
        xmlhttp.send();
        if (esta == "si") {
            document.getElementById("tusuario").value = "";
            document.getElementById("tpassword").value = "";
            rot12();
        } else if (esta == "no") {
            if (confirm('El nombre de usuario o la contraseña son incorrectos. Desea crear a "' + document.getElementById("tusuario").value + '"?')) {
                document.getElementById("tusuariod").value = document.getElementById("tusuario").value;
                document.getElementById("tpasswordd1").focus();
                goreg();
                document.getElementById("tusuario").value = "";
            } else {
                document.getElementById("tusuario").value = "";
                document.getElementById("tpassword").value = "";
            }
        }
    } else {
        document.getElementById("tusuario").value = "";
        document.getElementById("tpassword").value = "";
        alert("Debe ingresar un nombre de usuario.");
    }
}

function logon() {
    var nombre = document.getElementById("tusuariod").value;
    var pass1 = document.getElementById("tpasswordd1").value;
    var pass2 = document.getElementById("tpasswordd2").value;
    if (nombre != "") {
        if (pass1 == pass2) {//validar al instante con un check
            var esta = "no";
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.responseText == "si") {
                    esta = "si";
                }
            }
            xmlhttp.open("GET", "http://www.marxoh.hol.es/php/login.php?nombre=" + nombre + "&pass=" + pass1, false);
            xmlhttp.send();
            if (esta == "no") {
                document.getElementById("tusuariod").value = "";
                document.getElementById("tpasswordd1").value = "";
                document.getElementById("tpasswordd2").value = "";
                setTimeout("reg('" + nombre + "','" + pass1 + "');", 50);
            } else {
                alert("Usuario ya existe, intentelo denuevo.");
            }
        } else {
            document.getElementById("tpasswordd1").value = "";
            document.getElementById("tpasswordd2").value = "";
            alert("Passwords no coinciden.");
        }
    } else {
        document.getElementById("tusuariod").value = "";
        document.getElementById("tpasswordd1").value = "";
        document.getElementById("tpasswordd2").value = "";
        alert("Debe ingresar un nombre de usuario.");
    }
}

function reg2table() {
    $('.page').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
    $('.popup').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
    $("#pagetwo").addClass('active animated slideInRight');
    $("#register").addClass('active animated slideOutLeft');
    setTimeout(function () {
        $("#register").removeClass('active');
    }, 400);
    setTimeout(function () {
        permission1 = 0;
        permission2 = 1;
    }, 1000);
}

function reg(nombre, pass) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            obtener_datos();
        }
    }
    reg2table();
    xmlhttp.open("GET", "http://www.marxoh.hol.es/php/registro.php?nombre=" + nombre + "&pass=" + pass, true);
    xmlhttp.send();
}

$(document).keypress(function (e) {
    if (e.which == 13) {
        if (location.href.includes("logon") == false) {
            aceptar();
        } else {
            logon();
        }
    }
});

permission1 = 1;
permission2 = 0; 

function rot12() {
    if ((permission1 == 1) && (permission2 == 0)) {
        permission1 = 0;
        permission2 = 0;
        setTimeout(function () {
            document.getElementById("wait").innerHTML = "<div class='loading'><span></span><span></span><span></span><span></span><span></span></div>";
        }, 0);
        setTimeout(function () {
            document.getElementById("wait").innerHTML = "";
        }, 2000);
        setTimeout(function () {
            $('.page').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
            $("#pagetwo").addClass('active animated slideInRight');
            $("#pageone").addClass('active animated slideOutLeft');
            setTimeout(function () {
                $("#pageone").removeClass('active');
            }, 400);
            setTimeout(function () {
                permission1 = 0;
                permission2 = 1;
            }, 1000);
        }, 2000);
    }
}

function rot0() {
    if ((permission2 == 1) && (permission1 == 0)) {
        permission1 = 0;
        permission2 = 0;
        $('.page').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
        $("#pageone").addClass('active animated slideInLeft');
        $("#pagetwo").addClass('active animated slideOutRight');
        setTimeout(function () {
            $("#pagetwo").removeClass('active');
        }, 400);
        setTimeout(function () {
            permission1 = 1;
            permission2 = 0;
        }, 1000);
    }
}

function goreg() {
    $('.page').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
    $('.popup').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
    $("#pageone").addClass('active animated zoomOut');
    $("#register").addClass('active animated zoomIn');
    setTimeout(function () {
        $("#pageone").removeClass('active');
    }, 400);
}

function asd() {
    $('.page').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
    $('.popup').removeClass('active animated slideInRight slideOutRight slideOutLeft slideInLeft zoomOut zoomIn');
    $("#register").addClass('active animated zoomOut');
    $("#pageone").addClass('active animated zoomIn');
    setTimeout(function () {
        $("#register").removeClass('active');
    }, 400);
}

function ox() {
    document.getElementById("rojo").style.width = document.getElementById("verde").scrollWidth + "px";
}

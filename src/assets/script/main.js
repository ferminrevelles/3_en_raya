console.log("Juego 3 en raya");

// Creación del aaray multidimensional para indicar jugada
var player = "J1";
var J1;
var J2;
var tablero = new Array(3);
tablero[0] = new Array(3);
tablero[1] = new Array(3);
tablero[2] = new Array(3);

document.getElementById("comenzar").addEventListener('click',pedirDatos);

function pedirDatos() {
    console.log("pedirDatos");
    J1 = prompt ("Entra el nombre del primer jugador","Jugador 1");
    J2 = prompt ("Entra el nombre del primer jugador","Jugador 2");
    document.getElementById("jugador1").innerHTML = J1;
    document.getElementById("jugador2").innerHTML = J2;
    document.getElementById("view_gamer").style.display = "block";
    crearEventos();
}
// Declaración de elementos del DOM a una variable

var A1 = document.getElementById("00");
var B1 = document.getElementById("01");
var C1 = document.getElementById("02");
var A2 = document.getElementById("10");
var B2 = document.getElementById("11");
var C2 = document.getElementById("12");
var A3 = document.getElementById("20");
var B3 = document.getElementById("21");
var C3 = document.getElementById("22");

// Resaltar zona en la que el jugador interactúa
function crearEventos(){
    console.log ("Iniciado el juego y creación de eventos para el mismo");
A1.addEventListener('mouseover',resalt);
A1.addEventListener('mouseout',oring);
B1.addEventListener('mouseover',resalt);
B1.addEventListener('mouseout',oring);
C1.addEventListener('mouseover',resalt);
C1.addEventListener('mouseout',oring);
A2.addEventListener('mouseover',resalt);
A2.addEventListener('mouseout',oring);
B2.addEventListener('mouseover',resalt);
B2.addEventListener('mouseout',oring);
C2.addEventListener('mouseover',resalt);
C2.addEventListener('mouseout',oring);
A3.addEventListener('mouseover',resalt);
A3.addEventListener('mouseout',oring);
B3.addEventListener('mouseover',resalt);
B3.addEventListener('mouseout',oring);
C3.addEventListener('mouseover',resalt);
C3.addEventListener('mouseout',oring);

// Marcar opción elegida por jugador

A1.addEventListener("click", mark);
B1.addEventListener("click", mark);
C1.addEventListener("click", mark);
A2.addEventListener("click", mark);
B2.addEventListener("click", mark);
C2.addEventListener("click", mark);
A3.addEventListener("click", mark);
B3.addEventListener("click", mark);
C3.addEventListener("click", mark);
}

function resalt(zone) {
    document.getElementById(zone.path[0].id).style = "background-color: rgb(0, 255, 98);";
}
function oring (zone){
    document.getElementById(zone.path[0].id).style = "background-color: transparency;";
}

// Función para dar estilo al DOM según la elección de cada jugador
function mark (zone) {
    console.log("marcar pulsación");
    markMatriz(player,zone.path[0].id);  //Función para marcar la elección del jugador en la matriz
    findWinner(player);
    zone.path[0].removeEventListener("mouseout",oring);
    zone.path[0].removeEventListener("mouseover",resalt);
    zone.path[0].removeEventListener("click",mark);
    if (player == "J1"){
    document.getElementById(zone.path[0].id).style = "background-color: blue;";
    player = "J2";
    }else {
        document.getElementById(zone.path[0].id).style = "background-color: red;";
        player = "J1";
    }
   
}

// Matriz de control de jugadas.
function markMatriz(player,zone){
    console.log("Guardar pulsación en la matriz");
    var positions = zone.split("");  // Convertir cadena en un array con cada letra.
    tablero[positions[0]][positions[1]] = player;
    
}

// Función para buscar ganador

function findWinner(player){
    console.log("comprobar pulsación y posible ganador");
    var winner;
    if ((tablero[0][0]==player) && (tablero[0][1]==player) && (tablero[0][2]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[1][0]==player) && (tablero[1][1]==player) && (tablero[1][2]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[2][0]==player) && (tablero[2][1]==player) && (tablero[2][2]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[0][0]==player) && (tablero[1][0]==player) && (tablero[2][0]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[0][1]==player) && (tablero[1][1]==player) && (tablero[2][1]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[0][2]==player) && (tablero[1][2]==player) && (tablero[2][2]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[0][0]==player) && (tablero[1][1]==player) && (tablero[2][2]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if ((tablero[2][0]==player) && (tablero[1][1]==player) && (tablero[0][2]==player)) {
        if (player== "J1") winner = "Jugador 1";
        if (player== "J2") winner = "Jugador 2";
    }
    if (winner != null) {
        finishEvent();
        if (winner == "Jugador 1") {
            alert("Ganador es: "+ document.getElementById("jugador1").innerHTML);
            document.getElementById("winner").innerHTML = document.getElementById("jugador1").innerHTML;
        }
        if (winner == "Jugador 2") {
            alert("Ganador es: "+ document.getElementById("jugador2").innerHTML);
            document.getElementById("winner").innerHTML = document.getElementById("jugador2").innerHTML;
        }
        document.getElementById("view_winner").style = "display:block;";
        
    }
}

function finishEvent(){
    A1.removeEventListener("click", mark);
    B1.removeEventListener("click", mark);
    C1.removeEventListener("click", mark);
    A2.removeEventListener("click", mark);
    B2.removeEventListener("click", mark);
    C2.removeEventListener("click", mark);
    A3.removeEventListener("click", mark);
    B3.removeEventListener("click", mark);
    C3.removeEventListener("click", mark);
}
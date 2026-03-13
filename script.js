let juegos3ds = JSON.parse(localStorage.getItem("juegos3ds")) || [
"Mario Kart 7",
"Pokemon X"
];

let juegosWii = JSON.parse(localStorage.getItem("juegosWii")) || [
"Mario Kart Wii",
"Wii Sports"
];

let admin=false;

function mostrarJuegos(){

let lista3ds=document.getElementById("lista3ds");
let listaWii=document.getElementById("listaWii");

lista3ds.innerHTML="";
listaWii.innerHTML="";

juegos3ds.forEach((juego,index)=>{

let li=document.createElement("li");

li.textContent=juego;

if(admin){

li.onclick=()=>eliminarJuego("3ds",index);

}

lista3ds.appendChild(li);

});

juegosWii.forEach((juego,index)=>{

let li=document.createElement("li");

li.textContent=juego;

if(admin){

li.onclick=()=>eliminarJuego("wii",index);

}

listaWii.appendChild(li);

});

}

function agregarJuego(){

let consola=document.getElementById("panelConsola").value;

let juego=document.getElementById("nuevoJuego").value;

if(juego==="") return;

if(consola==="3ds"){

juegos3ds.push(juego);

localStorage.setItem("juegos3ds",JSON.stringify(juegos3ds));

}

if(consola==="wii"){

juegosWii.push(juego);

localStorage.setItem("juegosWii",JSON.stringify(juegosWii));

}

document.getElementById("nuevoJuego").value="";

mostrarJuegos();

}

function eliminarJuego(consola,index){

if(!confirm("¿Eliminar juego?")) return;

if(consola==="3ds"){

juegos3ds.splice(index,1);
localStorage.setItem("juegos3ds",JSON.stringify(juegos3ds));

}

if(consola==="wii"){

juegosWii.splice(index,1);
localStorage.setItem("juegosWii",JSON.stringify(juegosWii));

}

mostrarJuegos();

}

function enviarWhatsApp(){

let nombre=document.getElementById("nombre").value;

let consola=document.getElementById("consola").value;

let telefono=document.getElementById("telefono").value;

let juego=document.getElementById("juego").value;

let mensaje="Hola quiero descargar un juego:%0A"+
"Nombre: "+nombre+"%0A"+
"Consola: "+consola+"%0A"+
"Telefono: "+telefono+"%0A"+
"Juego: "+juego;

let url="https://wa.me/584247269993?text="+mensaje;

window.open(url,"_blank");

}

function loginAdmin(){

let clave=prompt("Contraseña administrador");

if(clave==="admin123"){

admin=true;

document.getElementById("panel").style.display="block";

mostrarJuegos();

}else{

alert("Contraseña incorrecta");

}

}

mostrarJuegos();
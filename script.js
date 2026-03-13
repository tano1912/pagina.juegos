// Reloj digital en tiempo real
function updateClock() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

// Carga del catálogo
async function cargarGameStation() {
    try {
        const respuesta = await fetch('juegos.json?v=' + Date.now());
        const juegos = await respuesta.json();
        
        const lista3DS = document.getElementById('lista3DS');
        const listaWii = document.getElementById('listaWii');

        lista3DS.innerHTML = '';
        listaWii.innerHTML = '';

        juegos.forEach(juego => {
            const li = document.createElement('li');
            li.textContent = juego.titulo;

            if (juego.consola.toUpperCase() === '3DS') {
                lista3DS.appendChild(li);
            } else if (juego.consola.toUpperCase() === 'WII') {
                listaWii.appendChild(li);
            }
        });
    } catch (e) {
        console.error("Error cargando base de datos.");
    }
}

function enviarPedido() {
    const nombre = document.getElementById('waNombre').value;
    const juego = document.getElementById('waJuego').value;
    const tel = document.getElementById('waTel').value;
    const miNumero = "123456789"; // TU NÚMERO AQUÍ

    if(!nombre || !juego) return alert("Error: El nombre y el juego son obligatorios.");

    const msj = encodeURIComponent(`🎮 *GAME STATION - NUEVO PEDIDO*\n\n👤 *Cliente:* ${nombre}\n🕹️ *Juego:* ${juego}\n📱 *Contacto:* ${tel}`);
    window.open(`https://wa.me/${miNumero}?text=${msj}`, '_blank');
}

window.onload = cargarGameStation;
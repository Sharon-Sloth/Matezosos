

const Escena1 = {
   id: "Escena1",
   duracion: 14000,
};
const Escena2 = {
   id: "Escena2",
   duracion: 30000,
};
const Escena3 = {
   id: "Escena3",
   duracion: 10000,
};
const Escena4 = {
   id: "Escena4",
   duracion: 40000,
};
const Escena5 = {
   id: "Escena5",
   duracion: 10000,
};
const Escena6 = {
   id: "Escena6",
   duracion: 40000,
};
const Escena7 = {
   id: "Escena7",
   duracion: 30000,
};




const Escena1Sloth = {
   id: "Escena1Sloth",
   inicio: "fadeIn 1s forwards",
   fin: "-webkit-animation 1s fadeOut",
   duracion: Escena1.duracion,
};

const Escena2Unicornio = {
   id: "Escena2Unicornio",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena2.duracion
};
const Escena2Koala = {
   id: "Escena2Koala",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena2.duracion
};
const Escena2Llama = {
   id: "Escena2Llama",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena2.duracion
};

const Escena3Sloth = {
   id: "Escena3Sloth",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena3.duracion,
};

const Escena4Unicornio = {
   id: "Escena4Unicornio",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena4.duracion
};
const Escena4Koala = {
   id: "Escena4Koala",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena4.duracion
};
const Escena4Llama = {
   id: "Escena4Llama",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena4.duracion
};

const Escena5Unicornio = {
   id: "Escena5Unicornio",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena5.duracion
};
const Escena5Koala = {
   id: "Escena5Koala",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena5.duracion
};
const Escena5Llama = {
   id: "Escena5Llama",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena5.duracion
};

const Escena6Unicornio = {
   id: "Escena6Unicornio",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena6.duracion
};
const Escena6Koala = {
   id: "Escena6Koala",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena6.duracion
};
const Escena6Llama = {
   id: "Escena6Llama",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena6.duracion
};

const Escena7Sloth = {
   id: "Escena7Sloth",
   inicio: "fadeIn 1s forwards",
   fin: "fadeOut 2s forwards",
   duracion: Escena7.duracion,
};

function animar(actor, duracion) {
   let personaje = document.getElementById(actor.id);
   return function () {
       personaje.style.display = "block";
       personaje.style.animation = actor.inicio;
       setTimeout(() => {
           personaje.style.animation = actor.fin;
           personaje.style.display = "none";
       }, duracion);
   };
}

function mostrar(id, cuanto) {
   let escenario = document.getElementById(id);
   return function () {
       escenario.style.display = "fadeIn 3s forwards";
       escenario.style.display = "inline-flex";
       setTimeout(() => {
           escenario.style.display = "none";
       }, cuanto);
   };
}



function escribir(id, duracion) {
   let textoEscrito = document.getElementById(id);
   return function () {
       textoEscrito.style.display = "block";
       textoEscrito.style.animation = "typing 3s steps(60, end) forwards";
       setTimeout(() => {
           textoEscrito.style.display = "none";
       }, duracion);
   };
}


const backgroundCuento = document.getElementById('backgroundCuento');
const toggleMusicaFondo = document.getElementById("toggleMusic");

let isPlaying = true;

toggleMusicaFondo.addEventListener("click", () => {
    if (isPlaying) {
        backgroundCuento.pause();
        isPlaying = false;
        toggleMusicaFondo.textContent = "Reanudar musica";
    } else {
        backgroundCuento.play();
        isPlaying = true;
        toggleMusicaFondo.textContent = "Pausar Musica";
    }
});


const showCuento = document.getElementById('show-Cuento');
const escenario = document.getElementById('Escenario');

showCuento.addEventListener('click', () => {
   Escenario.classList.toggle('visible');
   showCuento.style.display = 'none';
   backgroundCuento.play();
   // Ejecucion de la escenas
   // Escena 1: Narrador
   setTimeout(mostrar("Escenario1", Escena1.duracion), 0);
   setTimeout(animar(Escena1Sloth, Escena1.duracion), 0);
   setTimeout(escribir("texto1", 5000), 0);
   setTimeout(escribir("texto2", 8000), 5010);
   // Escena 2: Presentacion de personajes
   setTimeout(mostrar("Escenario2", Escena2.duracion), Escena1.duracion);
   setTimeout(animar(Escena2Unicornio, Escena2.duracion), Escena1.duracion);
   setTimeout(escribir("texto3", Escena2.duracion/3), Escena1.duracion + 10);
   setTimeout(animar(Escena2Koala, Escena2.duracion - 10000), Escena1.duracion + 10000);
   setTimeout(escribir("texto4", Escena2.duracion/3), Escena1.duracion + 10000);
   setTimeout(animar(Escena2Llama, Escena2.duracion - 20000), Escena1.duracion + 20000);
   setTimeout(escribir("texto5", Escena2.duracion/3), Escena1.duracion + 20000);
   // Escena 3: Narrador
   setTimeout(mostrar("Escenario3", Escena3.duracion), Escena1.duracion + Escena2.duracion);
   setTimeout(escribir("texto6", Escena3.duracion/2), Escena1.duracion + Escena2.duracion);
   setTimeout(animar(Escena3Sloth, Escena3.duracion), Escena1.duracion + Escena2.duracion);
   setTimeout(escribir("texto7", Escena3.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion/2);
   // Escena 4: Personajes discutiendo
   setTimeout(mostrar("Escenario4", Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
   setTimeout(animar(Escena4Unicornio, Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
   setTimeout(escribir("texto8", Escena4.duracion/4), Escena1.duracion + Escena2.duracion + Escena3.duracion);
   setTimeout(animar(Escena4Koala, Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
   setTimeout(escribir("texto9", Escena4.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + 10000);
   setTimeout(animar(Escena4Llama, Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
   setTimeout(escribir("texto10", Escena4.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + 20000);
   setTimeout(escribir("texto11", Escena4.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + 30000);
   // Personajes tristes
   setTimeout(mostrar("Escenario5", Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
   setTimeout(animar(Escena5Unicornio, Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
   setTimeout(animar(Escena5Koala, Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion +  Escena4.duracion);
   setTimeout(animar(Escena5Llama, Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
   setTimeout(escribir("texto12", Escena5.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
   setTimeout(escribir("texto13", Escena5.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion/2);
   // Personajes felices
   setTimeout(mostrar("Escenario6", Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion +  Escena5.duracion);
   setTimeout(animar(Escena6Unicornio,Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion +  Escena5.duracion);
   setTimeout(animar(Escena6Koala,Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion +  Escena4.duracion +  Escena5.duracion);
   setTimeout(animar(Escena6Llama,Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion 	+  Escena5.duracion);
   setTimeout(escribir("texto14", Escena6.duracion/4), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion);
   setTimeout(escribir("texto15", Escena6.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + Escena4.duracion + Escena5.duracion + 10000);
   setTimeout(escribir("texto16", Escena6.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + Escena4.duracion + Escena5.duracion + 20000);
   setTimeout(escribir("texto17", Escena6.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + Escena4.duracion + Escena5.duracion + 30000);
   
   // Narrador cierre
   setTimeout(mostrar("Escenario7", Escena7.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion 	+  Escena5.duracion + Escena6.duracion);
   setTimeout(animar(Escena7Sloth, Escena7.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion 	+  Escena5.duracion + Escena6.duracion);
   setTimeout(escribir("texto18", Escena7.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion + Escena6.duracion);
   setTimeout(escribir("texto19", Escena7.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion + Escena6.duracion + Escena7.duracion/2);
       setTimeout(() => {
           Escenario.classList.toggle('visible');
           showCuento.style.display = 'block';
           backgroundCuento.pause();
           backgroundCuento.currentTime = 0;
           }, Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion +  Escena5.duracion + Escena6.duracion + Escena7.duracion + 10);
});

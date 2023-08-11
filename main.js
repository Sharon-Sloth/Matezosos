

// le agregamos la clase 'activo' al elemento seleccionado
document.querySelectorAll('#temario .lista-contenidos a').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .activo').classList.remove('activo');
		elemento.parentElement.classList.add('activo');
	});
});

document.querySelectorAll('#temario .lista-menu a').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .activo').classList.remove('activo');
		elemento.parentElement.classList.add('activo');
	});
});

/**
 * Esta función se encarga de mandar para atrás el elemento
 * que corresponde al índice que se provee.
 * 
 * Busca por id el cual corresponda al formato "item-<índice>".
 * 
 * @param i {number} el índice en el grid del elemento
 */
function sendtoBack(i) {
	let id_item = `item-${i}`;
	let item = document.getElementById(id_item);
	item.classList.add('send-back');
}






/**
 * Denominamos "equis" como el elemento que se muestra al
 * equivocarse en la actividad evaluativa.
 * 
 * Esta funcion muestra temporalmente este elemento de manera
 * tal que el usuario tenga una retroalimentación visual.
//  */
function showEquis() {
	let item = document.getElementById('equis');
	item.classList.remove('hidden');
	// esperar un par de segundos antes de volver a ocultar
	setTimeout(() => {
		item.classList.add('hidden');
	}, 2000);
}



let txtNotas = document.getElementById("notas");
let txtnomArchivo = document.getElementById("nombreArchivo");
let guardarNotaBtn = document.getElementById("guardarNotaBtn");

guardarNotaBtn.addEventListener("click", (e) => {
  e.preventDefault(); //Evita que se recargue la pagina

  const textData = txtNotas.value;
  const textNotaBlob = new Blob([txtNotas.value], { type: "text/plain" });

  const NotaUrl = window.URL.createObjectURL(textNotaBlob)

  const downloadLink = document.createElement('a');
  downloadLink.download = txtnomArchivo.value
  downloadLink.href = NotaUrl;
  downloadLink.click()

  console.log(textData);
  console.log(textNotaBlob);

});



// Este código define una función llamada "mostrarNota" que recibe un parámetro llamado "contenido". Dentro de la función, selecciona un elemento HTML con el identificador
//  'contenido-archivo' y establece su propiedad innerHTML con el valor del parámetro "contenido".
function mostrarNota(contenido) {
    const elemento = document.getElementById('contenidoNota');
    console.log(elemento);
    elemento.textContent = contenido;
  }

// Este código define una función llamada "leerArchivo" que se activa 
// cuando se selecciona un archivo. Lee el archivo seleccionado como texto utilizando la API 
// de FileReader y luego llama a una función llamada "mostrarNota" 
// para mostrar el contenido del archivo.

function leerArchivoNota(e) {
    const archivo = e.target.files[0];
    if (!archivo) {
      return; // Si no hay archivo, no carga nada
    }
    const lector = new FileReader();
    lector.onload = function(e) {
      const contenido = e.target.result;
      mostrarNota(contenido); // llama  a la funcion que muestra el contenido del archivo
    };
    lector.readAsText(archivo);
  }


document.querySelector('#archivoNota')
      .addEventListener('change', leerArchivoNota, false);



    



// /**
//  * Esta función hace efectivo el cambio de tamaño de letra
//  * para todo el cuerpo de la página.
//  *
// //  * @param size {string} clase css a aplicar
// // //  */
//  function changeTxt(size){
//  	let body = document.getElementsByTagName("body")[0];
//  	body.classList.remove('txt-regular','txt-mediano', 'txt-grande');
// 	body.classList.add(size);
// }

// const Escena1 = {
//     id: "Escena1",
//     duracion: 14000,
// };
// const Escena2 = {
//     id: "Escena2",
//     duracion: 30000,
// };
// const Escena3 = {
//     id: "Escena3",
//     duracion: 10000,
// };
// const Escena4 = {
//     id: "Escena4",
//     duracion: 40000,
// };
// const Escena5 = {
//     id: "Escena5",
//     duracion: 10000,
// };
// const Escena6 = {
//     id: "Escena6",
//     duracion: 40000,
// };
// const Escena7 = {
//     id: "Escena7",
//     duracion: 30000,
// };




// const Escena1Sloth = {
//     id: "Escena1Sloth",
//     inicio: "fadeIn 1s forwards",
//     fin: "-webkit-animation 1s fadeOut",
//     duracion: Escena1.duracion,
// };

// const Escena2Unicornio = {
//     id: "Escena2Unicornio",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena2.duracion
// };
// const Escena2Koala = {
//     id: "Escena2Koala",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena2.duracion
// };
// const Escena2Llama = {
//     id: "Escena2Llama",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena2.duracion
// };

// const Escena3Sloth = {
//     id: "Escena3Sloth",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena3.duracion,
// };

// const Escena4Unicornio = {
//     id: "Escena4Unicornio",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena4.duracion
// };
// const Escena4Koala = {
//     id: "Escena4Koala",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena4.duracion
// };
// const Escena4Llama = {
//     id: "Escena4Llama",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena4.duracion
// };

// const Escena5Unicornio = {
//     id: "Escena5Unicornio",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena5.duracion
// };
// const Escena5Koala = {
//     id: "Escena5Koala",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena5.duracion
// };
// const Escena5Llama = {
//     id: "Escena5Llama",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena5.duracion
// };

// const Escena6Unicornio = {
//     id: "Escena6Unicornio",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena6.duracion
// };
// const Escena6Koala = {
//     id: "Escena6Koala",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena6.duracion
// };
// const Escena6Llama = {
//     id: "Escena6Llama",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena6.duracion
// };

// const Escena7Sloth = {
//     id: "Escena7Sloth",
//     inicio: "fadeIn 1s forwards",
//     fin: "fadeOut 2s forwards",
//     duracion: Escena7.duracion,
// };

// function animar(actor, duracion) {
//     let personaje = document.getElementById(actor.id);
//     return function () {
//         personaje.style.display = "block";
//         personaje.style.animation = actor.inicio;
//         setTimeout(() => {
//             personaje.style.animation = actor.fin;
//             personaje.style.display = "none";
//         }, duracion);
//     };
// }

// function mostrar(id, cuanto) {
//     let escenario = document.getElementById(id);
//     return function () {
//         escenario.style.display = "fadeIn 3s forwards";
//         escenario.style.display = "inline-flex";
//         setTimeout(() => {
//             escenario.style.display = "none";
//         }, cuanto);
//     };
// }



// function escribir(id, duracion) {
//     let textoEscrito = document.getElementById(id);
//     return function () {
//         textoEscrito.style.display = "block";
//         textoEscrito.style.animation = "typing 3s steps(60, end) forwards";
//         setTimeout(() => {
//             textoEscrito.style.display = "none";
//         }, duracion);
//     };
// }

// const backgroundCuento = document.getElementById('backgroundCuento');


// const showCuento = document.getElementById('show-Cuento');
// const escenario = document.getElementById('Escenario');

// showCuento.addEventListener('click', () => {
//     Escenario.classList.toggle('visible');
//     showCuento.style.display = 'none';
//     backgroundCuento.play();
//     // Ejecucion de la escenas
//     // Escena 1: Narrador
//     setTimeout(mostrar("Escenario1", Escena1.duracion), 0);
//     setTimeout(animar(Escena1Sloth, Escena1.duracion), 0);
//     setTimeout(escribir("texto1", 5000), 0);
//     setTimeout(escribir("texto2", 8000), 5010);
//     // Escena 2: Presentacion de personajes
//     setTimeout(mostrar("Escenario2", Escena2.duracion), Escena1.duracion);
//     setTimeout(animar(Escena2Unicornio, Escena2.duracion), Escena1.duracion);
//     setTimeout(escribir("texto3", Escena2.duracion/3), Escena1.duracion + 10);
//     setTimeout(animar(Escena2Koala, Escena2.duracion - 10000), Escena1.duracion + 10000);
//     setTimeout(escribir("texto4", Escena2.duracion/3), Escena1.duracion + 10000);
//     setTimeout(animar(Escena2Llama, Escena2.duracion - 20000), Escena1.duracion + 20000);
//     setTimeout(escribir("texto5", Escena2.duracion/3), Escena1.duracion + 20000);
//     // Escena 3: Narrador
//     setTimeout(mostrar("Escenario3", Escena3.duracion), Escena1.duracion + Escena2.duracion);
//     setTimeout(escribir("texto6", Escena3.duracion/2), Escena1.duracion + Escena2.duracion);
//     setTimeout(animar(Escena3Sloth, Escena3.duracion), Escena1.duracion + Escena2.duracion);
//     setTimeout(escribir("texto7", Escena3.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion/2);
//     // Escena 4: Personajes discutiendo
//     setTimeout(mostrar("Escenario4", Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
//     setTimeout(animar(Escena4Unicornio, Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
//     setTimeout(escribir("texto8", Escena4.duracion/4), Escena1.duracion + Escena2.duracion + Escena3.duracion);
//     setTimeout(animar(Escena4Koala, Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
//     setTimeout(escribir("texto9", Escena4.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + 10000);
//     setTimeout(animar(Escena4Llama, Escena4.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion);
//     setTimeout(escribir("texto10", Escena4.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + 20000);
//     setTimeout(escribir("texto11", Escena4.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + 30000);
//     // Personajes tristes
//     setTimeout(mostrar("Escenario5", Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
//     setTimeout(animar(Escena5Unicornio, Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
//     setTimeout(animar(Escena5Koala, Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion +  Escena4.duracion);
//     setTimeout(animar(Escena5Llama, Escena5.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
//     setTimeout(escribir("texto12", Escena5.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion);
//     setTimeout(escribir("texto13", Escena5.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion/2);
//     // Personajes felices
//     setTimeout(mostrar("Escenario6", Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion +  Escena5.duracion);
//     setTimeout(animar(Escena6Unicornio,Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion +  Escena5.duracion);
//     setTimeout(animar(Escena6Koala,Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion +  Escena4.duracion +  Escena5.duracion);
//     setTimeout(animar(Escena6Llama,Escena6.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion 	+  Escena5.duracion);
//     setTimeout(escribir("texto14", Escena6.duracion/4), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion);
//     setTimeout(escribir("texto15", Escena6.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + Escena4.duracion + Escena5.duracion + 10000);
//     setTimeout(escribir("texto16", Escena6.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + Escena4.duracion + Escena5.duracion + 20000);
//     setTimeout(escribir("texto17", Escena6.duracion/4), Escena1.duracion + Escena2.duracion  + Escena3.duracion + Escena4.duracion + Escena5.duracion + 30000);
    
//     // Narrador cierre
//     setTimeout(mostrar("Escenario7", Escena7.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion 	+  Escena5.duracion + Escena6.duracion);
//     setTimeout(animar(Escena7Sloth, Escena7.duracion), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion 	+  Escena5.duracion + Escena6.duracion);
//     setTimeout(escribir("texto18", Escena7.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion + Escena6.duracion);
//     setTimeout(escribir("texto19", Escena7.duracion/2), Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion + Escena5.duracion + Escena6.duracion + Escena7.duracion/2);
//         setTimeout(() => {
//             Escenario.classList.toggle('visible');
//             showCuento.style.display = 'block';
//             backgroundCuento.pause();
//             backgroundCuento.currentTime = 0;
//             }, Escena1.duracion + Escena2.duracion + Escena3.duracion + Escena4.duracion +  Escena5.duracion + Escena6.duracion + Escena7.duracion + 10);
// });






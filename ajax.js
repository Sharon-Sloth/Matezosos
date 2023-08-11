

document.getElementById("mostrarDatoAleatorio").addEventListener("click", async () => {
  try {
    const response = await fetch("datos.html");
    const html = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    
    const listaElementos = doc.querySelectorAll("#datos-lista li");
    const indiceAleatorio = Math.floor(Math.random() * listaElementos.length);
    
    const datoAleatorio = listaElementos[indiceAleatorio].textContent;
    
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent =  datoAleatorio;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
});
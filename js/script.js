//alert("Hello, World!");

/*

comentario de bloque
front end todo lo que el usuario puede ver
java back end todo lo que el usuario no puede ver
dos lenguajes diferentes pero que se complementan
javascript es un lenguaje de programación que se utiliza principalmente para crear contenido interactivo en la web. Se ejecuta en el navegador del usuario y permite manipular elementos HTML y CSS, así como manejar eventos y realizar solicitudes a servidores.
intención de crear este lenguaje fue para que los desarrolladores pudieran crear páginas web más dinámicas y atractivas, permitiendo la interacción del usuario sin necesidad de recargar la página completa. Con el tiempo, JavaScript ha evolucionado y se ha convertido en un lenguaje versátil que se utiliza tanto en el front-end como en el back-end, gracias a entornos de ejecución como Node.js.
lenguajes tipados y no tipados que son lenguajes de programación que se diferencian en cómo manejan los tipos de datos. Los lenguajes tipados requieren que los desarrolladores declaren explícitamente el tipo de dato de una variable, mientras que los lenguajes no tipados permiten que las variables cambien de tipo dinámicamente durante la ejecución del programa. JavaScript es un ejemplo de lenguaje no tipado, lo que significa que las variables pueden contener diferentes tipos de datos a lo largo del tiempo sin necesidad de una declaración explícita.

*/
console.log("Hola, Mundo!");

const TOGGLE_THEME_BTN = document.getElementById("toggle-theme-btn"); 
TOGGLE_THEME_BTN.addEventListener("click", function () {
    //alert("click!");
    document.body.classList.toggle("dark-theme");
});

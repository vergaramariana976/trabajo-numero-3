document.body.onload = addElement;

function addElement () {

  var h1 = document.createElement("div");
  var contenido = document.createTextNode("buenas tardesitas");
  h1.appendChild(contenido);

  var mostrar = document.getElementById("div1");
  document.body.insertBefore(h1, mostrar);
}
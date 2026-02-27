
function generarDocumento() {

  //fecha resolucion 1)
  document.getElementById("fech").innerHTML =
  document.getElementById("fechaConvenio1").value;



//Nombre Unidad Tecnica 2)
  document.getElementById("nName").innerHTML =
    document.getElementById("nameField").value;



  // Nombre del proyecto 3)

  document.getElementById("nP").innerHTML =
  document.getElementById("nombreProyecto").value;


  //Subtitulo 4)
  document.getElementById("sub").innerHTML =
    document.getElementById("Subtitulo").value;

  //ITEM 5)
  document.getElementById("item").innerHTML =
  document.getElementById("nuevoItem").value;


  //Nombre Subtitulo 6)

  document.getElementById("nomsub").innerHTML =
  document.getElementById("nombreSubtitulo").value;

  //Codigo Bip  7)

  document.getElementById("Bip").innerHTML =
  document.getElementById("codigoBip").value;

  //Numero Resolucion 8)

  document.getElementById("res").innerHTML =
  document.getElementById("numeroResolucion").value;

  //Fecha de Resolucion 9)

  document.getElementById("fres").innerHTML =
  document.getElementById("fechaResolucion").value;

  //Nombre Proveedor 10)

  document.getElementById("pro").innerHTML =
  document.getElementById("nombreProveedor").value;

  //Numero Factura 11)

  document.getElementById("nfac").innerHTML =
  document.getElementById("numeroFactura").value;

  //Fecha Factura 12)

  document.getElementById("ffac").innerHTML =
  document.getElementById("fechaFact").value;

  //Monto 13)

  document.getElementById("mon").innerHTML =
  document.getElementById("montoFactura").value;

  //Fecha Acta Proclamacion 14)

  document.getElementById("facta").innerHTML =
  document.getElementById("fechaActaProclamacion").value;

 //Nombre Gobernador 15)

  document.getElementById("gober").innerHTML =
  document.getElementById("nombreGobernador").value;


  //Nombre Unidad Tecnica 2 16)

  document.getElementById("nuevaU").innerHTML =
  document.getElementById("nombreUnidad2").value;

  //RUT unidad Tecnica 2 17)

  document.getElementById("rut2").innerHTML =
  document.getElementById("rutUnidad2").value;

  //Direccion 18)

  document.getElementById("dir").innerHTML =
  document.getElementById("direccion").value;

  //Cargo 19)

  document.getElementById("carg").innerHTML =
  document.getElementById("cargo").value;

  //Abrev 20)

  document.getElementById("abrev").innerHTML =
  document.getElementById("abreviatura").value;

  //Nombre Autoridad 21)

  const newLocal = document.getElementById("nomaut").innerHTML =
    document.getElementById("nombreAutoridad").value;

// Numero Factura 22)
  document.getElementById("numfac2").innerHTML =
  document.getElementById("numeroFactura").value;


  // Fecha Factura 23)
  document.getElementById("fechaF").innerHTML =
  document.getElementById("fechaFactura").value;

  //Monto Factura 24)

  document.getElementById("montoF").innerHTML =
  document.getElementById("montoFactura2").value;

// Nombre Proveedor 2 25)

  document.getElementById("prov2").innerHTML =
  document.getElementById("nombreProveedor2").value;

//cantidad articulos
document.getElementById("cA").innerHTML =
document.getElementById("cantidad_articulos").value;

//Articulo
document.getElementById("A").innerHTML =
document.getElementById("nombre_articulo").value;

//Modelo
document.getElementById("moD").innerHTML =
document.getElementById("modelo").value;

//Marca
document.getElementById("Ma").innerHTML =
document.getElementById("marca").value;

//N° MOTOR
document.getElementById("nunM").innerHTML =
document.getElementById("n_motor").value;

//N° VIN
document.getElementById("nV").innerHTML =
document.getElementById("n_vin").value;

//COLOR
document.getElementById("Col").innerHTML =
document.getElementById("color").value;

//AÑO
document.getElementById("Añ").innerHTML =
document.getElementById("año").value;

//PLACA PATENTE
document.getElementById("PlacP").innerHTML =
document.getElementById("placa_patente").value;

















  //Genera el documento
}

//Imprime
function printRE() {
//Abre una nueva ventana con las dimensiones apropiadas para imprimir
  var newWindow = window.open("", "", "width=800,height=600");

 //Asegúrate de que la nueva ventana esté completamente cargada antes de imprimir
  newWindow.onload = function() {
    //Transfiere el contenido que deseas imprimir a la nueva ventana
    document.getElementById("printButton").style.display = "none";

//Transfiere el contenido que deseas imprimir a la nueva ventana
    newWindow.document.write(document.getElementById("resolucion-template").innerHTML);

    // Imprime el contenido en la nueva ventana
    newWindow.print();
  
    // Mostrar el botón imprimir en la ventana actual (opcional)
    document.getElementById("printButton").style.display = "bloque"; 
    // Descomentar para mostrar después de imprimir

    // Opcionalmente cierra la nueva ventana después de imprimir
 nuevaVentana.close(); // Descomentar para cerrar automáticamente
 };

  // Ocultar el botón Imprimir en la ventana actual antes de abrir la nueva ventana
  document.getElementById("printButton").style.display = "none";
}



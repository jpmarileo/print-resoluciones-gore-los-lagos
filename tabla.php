<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_resolucion";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}


// Formulario 1
//1
$fechaConvenio = $_POST['fechaConvenio1'];
//2
$nombre_unidad_tecnica = $_POST['nameField'];
//3
$Nombre_Proyecto = $_POST['nombreProyecto'];
//4
$subtitulo = $_POST['Subtitulo'];
//5
$nuevo_Item = $_POST['nuevoItem'];
//6
$nombre_Subtitulo = $_POST['nombreSubtitulo'];

//7
$codigo_Bip = $_POST['codigoBip'];

//8
$numero_Resolucion = $_POST['numeroResolucion'];
//9
$nombre_provedor = $_POST['fechaResolucion'];
//10
$fecha_Resolucion = $_POST['nombreProveedor'];
//11
$nombre_Proveedor = $_POST['numeroFactura'];
//12
$numero_Factura = $_POST['fechaFact'];
//13
$fecha_Fact = $_POST['montoFactura'];



//Formulario 2
//14
$fecha_ActaProclamacion = $_POST['fechaActaProclamacion'];

//15
$nombre_Gobernador = $_POST['nombreGobernador'];

//16
$nombre_Unidad2 = $_POST['nombreUnidad2'];

//17
$rut_Unidad2 = $_POST['rutUnidad2'];

//18
$direccion = $_POST['direccion'];

//19
$cargo = $_POST ['cargo'];

//20
$abreviatura = $_POST['abreviatura'];

//21
$nombre_Autoridad = $_POST['nombreAutoridad'];

//22
$numero_Factura = $_POST['numeroFactura'];

//23
$fecha_Factura = $_POST['fechaFactura'];

//24
$montoFactura2 = $_POST['montoFactura2'];

//25
$nombreProveedor2 = $_POST['nombreProveedor2'];

//Tabla

$cantidad_articulos = $_POST['cantidad_articulos'];
$nombre_articulo = $_POST['nombre_articulo'];
$modelo = $_POST['modelo'];
$marca = $_POST['marca'];
$numero_motor = $_POST['n_motor'];
$n_vin = $_POST['n_vin'];
$color = $_POST['color'];
$año = $_POST['año'];
$placa_patente = $_POST['placa_patente'];



// Insertar los datos en la base de datos
$sql = "INSERT INTO resolucion_exenta (fechaConvenio1, nameField, Nombre_Proyecto, Subtitulo, nuevo_Item,	nombre_Subtitulo,	codigo_Bip,	numero_Resolucion,	nombre_provedor, fecha_Resolucion,	nombre_Proveedor, numero_Factura, fecha_Fact, fecha_ActaProclamacion, nombre_Gobernador, nombre_Unidad2,	rut_Unidad2, direccion,	cargo, abreviatura, nombre_Autoridad, numero_Factura2, fecha_Factura2, montoFactura2, nombreProveedor2) VALUES ('$fechaConvenio', '$nombre_unidad_tecnica', '$Nombre_Proyecto'
'$subtitulo', '$nuevo_Item', '$nombre_Subtitulo', '$codigo_Bip', '$numero_Resolucion', '$nombre_provedor', '$fecha_Resolucion', '$nombre_Proveedor', '$fecha_Resolucion', '$nombre_Proveedor',
'$numero_Factura', '$fecha_Fact', '$fecha_ActaProclamacion', '$nombre_Gobernador', '$nombre_Unidad2', '$rut_Unidad2', '$direccion', '$cargo', '$abreviatura', '$nombre_Autoridad',
'$numero_Factura', '$fecha_Factura', '$montoFactura2', '$nombreProveedor2','$cantidad_articulos','$nombre_articulo', '$modelo', '$marca', '$numero_motor', '$n_vin', '$color', '$año', '$placa_patente')";
        


// Verifica si el formulario esta interactuando con servidor
if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
} else {
    echo "Error: ". $sql. "<br>". $conn->error;
}

$conn->close();
?>


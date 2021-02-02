/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	
    //nombre= prompt("usted se llama?")
    //edad= prompt(" que edad tiene?")

	
     nombre = document.getElementById("txtIdNombre").value;
	//document.getElementById("txtIdNombre").value=nombre
    // la Id son diferentes 
	edad = document.getElementById("txtIdEdad").value;
	//document.getElementById("txtIdEdad").value =edad
	//colocar la variable al principio no compila
	//separar las declaraciones

	alert("usted se llama " + nombre + " y tiene " + edad + " años ") 
	// se púede declarar separado: alert("usted se llama" + nombre),alert("y tiene" +edad +"años")
                                    	
}


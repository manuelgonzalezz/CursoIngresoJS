/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre
	
	nombre=prompt("cual es el nombre?")
    //recordar siempre el orden 
	
    document.getElementById("txtIdNombre").value = nombre
	//declaro la variable al final
	
	alert ("el nombre es  " +nombre)
	
	
}


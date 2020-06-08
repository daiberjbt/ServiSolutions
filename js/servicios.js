
document.getElementById("click").onclick = function select(){
	
	var nombres = document.getElementById("nombre").value;
	var direcciones= document.getElementById("direccion").value;
	var tel = document.getElementById("telefono").value;
	var fechas = document.getElementById("fecha").value;
	var trabajos = document.getElementById("trabajo").value;


		if (nombres.length == 0 || direcciones.length == 0 || tel.length == 0 || trabajos.length == 0 || fechas.length == 0) {
			document.getElementById("alerta").style.visibility="visible";
		} 
		else {
			document.getElementById("alerta").style.visibility="hidden";
			alert("Le estaremos enviando un mensaje de texto con la confirmacion de su visita.")
		}

}

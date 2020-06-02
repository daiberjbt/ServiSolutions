
document.getElementById("click").onclick = function select(){
	
	var nombres = document.getElementById("nombre").value;
	var direcciones= document.getElementById("direccion").value;
	var tel = document.getElementById("telefono").value;
	var fecha = document.getElementById("mes").value;
	var dias = document.getElementById("dia").value;
	var trabajos = document.getElementById("trabajo").value;


if (nombres.length == 0 || direcciones.length == 0 || tel.length == 0 || fecha.length == 0 || dias.length == 0 || trabajos.length == 0) {
	document.getElementById("alerta").style.visibility="visible";
} 
else {
	document.getElementById("alerta").style.visibility="hidden";
}

	if (fecha === "Febrero") {

		document.getElementById("dia").value;
		if (dias > 28) {
			alert("fecha incorrecta")
		}
		else if (dias <= 0) {
		alert("ingrese un dia")
		}	
	}
	else if (fecha == 0) {
		alert("no ha ingresado ninguna fecha")
		}
}

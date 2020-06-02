
document.getElementById("cuenta").onclick = function mostrarmensaje(){

  var contraseña = document.getElementById("password").value;
  var confirmacion = document.getElementById("confirmar").value;
  var nombre = document.getElementById("name").value;
  var apell = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;

      if (nombre.length == 0 || apell.length == 0 || email.length == 0 || confirmacion.length == 0) {
        document.getElementById("alerta").style.visibility="visible";
      }
        else {
          document.getElementById("alerta").style.visibility="hidden";
        }

      if (password.value.length > 1 && password.value.length <= 8) {
        alert("la contraseña es muy insegura")
      }
        else if (password.value.length >= 0 && password.value.length <= 1) {
          alert("no ha ingresado ninguna contraseña")
        }
        
      if (confirmacion.length >= 0 && confirmacion.length <=1) {
        alert("por favor confirme la contraseña")
      }
};




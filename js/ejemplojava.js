
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
        

var espacios = false;
var cont = 0;

      while (!espacios && (cont < contraseña.length)) {
        if (contraseña.charAt(cont) == " ")
          espacios = true;
        cont++;
      }
         
          if (espacios) {
            alert ("La contraseña no puede contener espacios en blanco");
            return false;
          }


          if (contraseña.length == 0 || confirmacion.length == 0) {
            alert("Los campos de contraseña no pueden estar vacios");
            return false;
          }


          if (contraseña != confirmacion) {
            alert("Las contraseñas deben de coincidir");
            return false;
          } 
            else {
              alert("Todo esta correcto");
              return true; 
            }

};




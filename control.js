

        var nombre = document.getElementById("usuario");
        var contrasena = document.getElementById("clave");

        function validar(){

           

            if ((nombre.value == null) || (nombre.value == "") || 
            
            (contrasena.value == null) || (contrasena.value == ""))
             { 
                alert("compruebe que haya completado los campos"); 
                return false;
            } 


            if (nombre.value.includes("@")) { 
                alert( nombre.value +", " + "tus datos ya fueron enviados correctamente"); 
                
        } else  { 
                alert("el nombre de usuario debe contener un @");
                return false;
    }
        }
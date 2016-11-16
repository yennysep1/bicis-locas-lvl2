

function validateForm(){

// declaracion de variables - obtencion de elementos y su valor
var nombre = $('#name').val();
var apellido = $('#lastname').val();
var mail = $('#input-email').val();
var clave = $('#input-password').val();
var bici = $('.form-group').eq(1).val();
var textoAZ = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/; 
var expresionCorreo = /\w+@\w+\.+[a-z]/; 

// validar nombre
	function suNombre(){
		if (nombre===""){
			$('.name-container').append('<span>Debe ingresar su nombre</span>');
			return false;
			
		}else if (!textoAZ.test(nombre)){
			$('.name-container').append('<span>Sólo acepta caracteres de A a Z</span>');
			return false;
		}
	}
	suNombre();

// validar apellido
	function suApellido(){
		if (apellido ===""){
			$('.lastname-container').append('<span>Debe ingresar su apellido</span>');
			return false;
		} else if (!textoAZ.test(apellido)){
			$('.lastname-container').append('<span>Sólo acepta caracteres de A a Z</span>');
			return false;
		}
	}
	suApellido();	

// validar mayusculas
	function mayusculas(){
		if (nombre.charAt(0)!==nombre.charAt(0).toUpperCase()){
			$('.name-container').append('<span>Su nombre debe comenzar con mayúscula</span>');
			return false;

		}if (apellido.charAt(0)!==apellido.charAt(0).toUpperCase()){
			$('.lastname-container').append('<span>Su apellido debe comenzar con mayúscula</span>');
			return false;
		}
	}
	mayusculas();

// validar correo electronico
	function correo(){
		if(mail===""){
			$('.email-container').append('<span>Debe ingresar su mail</span>');
			return false;

		}else if (!expresionCorreo.test(mail)){
			$('.email-container').append('<span>Ingrese un mail valido</span>');
			return false;
		}
	}
	correo();

// validar contraseña
	function contrasenia(){
		if(clave===""){
			$('.form-group').eq(0).append('<span>Ingrese una contraseña</span>');
			return false;

		}else if (clave.length < 5 || clave==="password" || clave==="123456" || clave==="098754"){
			$('.form-group').append('<span>Ingrese una contraseña segura</span>');
			return false;
		}
	}
	contrasenia();

// validar opciones
	function bicicleta(){
		if (bici==0){
			$('.form-group').eq(1).append('<span>Debes seleccionar una opción</span>');
				return false;
		}else{
			return true;
		}
	}
	bicicleta();

}




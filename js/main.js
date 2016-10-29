var nombre = document.getElementById('name');
var apellido = document.getElementById('lastname');
var mail = document.getElementById('input-email');
var clave = document.getElementById('input-password');
var bici = document.getElementsByTagName('select')[0];
var textoAZ = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/; //texto de A a Z sin espacios
var expresionCorreo = /\w+@\w+\.+[a-z]/; //  texto123@texto.texto , \w son caracteres a-z y n 

function validateForm(){

    function suNombre(){
		if (nombre.value===""){
			//primero se indica el div donde se agrega span, con el nombre de su clase y la posicion en este caso es unico o sea 0
			var divContainer = document.getElementsByClassName('name-container')[0]; // div donde se agrega el nodo span			
			//Crear el elemento
			var elemento = document.createElement('span');
			//Crear el nodo de texto
			var alerta = document.createTextNode('Debe ingresar su nombre');
			//añadir el nodo de texto al elemento
			elemento.appendChild(alerta);
			//Agregar atributos al elemento
			//Agregar el elemento al documento
			divContainer.appendChild(elemento);
		return false;
		}else if (!textoAZ.test(nombre.value)){
			var divContainer = document.getElementsByClassName('name-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Solo letras de A a Z');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}
	}
	suNombre();
	//VALIDAR APELIIDO
	function suApellido(){
		if (apellido.value ===""){
			var divContainer = document.getElementsByClassName('lastname-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Debe ingresar su apellido');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		} else if (!textoAZ.test(apellido.value)){
			var divContainer = document.getElementsByClassName('lastname-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Solo letras de A a Z');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}
	}
	suApellido();
	//VALIDAR PRIMERA LETRA MAYUSCULA *
	function mayusculas(){
		if (nombre.value.charAt(0)!==nombre.value.charAt(0).toUpperCase()){
			var divContainer = document.getElementsByClassName('name-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('El nombre debe comenzar con Mayuscula');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}if (apellido.value.charAt(0)!==apellido.value.charAt(0).toUpperCase()){
			var divContainer = document.getElementsByClassName('lastname-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('El apellido debe comenzar con Mayuscula');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}
	}
	mayusculas();
	//VALIDAR CORREO
	function correo(){
		if(mail.value===""){
			var divContainer = document.getElementsByClassName('email-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Debe ingresar su email');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}else if (!expresionCorreo.test(mail.value)){
			var divContainer = document.getElementsByClassName('email-container')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Verifique su email');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}
	}
	correo();
	//VALIDAR CLAVE
	function contrasenia(){
		if(clave.value===""){
			var divContainer = document.getElementsByClassName('form-group')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Debe ingresar una contraseña');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}else if (clave.value.length < 5 || clave.value==="password" || clave.value==="123456" || clave.value==="098754"){
			var divContainer = document.getElementsByClassName('form-group')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('La contraseña debe contener al menos 6 caracteres');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}
	}
	contrasenia();
	//VALIDAR OPCIONES DE BICICLETA
	function bicicleta(){
		if (bici.value==0){
			var nuevaClase = document.getElementsByClassName('form-group input-box')[1].classList.add('opciones');
			var divContainer = document.getElementsByClassName('opciones')[0]; // div donde se agrega el nodo span			
			var elemento = document.createElement('span');
			var alerta = document.createTextNode('Debes seleccionar al menos un tipo de bici');
			elemento.appendChild(alerta);
			divContainer.appendChild(elemento);
			return false;
		}else{
			return true;
		}
	}
	bicicleta();
}


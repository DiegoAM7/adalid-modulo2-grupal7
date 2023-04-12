document.getElementById('form')?.addEventListener('submit', validarForm);
//Valida que los campos no esten vacios
//Valida que el nombre no sea mayor a 30 caracteres
//Valida que el nombre no sea menor a 4 caracteres
//Valida que el correo sea valido
//Valida que el mensaje no sea mayor a 200 caracteres
//Valida que el mensaje no sea menor a 20 caracteres
//Si todo esta correcto muestra un mensaje de que el mensaje fue enviado correctamente

function validarForm(e) {
	e.preventDefault();
	var nombre = document.getElementById('nombre_usuario').value;
	var email = document.getElementById('correo').value;
	var mensaje = document.getElementById('mensaje').value;
	var expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === '' || email === '' || mensaje === '') {
		let mensajeMostrar = '';
		if (nombre === '') mensajeMostrar += 'El campo nombre es obligatorio \n';
		if (email === '') mensajeMostrar += 'El campo email es obligatorio \n';
		if (mensaje === '') mensajeMostrar += 'El campo mensaje es obligatorio \n';
		if (mensajeMostrar === '')
			mensajeMostrar = 'Todos los campos son obligatorios \n';
		alert(mensajeMostrar);
		return false;
	} else if (nombre.length > 30) {
		alert('El nombre es muy largo, máimo 30 caracteres');
		return false;
	} else if (nombre.length < 4) {
		alert('El nombre es muy corto, mínimo 4 caracteres');
		return false;
	} else if (!expresion.test(email)) {
		alert('El correo no es válido');
		return false;
	} else if (mensaje.length > 200) {
		alert('El mensaje es muy largo');
		return false;
	}
	if (mensaje.length < 20) {
		alert('El mensaje es muy corto, mínimo 20 caracteres');
		return false;
	} else {
		alert('Mensaje enviado correctamente');
		return true;
	}
}

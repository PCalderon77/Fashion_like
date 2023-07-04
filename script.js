// Archivo: script.js

document.getElementById("googleBtn").addEventListener("click", function() {
  // Lógica de registro con Google
  console.log("Registrarse con Google");
});

document.getElementById("facebookBtn").addEventListener("click", function() {
  // Lógica de registro con Facebook
  console.log("Registrarse con Facebook");
});

document.getElementById("modalBtn").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Lógica de registro con email
  console.log("Registrarse con email");
});

document.getElementById("modalBtn-1").addEventListener("click", function() {
  document.getElementById("modal-1").style.display = "block";
});

document.getElementsByClassName("close-1")[0].addEventListener("click", function() {
  document.getElementById("modal-1").style.display = "none";
});

document.getElementById("inicioForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Lógica de registro con email
  console.log("Registrarse con email");
});

// Abre la segunda ventana modal al hacer clic en el enlace de la primera ventana modal
document.getElementById("openModal").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("modal-1").style.display = "none"; // Cierra la primera ventana modal
    document.getElementById("modal").style.display = "block";
});


//validacion primer formulario
const formulario1 = document.getElementById('inicioForm');
const inputs1 = document.querySelectorAll('#inicioForm input');

const expresiones1 = {
	password1: /^.{4,12}$/, // 4 a 12 digitos.
	correo1: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos1 = {
	password1: false,
	correo1: false,

}

const validarFormulario1 = (e) => {
	switch (e.target.name) {
		case "password1":
			validarCampo1(expresiones1.password1, e.target, 'password1');
		break;
		case "correo1":
			validarCampo1(expresiones1.correo1, e.target, 'correo1');
		break;
	}
}

const validarCampo1 = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos1[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos1[campo] = false;
	}
}


inputs1.forEach((input) => {
	input.addEventListener('keyup', validarFormulario1);
	input.addEventListener('blur', validarFormulario1);
});

formulario1.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos1.password1 && campos1.correo1 ){
		formulario1.reset();

		document.getElementById('formulario__mensaje-exito1').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito1').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje1').classList.add('formulario__mensaje-activo');
	}
});
//validacion segundo formulario
const formulario = document.getElementById('emailForm');
const inputs = document.querySelectorAll('#emailForm input');

const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {
	password: false,
	correo: false,

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
  
	const terminos = document.getElementById('terminos');
	if (campos.password && campos.correo && terminos.checked) {
	  formulario.reset();
  
	  document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
	  setTimeout(() => {
		document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
	  }, 5000);
  
	  document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
		icono.classList.remove('formulario__grupo-correcto');
	  });
  
	  // Aquí se elimina el mensaje de error
	  document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
	} else {
	  document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
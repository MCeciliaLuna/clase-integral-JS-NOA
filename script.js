console.log("Hola mundo");

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const edadInput= document.getElementById("edad");
const contraseniaInput = document.getElementById("contrasenia");
const confirmarContraseniaInput =  document.getElementById("confirmar-contrasenia");

const registrarUsuario = (event) => {
    event.preventDefault()

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const edad = edadInput.value;
    const contrasenia = contraseniaInput.value;
    const confirmarContrasenia = confirmarContraseniaInput.value;

    const edadAceptable = 18;

    if (contrasenia !== confirmarContrasenia){
        alert("Las contraseñas no coinciden");
        console.error(contrasenia, confirmarContrasenia, "las contraseñas no coinciden");
        return;
    }

    if(edad < edadAceptable){
        alert("Debes ser mayor de edad");
        console.error(edad,"La edad no es válida para registrarse");
        return;
    }
    localStorage.setItem("emailUsuario", email);
    window.location.href = "bienvenida.html";
}

const validarRegistro = () => {
    const userRegistrado = localStorage.getItem("emailUsuario");

    if (userRegistrado) {
        window.location="bienvenida.html"
    }
}

if (window.location.pathname !== "/bienvenida.html") {
    validarRegistro()
}

const logout = () => {
    localStorage.clear();
    window.location.href="index.html";
}
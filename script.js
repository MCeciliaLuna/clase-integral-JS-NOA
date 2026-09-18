console.log("Hola mundo");

const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const edadInput = document.getElementById("edad");
const contraseniaInput = document.getElementById("contrasenia");
const confirmarContraseniaInput = document.getElementById("confirmar-contrasenia");

const registrarUsuario = async (event) => {
    event.preventDefault()

    const email = emailInput.value;
    const edad = edadInput.value;
    const contrasenia = contraseniaInput.value;
    const confirmarContrasenia = confirmarContraseniaInput.value;

    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const json = await response.json();

    console.log(json)

    const emailUsers = json.map(
        function (user) {
            return user.email
        }
    )

    const emailFilter = emailUsers.filter(
        function (emailDB) {
            return emailDB === email
        }
    )

    console.log(emailFilter)

    if (emailFilter.length > 0) {
        alert("Ingrese otro mail");
        console.error(email,"Este email ya está en uso");
        return
    }


    if (contrasenia !== confirmarContrasenia) {
        alert("Las contraseñas no coinciden");
        console.error(contrasenia, confirmarContrasenia, "las contraseñas no coinciden");
        return;
    }

    const edadAceptable = 18;

    if (edad < edadAceptable) {
        alert("Debes ser mayor de edad");
        console.error(edad, "La edad no es válida para registrarse");
        return;
    }

    localStorage.setItem("emailUsuario", email);
    window.location.href = "bienvenida.html";
}

const validarRegistro = () => {
    const userRegistrado = localStorage.getItem("emailUsuario");

    if (userRegistrado) {
        window.location = "bienvenida.html"
    }
}

if (window.location.pathname !== "/bienvenida.html") {
    validarRegistro()
}

const logout = () => {
    localStorage.clear();
    window.location.href = "index.html";
}
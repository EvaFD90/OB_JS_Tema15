const nombre = "Robin";
const apellido = "Hood";

const nombreApellido = {
    nombre,
    apellido
}

//sessionStorage.setItem("nombreApellido", JSON.stringify(nombreApellido));
//localStorage.setItem("nombreApellido", JSON.stringify(nombreApellido));

const now = new Date();

//document.cookie = `nombreApellido=${JSON.stringify(nombreApellido)}; expires=${new Date(now.getTime() + 2 * 60000)}`;

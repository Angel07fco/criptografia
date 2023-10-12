// Crear un arreglo con todas las letras del alfabeto
const arreglo = ['a', 'b', 'c', 'd', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Función para cifrar un mensaje
function cifrar(texto, clave) {
    let mensajeCifrado = ''; // Cadena de resultado
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase(); // Convertir la letra actual a minúscula
        if (arreglo.includes(letra)) { // Comprobar si la letra está en el arreglo
            const indice = arreglo.indexOf(letra); // Obtener el índice de la letra en el arreglo
            let nuevoIndice = indice + clave; // Calcular el nuevo índice
            if (nuevoIndice >= 26) { // Comprobar si el nuevo índice supera el límite del arreglo
                nuevoIndice -= 26; // Restar 26 para volver al inicio del arreglo
            }
            if (nuevoIndice < 0) { // Comprobar si el nuevo índice supera el límite del arreglo
                nuevoIndice += 26; // Restar 26 para volver al inicio del arreglo
            }
            if (texto[i] === letra) { // Comprobar si la letra original es minúscula
                mensajeCifrado += arreglo[nuevoIndice]; // Agregar la letra cifrada en minúscula
            } else {
                mensajeCifrado += arreglo[nuevoIndice].toUpperCase(); // Agregar la letra cifrada en mayúscula
            }
        } else {
            mensajeCifrado += texto[i]; // Si la letra no está en el arreglo, mantenerla igual
        }
    }
    return mensajeCifrado; // Retornar el mensaje cifrado
}

// Función para descifrar un mensaje
function descifrar(texto, clave) {
    return cifrar(texto, -clave); // Llamar a la función cifrar con una clave negativa para descifrar
}

// Envío del formulario
document.getElementById("cifradoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = document.getElementById("texto").value;
    const accion = document.querySelector('input[name="accion"]:checked').value;
    const clave = parseInt(document.getElementById("clave").value);

    let resultado;
    if (accion === 'c') {
        resultado = cifrar(texto, clave);
    } else if (accion === 'd') {
        resultado = descifrar(texto, clave);
    }

    document.getElementById("resultado").value = resultado;
});
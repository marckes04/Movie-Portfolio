export const GuardarEnStorage = (clave, elemento) => {

    // 1. Obtener lo que ya hay (si no hay nada, será null)
    let elementos = JSON.parse(localStorage.getItem(clave));

    // 2. Comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(elemento);
    } else {
        // Si es la primera vez (null), creamos el array con el primer elemento
        elementos = [elemento];
    }

    // 3. Guardar en LocalStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // 4. Devolver el elemento
    return elemento;
}
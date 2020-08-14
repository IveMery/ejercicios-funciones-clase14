//Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva
// un string con el formato a vs. b


let obtenerRivales = (a, b) => {
    return ` ${a} vs. ${b}`
}

console.log(obtenerRivales('JavaScript', 'Python'))
console.log(obtenerRivales('Coca', 'Pepsi'))
console.log(obtenerRivales('Perros', 'Gatos'))
//saludarGritando(nombre, apellido)

//Usando las funciones anteriores 
//(obtenerNombreCompleto, saludar y gritar),
// crear una función saludarGritando que tome como argumentos un nombre y un
// apellido y devuelva un saludo con signos de exclamación.



let obtenerNombreCompleto = (nombre, apellido) =>{
     return ` ${nombre}  ${apellido} `
 }
 
 let gritar = (saludo) => {
     return  `¡ ${saludo}  !`
}
 
let saludar = (nombre) => {
          return ` Hola ${nombre}, un gusto conocerte`
      }




const saludarGritando = (nombre, apellido) => {
     let nombreCompleto = obtenerNombreCompleto(nombre, apellido)
     let saludo = saludar(nombreCompleto)
     let grito = gritar(saludo)
     return grito
   }
   
   console.log(saludarGritando('Ada', 'Lovelace'))
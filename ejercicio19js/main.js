



let calcularPuntaje = (facil, normal, dificil) => {
    let totalfacil = 3 * facil
    let totalnormal = 5 * normal
    let totaldificil = 10 * dificil

    
 return   totalfacil + totalnormal + totaldificil

}



console.log(calcularPuntaje(3, 0, 0)) // 9
console.log(calcularPuntaje(0, 2, 1)) // 20
console.log(calcularPuntaje(5, 1, 2)) //40
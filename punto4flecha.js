let numSables = [2, 4,-8,5,-6]

console.log("Numeros de sables de luz")
numSables.forEach( (num)=> {
    console.log(num)
})


let filtrar = numSables.filter( (num) =>{
    return num < 0  
})
console.log(filtrar)
console.log(`los  sables defectuosos con energía negativa fueron  ${filtrar.length}`)
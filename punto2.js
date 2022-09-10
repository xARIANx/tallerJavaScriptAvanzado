function obtenerNombre(codigo){
    let nombre = codigo.split(":")[1]
    
    return(nombre)
    }
    
    let resultado = obtenerNombre("1001234307:Arian Castro")
    console.log(resultado)
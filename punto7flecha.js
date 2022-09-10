let filtarPlanos=(planos,arrancarNave)=> {

    let filtro = planos.filter((plano)=>{
    return (plano>=1 && plano<=10)
   })
    
    arrancarNave(filtro)
}

let planos = [1,100,200,300,400,500]
filtarPlanos(planos,(filtro) =>{
    let cuenta = filtro.length
    if(cuenta>0){
        console.log("arrancando la nave")
    }else{
        console.log("nos quedamos")
    }

})
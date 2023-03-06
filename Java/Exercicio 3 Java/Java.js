let graus = "10 z"

function Transform (graus){
    let gree
    if (graus.includes("C")==true){ 
        gree= Number(graus.replace("C",""))*9/5 + 32
        console.log(`A temperatura é de ${gree.toFixed(2)}°F`)    
    } else if (graus.includes("F")==true){
        gree= (Number(graus.replace("F",""))-32)*5/9
        console.log(`A temperatura é de ${gree.toFixed(2)}°C`)
    }else {
        console.log("A unidade de medida não é válida")
    }
}

Transform(graus.toUpperCase())


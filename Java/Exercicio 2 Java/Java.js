const home = {
    despesa: [
        300,
        400,
        200
    ],
    receita: [
        500,
        300.7554,
        150
    ],
}

function calc() {
i=0
despesatotal = 0
receitatotal = 0
    while(i<home.despesa.length){
        despesatotal=despesatotal+home.despesa[i]
    i++
    }
i=0
    while(i<home.receita.length){
        receitatotal=receitatotal+home.receita[i]
    i++
    }
let balance = receitatotal-despesatotal
if (balance<0) {
    console.log(`A família está com saldo negativo de R$ ${balance.toFixed(2)}`)
} else {
    console.log(`A família está com saldo positivo de R$ ${balance.toFixed(2)}`)
}  
  
}

calc() 


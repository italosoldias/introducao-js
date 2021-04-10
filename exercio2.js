var familia = {
    receita : [
         1200,
         850
        ],
    gastos :  [
         124,
         80,
         120,
         850,
         200
        ]   
}




     



function calculadora( entrada  ){
    let total = 0
   for (const valor of entrada ) {
       total += valor
   }

    return total


  
}




function calculadoraTotal() {
    const calculadoraReceita = calculadora(familia.receita)
    const calculadoraGastos = calculadora(familia.gastos)

    const total = calculadoraReceita - calculadoraGastos
    const estaOk = total >= 0
    const estaDevento = total <= 0

    if ( estaOk) {
    console.log(`${total}`)
    } else if (estaDevento) {
        console.log(`voce esta devendo`)
    }


}


console.log(calculadoraTotal())




// console.log(calculadoraDebitos())


// function calculadoraTotal() {
//     var valorConta= calculadoraDebitos() - calculadoraReceita()

//     return valorConta
// }


// console.log(calculadoraTotal())
  //  familia.receita[1] 
    //  familia.receita[0]

     
    // var gastos = familia.gastos[0] + familia.gastos[1] + familia.gastos[2] + familia.gastos[3] + familia.gastos[4]

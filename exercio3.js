


var valorTemperatura = "50 z"
var C = (F - 32) * 5/9
var F = C * 9/5 + 32



function recebeValorConversao(graus) {
    let celcios = graus.includes("C") || graus.includes("c")
    let fehrent = graus.includes("F") || graus.includes("f")
    

    var converte= parseInt(graus.split(" "))
    var calculaConverCemF = converte * 9/5 + 32
    var calculaConverFemC =   (converte - 32) * 5/9
    
    console.log(converte)
    

    console.log( )

    if (!fehrent && !celcios ) {
        throw new Error("esta passando um valor invalido")
    } else if (celcios) {
        console.log ( `essa é sua conversão ${calculaConverCemF}`)
    } else if (fehrent) {
        
        console.log(  `essa é sua conversão ${calculaConverFemC}`)
    } 


}



console.log (recebeValorConversao(valorTemperatura))

// console.log (Number (valorTemperatura))
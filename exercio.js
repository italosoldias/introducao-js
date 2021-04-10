
//  var notaB =  notaA  || 89 <= notaA
//  > notaB  || 79  <= notaB
// <= notaC 
// var escreveNotaF = notaFinal && "F"
    // var escreveNotaC = notaFinal && 
    // var escreveNotaB = notaFinal && "B"
    // var escreveNotaA = notaFinal && "A"

    // for (i = notaFinal; i != false; i++) {

    // if (notaFinal === escreveNotaA || escreveNotaB || escreveNotaC) {
    //     console.log(`parabens sua nota foi ${notaFinal}`)
    // }  if  (notaFinal === escreveNotaF) {
    //  )
        
    // } }

calculadora(70)


function calculadora( notaAluno ) {
    var notaMaxima =  notaAluno 
    var notaA = notaMaxima >= 80 && notaMaxima <= 89
    var notaB = notaMaxima >= 70 && notaMaxima <= 79
    var notaC = notaMaxima >= 60 && notaMaxima <= 69
    var notaF = notaMaxima < 60
    var notaFinal
    
    
    
    
    if (  notaA ) {
        notaFinal = "A"
        
        
        
        
    // } if(notaAluno == notaB) {
    //     console.log("parabens tirou 'b'")
    } else if ( notaB  ){
        notaFinal = "B"
        
       
       
    }  else if (  notaC ) {
        notaFinal = "C"
        
       

    } else if (notaF)  {
        notaFinal= "F"
        
       
    } else {
        notaFinal = "não deu em nada"
    }


    console.log (`sua nota foi ${notaFinal}`)
    

}


if ( calculadora().value === "F" ){
    console.log("vose foi reprovado")
} else if (calculadora().value ==="C" || "B" || "A" ) {
    
    console.log (`sua nota foi ${notaFinal}`)
}


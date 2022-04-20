function validadandoEstrutra(leituraJSON,leitura,formatojson,lista){
    if(leituraJSON.length<=0){           
        let resultado = lista.concat(formatojson)
        return resultado
    }else{ 
        let novalista = JSON.parse(leitura)                
        let resultado = lista.concat(formatojson).concat(novalista)
        return resultado
    }            
}

module.exports = validadandoEstrutra
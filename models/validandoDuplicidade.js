

function validateMouth (dados,inputData){
    let dataAtual = new Date(inputData.IncludeData)
    let includeData = new Date(dados[0].IncludeData)
    let timeDiff = Math.abs(dataAtual.getTime()-includeData.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let diasPorMes = diffDays/30
    let mesTratado = Math.round(diasPorMes)
    if(mesTratado>6){
        return false
    }else{
        return true
    }
}
function validandoEmpresa(array,inputData){
let listaEmpresas = []
return array.filter((obj) =>{
       if(obj.OpertorCode === inputData.OpertorCode){ 
            listaEmpresas.push(obj)  
         
        return listaEmpresas
    }
})


}
function analyseOperatorCode(lista,inputData){
operatorDuplicity = validandoEmpresa(lista,inputData)

    if(operatorDuplicity.length<=0){
        return false
    }
    else{
        return validateMouth (lista,inputData)
    }
}
module.exports = analyseOperatorCode


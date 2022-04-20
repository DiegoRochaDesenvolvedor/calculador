 function validateMouth (dados){
        let dataAtual = new Date()
        
        let timeDiff = Math.abs(dataAtual.getTime()-dados.Data.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        let diasPorMes = diffDays/30
        let mesTratado = Math.round(diasPorMes)
        
        if(mesTratado>=6){
            return false
        }else{
            return true
        }
    }
    module.exports = validateMouth

// dados={
//     "Data": new Date("2021-11-19T21:50:29.348Z")
// }

// console.log(validateMouth(dados))

inputData = {
    "Fare": 4,
    "OpertorCode": 3,
    "IncludeData": "2022-12-20T04:04:08.264Z"   
}

lista = [
	{
		"Fare": 4,
		"OpertorCode": 3,
		"IncludeData": "2022-04-20T04:04:08.264Z"
	},
	{
		"Fare": 1,
		"OpertorCode": 2,
		"IncludeData": "2022-04-20T03:40:18.401Z"
	},
    {
		"Fare": 1,
		"OpertorCode": 1,
		"IncludeData": "2022-04-20T03:40:18.401Z"
	}
]

function validateMouth (dados,inputData){
    let dataAtual = new Date(inputData)
    // console.log(new Date(dados.IncludeData).getTime())
    let includeData = new Date(dados[0].IncludeData).getTime()
    
    let timeDiff = Math.abs(dataAtual.getTime()-includeData);
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let diasPorMes = diffDays/30
    let mesTratado = Math.round(diasPorMes)
    
    if(mesTratado>=6){
        return false
    }else{
        return true
    }
}



function validandoEmpresa(array,inputData){
let listaEmpresas = []
return array.filter((obj) =>{
    if(obj.OpertorCode == inputData.OpertorCode){  
       listaEmpresas.push(obj)
    return listaEmpresas
    }
})


}

function analyseOperatorCode(lista,inputData){
operatorDuplicity = validandoEmpresa(lista,inputData)
    if(operatorDuplicity.length<0){
        console.log('dados não repetidos')
    }
    else{
        console.log('dados repetidos')
        console.log(validateMouth (lista,inputData))
        //if(false){
        // console.log("seu registro nao pode ser realizado pois já existe outro")
        // }else{
////realizar registro
        // }
    }
}



analyseOperatorCode(lista,inputData)


////////validação de datas esta errado


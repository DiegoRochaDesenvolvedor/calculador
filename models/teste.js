inputData = {
    "Fare": 4,
    "OpertorCode": 4,
    "IncludeData": "2022-05-20T04:04:08.264Z"   
}

lista = [
	{
		"Fare": 4,
		"OpertorCode": 2,
		"IncludeData": "2022-04-20T04:04:08.264Z"
	},
	{
		"Fare": 1,
		"OpertorCode": 3,
		"IncludeData": "2022-04-20T03:40:18.401Z"
	},
    {
		"Fare": 1,
		"OpertorCode": 4,
		"IncludeData": "2022-04-20T03:40:18.401Z"
	}
]

function validateMouth (dados,inputData){
    let dataAtual = new Date(inputData.IncludeData)
    let includeData = new Date(dados[0].IncludeData)
    let timeDiff = Math.abs(dataAtual.getTime()-includeData.getTime());
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
    if(operatorDuplicity.length<=0){
        console.log('dados não repetidos')
        //escreve
    }
    else{
        if(validateMouth (lista,inputData)){
            console.log('empresa ja cadastrada com periodo com menos de 6 meses ')
        }else{
            console.log('escreve dados')
        }
        // console.log('dados repetidos')
        // console.log(validateMouth (lista,inputData))
    }
}



analyseOperatorCode(lista,inputData)


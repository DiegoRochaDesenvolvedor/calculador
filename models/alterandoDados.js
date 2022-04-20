const lendo = require('./leituraDados')
const fs = require('fs')

let indiceParaAlterar = 4
let dadosParaAlterar={
    codigo:'novodado',
    estado: 'novodado',
    concluido: 'novodado',
    anotacao:'novodado'
}


async function armazenandoEalterando(dadosParaAlterar,indiceParaAlterar){
    const encoding = 'utf-8'
    let dados = await fs.promises.readFile('../arquivo.json',encoding)
    let dadosTratados = JSON.parse(dados)
    let filtro = dadosTratados.filter(function(obj){return obj.codigo == indiceParaAlterar })
    let indice = 0

    for(let i=0;i<dadosTratados.length;i++){
        indice += i
        return indicenovo
    }
    console.log(indicenovo)
    console.log(dadosTratados.length)

    
    if(dadosParaAlterar.codigo!=''){
        filtro[0].codigo = dadosParaAlterar.codigo
    }
    if(dadosParaAlterar.estado!=''){    
        filtro[0].estado = dadosParaAlterar.estado
    }
    if(dadosParaAlterar.concluido!=''){
        filtro[0].concluido = dadosParaAlterar.concluido        
    }
    if(dadosParaAlterar.anotacao!=''){
        filtro[0].anotacao = dadosParaAlterar.anotacao        
    }

    // console.log(dadosTratados.indexOf(filtro.codigo == indiceParaAlterar))
    // console.log(dadosTratados[0])
    // console.log(dadosTratados.indexOf(dadosTratados.codigo === 4))
    // console.log(dadosTratados[0].codigo)
    // console.log(indiceParaAlterar)
    // console.log(filtro)
    
    
    


}




armazenandoEalterando(dadosParaAlterar,indiceParaAlterar)











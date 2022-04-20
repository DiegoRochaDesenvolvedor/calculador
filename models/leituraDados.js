const fs = require('fs')


module.exports = {
    lendo : async function (){
            const encoding = 'utf-8'
            let dados = await fs.promises.readFile('./arquivo.json',encoding)
            let dadosTratados = JSON.parse(dados)
            return console.log(dadosTratados)
    
    },
    lendoPorInidice: async function (indice){
            const encoding = 'utf-8'
            let dados = await fs.promises.readFile('./arquivo.json',encoding)
            let dadosTratados = JSON.parse(dados)
            let filtro = dadosTratados.filter(function(obj){return obj.codigo == indice })
            return filtro
    
    }
 

}
    









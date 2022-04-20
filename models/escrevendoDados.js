const fs = require('fs')
const validador = require('../controller/validador')
const validateDuplicity = require('./validateDuplicity')



class criandoJSON{
    constructor(fare,operatorCode){
        this.fare = fare
        this.operatorCode = operatorCode
    }
    
    async formatojson(){
        let lista=[];
        let formatojson ={
            "Fare": this.fare,
            "OpertorCode": this.operatorCode,
            "IncludeData": new Date(),                
        }
        
        
        const encoding = 'utf-8';
        const leituraJSON =await fs.promises.readFile('./arquivo.json',encoding)
        let leitura = lista.concat(leituraJSON)            
        let resultado = validador(leituraJSON,leitura,formatojson,lista)

        
        //////////////// let filtro = resultado.filter(function(obj){return obj.Fare == 1 })
        let employes = JSON.parse(leituraJSON)
      
        if(validateDuplicity(employes,formatojson)){
            console.log('Ja existe taxa cadastrada para mesma empresa com menos de 6 meses')
        }else{
            fs.writeFile("./arquivo.json",JSON.stringify(resultado,null,'\t'),err=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('taxa cadastrada')
                }
            })

        }
                
        }
        
 }
    
    module.exports = criandoJSON
    
const fs = require('fs')
const validador = require('../controller/validador')
const date = require('./validateMouth')


class criandoJSON{
    constructor(fare,operatorCode){
        this.fare = fare
        this.operatorCode = operatorCode
    }
    
    async formatojson(){
        let lista=[];
        let formatojson ={
            "Fare": this.fare,
            "Opertor-Code": this.operatorCode,
            "Include-Data": new Date(),                
        }
        
        
        const encoding = 'utf-8';
        const leituraJSON =await fs.promises.readFile('./arquivo.json',encoding)
        let leitura = lista.concat(leituraJSON)            
        let resultado = validador(leituraJSON,leitura,formatojson,lista)

        let filtro = resultado.filter(function(obj){return obj.Fare == 1 })
        console.log(filtro)

        // if(filtro=true){
        //     console.log('true')
        // }else{
        //     console.log('false')
        // }     

      
        // date.validateMouth()
            fs.writeFile("./arquivo.json",JSON.stringify(resultado,null,'\t'),err=>{
                if(err){
                    console.log('deu erro')
                }else{
                    console.log('arquivo salvo')
                }
            })
            
        }
        
 }
    
    module.exports = criandoJSON
    
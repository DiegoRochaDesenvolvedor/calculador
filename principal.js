const escrevendo = require('./controller/enviandoDados')
const leitura = require('./models/leituraDados')



const fare = 4; //criar comando para inserção de dados
const operatorCode = 3;



escrevendo(fare,operatorCode)
leitura.lendo()
// teste.lendoPorInidice(4)


//precisamos aprender como separar as funcções em um import, ou usar classe

const criandoJSON = require('../models/escrevendoDados')


function escrevendo(fare,operatorCode){
            const dado = new criandoJSON(fare,operatorCode)
            dado.formatojson()
}

module.exports = escrevendo
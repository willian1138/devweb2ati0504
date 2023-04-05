const db = require("./banco")

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.INTEGER
    }
})

module.exports = Agendamentos

//Agendamentos.sync({force: true})
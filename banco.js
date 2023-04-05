const Sequelize = require("sequelize")

const sequelize = new Sequelize("test", "root", "Java@1157",{
    host: "localhost",
    dialect: "mysql" 
})
module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}
/*const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.INTEGER
    }
}) */

//Agendamentos.sync({force: true})
/**
 * Módulo de conexão de banco de dados
 * Uso do framework mongoose
 */

//importação do mogoose
//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

// configuração do banco de dados
// ip/ link do servidor, autenticação
// abre o atlas e nos 3 pontinhos (copy connection string) na nuvem usando o compass.
// ao final da url definir o nome do banco de daos
// exemplo: /dbnotes
const url = 'mongodb+srv://admin:123Senac@cluster0.uutlu.mongodb.net/dbnotes'

// validação (evitar a abertura de varias conexões)
let conectado = false

//método para conectar com o banco de dados
const conectar = async () => {
    //se não estiver conectado
    if(!conectado){
        //conectado com o banco de dados
        try {
            await mongoose.connect(url) //conectar
            conectado = true // setar a variavel
            console.log("MongoDB conectado")
        } catch (error) {
                console.log(error)       
            
        }
    }
}
//método para desconectar do banco de dados
const desconectar = async () => {
    //se estiver conectado
    if(conectado){
        //desconectar
        try {
           await mongoose.disconnect(url) // desconectar
           conectado = false //setar a variavel
           console.log("MongoDB desconectado") 
        } catch (error) {
                console.log(error)       
            
        }
    }
}
//exportar para o main os métodos conectar e desconectar
module.exports = {conectar, desconectar}
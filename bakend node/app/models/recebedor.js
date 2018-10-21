/**
 * Arquivo: recebedor de sangue
 * Descrição: arquivo responsável por tratar o modelo da classe recebedor
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let RecebedorSchema = new Schema({
    nome: String, //nome completo
    sangue: String, //grupo e fator rh O-,AB+...
    hospital: String, //hospital a doar
    desc: String, //descrição do recebedor
});

module.exports = mongoose.model('Recebedor', RecebedorSchema);

/**
 * Arquivo: doador de sangue
 * Descrição: arquivo responsável por tratar o modelo da classe doador
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DoadorSchema = new Schema({
    nomed: String, //nome completo
    sangued: String, //grupo e fator rh O-,AB+...
});

module.exports = mongoose.model('Doador', DoadorSchema);

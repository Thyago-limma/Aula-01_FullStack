const mongoose = require('mongoose');

const PaletaSchema = new mongoose.Schema({
    Sabor: {type: String, required:true},
    descricao: {type: String, required:true},
    foto: {type: String, required:true},
    preco: {type: Number, required:true},
});

const Paleta = mongoose.model('paletas', PaletaSchema);

module.exports = Paleta;

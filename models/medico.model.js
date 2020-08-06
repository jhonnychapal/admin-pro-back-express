const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }
});

// Lo siguiente es para efectos vizuales, no afecta la base de datos
// son registros que no quiero devolver al crear un usuario
MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Medico', MedicoSchema);
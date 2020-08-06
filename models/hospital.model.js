const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
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
    }
}, { collection: 'hospitales' });

// Lo siguiente es para efectos vizuales, no afecta la base de datos
// son registros que no quiero devolver al crear un usuario
HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Hospital', HospitalSchema);
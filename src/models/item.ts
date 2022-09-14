import { Schema, Types, model, Model } from "mongoose";
import { Cuenta } from "../interfaces/cuenta.interface";

const ItemSchema = new Schema<Cuenta>(
    {
        nombre: { 
            type: String, 
            required: true,
            minlength: [ 1, 'El nombre debe contener 1 o más caracteres' ]
        },
        rut: {
            type: Number,
            required: true,
            unique: false
        },
        cuentas: [{
            id_cuenta: {
                type: String,
                required: true,
                unique: true,
            },
            tipo_cuenta: {
                type: String,
                required: true,
            },
            saldo: {
                type: Number,
                required: true,
            }
        }]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model("cuentas", ItemSchema);
export default ItemModel;
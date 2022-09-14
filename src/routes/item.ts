import { Request, Response, Router } from "express";
import {
    deleteItem,
    getItem,
    getItems,
    postItem,
    updateItem,
} from "../controllers/item";

//
import { logMiddleware } from "../middleware/log";

//Función encarga de manejar e interpretar las rutas, se debe exportar al final
const router = Router()

/*
http://localhost:3002/item [GET] 
*/
router.get("/", getItems);

/*
http://localhost:3002/item/63214b0a19bfffc48e1224b2 [GET] (hay que colocar un id para que muestre uno en especifico)
*/
router.get("/:id", logMiddleware, getItem);

/*
http://localhost:3002/item/ [POST] + body 
{
  "nombre": "Lucho Jara",
  "rut": "1234567890",
  "cuentas": [
    {
    "id_cuenta": "CI-1234",
    "tipo_cuenta": "cuenta inicial",
    "saldo": 0
    }
  ]
} 
Asi lo crea sin cuentas con el array vacio
*/
router.post("/", postItem);

/*
http://localhost:3002/item/63214b0a19bfffc48e1224b2 [PUT] (se realiza el cambio de agregar la 2da cuenta)
{
  "nombre": "Lucho Jara",
  "rut": "1234567890",
  "cuentas": [
    {
    "id_cuenta": "CI-1234",
    "tipo_cuenta": "cuenta inicial",
    "saldo": 0
    },
    {
    "id_cuenta": "CS-5678",
    "tipo_cuenta": "cuenta secundaria",
    "saldo": 500
    }
  ]
} 
*/
router.put("/:id", updateItem);

/*
http://localhost:3002/item/63214b0a19bfffc48e1224b2 [DELETE] (hay que colocar un id para que elimine uno en especifico)
*/
router.delete("/:id", deleteItem);

export { router };
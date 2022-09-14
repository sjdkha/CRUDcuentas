//archivo principal (index)
import "dotenv/config";
import express from "express";
import cors from "cors";
//import para las rutas
import { router } from "./routes";
//import para mongo
import db from "./config/mongo";

//Indicando que utilice el puerto indicado en la variable o el 3001 -> datos del .env
const PORT = process.env.PORT || 3001;

const app = express()
//previene el origen cruzado de recursos, es decir que se puede consumir x cualquier recurso
app.use(cors());
//para que reciba datos en formato json x el body
app.use(express.json());
app.use(router);

db().then(() => console.log("Conexión lista"));

app.listen(PORT, () => console.log(`Listo, usando el puerto ${PORT}`));
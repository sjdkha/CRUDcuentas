import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

//El DB_URI hace referencia al string de conexión que esta en .env

export default dbConnect;
//Aquí se dejaran todas las rutas para no realizar varios import x ruta
import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/*
pasan estos 2 archivos y se corta despues del .
index.ts
item.ts
*/
const cleanFileName = (fileName:string) => {
    const file = fileName.split(".").shift();
    return file;
};

//funcion para leer cuantos y cuales son los archivos que existen, sin contar con el index y asi importarlos en item
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
});

export { router };
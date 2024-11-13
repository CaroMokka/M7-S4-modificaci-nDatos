import {
  listarActores,
  registrarActores,
  modificarActores,
  eliminarActores,
} from "./database/actor.js";
import { createServer } from "http"

const port = 3000

const server = createServer((req, res)=>{

})
server.listen(port, ()=> console.log(`Servidor escuchando por el puerto ${port}`))


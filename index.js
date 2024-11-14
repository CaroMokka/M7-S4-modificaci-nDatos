import {
  listarActores,
  registrarActores,
  modificarActores,
  eliminarActores,
} from "./database/actor.js";
import { createServer } from "http"
import url from "url"

const port = 3000

const server = createServer((req, res)=>{
    const method = req.method
    const urlParsed = url.parse(req.url, true)
    console.log(urlParsed)

    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ message: "Respuesta a petición" }))
})
server.listen(port, ()=> console.log(`Servidor escuchando por el puerto ${port}`))


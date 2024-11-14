import {
  listarActores,
  registrarActores,
  modificarActores,
  eliminarActores,
} from "./database/actor.js";
import { createServer } from "http"
import url from "url"

const port = 3000

const server = createServer( async (req, res)=>{
    const method = req.method
    const urlParsed = url.parse(req.url, true)
    const pathname = urlParsed.pathname

    res.setHeader("Content-Type", "application/json")

    if(pathname == "/actor"){
        if(method == "GET"){
            const actores = await listarActores()
            res.end(JSON.stringify({ message: "Listado de actores", data: actores }))
        }
    }

    
    
})
server.listen(port, ()=> console.log(`Servidor escuchando por el puerto ${port}`))


import {
  listarActores,
  registrarActores,
  modificarActores,
  eliminarActores,
} from "./database/actor.js";


listarActores().then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err))

const result1 = registrarActores();
console.log(result1);
const result3 = modificarActores();
console.log(result3);
const result4 = eliminarActores();
console.log(result4);
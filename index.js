import {
  listarActores,
  registrarActores,
  modificarActores,
  eliminarActores,
} from "./database/actor.js";

const registroActor = {
  first_name: "Tom",
  last_name: "Cruise",
};

const modificarActor = {
    first_name: "Emily",
    last_name: "Blunt"
}

// listarActores()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// registrarActores(registroActor)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

modificarActores(modificarActor, 205).then((res)=>{
    console.log(res)
}).catch((err)=>console.log(err))

// const result4 = eliminarActores();
// console.log(result4);

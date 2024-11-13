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

listarActores()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

registrarActores(registroActor)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const result3 = modificarActores();
console.log(result3);
const result4 = eliminarActores();
console.log(result4);

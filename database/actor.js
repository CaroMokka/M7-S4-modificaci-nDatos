import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "dvdrental",
  port: 5432,
});

const listarActores = async () => {
  const result = await pool.query("SELECT * FROM actor LIMIT 10");
  return result.rows;
};
//Ejemplo de consulta parametrizada
const registrarActores = async (data) => {
  const result = await pool.query(
    "INSERT INTO actor(first_name, last_name, last_update) VALUES($1, $2, now()) RETURNING *",
    [data.first_name, data.last_name]
  );
  return result.rows;
};
//Ejemplo de consulta parametrizada a traves de objeto
const modificarActores = async (data, id) => {
    const argumentos = {
        text: `UPDATE actor SET first_name=$1, last_name=$2, last_update=now() WHERE actor_id=$3 RETURNING *`,
        values: [data.first_name, data.last_name, id]
    }
    const result = await pool.query(argumentos)
    return result.rows
};
const eliminarActores = () => {
  return "Eliminar actores";
};

export { listarActores, registrarActores, modificarActores, eliminarActores };

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
const registrarActores = async (data) => {
  const result = await pool.query(
    "INSERT INTO actor(first_name, last_name, last_update) VALUES($1, $2, now()) RETURNING *",
    [data.first_name, data.last_name]
  );
  return result.rows;
};
const modificarActores = () => {
  return "Modificar actores";
};
const eliminarActores = () => {
  return "Eliminar actores";
};

export { listarActores, registrarActores, modificarActores, eliminarActores };

import { createPool } from "mysql2";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "!JesusReigns",
  port: 3306,
  database: "board",
});

pool.getConnection((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database");
  }
});

const executeQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrayParams, (err, data) => {
        if (err) {
          console.log("error query");
          reject(err);
        } else {
          resolve(data);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };

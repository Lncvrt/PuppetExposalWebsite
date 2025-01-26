import mysql from "mysql2/promise";

export const newConnection = (connType: string = "0") => {
  let dbName = "website";
  if (connType == "1") {
    dbName = "youtube_archive";
  }
  return mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "3306", 10),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: dbName,
  });
};
import { newConnection } from "@/lib/db";
import { Video } from "@/lib/types";
import { formatTime } from "@/lib/util";
import { FieldPacket, QueryResult } from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;
  let { sort } = req.query;
  const validTypes = ["all", "normal", "shorts", "streams"];
  const validSortTypes = ["new", "old"];

  if (!type || typeof type !== "string" || !validTypes.includes(type)) {
    return res.status(400).json({ message: "Invalid or missing type of video", validTypes, typeExample: "?type=all", success: false });
  }
  if (sort && (typeof sort !== "string" || !validSortTypes.includes(sort))) {
    return res.status(400).json({ message: "Invalid sort parameter", validSortTypes, typeExample: `?type=${type}&sort=new`, success: false });
  }

  sort = sort ? sort : validSortTypes[0];
  const sortCode = sort === validSortTypes[0] ? "DESC" : "ASC";
  let endSql = "";
  switch (type) {
    case "normal":
      endSql = " WHERE short = 0 AND stream = 0";
      break;
    case "shorts":
      endSql = " WHERE short = 1";
      break;
    case "streams":
      endSql = " WHERE stream = 1";
      break;
  }

  try {
    const start = Date.now();
    const conn = await newConnection();
    if (!conn) {
      return res.status(500).json({ message: "Failed to connect to database", success: false });
    }
    const [queryResult]: [QueryResult, FieldPacket[]] = await conn.query(`SELECT * FROM videos${endSql} ORDER BY timestamp ${sortCode}`);
    conn.end();
    const rows: Video[] = queryResult as QueryResult & { rows: Video[] } & Video[];

    const end = Date.now();
    const totalTime = formatTime(end - start);

    return res.status(200).json({ data: rows, processTime: totalTime, success: true });
  } catch {
    return res.status(500).json({ message: "Database query failed", success: false });
  }
}

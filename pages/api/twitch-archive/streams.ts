import { newConnection } from "@/lib/db";
import { Stream } from "@/lib/types";
import { formatTime } from "@/lib/util";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { sort } = req.query;
  const validSortTypes = ["new", "old"];

  if (sort && (typeof sort !== "string" || !validSortTypes.includes(sort))) {
    return res.status(400).json({ message: "Invalid sort parameter", validSortTypes, typeExample: `?sort=new`, success: false });
  }

  sort = sort ? sort : validSortTypes[0];
  const sortCode = sort === validSortTypes[0] ? "DESC" : "ASC";

  try {
    const start = Date.now();
    const conn = await newConnection();
    if (!conn) {
      return res.status(500).json({ message: "Failed to connect to database", success: false });
    }
    const [streams] = await conn.query(`SELECT * FROM streams ORDER BY timestamp ${sortCode}`);
    conn.end();
    const streamData: Stream[] = streams as Stream[];

    const end = Date.now();
    const totalTime = formatTime(end - start);

    return res.status(200).json({ data: streamData, processTime: totalTime, success: true });
  } catch {
    return res.status(500).json({ message: "Database query failed", success: false });
  }
}

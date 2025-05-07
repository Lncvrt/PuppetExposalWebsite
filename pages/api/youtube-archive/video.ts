import { newConnection } from "@/lib/db";
import { Video } from "@/lib/types";
import { formatTime } from "@/lib/util";
import { FieldPacket, QueryResult } from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const start = Date.now();
    const conn = await newConnection();
    if (!conn) {
      return res.status(500).json({ message: "Failed to connect to database", success: false });
    }

    const [queryResult]: [QueryResult, FieldPacket[]] = await conn.query('SELECT * FROM videos WHERE id = ? LIMIT 1', [id]);
    conn.end();

    const rows: Video[] = queryResult as QueryResult & { rows: Video[] } & Video[];

    if (rows.length !== 1) {
      return res.status(404).json({ message: "Video not found", success: false });
    }

    const end = Date.now();
    const totalTime = formatTime(end - start);

    return res.status(200).json({ data: rows[0], processTime: totalTime, success: true });
  } catch {
    return res.status(500).json({ message: "Database query failed", success: false });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

import prismadb from '../../lib/prismadb';
import serverAuth from "../../lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const genre = req.query.genre as string;

    try {
        await serverAuth(req);
        
      const movies = await prismadb.movie.findMany({
        where: { genre },
      });

      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching movies." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
};

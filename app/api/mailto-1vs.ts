import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const mailto1vs = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.writeHead(301, {
    Location: 'mailto:1.vorstand@sv-donaustauf.de',
  });
  res.end();
};

export default mailto1vs;

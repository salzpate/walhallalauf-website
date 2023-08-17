import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const mailto2aus = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.writeHead(301, {
    Location: 'mailto:2.ausdauer@sv-donaustauf.de',
  });
  res.end();
};

export default mailto2aus;

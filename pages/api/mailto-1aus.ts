import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.writeHead(301, {
    Location: 'mailto:1.ausdauer@sv-donaustauf.de'
  });
  res.end();
}

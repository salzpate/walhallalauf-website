import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.setHeader('Location', 'mailto:1.ausdauer@sv-donaustauf.de');
  res.end();
}

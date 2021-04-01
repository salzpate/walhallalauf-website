import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.setHeader('Location', 'mailto:1.vorstand@sv-donaustauf.de');
  res.redirect(307, 'mailto:1.vorstand@sv-donaustauf.de');
  res.end(res.getHeader('Location'));
}

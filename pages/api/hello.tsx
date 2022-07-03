// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";


// type o interface

type Data = {
  name: string
}

export default function handler(req:NextApiRequest, res:NextApiResponse<Data> ) {
  
  res.status(200).json({ name: 'John Doe' })
}

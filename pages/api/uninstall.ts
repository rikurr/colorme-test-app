// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("アンインストール", req.body);
  console.log("デジタルシグネチャ", req.headers);
  // res.status(200).json({
  //   redirect_url: "https://26df8eeff3e1da.lhr.life",
  // });
  res.status(200).end();
}

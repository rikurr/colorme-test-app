// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code, error } = req.query;

  console.log("認証コード, ", code);
  console.log("認証エラー", error);

  const clientId = process.env.CLIENT_ID ?? "";
  const clientSecret = process.env.CLIENT_SECRET ?? "";
  const redirectUrl = process.env.URL ?? "";
  const url = `https://api.shop-pro.jp/oauth/token?client_id=${clientId}&d'client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUrl}`;

  res.redirect(url);
}

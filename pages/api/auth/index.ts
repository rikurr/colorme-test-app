// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("認証URLのリクエスト");
  const clientId = process.env.CLIENT_ID ?? "";
  const scope = process.env.SCOPE ?? "";
  const redirectUrl = process.env.URL + "/api/auth/callback" ?? "";
  const url = `https://api.shop-pro.jp/oauth/authorize?client_id=${encodeURIComponent(
    clientId,
  )}&response_type=code&scope=${encodeURIComponent(
    scope,
  )}&redirect_uri=${encodeURIComponent(redirectUrl)}`;

  res.status(200).json({
    url: url,
  });
}

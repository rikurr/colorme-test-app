// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code, error } = req.query;

  console.log("認証コード, ", code);
  console.log("認証エラー", error);

  if (error === "access_denied") {
    console.log("認証がキャンセルされました");
    return res.status(403).send("access_denied");
  } else if (!code) {
    console.log("認証コードがありません");
    return res.status(403).send("not_code");
  }

  const clientId = process.env.CLIENT_ID ?? "";
  const clientSecret = process.env.CLIENT_SECRET ?? "";
  const redirectUrl = process.env.URL
    ? `${process.env.URL}/api/auth/callback`
    : "";
  const url = `https://api.shop-pro.jp/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUrl}`;

  console.log("アクセストークンのリクエスト");
  try {
    const accessTokenResponse = await fetch(url, { method: "POST" });
    const accessTokenJson = await accessTokenResponse.json();
    console.log("データ", accessTokenJson);

    if (accessTokenJson.error) {
      console.log("エラー");
      return res.status(403).send(accessTokenJson.error_description);
    } else {
      console.log("成功");
      // res.status(200).send("Success");
      res.redirect(process.env.URL ?? "");
    }
  } catch (error) {
    res.status(403).end();
  }
}

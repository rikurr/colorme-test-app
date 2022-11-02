// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { checkWebhookSignature } from "../../utils/checkWebhookSignature";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const isValid = await checkWebhookSignature(req);
  console.log("検証けっか", isValid);

  if (!isValid) {
    res.status(404).end();
    return;
  }
  res.status(200).json({
    redirect_url: "https://a0647f93eeec07.lhr.life/installed",
  });
}

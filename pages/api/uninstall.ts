// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { checkWebhookSignature } from "../../utils/checkWebhookSignature";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const isValid = await checkWebhookSignature(req);
  console.log("検証結果", isValid);

  if (!isValid) {
    res.status(404).end();
    return;
  }
  res.status(200).end();
}

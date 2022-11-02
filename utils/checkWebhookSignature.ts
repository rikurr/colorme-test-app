import type { NextApiRequest } from "next";
import crypto from "crypto";

export const checkWebhookSignature = async (req: NextApiRequest) => {
  const INSTALL_SECRET = "1713fe8357e20007ae921d17cc6676b8e976f492";
  const requestSig = req.headers["x-appstore-signature"];

  if (typeof requestSig !== "string") {
    return false;
  }
  const hmac = crypto.createHmac("sha256", INSTALL_SECRET);
  hmac.update(JSON.stringify(req.body));

  const signature = Buffer.from(hmac.digest()).toString("base64");

  return signature === requestSig ? true : false;
};

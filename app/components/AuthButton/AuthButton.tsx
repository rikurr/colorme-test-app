import { use } from "react";
import { Button } from "./client/Button";

async function getAuthUrl() {
  const clientId = process.env.CLIENT_ID ?? "";
  const scope = process.env.SCOPE ?? "";
  const redirectUrl = process.env.URL
    ? `${process.env.URL}/api/auth/callback`
    : "";
  const url = `https://api.shop-pro.jp/oauth/authorize?client_id=${encodeURIComponent(
    clientId,
  )}&response_type=code&scope=${encodeURIComponent(
    scope,
  )}&redirect_uri=${encodeURIComponent(redirectUrl)}`;
  return url;
}

export const AuthButton = () => {
  const authUrl = use(getAuthUrl());

  return <Button url={authUrl} />;
};

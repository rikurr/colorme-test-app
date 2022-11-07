import { use } from "react";
import { AuthButton } from "./components/AuthButton";

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

export default function Installed() {
  const authUrl = use(getAuthUrl());

  return (
    <>
      <h1>インストールに成功しました！</h1>
      <AuthButton url={authUrl} />
    </>
  );
}

import Link from "next/link";

export default function Installed() {
  return (
    <>
      <h1>インストールに成功しました！</h1>
      <Link href="/api/auth">認証ページへ</Link>
    </>
  );
}

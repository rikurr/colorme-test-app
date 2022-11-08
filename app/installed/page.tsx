import Link from "next/link";
import { AuthButton } from "../components/AuthButton/AuthButton";

export default function Installed() {
  return (
    <main>
      <h1>インストールに成功しました！</h1>
      <AuthButton />
      <div>
        <Link href="/">ページトップへ</Link>
      </div>
    </main>
  );
}

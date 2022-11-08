import { AuthButton } from "../../components/AuthButton/AuthButton";

export default function AuthCancelPage() {
  return (
    <main>
      <p>認証がキャンセルされました。</p>
      <p>アプリを利用するには認証の承認が必要です。</p>
      <AuthButton />
    </main>
  );
}

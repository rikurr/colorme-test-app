import { AuthButton } from "./components/AuthButton/AuthButton";
import { Profile } from "./components/Profile/Profile";

export default function Home() {
  return (
    <main>
      <Profile />
      <AuthButton />
    </main>
  );
}

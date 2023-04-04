import LoginApp from "@/components/Login/App";
import LoginPage from "@/layout/LoginPage";

export default function Main() {
  return <LoginPage app={<LoginApp />} />;
}

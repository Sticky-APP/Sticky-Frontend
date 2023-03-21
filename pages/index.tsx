import LandingApp from "@/components/landing/App";
import Introduce from "@/components/landing/Introduce";
import LandingPage from "@/layout/LandingPage";

export default function Main() {
  return <LandingPage app={<LandingApp />} introduce={<Introduce />} />;
}

import LandingApp from "@/components/Landing/App";
import Introduce from "@/components/Landing/Introduce";
import LandingPage from "@/layout/LandingPage";

export default function Main() {
  return <LandingPage app={<LandingApp />} introduce={<Introduce />} />;
}

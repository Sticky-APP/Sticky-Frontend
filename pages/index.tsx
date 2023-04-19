import LandingApp from "@/components/Landing/App";
import Introduce from "@/components/Landing/Introduce";
import Footer from "@/components/common/Footer";
import LandingPage from "@/layout/LandingPage";

export default function Main() {
  return (
    <LandingPage
      app={<LandingApp />}
      introduce={<Introduce />}
      footer={<Footer />}
    />
  );
}

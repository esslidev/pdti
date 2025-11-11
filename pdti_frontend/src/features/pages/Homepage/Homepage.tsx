import Footer from "../../components/features/Footer/Footer";
import Header from "../../components/features/Header/Header";
import AxisSection from "./components/AxisSection/AxisSection";
import HeroSection from "./components/HeroSection/HeroSection";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <div className="sections">
        <HeroSection />
        <AxisSection />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

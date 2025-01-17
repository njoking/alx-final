import "../pages/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import homepageImage from "../pages/Images/Homepage.jpg";
import About from "./About";
import Partners from "./Partners";
import Resources from "./Resources";
import ContactUs from "./ContactUs";
import PartnerBg from "../pages/Images/PartnerBg.jpg";
import Adopt from "../pages/Images/Adopt.jpg";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Buttons></Buttons>
      <Parallax
        pages={6}
        offset={0}
        speed={0}
        style={{
          backgroundImage: `url(${Adopt})`,
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundImage: `url(${homepageImage})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            height: "40%",
          }}
        >
          <h1 className="HomeFont">Stay-Pawsitive</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            backgroundImage: `url(${PartnerBg})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            opacity: 1,
          }}
        >
          <Partners />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <Resources />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <ContactUs />
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            height: "max-content",
            paddingTop: "200px",
          }}
          offset={5}
          speed={0}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

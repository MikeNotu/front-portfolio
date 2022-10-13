import "../styles/LandingPage.scss";
import Jumbotron from "../components/Jumbotron";
import Bubbles from "../components/Bubbles";
import Technologies from "../components/Technologies";

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="screen">
          <div className="sec-1">
            <Technologies />
            <Jumbotron />
          </div>
          <Bubbles />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

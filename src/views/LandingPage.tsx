import "../styles/LandingPage.scss";
import Jumbotron from "../components/Jumbotron";
import Bubbles from "../components/Bubbles";

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* <div className="sec-1"></div> */}

      <div className="landing-page">
        <div className="screen">
          <div className="sec-1">
            <div className="technologies">
              <div className="technologies__description">
                <p className="technologies__description--sec1">test</p>
                <p>test</p>
                <p>test</p>
              </div>
            </div>
            <Jumbotron />
          </div>
          <Bubbles />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

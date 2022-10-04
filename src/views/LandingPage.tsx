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
            {/* <div className="technologies">🧐testtest</div> */}
            {/* <div className="jumbotron">
              <img
                src={Img_Man}
                className="img-fluid man"
                alt="Responsive image"
              ></img>
              <div className="container-fluid">
                <p className="jumbotron__description--sec1">Michael Bateman</p>
                <p className="jumbotron__description--sec2">{`React & React Native Developer`}</p>
                <p className="jumbotron__description--sec3">
                  I'm a Software Engineering, specialized in FrontEnd
                  Development.
                </p>
                <p className="jumbotron__description--sec3">
                  I'm always happy and willing to learn any technology that's
                  needed for a project.
                </p>
              </div>
            </div> */}

            {/* <div className="container">
              <div className="column">
                <div className="col-sm">One of three columns</div>
                <div className="col-sm">One of three columns</div>
              </div>
            </div> */}

            <Jumbotron />
          </div>
          <Bubbles />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

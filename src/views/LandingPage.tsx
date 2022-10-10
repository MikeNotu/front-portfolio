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
              <ul className="technologies__description">
                <p className="technologies__description--sec1">
                  Technologies I've used
                </p>
                <li className="technologies__description--sec2">React</li>
                <li className="technologies__description--sec2">
                  React Native
                </li>
                <li className="technologies__description--sec2">Hooks</li>
                <li className="technologies__description--sec2">Typescript</li>
                <li className="technologies__description--sec2">HTML</li>
                <li className="technologies__description--sec2">
                  CSS (Bootstrap, Flexbox, SCSS, BEM, )
                </li>
                <li className="technologies__description--sec2">
                  Javascript (ES5 &#38; ES6)
                </li>
                <li className="technologies__description--sec2">
                  Git &#38; GitHub
                </li>
                <li className="technologies__description--sec2">
                  State Management (Redux &#38; React Context)
                </li>
                <li className="technologies__description--sec2">i18next</li>
                <li className="technologies__description--sec2">
                  AsyncStorage
                </li>
                <li className="technologies__description--sec2">NetInfo</li>
                <li className="technologies__description--sec2">
                  Agile &#38; SCRUM
                </li>
                <li className="technologies__description--sec2">
                  React Testing Library &#38; Jest
                </li>
                <li className="technologies__description--sec2">i18next</li>
                <li className="technologies__description--sec2">
                  Material UI (MUI)
                </li>
                <li className="technologies__description--sec2">
                  Atomic Design
                </li>

                <li className="technologies__description--sec2">
                  Styled Components
                </li>
              </ul>
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

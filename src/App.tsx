// import MyName from "./components/MyName/MyName";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import Navbar from "./components/Navbar";
import LandingPage from "./views/LandingPage";
import CardsPage from "./views/CardsPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            This website is a Porfolio of some of my Personal Projects
          </h1>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path={["/", "/front-portfolio", "/front-portfolio/Index"]}
            >
              <CardsPage />
              {/* <LandingPage /> */}
            </Route>
            <Route exact path="/front-portfolio/Test">
              <TestComponent />
            </Route>
            <Route exact path="/front-portfolio/Cards">
              <CardsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

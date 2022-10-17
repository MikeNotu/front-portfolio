import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./views/LandingPage";
import CardsPage from "./views/CardsPage";
import TestPage from "./views/TestPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route
              exact
              path={["/", "/front-portfolio", "/front-portfolio/Index"]}
            >
              <LandingPage />
            </Route>

            <Route exact path="/front-portfolio/Projects">
              {/* <CardsPage /> */}
              <TestPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

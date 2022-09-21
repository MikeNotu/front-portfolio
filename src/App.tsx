import MyName from "./components/MyName/MyName";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/front-portfolio">
              {/* <MyName /> */}
              <h1>WIP</h1>
            </Route>
            <Route exact path="/front-portfolio/Test">
              <TestComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

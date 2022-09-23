// import MyName from "./components/MyName/MyName";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);

  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path={["/front-portfolio", "/front-portfolio/Index"]}>
              {/* <MyName /> */}
              {/* <h1>WIP</h1> */}
              <Cards />
            </Route>
            <Route exact path="/front-portfolio/Test">
              {JSON.stringify(show)}
              <button
                onClick={() => {
                  setShow(!show);
                  show = !show;
                }}
              >
                Show Card
              </button>
              {show ? <Cards /> : <h1> No Cards :c</h1>}
              {/* <TestComponent /> */}
              {/* <Cards /> */}
            </Route>
            <Route exact path="/front-portfolio/Cards">
              <Cards />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

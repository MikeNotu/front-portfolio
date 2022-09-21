import MyName from "./components/MyName/MyName";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div>
          <Switch>
            <Route exact path="/">
              <MyName />
            </Route>
            <Route path="/test">
              <TestComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

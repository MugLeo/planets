import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPlanet from "./components/AddPlanet";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Planets />
          </Route>
          <Route path="/add">
            <AddPlanet />
          </Route>
          <Route path="/editar/:id">
            <AddPlanet />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

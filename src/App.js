import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PieChart1 from "./components/PieChart1";

function App() {
  return (
    <Router>
      <div>
        <h2 className="header">AmCharts - Demo</h2>
        <hr />
        <Switch>
          <Route exact path="/" component={PieChart1} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

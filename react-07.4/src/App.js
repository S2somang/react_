import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./routers/Detail";
import Home from "./routers/Home";

function App() {
  return (
  <Router>
    {/* 한번에 하나의 route만 렌더링하기위해 Switch씀 */}
    <Switch>
      <Route path ="/movie">
        <Detail />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

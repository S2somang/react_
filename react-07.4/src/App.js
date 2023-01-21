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
    <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        {/* react Router한테 여기오는 id 값이 뭔지알고싶다~말하는것 */}
      <Route path ="/movie/:id">
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

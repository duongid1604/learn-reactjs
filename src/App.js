// import logo from "./logo.svg";
// import "./App.css";
import Header from "components/Header";
import AlbumFeature from "features/Album";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import TodoFeatures from "./features/todo";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p> */}

      <Switch>
        <Route path="/todos" component={TodoFeatures} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
    </div>
  );
}

export default App;

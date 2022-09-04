// import logo from "./logo.svg";
// import "./App.css";
import Header from "components/Header";
import ProductFeature from "features/Product";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Switch> */}
      {/* <Route path="/todos" component={TodoFeatures} />
        <Route path="/albums" component={AlbumFeature} /> */}
      <Route path="/" component={ProductFeature} />
      <Route path="/products" component={ProductFeature} />
      {/* </Switch> */}
    </div>
  );
}

export default App;

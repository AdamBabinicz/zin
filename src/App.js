import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";
import Home from "./HomePage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route to="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";
import Home from "./HomePage";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route to="/" exact component={Home} />
        </Switch>
        <Footer />

        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
            fontSize: "14px",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "16px",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          “W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies.
        </CookieConsent>
      </Router>
    </>
  );
}

export default App;

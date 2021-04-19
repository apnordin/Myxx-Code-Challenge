import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";

export default function App() {
  return (
      <Router>
          <Wrapper>
            <Route exact path="/" component={Main} />
          </Wrapper>
      </Router>
  );
}
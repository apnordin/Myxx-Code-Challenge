import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Main from "./pages/Main";

// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

export default function App() {
  return (
      <Router>
          <Wrapper>
            <Route exact path="/" component={Main} />
          </Wrapper>
      </Router>
  );
}
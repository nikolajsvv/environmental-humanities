import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EssayPreview from "./EssayPreview";
import EssayFullView from "./EssayFullView";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={EssayPreview} />
        <Route path='/essays/:id' component={EssayFullView} />
      </Switch>
    </Router>
  );
};

export default Routes;

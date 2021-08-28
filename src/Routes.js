import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import PostDetail from "./components/PostDetail";

const Routes = () => {
  const posts = "/posts";
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path={posts} component={App} />
        <Route path={`${posts}/:id`} component={PostDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

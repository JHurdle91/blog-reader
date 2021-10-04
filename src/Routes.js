import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

const Routes = () => {
  const posts = "/posts";
  const login = "/login";
  const register = "/register";
  const profile = "/profile";

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]} component={App} />
        <Route exact path={posts} component={App} />
        <Route path={`${posts}/:postId`} component={PostDetail} />
        <Route exact path={login} component={Login} />
        <Route exact path={register} component={Register} />
        <Route exact path={profile} component={Profile} />
        <Route path="/user" component={BoardUser} />
        <Route path="/mod" component={BoardModerator} />
        <Route path="/admin" component={BoardAdmin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

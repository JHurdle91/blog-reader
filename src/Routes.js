import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Navbar from "./components/Navbar";
import PostCreate from "./components/PostCreate";
import PostDetail from "./components/PostDetail";
import PostUpdate from "./components/PostUpdate";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;

const Routes = () => {
  const posts = "/posts";
  const login = "/login";
  const register = "/register";
  const profile = "/profile";

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path={["/", "/home"]} component={App} />
        <Route exact path={posts} component={App} />
        <Route path={`${posts}/create`} component={PostCreate} />
        <Route path={`${posts}/:postId/edit`} component={PostUpdate} />
        <Route path={`${posts}/:postId`} component={PostDetail} />
        <Route exact path={login} component={Login} />
        <Route exact path={register} component={Register} />
        <Route exact path={profile} component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

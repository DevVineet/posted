import React from "react";
import { Home } from "./pages/Home";
import { Message } from "./pages/Message";
// import { Link } from "./components/shared/Link";
import { Navigation } from "./components/Navigation";
import user from "./assets/icons/user.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-between fixed px-8 py-6">
      <Navigation />
      {/* <Link icon={user} name="Farhan" /> */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <div className="w-80 border-r border-gray-100 flex flex-row justify-end  flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-grow flex">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/messages">
              <Message />
            </Route>
            <Route path="/explore">
              <h1>Explore</h1>
            </Route>
            <Route path="/profile">
              <h1>Profile</h1>
            </Route>
            <Route>
              <h1>404 page not found</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

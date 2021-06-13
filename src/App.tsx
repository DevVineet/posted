import React from "react";
import { Home } from "./pages/Home";
import { Message } from "./pages/Message";
import { Link } from "./components/shared/Link";
import { ReactComponent as UserIcon } from "./assets/icons/user.svg";
import { ReactComponent as HomeIcon } from "./assets/icons/home.svg";
import { ReactComponent as ExploreIcon } from "./assets/icons/explore.svg";
import { ReactComponent as MessageIcon } from "./assets/icons/message.svg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4 lg:pr-12 sticky top-0">
      <span className="my-12 text-white bg-green-500 font-bold text-xl w-10 h-10 rounded-2xl inline-block flex justify-center items-center">
        P
      </span>
      <nav className="space-y-6">
        <Link Icon={HomeIcon} name="Home" path="/" />
        <Link Icon={ExploreIcon} name="Explore" path="/explore" />
        <Link Icon={MessageIcon} name="Messages" path="/messages" />
        <Link Icon={UserIcon} name="Profile" path="/profile" />
      </nav>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex min-h-screen lg:px-36">
        <div className="border-r border-gray-100">
          <Sidebar />
        </div>
        <div className="flex flex-1">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/messages">
              <Message />
            </Route>
            <Route path="/explore">
              <div className="flex flex-1 items-center justify-center flex-col">
                <h1>Explore page to be developed.</h1>
                <a
                  href="https://github.com/farhan2056/posted"
                  target="_blank"
                  className="text-blue-500"
                >
                  Contribute here
                </a>
              </div>
            </Route>
            <Route path="/profile">
              <div className="flex flex-1 items-center justify-center flex-col">
                <h1>Profile page to be developed.</h1>
                <a
                  href="https://github.com/farhan2056/posted"
                  target="_blank"
                  className="text-blue-500"
                >
                  Contribute here
                </a>
              </div>
            </Route>
            <Route>
              <div className="flex flex-1 items-center justify-center flex-col">
                <h1>404 page not found</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

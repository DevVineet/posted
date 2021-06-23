import React, { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Message } from "./pages/Message";
import { Link } from "./components/shared/Link";
import { ReactComponent as UserIcon } from "./assets/icons/user.svg";
import { ReactComponent as HomeIcon } from "./assets/icons/home.svg";
import { ReactComponent as ExploreIcon } from "./assets/icons/explore.svg";
import { ReactComponent as MessageIcon } from "./assets/icons/message.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

const Sidebar = () => {
  let { url } = useRouteMatch();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="p-4 lg:pr-12 sticky top-0">
      <span
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        className="select-none my-12 text-white bg-green-500 font-bold text-xl w-10 h-10 rounded-2xl inline-block flex justify-center items-center"
      >
        P
      </span>
      <nav className="space-y-6">
        <Link Icon={HomeIcon} name="Home" path={url} />
        <Link Icon={ExploreIcon} name="Explore" path={`${url}/explore`} />
        <Link Icon={MessageIcon} name="Messages" path={`${url}/messages`} />
        <Link Icon={UserIcon} name="Profile" path={`${url}/profile`} />
      </nav>
    </div>
  );
};

function App() {
  let { path } = useRouteMatch();
  return (
    <>
      <div className="flex min-h-screen lg:px-36 dark:bg-gray-900">
        <div className="border-r border-gray-100 dark:border-gray-800">
          <Sidebar />
        </div>
        <div className="flex flex-1">
          <Switch>
            <Route exact path={path}>
              <Home />
            </Route>
            <Route path={`${path}/messages`}>
              <Message />
            </Route>
            <Route path={`${path}/explore`}>
              <div className="flex flex-1 items-center justify-center flex-col">
                <h1 className="dark:text-white">
                  Explore page to be developed.
                </h1>
                <a
                  href="https://github.com/farhan2056/posted"
                  target="_blank"
                  className="text-blue-500"
                >
                  Contribute here
                </a>
              </div>
            </Route>
            <Route path={`${path}/profile`}>
              <div className="flex flex-1 items-center justify-center flex-col">
                <h1 className="dark:text-white">
                  Profile page to be developed.
                </h1>
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
                <h1 className="dark:text-white">404 page not found</h1>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;

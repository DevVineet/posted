import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  component: Component,
  user,
  roles,
  ...rest
}: {
  component: FC<any>;
  roles: [string];
  exact?: boolean;
  user: string | null;
  path: string;
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        // logged in so return component
        return <Component {...props} />;
      }}
    />
  );
}

export { PrivateRoute };

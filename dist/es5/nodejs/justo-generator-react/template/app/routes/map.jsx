//imports
import React from "react";
import {Route, IndexRoute} from "react-router";

//route map
export const map =
<Route path="/" component={require("../views/App").default}>
  <IndexRoute component={require("../views/AppIndex").default} />
</Route>;

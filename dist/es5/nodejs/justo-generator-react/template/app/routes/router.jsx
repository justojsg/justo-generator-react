//imports
import React from "react";
import {Route, IndexRoute} from "react-router";

//route map
export default
<Route path="{{scope.mountPoint}}" component={require("../views/{{scope.name}}/Layout").default}>
  <IndexRoute component={require("../views/{{scope.name}}/Index").default} />
</Route>;

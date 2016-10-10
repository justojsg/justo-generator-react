//imports
import React from "react";
import ReactDOM from "react-dom";
{{#if scope.reactRouter}}
import {Router, {{scope.reactRouterHistory}} as history} from "react-router";
import {map} from "./routes/map";
{{else}}
import App from "./views/App";
{{/if}}

//root component
{{#if scope.reactRouter}}
ReactDOM.render(<Router history={history}>{map}</Router>, document.getElementById("react-app"));
{{else}}
ReactDOM.render(<App />, document.getElementById("react-app"));
{{/if}}

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

import './assets/scss/style.scss';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
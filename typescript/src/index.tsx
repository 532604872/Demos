/**
 * @Description:
 * @Author: zero
 * @Date: 2019-11-26 15:34:19
 * @LastEditors: zero
 * @LastEditTime: 2019-11-26 15:34:19
*/

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);
// @flow

import * as React from "react";
import { render } from "react-dom";

import { App } from "components";
import { getElementById } from "utils";

render(<App />, getElementById(document, "root"));

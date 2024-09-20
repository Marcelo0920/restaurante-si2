import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth";
import cliente from "./cliente";

export default combineReducers({
  auth,
  cliente,
});

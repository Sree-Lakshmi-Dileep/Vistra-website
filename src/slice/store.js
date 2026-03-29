import { configureStore } from "@reduxjs/toolkit";

import devicesReducer from "./devicesSlice";
import usersReducer from "./usersSlice";
import scansReducer from "./scansSlice.js";
import filesReducer from "./filesSlice";
import progressReducer from "./progressSlice.js";
import reportsReducer from "./reportsSlice";

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    users: usersReducer,
    scans: scansReducer,
    files: filesReducer,
    progress: progressReducer,
    reports: reportsReducer
  },
});
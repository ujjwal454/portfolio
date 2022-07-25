import { createStore, applyMiddleware } from "redux";
import { projectReducer } from "./reducer";
import logger from "redux-logger";

const middleWare = [];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(
  projectReducer,
  applyMiddleware(...middleWare)
);

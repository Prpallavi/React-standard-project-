import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancer = composeWithDevTools(
  compose(
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : (f) => f
  ),
  applyMiddleware(thunk)
);
export const store = createStore(rootReducer, composedEnhancer);

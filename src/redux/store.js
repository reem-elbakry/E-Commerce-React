import { createStore } from "redux";
import reducers  from "./reducers/index";

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //store m4 bta5od reducers bs???

export default store;
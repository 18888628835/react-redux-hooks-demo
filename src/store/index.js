import { createStore } from "redux";
import { reducer } from "./reducer";
//需要创建一个 store,然后传递 reducer 方法
const store = createStore(
  reducer,
  //配合 Redux-Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

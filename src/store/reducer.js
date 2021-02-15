import { ADD_ITEM, REMOVE_ITEM, SUB_ITEM } from "./action";

// reducer 函数,里面写dispatch 的逻辑
const initialState = {
  defaultValue: "write something",
  list: ["需求沟通大会", "写代码", "测试"],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case SUB_ITEM:
      state.list.pop();
      return { ...state, list: [...state.list] };
    case REMOVE_ITEM:
      const { id } = action;
      state.list.splice(id, 1);
      return { ...state, list: [...state.list] };
    default:
      return state;
  }
};

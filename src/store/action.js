//由于项目可能会变大,所以需要一个特定的 action 文件
export const ADD_ITEM = "ADD_ITEM";
export const SUB_ITEM = "SUB_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

//action 构造器,方便维护.要不然 dispatch 太散乱
export const addItem = (data) => ({
  type: ADD_ITEM,
  payload: data,
});
export const subItem = () => ({
  type: SUB_ITEM,
});
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id: id,
});

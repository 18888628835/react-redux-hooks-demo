import React, { useState } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { subItem, removeItem, addItem } from "./store/action";

const TodoList = () => {
  const list = useSelector((state) => state.list);
  //React新出的 Hooks API,可以获取 store 里面的数据
  const placeholder = useSelector((state) => state.defaultValue);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div style={{ margin: "30px" }}>
      <div>
        <Input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder={placeholder}
          style={{ width: "250px", marginRight: "10px" }}
        />
        <Button
          onClick={() => {
            dispatch(addItem(input));
            setInput("");
          }}
        >
          增加
        </Button>
        <Button
          onClick={() => {
            dispatch(subItem()); //使用 action 构造器来替代 dispatch({type:type: SUB_ITEM,})
          }}
        >
          删除
        </Button>
      </div>
      <div style={{ marginTop: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item>
              {item}
              <div
                onClick={() => {
                  dispatch(removeItem(index));
                }}
              >
                删除本节点
              </div>
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default TodoList;

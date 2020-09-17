import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../App"; // Todo interface 임포트

interface TodoItemListProps {
  todos: Todo[]; // todo 객체들이 들어있는 배열
  onToggle: (e: any) => void; // 체크박스 on/off 함수
  onRemove: (e: any) => void; // 아이템 삭제하는 함수
}

class TodoItemList extends React.Component<TodoItemListProps> {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;

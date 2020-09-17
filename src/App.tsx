import React, { Component } from "react";
import Form from "./components/Form";
import Template from "./components/Template";
import TodoItemList from "./components/TodoItemList";

export interface Todo {
  id: number; // todo의 고유 id
  text: string; // todo의 내용
  checked: boolean; // 체크박스의 상태
}

export interface State {
  input: string;
  todos: Todo[];
}

interface Template {}

class App extends Component<{}, State> {
  id = 3; // 아래 이미 id 0, 1, 2 가 존재하므로 3으로 설정
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 예제 해보기", checked: false },
      { id: 1, text: "To Do List 만들기", checked: true },
      { id: 2, text: "리액트 공부", checked: false },
    ],
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // const {
    //   target: { value },
    // } = e;
    const { value } = e.target;
    this.setState({
      input: value, // input의 다음 바뀔 값
    });
  };

  handleCreate = (): void => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        // concat() 함수를 활용하여 배열에 추가
        id: this.id++, // id값 1증가
        text: input, // text에 input의 내용 대입
        checked: false,
      }),
    });
  };

  // 눌려진 키가 Enter 면 handleCreate 호출
  handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id: number) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾기
    const index = todos.findIndex((todo) => todo.id === id);

    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked,
        },
        ...todos.slice(index + 1, todos.length),
      ],
    });
  };

  handleRemove = (id: number) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      // 비구조화 할당
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;
    return (
      <Template
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </Template>
    );
  }
}

export default App;

import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodo] = useState([]);
  const [completeTodos, setcompleteTodo] = useState([]);

  const onChangeTodoText = (e) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
    console.log(newTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodo(newTodos);
    onClickDelete(index);
  };

  const onClickBack = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    const conpTodos = [...completeTodos];
    conpTodos.splice(index, 1);
    setcompleteTodo(conpTodos);
    setIncompleteTodo(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CompletedTodoItem from "./CompletedTodoItem";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import PendingTodoItem from "./PendingTodoItem";
import Row from "react-bootstrap/Row";
import TodoListForm from "./TodoListForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [draftTodo, setDraftTodo] = useState("");

  const addTodo = () => {
    setTodos([{ description: draftTodo, complete: false }, ...todos]);
    setDraftTodo("");
  };

  const completeTodoItem = (index) => {
    const existingTodos = todos;
    const completedItem = todos[index];
    existingTodos[index] = {
      description: completedItem.description,
      complete: true,
    };
    setTodos([...existingTodos]);
  };

  const renderTodos = () => {
    const pendingTodos = [];
    const completedTodos = [];

    todos.forEach((todo, index) => {
      if (todo.complete) {
        completedTodos.push(
          <CompletedTodoItem description={todo.description} key={index} />
        );
      } else {
        pendingTodos.push(
          <PendingTodoItem
            description={todo.description}
            completeTodoItem={completeTodoItem}
            index={index}
            key={index}
          />
        );
      }
    });

    return (
      <>
        {pendingTodos.length > 0 && (
          <Row className="justify-content-center mt-3">
            <Card style={{ width: "18rem" }} border="primary">
              <Card.Header>Pending Todos</Card.Header>
              <ListGroup>{pendingTodos}</ListGroup>
            </Card>
          </Row>
        )}

        {completedTodos.length > 0 && (
          <Row className="justify-content-center mt-3">
            <Card style={{ width: "18rem" }} border="danger">
              <Card.Header>Completed</Card.Header>
              <ListGroup>{completedTodos}</ListGroup>
            </Card>
          </Row>
        )}
      </>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center mt-2">
        <h2>Todo List</h2>
      </Row>
      <Row className="justify-content-center">
        <TodoListForm addTodo={addTodo} setDraftTodo={setDraftTodo} />
      </Row>
      {renderTodos()}
    </Container>
  );
};

export default TodoList;

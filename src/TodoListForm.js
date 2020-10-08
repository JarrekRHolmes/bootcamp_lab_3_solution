import React from "react";

const PendingTodoItem = (props) => {
  const { addTodo, setDraftTodo } = props;

  return (
    <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
          e.target.reset();
        }}
      >
        <input
          onChange={(e) => {
            setDraftTodo(e.target.value);
          }}
          placeholder="add task"
        />
      </form>
  );
};

export default PendingTodoItem;

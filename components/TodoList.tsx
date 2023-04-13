import React from "react";
import todoApi from "@/api/todoApi";
import { useQuery } from "@tanstack/react-query";
import { TodoType } from "@/api/type";

const TodoList = ({ queryKey }: { queryKey: string }) => {
  const fallback: TodoType[] = [];
  const { data: todos = fallback } = useQuery(
    ["todo", queryKey],
    todoApi.getList,
    {
      enabled: true,
    }
  );
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} {todo.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

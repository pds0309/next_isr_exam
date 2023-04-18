import axiosInstance from "./instance";
import { TodoType } from "./type";

const todoApi = {
  getList: () => axiosInstance.get<never, TodoType[]>("/todos"),
  getById: (id: number) => axiosInstance.get<never, TodoType>(`/todos/${id}`),
  add: (props: Omit<TodoType, "id">) =>
    axiosInstance.post<never, never>("/todos", {
      ...props,
    }),
};

export default todoApi;

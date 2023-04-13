import axiosInstance from "./instance";
import { TodoType } from "./type";

const todoApi = {
  getList: () => axiosInstance.get<never, TodoType[]>("/todos"),
  add: (props: Omit<TodoType, "id">) =>
    axiosInstance.post<never, never>("/todos", {
      ...props,
    }),
};

export default todoApi;

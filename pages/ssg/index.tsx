import { GetStaticProps } from "next";
import React from "react";
import { generateQueryClient } from "../_app";
import todoApi from "@/api/todoApi";
import TodoList from "@/components/TodoList";
import { dehydrate } from "@tanstack/react-query";

const Ssg = () => {
  return (
    <div>
      <h2>SSG 페이지</h2>
      <TodoList queryKey="ssg" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = generateQueryClient();
  await queryClient.prefetchQuery(["todo", "ssg"], todoApi.getList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Ssg;

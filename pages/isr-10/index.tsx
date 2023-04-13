import { GetStaticProps } from "next";
import React from "react";
import { generateQueryClient } from "../_app";
import todoApi from "@/api/todoApi";
import TodoList from "@/components/TodoList";
import { dehydrate } from "@tanstack/react-query";

const Isr10 = () => {
  return (
    <div>
      <h2>Isr 10초 revalidate 페이지</h2>
      <TodoList queryKey="isr10" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = generateQueryClient();
  await queryClient.prefetchQuery(["todo", "isr10"], todoApi.getList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};

export default Isr10;

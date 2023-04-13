import { GetServerSideProps } from "next";
import React from "react";
import { generateQueryClient } from "../_app";
import todoApi from "@/api/todoApi";
import TodoList from "@/components/TodoList";
import { dehydrate } from "@tanstack/react-query";

const Ssr = () => {
  return (
    <div>
      <h2>Ssr 페이지</h2>
      <TodoList queryKey="ssr" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = generateQueryClient();
  await queryClient.prefetchQuery(["todo", "ssr"], todoApi.getList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Ssr;

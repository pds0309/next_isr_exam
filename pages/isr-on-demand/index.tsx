import { GetStaticProps } from "next";
import React from "react";
import { generateQueryClient } from "../_app";
import todoApi from "@/api/todoApi";
import TodoList from "@/components/TodoList";
import { dehydrate } from "@tanstack/react-query";

const IsrOnDemand = () => {
  return (
    <div>
      <h2>Isr On-demand revalidation</h2>
      <TodoList queryKey="isr-on-demand" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = generateQueryClient();
  await queryClient.prefetchQuery(["todo", "isr-on-demand"], todoApi.getList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IsrOnDemand;

import todoApi from "@/api/todoApi";
import { GetStaticPaths, GetStaticProps } from "next";
import { generateQueryClient } from "../_app";
import { dehydrate, useQuery } from "@tanstack/react-query";

const FallbackFalse = ({ id }: { id: string }) => {
  const { data: todo } = useQuery(["todo", id], () =>
    todoApi.getById(Number(id))
  );
  return (
    <div>
      <h3>FallBack-False</h3>
      {todo && (
        <div>
          {todo.id} {todo.name}
        </div>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;
  if (!params?.id || typeof params.id !== "string") {
    return {
      notFound: true,
    };
  }
  const queryClient = generateQueryClient();
  await queryClient.prefetchQuery(["todo", params.id], () =>
    todoApi.getById(Number(params.id))
  );
  return {
    props: {
      id: params.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default FallbackFalse;

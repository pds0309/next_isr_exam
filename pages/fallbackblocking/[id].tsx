import todoApi from "@/api/todoApi";
import { GetStaticPaths, GetStaticProps } from "next";
import { generateQueryClient } from "../_app";
import { dehydrate, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const FallbackTrue = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data: todo } = useQuery(["todo", id], () =>
    todoApi.getById(Number(id))
  );
  if (router.isFallback) {
    return (
      <div style={{ backgroundColor: "red" }}>
        <br />
        fallback...
        <br />
      </div>
    );
  }
  return (
    <div>
      <h3>FallBack-Blocking</h3>
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
  return { paths, fallback: "blocking" };
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
  if (!queryClient.getQueryData(["todo", params.id])) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      id: params.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default FallbackTrue;

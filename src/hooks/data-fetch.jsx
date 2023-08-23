import { useQuery, useQueryClient } from "@tanstack/react-query";

const GetData = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["games"],
    queryFn: () => {
      const data = fetch("http://localhost:8000/games").then((res) =>
        res.json(res).then((resdata) => {
          return resdata;
        })
      );

      return data;
    },
    initialData: () => {
      return queryClient.getQueryData(["games"]);
    },
  });
};

export default GetData;

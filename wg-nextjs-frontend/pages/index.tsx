import { NextPage } from "next";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";

const Home: NextPage = () => {
  const { data, error } = useQuery({
    operationName: "ChatGPT",
  });

  return (
    <div className="text-white">
      <pre> {error? JSON.stringify(error):<></>} </pre>
      <pre> {JSON.stringify(data)}</pre>
    </div>
  );
};

export default withWunderGraph(Home);

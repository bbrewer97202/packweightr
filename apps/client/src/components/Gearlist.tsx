import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type Item = {
  id: string;
  name: string;
  weight: number;
  weightUnit: string;
  worn: boolean;
};

async function getGearList() {
  const response = await fetch("/api/items");
  const json = await response.json();
  console.log("hello", json);
  return json;
}

export const GearList = () => {
  // const queryClient = useQueryClient();
  const { isError, isLoading, data } = useQuery({
    queryKey: ["gearList"],
    queryFn: getGearList,
  });

  console.log("data", data);

  return (
    <div>
      <h2>Gear List</h2>
      {isLoading && <div> Loading...</div>}
      {isError && <div> TODO error</div>}
      {!data?.length && <div>No results</div>}
      {data?.length && data.map((item: Item) => {
        return <div key={item.id}><Link to={`gear/${item.id}`}>{item.name}</Link></div>;
      })}
    </div>
  );
};

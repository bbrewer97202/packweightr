import { useParams } from "react-router-dom";

export const GearDetail = () => {

  const { id } = useParams()

  return <div>Gear item detail: { id }</div>;
};

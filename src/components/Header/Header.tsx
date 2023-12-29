import { useData } from "../../context/useData";

export default function Header() {
  const { data } = useData();
  console.log(data);

  return (
    <>
      <h1>Header</h1>
    </>
  );
}

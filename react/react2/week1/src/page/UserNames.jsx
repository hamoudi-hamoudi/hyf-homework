import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserNames() {
  const { result } = useContext(UserContext);

  if (!result)
    return (
      <ul>
        <li>loading ...</li>
      </ul>
    );

  const RenderUsers =
    result.length === 0 ? (
      <li>no result</li>
    ) : (
      result.map((e) => <li key={e.id}>{e.login}</li>)
    );
  return <ul>{RenderUsers}</ul>;
}

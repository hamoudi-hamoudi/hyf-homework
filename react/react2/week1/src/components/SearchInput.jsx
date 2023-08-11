import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function SearchInput() {
  const { userValue, handleChange } = useContext(UserContext);
  return (
    <form>
      <input
        type="text"
        name="users"
        placeholder="search for user"
        value={userValue}
        onChange={handleChange}
      />
    </form>
  );
}

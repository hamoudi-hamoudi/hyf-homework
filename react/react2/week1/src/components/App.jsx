import { UserProvider } from "../contexts/UserContext";
import UserNames from "../page/UserNames";
import Title from "./Title";
import SearchInput from "./SearchInput";

function App() {
  return (
    <div>
      <Title />
      <UserProvider>
        <SearchInput />
        <UserNames />
      </UserProvider>
    </div>
  );
}

export default App;

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [queryTerm, setQueryTerm] = useState(" ");

  const [result, setResult] = useState([]);

  const url = `https://api.github.com/search/users?q=${queryTerm}`;

  const fetchingGitUsers = async () => {
    try {
      const gitUser = await fetch(url);
      const data = await gitUser.json();
      setResult(data.items);
    } catch (err) {
      console.log(`Error message : ${err.message}`);
    }
  };
  useEffect(() => {
    fetchingGitUsers();
  }, [queryTerm]);

  function handelQueryChange(e) {
    setQueryTerm(e.target.value);
  }

  const zouObject = {
    result: result,
    userValue: queryTerm,
    handleChange: handelQueryChange,
  };

  return (
    <UserContext.Provider value={zouObject}> {children} </UserContext.Provider>
  );
};

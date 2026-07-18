import { createContext, useState } from "react";

export const UsernameContext = createContext();

export default function UsernameContextProvide(props) {
  const { children } = props;
  const [username, setUsername] = useState("");

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}

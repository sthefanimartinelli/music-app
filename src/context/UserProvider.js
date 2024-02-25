import UserContext from "@/context/Usercontext";
import { useState } from "react";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{}}>
      <div>{children}</div>
    </UserContext.Provider>
  );
}

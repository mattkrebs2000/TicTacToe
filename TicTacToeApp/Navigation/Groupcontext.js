import { createContext } from "react";

const groupContext = createContext({
  group: "",
  setGroupFunction: () => {},
});

export default groupContext;
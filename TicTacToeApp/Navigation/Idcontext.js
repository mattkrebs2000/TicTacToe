import { createContext } from "react";

const idContext = createContext({
  id: "",
  setIdFunction: () => {},
});

export default idContext;
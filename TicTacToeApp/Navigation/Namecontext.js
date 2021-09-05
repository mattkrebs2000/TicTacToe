import { createContext } from "react";

const nameContext = createContext({
  name: "",
  setName: () => {},
});

export default nameContext;
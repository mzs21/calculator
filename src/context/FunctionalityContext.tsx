import { IMethods } from "../interface/Interface";
import React from "react";

const FuncContext = React.createContext<IMethods>({display: (symbol: string) => {},
  calculate: () => {},
  allClear: () => {},
  clear: () => {},
  expression: '',
  result: 0});

export default FuncContext;
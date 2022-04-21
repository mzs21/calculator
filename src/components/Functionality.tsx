import { useState } from "react";
import FuncContext from "../context/FunctionalityContext";
import Buttons from "./Buttons";

const Functionality = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const display = (symbol: string) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === "=") {
      // Checking if the last index of expression is equal to "="
      if (/[0-9.]/.test(symbol)) {
        // Checking if the symbol is a number between 0 to 9 or a '.'
        setExpression(symbol); // If it's we set the expression to the symbol
      } else {
        setExpression(result + symbol); // We set the expression to the result + symbol
      }
    }
  };

  const calculate = () => {
    setResult(eval(expression)); // We evaluate the expression and set the result to the result
    setExpression((prev: string) => prev + "="); // After we evaluate we set the expression to the result + "="
  };

  const allClear = () => {
    setExpression(""); // We set the expression to an empty string
    setResult(0); // Results become 0
  };

  const clear = () => {
    setExpression(
      (
        prev: string // Here we are doing what a backspace does
      ) =>
        prev
          .split("")
          .slice(0, prev.length - 1)
          .join("")
    );
    setResult(0); // To go backward we set the result to 0
  };
  return (
    <FuncContext.Provider
      value={{ display, calculate, allClear, clear, expression, result }}
    >
      <Buttons />
    </FuncContext.Provider>
  );
};

export default Functionality;

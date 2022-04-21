import { useContext } from "react";
import FuncContext from "../context/FunctionalityContext";

const Buttons = () => {
    const { display, calculate, allClear, clear, expression, result } =
      useContext(FuncContext);
    
  return (
    <div className="calc-conatiner">
      <div className="display">
        <input type="text" value={expression} placeholder="0" />
        <div className="answer">{result}</div>
      </div>
      <button onClick={allClear} className="button ac">
        AC
      </button>
      <button onClick={clear} className="button c">
        C
      </button>
      <button onClick={() => display("*")} className="button operator">
        X
      </button>
      <button onClick={() => display("/")} className="button operator">
        /
      </button>
      <button onClick={() => display("7")} className="button">
        7
      </button>
      <button onClick={() => display("8")} className="button">
        8
      </button>
      <button onClick={() => display("9")} className="button">
        9
      </button>
      <button onClick={() => display("-")} className="button operator">
        -
      </button>
      <button onClick={() => display("4")} className="button">
        4
      </button>
      <button onClick={() => display("5")} className="button">
        5
      </button>
      <button onClick={() => display("6")} className="button">
        6
      </button>
      <button onClick={() => display("+")} className="button operator">
        +
      </button>
      <button onClick={() => display("1")} className="button">
        1
      </button>
      <button onClick={() => display("2")} className="button">
        2
      </button>
      <button onClick={() => display("3")} className="button">
        3
      </button>
      <button onClick={calculate} className="button equal">
        =
      </button>
      <button onClick={() => display("0")} className="button zero">
        0
      </button>
      <button onClick={() => display(".")} className="button">
        .
      </button>
    </div>
  );
};

export default Buttons;

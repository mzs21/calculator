export interface IMethods {
  display: (symbol: string) => void;
  calculate: () => void;
  allClear: () => void;
  clear: () => void;
  expression: string;
  result: number;
}
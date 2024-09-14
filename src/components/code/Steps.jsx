import Code from "./Code";

export default function Steps({ style }) {
  return (
    <Code style={style}>{`const STEPS = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

export default STEPS;
`}</Code>
  );
}

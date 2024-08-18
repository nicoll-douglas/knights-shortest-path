import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ children, style }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={nightOwl}
      customStyle={style}
    >
      {children}
    </SyntaxHighlighter>
  );
}

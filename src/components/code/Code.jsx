import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ children, style }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={tomorrow}
      customStyle={style}
    >
      {children}
    </SyntaxHighlighter>
  );
}

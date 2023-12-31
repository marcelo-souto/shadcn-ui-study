import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <p className="text-center font-semibold text-xl">Carregando...</p>
  ),
});

import type { ReactQuillProps } from "react-quill";

import "react-quill/dist/quill.snow.css";
import "./index.css";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  ["link", "image", "video"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
];

interface TextEditorProps extends ReactQuillProps {
  onChange: ReactQuillProps["onChange"];
  value: ReactQuillProps["value"];
}

const TextEditor = ({ onChange, value, ...props }: TextEditorProps) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={{ toolbar: toolbarOptions }}
      {...props}
    />
  );
};

TextEditor.displayName = "TextEditor";

export { TextEditor };
export type { TextEditorProps };

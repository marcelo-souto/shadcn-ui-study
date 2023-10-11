"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TextEditor, TextEditorProps } from "@/components/ui/text-editor";
import { Edit } from "lucide-react";

const TextEditorSection = () => {
  const [textEditorValues, setTextEditorValues] = useState({
    text: "",
    html: "",
  });

  const handleChange: TextEditorProps["onChange"] = (
    value,
    delta,
    source,
    editor
  ) => {
    setTextEditorValues({ text: editor.getText(), html: value });
  };

  const handleClick = () => {
    console.log(textEditorValues);
  };

  return (
    <main className="flex gap-12 p-6 pt-52">

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
          <span>
            <Edit />
          </span>
          Nova publicação
        </h2>
        <div className="flex flex-col gap-4">
          <TextEditor onChange={handleChange} value={textEditorValues.html} />
          <Button className="w-fit self-end" onClick={handleClick}>
            Enviar
          </Button>
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
          Pré-visualização
        </h2>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: textEditorValues.html }}
        />
      </div>

    </main>
  );
};

TextEditorSection.displayName = "TextEditorPage";

export { TextEditorSection };

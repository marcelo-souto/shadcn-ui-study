"use client";

import { Button } from "@/components/ui/button";
import { TextEditor, TextEditorProps } from "@/components/ui/text-editor";
import { MouseEventHandler, useState } from "react";

export default function TextEditorPage() {
  const [value, setValue] = useState<string>("");

  const handleChange: TextEditorProps["onChange"] = (value) => {
    setValue(value);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(value);
  };

  return (
    <main className="flex flex-col gap-4 pt-64 mx-auto max-w-6xl">
      <TextEditor onChange={handleChange} value={value} />
      <Button onClick={handleClick}>Enviar</Button>
    </main>
  );
}

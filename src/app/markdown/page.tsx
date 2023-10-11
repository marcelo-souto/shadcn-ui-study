"use client";

import dynamic from "next/dynamic";

const MarkdownEditor = dynamic(() => import("@/components/ui/markdown-editor").then((mod) => mod.MarkdownEditor),
  { ssr: false }
);

import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import { useLocalStorage } from "@/utils/hooks/use-local-storage";

export default function MarkdownPage() {

  const [markdown, setMarkdown] = useLocalStorage<string | undefined>(
    "markdown",
    ""
  );

  const editorRef = useRef<MDXEditorMethods | null>(null);

  const handleSaveContent = () => {
    const content = editorRef.current?.getMarkdown();
    setMarkdown(content);
  };

  const handleChangeContent = (markdown: string) => {
    setMarkdown(markdown);
  };

  return (
    <section className="flex items-center min-h-screen max-w-6xl mx-auto pt-16">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between rounded-lg">
          <h1 className="text-4xl font-bold">Novo Post</h1>
          <Button className="flex gap-2" onClick={handleSaveContent}>
            <span>
              <SaveIcon size={16} />
            </span>
            Salvar
          </Button>
        </div>

        <MarkdownEditor
          onChange={handleChangeContent}
          markdown={markdown ?? ""}
          editorRef={editorRef}
        />
      </div>
    </section>
  );
}

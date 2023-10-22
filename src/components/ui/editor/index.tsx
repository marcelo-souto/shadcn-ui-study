"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Button } from "@/components/ui/button";

const Editor = () => {
  
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class: "prose max-w-none",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      console.log(editor.getText())
    },
  });

  return (
    <div>
      <Button onClick={() => editor?.chain().focus().toggleBold().run()}>
        Bold
      </Button>
      <Button onClick={() => editor?.chain().focus().toggleItalic().run()}>
        Italico
      </Button>
      <EditorContent editor={editor} />
    </div>
  );
};

Editor.displayName = "Editor";

export { Editor };

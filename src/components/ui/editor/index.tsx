"use client";

import { Toggle } from "../toggle";
import { useEditor, EditorContent } from "@tiptap/react";

import TextAlign from "@tiptap/extension-text-align";
import Dropcursor from "@tiptap/extension-dropcursor";
import FileHandler from "@tiptap-pro/extension-file-handler";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";

type EditorProps = {
  content?: string;
};

const Editor = ({ content = "" }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
      Dropcursor.configure({
        color: "#a0aec0",
      }),
      FileHandler.configure({
        allowedMimeTypes: [
          "image/png",
          "image/jpeg",
          "image/gif",
          "image/webp",
        ],
        onDrop: (currentEditor, files, pos) => {
          files.forEach((file) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach((file) => {
            if (htmlContent) {
              // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
              // you could extract the pasted file from this url string and upload it to a server for example
              console.log(htmlContent); // eslint-disable-line no-console
              return false;
            }

            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(currentEditor.state.selection.anchor, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
      }),
      Image.configure({
        allowBase64: true,
      }),
    ],
    content: content,

    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert max-w-full min-h-[20rem] border-2 border-zinc-200 focus-visible:outline-none dark:border-zinc-900  transition-colors duration-300 ease-in-out rounded-b-lg p-4",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      console.log(editor.getText());
    },
  });

  return (
    <div>
      <div className="rounded-t-lg bg-zinc-900 border border-zinc-900 overflow-hidden">
        <Toggle
          onClick={() => editor?.chain().focus().toggleBold().run()}
          pressed={editor?.isActive("bold")}
        >
          <Bold />
        </Toggle>
        <Toggle
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          pressed={editor?.isActive("italic")}
        >
          <Italic />
        </Toggle>

        <Toggle
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          pressed={editor?.isActive("strike")}
        >
          <Strikethrough />
        </Toggle>

        <Toggle
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          pressed={editor?.isActive("heading", { level: 1 })}
        >
          <Heading1 />
        </Toggle>
        <Toggle
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          pressed={editor?.isActive("heading", { level: 2 })}
        >
          <Heading2 />
        </Toggle>
        <Toggle
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          pressed={editor?.isActive("heading", { level: 3 })}
        >
          <Heading3 />
        </Toggle>
        <Toggle
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 4 }).run()
          }
          pressed={editor?.isActive("heading", { level: 4 })}
        >
          <Heading4 />
        </Toggle>
        <Toggle
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          pressed={editor?.isActive("bulletList")}
        >
          <List />
        </Toggle>
        <Toggle
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          pressed={editor?.isActive("orderedList")}
        >
          <ListOrdered />
        </Toggle>
        <Toggle
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          pressed={editor?.isActive("alignLeft")}
        >
          <AlignLeft />
        </Toggle>

        <Toggle
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          pressed={editor?.isActive("alignCenter")}
        >
          <AlignCenter />
        </Toggle>

        <Toggle
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          pressed={editor?.isActive("alignRight")}
        >
          <AlignRight />
        </Toggle>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

Editor.displayName = "Editor";

export { Editor };

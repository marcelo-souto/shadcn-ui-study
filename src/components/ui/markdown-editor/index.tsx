"use client";

import { MDXEditor, MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import { headingsPlugin } from "@mdxeditor/editor/plugins/headings";
import { listsPlugin } from "@mdxeditor/editor/plugins/lists";
import { quotePlugin } from "@mdxeditor/editor/plugins/quote";
import { thematicBreakPlugin } from "@mdxeditor/editor/plugins/thematic-break";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { linkPlugin } from "@mdxeditor/editor/plugins/link";
import { linkDialogPlugin } from "@mdxeditor/editor/plugins/link-dialog";
import { tablePlugin } from "@mdxeditor/editor/plugins/table";
import { imagePlugin } from "@mdxeditor/editor/plugins/image";

import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles";
import { BlockTypeSelect } from "@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect";
import { CreateLink } from "@mdxeditor/editor/plugins/toolbar/components/CreateLink";
import { InsertTable } from "@mdxeditor/editor/plugins/toolbar/components/InsertTable";
import { ListsToggle } from "@mdxeditor/editor/plugins/toolbar/components/ListsToggle";
import { InsertImage } from "@mdxeditor/editor/plugins/toolbar/components/InsertImage";

import "@mdxeditor/editor/style.css";

interface MarkdownEditorProps extends MDXEditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  onChange?: (markdown: string) => void;
}

const MarkdownEditor = ({ editorRef, ...props }: MarkdownEditorProps) => {
  return (
    <MDXEditor
      ref={editorRef}
      className="prose max-w-full"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        tablePlugin(),
        imagePlugin({
          imagePreviewHandler: (url) => {
            return Promise.resolve(url);
          },
          imageUploadHandler: (file) => {
            return Promise.resolve(URL.createObjectURL(file));
          },
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <BlockTypeSelect />
              <InsertTable />
              <CreateLink />
              <InsertImage />
            </>
          ),
        }),
      ]}
      {...props}
    />
  );
};

MarkdownEditor.displayName = "MarkdownEditor";

export { MarkdownEditor };

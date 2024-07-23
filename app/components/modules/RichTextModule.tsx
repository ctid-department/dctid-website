import { PortableText } from "next-sanity";
import React from "react";
import ImageComponent from "../ImageComponent";

interface Props {
  content: any;
  alignment: "left" | "right" | "center" | "justify";
}

const RichTextModule: React.FC<Props> = ({ content, alignment }) => {
  return (
    <section className="my-8">
      <div className={`my-8 prose prose-md !max-w-none text-${alignment}`}>
        <PortableText
          value={content}
          components={{
            types: {
              image: ImageComponent,
            },
          }}
        />
      </div>
    </section>
  );
};

export default RichTextModule;

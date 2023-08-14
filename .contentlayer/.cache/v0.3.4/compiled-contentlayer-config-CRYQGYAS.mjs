// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
var Project = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  computedFields: {
    url: { type: "string", resolve: (post) => `${post._raw.flattenedPath}` }
  },
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    category: {
      type: "string",
      required: false
    },
    thumbnail: {
      type: "string",
      required: false
    },
    createdAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: false
    }
  }
}));
var contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
          // 적용 테마
        }
      ],
      highlight
    ]
  }
});
var contentlayer_config_default = contentSource;
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CRYQGYAS.mjs.map

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "CXFirst",
  tagline: "CXFirst",
  url: "https://dev.cxfirst.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "CXFirst", // Usually your GitHub org/user name.
  projectName: "doc-cx-api", // Usually your repo name.
  deploymentBranch: 'master',

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "CXFirst",
        logo: {
          alt: "CXFirst Logo",
          src: "img/logo.png",
        },
        items: [
          {
            label: "Documentation",
            position: "left",
            to: "/docs/category/cx-api",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Liens",
      //       items: [
      //         {
      //           label: "CXFirst",
      //           to: "https://cxfirst.com",
      //         },
      //       ],
      //     },
      //     // {
      //     //   title: "Community",
      //     //   items: [
      //     //     {
      //     //       label: "Stack Overflow",
      //     //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //     //     },
      //     //     {
      //     //       label: "Discord",
      //     //       href: "https://discordapp.com/invite/docusaurus",
      //     //     },
      //     //     {
      //     //       label: "Twitter",
      //     //       href: "https://twitter.com/docusaurus",
      //     //     },
      //     //   ],
      //     // },
      //     // {
      //     //   title: "More",
      //     //   items: [
      //     //     {
      //     //       label: "Blog",
      //     //       to: "/blog",
      //     //     },
      //     //     {
      //     //       label: "GitHub",
      //     //       href: "https://github.com/facebook/docusaurus",
      //     //     },
      //     //   ],
      //     // },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} CXFirst, Inc. Built with Docusaurus.`,
      // },
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "dart",
          "objectivec",
          "r",
        ],
      },
      languageTabs: [
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
        },
        {
          highlight: "bash",
          language: "curl",
          logoClass: "curl",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "javascript",
          language: "javascript",
          logoClass: "javascript",
        },
        {
          highlight: "r",
          language: "r",
          logoClass: "r",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
        },
      ],
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          cxfirst: {
            specPath: "examples/cx-api.yaml",
            outputDir: "docs/cx-api",
            downloadUrl: undefined,
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}

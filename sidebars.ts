/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {type: "doc", id: "intro"},
  ],
  openApiSidebar: [
    {
      type: "category",
      label: "CXfirst",
      link: {
        type: "generated-index",
        title: "CXfirst API",
        description:
          "This is a sample server CXfirst server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/cx-api"
      },
      items: require("./docs/cx-api/sidebar.js")
    }
  ]
};

export default sidebars;
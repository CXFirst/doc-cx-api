import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cx-api/cxfirst-api-v-1",
    },
    {
      type: "category",
      label: "Hierarchies",
      items: [
        {
          type: "doc",
          id: "cx-api/retrieves-the-list-of-configured-hierarchies",
          label: "Retrieves the list of configured hierarchies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cx-api/retrieves-a-hierarchy-by-slug",
          label: "Retrieves a hierarchy by slug",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cx-api/retrieve-a-hierarchy-branch-by-slug",
          label: "Retrieve a hierarchy branch by slug",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Sites",
      items: [
        {
          type: "doc",
          id: "cx-api/retrieves-the-list-of-sites",
          label: "Retrieves the list of sites",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cx-api/retrieves-a-list-of-sites",
          label: "Retrieves a list of sites",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Pages",
      items: [
        {
          type: "doc",
          id: "cx-api/list-pages",
          label: "List pages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cx-api/show-page",
          label: "show page",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data",
      items: [
        {
          type: "doc",
          id: "cx-api/get-a-list-of-raw-data",
          label: "Get a list of raw data",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Streams",
      items: [
        {
          type: "doc",
          id: "cx-api/retrieves-a-list-of-streams",
          label: "Retrieves a list of streams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cx-api/retrieve-the-stream-information",
          label: "Retrieve the stream information",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

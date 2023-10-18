export interface FolderItem {
  _id: string;
  name: string;
  explorer: FolderItem[];
}

export interface ExplorerItem {
  explorer: {
    _id: string;
    name: string;
    explorer: FolderItem[];
  };
}

export const explorer = {
  _id: "1",
  name: "root",
  explorer: [
    {
      _id: "2",
      name: "public",
      explorer: [
        {
          _id: "3",
          name: "p nested 1",
          explorer: [
            {
              _id: "4",
              name: "index.html",
              explorer: [],
            },
            {
              _id: "5",
              name: "hello.html",
              explorer: [],
            },
          ],
        },
        {
          _id: "6",
          name: "p nested 2",
          explorer: [],
        },
      ],
    },
    {
      _id: "7",
      name: "src",
      explorer: [
        {
          _id: "8",
          name: "App.js",
          explorer: [],
        },
        {
          _id: "9",
          name: "Index.js",
          explorer: [],
        },
        {
          _id: "10",
          name: "styles.css",
          explorer: [],
        },
      ],
    },
    {
      _id: "11",
      name: "package",
      explorer: [],
    },
  ],
};

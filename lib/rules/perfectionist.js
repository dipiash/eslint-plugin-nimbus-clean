/** eslint-plugin-perfectionist */
module.exports = {
  "perfectionist/sort-imports": [
    "error",
    {
      "type": "alphabetical",
      "order": "asc",
      "ignoreCase": true,
      "internalPattern": ["./**"],
      "newlinesBetween": "always",
      "groups": [
        ["builtin"],
        ["react", "external"],
        ["monorepos", "internal"],
        ["builtin-type", "external-type", "internal-type"],
        "object",
        "unknown",
        ["parent-type", "sibling-type", "index-type"],
        ["parent", "sibling", "index"],
        ["style"],
        ["icons"],
      ],
      "customGroups": {
        "type": {},
        "value": {
          "react": ["react", "react-*", "@apollo*", "styled*", "axios", "next", "next/*", "next-*"],
          "monorepos": "^(@.*)(/.*|$)",
          "icons": ["^.*svg$", "^.*jpg$", "^.*png$", "^.*jpeg$", "^.*webp$"]
        }
      },
      "environment": "node"
    }
  ],
  "perfectionist/sort-jsx-props": [
    "error",
    {
      "type": "alphabetical",
      "order": "asc",
      "ignoreCase": true,
      "ignorePattern": [],
      "customGroups": {
        "key": "key",
        "id": "id",
        "top": ["name", "label", "title"],
        "callback": "{on,handle,set,get,fetch,update,remove,add,create,delete,reset,toggle,save,load,validate,cancel,patch}*"
      },
      "groups": ["key", "id", "top", "multiline", "unknown", "shorthand", "callback"]
    }
  ],
  "perfectionist/sort-object-types": [
    "error",
    {
      "type": "alphabetical",
      "order": "asc",
      "ignoreCase": true,
      "partitionByNewLine": false,
      "customGroups": {
        "top": ["id", "name", "label", "title"],
        "callback": "{on,handle,set,get,fetch,update,remove,add,create,delete,reset,toggle,save,load,validate,cancel,patch}*"
      },
      "groups": ["top", "multiline", "unknown", "callback"]
    }
  ],
  "perfectionist/sort-objects": [
    "error",
    {
      "customGroups": {
        "top": ["id", "name", "label", "title"],
        "callback": [
          "{on,handle,set,get,fetch,update,remove,add,create,delete,reset,toggle,save,load,validate,cancel,patch}*"
        ]
      },
      "groups": ["top", "unknown", "callback"],
      "ignoreCase": true,
      "order": "asc",
      "partitionByComment": false,
      "partitionByNewLine": false,
      "styledComponents": false,
      "type": "alphabetical"
    }
  ],
}

/** eslint-plugin-perfectionist */
export default {
  "perfectionist/sort-imports": [
    "error",
    {
      "type": "alphabetical",
      "order": "asc",
      "ignoreCase": true,
      "internalPattern": ["./*"],
      "newlinesBetween": 1,
      "newlinesInside": 0,
      "partitionByNewLine": false,
      "groups": [
        ["value-builtin"],
        ["react", "value-external"],
        ["monorepos", "value-internal"],
        "unknown",
        ["named-type-parent", "named-type-sibling", "named-type-index"],
        ["named-type-builtin", 'type-external', 'type-internal'],
        ['value-parent', 'value-sibling', 'value-index'],
        ["style"],
        ["icons"],
      ],
      "customGroups": [
        {
          "groupName": "react",
          "elementNamePattern": ["react", "react-*", "@apollo*", "styled*", "axios", "next", "next/*", "next-*", "@material/*"]
        }, {
          "groupName": "monorepos",
          "elementNamePattern": "^(@.*)(/.*|$)"
        }, {
          "groupName": "icons",
          "elementNamePattern": ["^.*svg$", "^.*jpg$", "^.*png$", "^.*jpeg$", "^.*webp$"]
        }
      ],
      "environment": "node"
    }
  ],
  "perfectionist/sort-jsx-props": [
    "error",
    {
      "type": "alphabetical",
      "order": "asc",
      "ignoreCase": true,
      "customGroups": [
        {
          "groupName": "key",
          "elementNamePattern": "key"
        },
        {
          "groupName": "id",
          "elementNamePattern": "id"
        },
        {
          "groupName": "top",
          "elementNamePattern": ["name", "label", "title"]
        },
        {
          "groupName": "callback",
          "elementNamePattern": "{on,handle,set,get,fetch,update,remove,add,create,delete,reset,toggle,save,load,validate,cancel,patch}*"
        }
      ],
      "groups": ["key", "id", "top", "multiline-prop", "unknown", "shorthand-prop", "callback"]
    }
  ],
  "perfectionist/sort-object-types": [
    "error",
    {
      "type": "alphabetical",
      "order": "asc",
      "ignoreCase": true,
      "partitionByNewLine": false,
      "customGroups": [
        {
          "groupName": 'top',
          "elementNamePattern": ["id", "name", "label", "title"],
        },
        {
          "groupName": 'callback',
          "elementNamePattern": "{on,handle,set,get,fetch,update,remove,add,create,delete,reset,toggle,save,load,validate,cancel,patch}*",
        }
      ],
      "groups": ["top", "multiline-method", "unknown", "callback"]
    }
  ],
  "perfectionist/sort-objects": [
    "error",
    {
      "customGroups": [
        {
          "groupName": "top",
          "elementNamePattern": ["id", "name", "label", "title"]
        },
        {
          "groupName": "callback",
          "elementNamePattern": [
            "{on,handle,set,get,fetch,update,remove,add,create,delete,reset,toggle,save,load,validate,cancel,patch}*"
          ]
        }
      ],
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

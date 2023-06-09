const config = (plop) => {
  plop.setGenerator("component", {
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
      {
        type: "list",
        name: "directory",
        message: "component directory please",
        choices: ["atoms", "molecules", "organisms"],
        choices: [
          { name: "app", value: "app" },
          { name: "atoms", value: "components/atoms" },
          { name: "molecules", value: "components/molecules" },
          { name: "organisms", value: "components/organisms" },
        ],
      },
    ],
    actions: (data) => {
      const isApp = data.directory === "app";
      const file = isApp ? "page" : "index";
      const templateDirectory = isApp ? "app" : "components";
      const actions = [
        {
          type: "add",
          path: `src/{{directory}}/{{name}}/${file}.tsx`,
          templateFile: `templates/${templateDirectory}/index.hbs`,
        },
        {
          type: "add",
          path: `src/{{directory}}/{{name}}/${file}.test.tsx`,
          templateFile: `templates/${templateDirectory}/test.hbs`,
        },
        {
          type: `add`,
          path: `src/{{directory}}/{{name}}/${file}.stories.tsx`,
          templateFile: `templates/${templateDirectory}/stories.hbs`,
        },
      ];
      return isApp ? actions.splice(0, 1) : actions;
    },
  });
};
module.exports = config;

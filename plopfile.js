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
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{directory}}/{{name}}/index.tsx",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{directory}}/{{name}}/index.test.tsx",
        templateFile: "templates/test.hbs",
      },
      {
        type: "add",
        path: "src/components/{{directory}}/{{name}}/index.stories.tsx",
        templateFile: "templates/stories.hbs",
      },
    ],
  });
};
module.exports = config;

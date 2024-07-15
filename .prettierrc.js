const config = {
  bracketSpacing: false,
  singleQuote: true,
  overrides: [
    {
      files: ["*.yml", "*.yaml", "*.css"],
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;

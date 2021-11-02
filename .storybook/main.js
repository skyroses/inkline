const path = require('path');

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    core: {
        builder: "storybook-builder-vite"
    },
    async viteFinal(config) {
        config.configFile = "./vite.config.js";
        config.plugins = config.plugins.filter((plugin) => !['vite:vue'].includes(plugin.name));
        config.resolve.alias['@inkline/inkline'] = path.resolve(__dirname, '..', 'src');
        return config;
    },
}

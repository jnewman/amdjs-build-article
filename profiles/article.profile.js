exports.config = ({
    name: 'article',
    dir: 'dist',
    appDir: 'src',
    baseUrl: '.',
    packages: [
        {
            name: 'article'
        }
    ],
    pragmas: {
        doExclude: true
    },
    skipModuleInsertion: false,
    optimizeAllPluginResources: true,
    findNestedDependencies: true
});
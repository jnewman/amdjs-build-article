exports.config = ({
    // The name of this layer.
    name: 'article',
    // Where the output will go when we build.
    dir: 'dist',
    // Where the unbuilt JS resides.
    appDir: 'src',
    // Path from this to the path you'll use for relative declarations of packages.
    baseUrl: '.',
    // A list of packages you're using
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
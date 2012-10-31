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
        },
        {
            name: 'mustache',
            // I'm setting main here, since mustache doesn't use the default, which would be mustache/main
            main: 'mustache'
        },
        {
            name: 'has',
            // Same as Mustache
            main: 'has'
        }
    ],

    // Code branching.
    has: {
        // All has('love-for-ie-6')'s in the code will be replaced w/ true, which lets UglifyJS of Closure-compiler remove
        // the if statement around them.
        'love-for-ie-6': true
    }
});
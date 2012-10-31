require({
    basePath: '.',
    packages: [
        {
            name: 'article',
            // This is unnecessary in this case, but could be used to map to a totally different directory.
            // I've found that that's more work than it's worth.
            location: 'article',
            main: 'main'
        },
        {
            name: 'mustache',
            main: 'mustache'
        },
        {
            name: 'has',
            main: 'has'
        }
    ]
}, ['article']);
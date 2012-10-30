require({
    basePath: '.',
    packages: [
        {
            name: 'article',
            location: 'article',
            main: 'main'
        },
        {
            name: 'mustahce',
            location: 'mustache',
            main: 'mustache'
        }
    ]
}, ['article']);
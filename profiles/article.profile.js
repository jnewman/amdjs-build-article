dependencies = {
    action: 'release',

    cssOptimize: 'comments',

    mini: true,

    optimize: 'shrinksafe',

    releaseName: 'dist',

    stripConsole: 'warn',

    selectorEngine: 'acme',

    layers: [
        { name: '../article/main.js', dependencies: [ 'article.main' ] }
    ],

    prefixes: [
        [ 'article', '../article' ]
    ],

    staticHasFeatures: {
    }
}
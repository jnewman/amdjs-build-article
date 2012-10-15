require(['article/util/array'], function (array) {
    console.log(array.map(['Hello, ',  'World', '!'], function (item) {
        return item;
    }).join(''));
});
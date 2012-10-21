require(['article/util/array'], function (array) {
    var title = array.map(['Build JS, ',  'World', '!'], function (item) {
        return item;
    }).join('');

    // Just a quick test that we loaded right.
    var h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = title;
});
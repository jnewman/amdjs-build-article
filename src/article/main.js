/*global document */
require([
    'article/util/array',
    'mustache'
], function (
    array,
    mustache
) {
    'use strict';

    var titleText = array.map(['Build JS, ',  'World', '!'], function (item) {
        return item;
    }).join('');

    var title = mustache.render('<h1>{{title}}</h1>', {
        title: titleText
    });

    // Just a quick test that we loaded right.
    var h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = title;
});
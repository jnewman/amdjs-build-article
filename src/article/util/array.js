// Notice I can omit the module name. The loader assumes modules map to a file
// path unless it's told otherwise.
define(function () {
    'use strict';

    // I could also have used the second argument to the factory. Vodori has decided to
    // list their modules at the top, since it's more Java like (and we use Java :-)).
    var methods = {},
    // There are plenty of others, but I want to keep this brief.
        EXPOSED = ['map', 'forEach', 'every', 'some', 'reduce'];

    var aProto = Array.prototype;
    var aSlice = aProto.slice;

    EXPOSED.forEach(function (methodName) {
        /**
         * Create a wrapper for whatever array methods are listed.
         * NOTE: This is not an appropriate real world solution.
         */
        methods[methodName] = function (array) {
            return aProto[methodName].apply(array, aSlice.call(arguments, 1));
        };
    });

    return methods;
});
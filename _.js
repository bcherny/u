(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define('_', [], factory);
    }
    else {
        root._ = factory();
    }
}(this, function() {
var _,
  __hasProp = {}.hasOwnProperty,
  __slice = [].slice;

_ = {
  each: function(collection, fn) {
    var key, value, _i, _len;
    if (typeof collection.length !== 'undefined') {
      for (key = _i = 0, _len = collection.length; _i < _len; key = ++_i) {
        value = collection[key];
        fn(value, key);
      }
    } else {
      for (key in collection) {
        if (!__hasProp.call(collection, key)) continue;
        value = collection[key];
        fn(value, key);
      }
    }
    return void 0;
  },
  extend: function() {
    var key, obj, other, others, _i, _len;
    obj = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (obj && others) {
      for (_i = 0, _len = others.length; _i < _len; _i++) {
        other = others[_i];
        for (key in other) {
          obj[key] = other[key];
        }
      }
    }
    return obj;
  },
  fluent: function(fn) {
    return function() {
      fn.apply(this, arguments);
      return this;
    };
  },
  one: function(collection) {
    var id;
    for (id in collection) {
      return id;
    }
  }
};

    return _;
}));

"use strict";

function debounce(func, duration) {
  var timeout;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var effect = function effect() {
      timeout = null;
      return func.apply(_this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
}

function throttle(fn, interval) {
  var lastTime;
  return function () {
    if (!lastTime || Date.now() - lastTime >= interval) {
      fn.apply(void 0, arguments);
      lastTime = Date.now();
    }
  };
}

function param(obj) {
  var serialized = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      serialized.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return serialized.join('&');
}

function width() {
  var viewportWidth = window.innerWidth;
  return viewportWidth;
}

function offsetData(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function remove(item) {
  item.parentNode.removeChild(item);
}

function goToTargetPosition(target) {
  var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  window.scrollTo({
    top: parseInt(offsetData(target).top - set),
    left: 0,
    behavior: 'smooth'
  });
}

function cssStyle(el) {
  return window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
}

function scrollIn() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function css(el, styles) {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
}
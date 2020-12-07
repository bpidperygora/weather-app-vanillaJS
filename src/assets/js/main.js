function debounce(func, duration) {
    let timeout;
    return function (...args) {
        const effect = () => {
            timeout = null;
            return func.apply(this, args)
        };
        clearTimeout(timeout);
        timeout = setTimeout(effect, duration)
    }
}

function throttle(fn, interval) {
    let lastTime;
    return (...args) => {
        if (!lastTime || ((Date.now() - lastTime) >= interval)) {
            fn(...args);
            lastTime = Date.now();
        }
    }
}

function param(obj) {
    let serialized = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            serialized.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return serialized.join('&');
}

function width() {
    let viewportWidth = window.innerWidth;
    return (
        viewportWidth
    )
}

function offsetData(el) {
    let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}
function remove(item) {
    item.parentNode.removeChild(item);
}
function goToTargetPosition(target, set = 80) {
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
    for (let property in styles) {
        el.style[property] = styles[property];
    }
}
Array.prototype.forEach.call(document.querySelectorAll('.to_back'), events => {
    events.addEventListener('click', () => {
        history.back();
        if (history.length === 0 || history.length === 1){
            location.href = location.origin + '/' + location.pathname.split('/')[1]
        }
    });
});

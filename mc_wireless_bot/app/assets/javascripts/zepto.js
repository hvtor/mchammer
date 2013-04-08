(function (a) {
    String.prototype.trim === a && (String.prototype.trim = function () {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), Array.prototype.reduce === a && (Array.prototype.reduce = function (b) {
        if (this === void 0 || this === null) throw new TypeError;
        var c = Object(this),
            d = c.length >>> 0,
            e = 0,
            f;
        if (typeof b != "function") throw new TypeError;
        if (d == 0 && arguments.length == 1) throw new TypeError;
        if (arguments.length >= 2) f = arguments[1];
        else for (;;) {
                if (e in c) {
                    f = c[e++];
                    break
                }
                if (++e >= d) throw new TypeError
        }
        while (e < d) e in c && (f = b.call(a, f, c[e], e, c)), e++;
        return f
    })
})();
var Zepto = function () {
    function C(a, b, c) {
        var d = !a || a == 3 ? b : b.parentNode;
        d.insertBefore(c, a ? a == 1 ? b.nextSibling : a == 2 ? b : null : d.firstChild)
    }
    function A(a, b, c, d) {
        return n(b) ? b.call(a, c, d) : b
    }
    function z(b, c) {
        return c === a ? y(b) : y(b).filter(c)
    }
    function y(b, c) {
        if (!b) return x();
        if (c !== a) return y(c).find(b);
        if (n(b)) return y(h).ready(b);
        if (b instanceof x) return b;
        var e;
        p(b) ? e = q(b) : b instanceof Element || b === window || b === h ? (e = [b], b = null) : l.test(b) ? e = w(b) : b.nodeType && b.nodeType == 3 ? e = [b] : e = d(h, b);
        return x(e, b)
    }
    function x(a, b) {
        a = a || f, a.__proto__ = x.prototype, a.selector = b || "";
        return a
    }
    function w(a) {
        m.innerHTML = ("" + a).trim();
        return g.call(m.childNodes)
    }
    function v(a) {
        var b, c;
        i[a] || (b = h.createElement(a), h.body.insertAdjacentElement("beforeEnd", b), c = k(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), c == "none" && (c = "block"), i[a] = c);
        return i[a]
    }
    function u(a) {
        return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function t(a) {
        return a.filter(function (a, b, c) {
            return c.indexOf(a) == b
        })
    }
    function s(a) {
        return a.replace(/-+(.)?/g, function (a, b) {
            return b ? b.toUpperCase() : ""
        })
    }
    function r(a) {
        return [].concat.apply([], a)
    }
    function q(b) {
        return b.filter(function (b) {
            return b !== a && b !== null
        })
    }
    function p(a) {
        return a instanceof Array
    }
    function o(a) {
        return a instanceof Object
    }
    function n(a) {
        return {}.toString.call(a) == "[object Function]"
    }
    var a, b, c, d, e, f = [],
        g = f.slice,
        h = window.document,
        i = {}, j = {}, k = h.defaultView.getComputedStyle,
        l = /^\s*<[^>]+>/,
        m = h.createElement("div");
    y.extend = function (a, c) {
        for (b in c) a[b] = c[b];
        return a
    }, y.qsa = d = function (a, b) {
        return g.call(a.querySelectorAll(b))
    }, y.isFunction = n, y.isObject = o, y.isArray = p, y.fn = {
        forEach: f.forEach,
        map: f.map,
        reduce: f.reduce,
        push: f.push,
        indexOf: f.indexOf,
        concat: f.concat,
        ready: function (a) {
            (h.readyState == "complete" || h.readyState == "loaded") && a(), h.addEventListener("DOMContentLoaded", a, !1);
            return this
        },
        get: function (b) {
            return b === a ? this : this[b]
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                this.parentNode.removeChild(this)
            })
        },
        each: function (a) {
            this.forEach(function (b, c) {
                a.call(b, c, b)
            });
            return this
        },
        filter: function (a) {
            return y([].filter.call(this, function (b) {
                return d(b.parentNode, a).indexOf(b) >= 0
            }))
        },
        add: function (a, b) {
            return y(t(this.concat(y(a, b))))
        },
        is: function (a) {
            return this.length > 0 && y(this[0]).filter(a).length > 0
        },
        not: function (b) {
            var c = [];
            if (n(b) && b.call !== a) this.each(function (a) {
                    b.call(this, a) || c.push(this)
                });
            else {
                var d = g.call(typeof b == "string" ? this.filter(b) : b instanceof NodeList ? b : y(b));
                g.call(this).forEach(function (a) {
                    d.indexOf(a) < 0 && c.push(a)
                })
            }
            return y(c)
        },
        eq: function (a) {
            return y(this[a])
        },
        first: function () {
            return y(this[0])
        },
        last: function () {
            return y(this[this.length - 1])
        },
        find: function (a) {
            var b;
            this.length == 1 ? b = d(this[0], a) : b = r(this.map(function (b) {
                return d(b, a)
            }));
            return y(b)
        },
        closest: function (b, c) {
            var e = this[0],
                f = d(c !== a ? c : h, b);
            f.length === 0 && (e = null);
            while (e && e !== h && f.indexOf(e) < 0) e = e.parentNode;
            return y(e !== h && e)
        },
        parents: function (a) {
            var b = [],
                c = this;
            while (c.length > 0) c = q(c.map(function (a) {
                    if ((a = a.parentNode) && a !== h && b.indexOf(a) < 0) {
                        b.push(a);
                        return a
                    }
                }));
            return z(b, a)
        },
        parent: function (a) {
            return z(t(q(this.pluck("parentNode"))), a)
        },
        children: function (a) {
            return z(r(this.map(function (a) {
                return g.call(a.children)
            })), a)
        },
        siblings: function (a) {
            return z(r(this.map(function (a) {
                return g.call(a.parentNode.children).filter(function (b) {
                    return b !== a
                })
            })), a)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (a) {
            return this.map(function (b) {
                return b[a]
            })
        },
        show: function () {
            return this.each(function () {
                this.style.display == "none" && (this.style.display = null), k(this, "").getPropertyValue("display") == "none" && (this.style.display = v(this.nodeName))
            })
        },
        replaceWith: function (a) {
            return this.each(function () {
                var b = y(this),
                    c = b.prev();
                b.remove(), c.after(a)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function () {
            return this.css("display") == "none" ? this.show() : this.hide()
        },
        prev: function () {
            return y(this.pluck("previousElementSibling"))
        },
        next: function () {
            return y(this.pluck("nextElementSibling"))
        },
        html: function (b) {
            return b === a ? this.length > 0 ? this[0].innerHTML : null : this.each(function (a) {
                this.innerHTML = A(this, b, a, this.innerHTML)
            })
        },
        text: function (b) {
            return b === a ? this.length > 0 ? this[0].innerText : null : this.each(function () {
                this.innerText = b
            })
        },
        attr: function (c, d) {
            return typeof c == "string" && d === a ? this.length > 0 && this[0].nodeName == "INPUT" && this[0].type == "text" && c == "value" ? this.val() : this.length > 0 ? this[0].getAttribute(c) || (c in this[0] ? this[0][c] : a) : a : this.each(function (a) {
                if (o(c)) for (b in c) this.setAttribute(b, c[b]);
                else this.setAttribute(c, A(this, d, a, this.getAttribute(c)))
            })
        },
        removeAttr: function (a) {
            return this.each(function () {
                this.removeAttribute(a)
            })
        },
        data: function (a, b) {
            return this.attr("data-" + a, b)
        },
        val: function (b) {
            return b === a ? this.length > 0 ? this[0].value : null : this.each(function () {
                this.value = b
            })
        },
        offset: function () {
            if (this.length == 0) return null;
            var a = this[0].getBoundingClientRect();
            return {
                left: a.left + h.body.scrollLeft,
                top: a.top + h.body.scrollTop,
                width: a.width,
                height: a.height
            }
        },
        css: function (d, e) {
            if (e === a && typeof d == "string") return this[0].style[s(d)] || k(this[0], "").getPropertyValue(d);
            c = "";
            for (b in d) c += b + ":" + d[b] + ";";
            typeof d == "string" && (c = d + ":" + e);
            return this.each(function () {
                this.style.cssText += ";" + c
            })
        },
        index: function (a) {
            return this.indexOf(y(a)[0])
        },
        hasClass: function (a) {
            return u(a).test(this[0].className)
        },
        addClass: function (a) {
            return this.each(function (b) {
                e = [];
                var c = this.className,
                    d = A(this, a, b, c);
                d.split(/\s+/g).forEach(function (a) {
                    y(this).hasClass(a) || e.push(a)
                }, this), e.length && (this.className += (c ? " " : "") + e.join(" "))
            })
        },
        removeClass: function (a) {
            return this.each(function (b) {
                e = this.className, A(this, a, b, e).split(/\s+/g).forEach(function (a) {
                    e = e.replace(u(a), " ")
                }), this.className = e.trim()
            })
        },
        toggleClass: function (b, c) {
            return this.each(function (d) {
                var e = this.className,
                    f = A(this, b, d, e);
                c !== a && !c || y(this).hasClass(f) ? y(this).removeClass(f) : y(this).addClass(f)
            })
        },
        submit: function () {
            return this.each(function () {
                try {
                    this.submit();
                    return
                } catch (a) {}
            })
        }
    }, ["width", "height"].forEach(function (a) {
        y.fn[a] = function () {
            var b = this.offset();
            return b ? b[a] : null
        }
    });
    var B = ["prepend", "after", "before", "append"];
    B.forEach(function (a, b) {
        y.fn[a] = function (a) {
            typeof a != "object" && (a = w(a));
            return this.each(function (c, d) {
                if (a.length || a instanceof x) {
                    dom = a;
                    for (var e = 0; e < dom.length; e++) {
                        var f = dom[b < 2 ? dom.length - e - 1 : e];
                        C(b, d, f)
                    }
                } else C(b, d, a)
            })
        }
    });
    var D = ["append", "prepend"];
    D.forEach(function (a) {
        y.fn[a + "To"] = function (b) {
            typeof b != "object" && (b = w(b)), b[a](this);
            return this
        }
    }), x.prototype = y.fn;
    return y
}();
"$" in window || (window.$ = Zepto),
function (a) {
    function l(b) {
        var c = a.extend({
            originalEvent: b
        }, b);
        k.forEach(function (a) {
            c[a] = function () {
                return b[a].apply(b, arguments)
            }
        });
        return c
    }
    function j(a, b, d, g) {
        var h = e(a);
        (b || "").split(/\s/).forEach(function (b) {
            f(a, b, d, g).forEach(function (b) {
                delete c[h][b.i], a.removeEventListener(b.e, b.proxy, !1)
            })
        })
    }
    function i(b, d, f, h, i) {
        var j = e(b),
            k = c[j] || (c[j] = []);
        d.split(/\s/).forEach(function (c) {
            var d = i || f,
                e = function (a) {
                    return d(a, a.data)
                }, j = a.extend(g(c), {
                    fn: f,
                    proxy: e,
                    sel: h,
                    del: i,
                    i: k.length
                });
            k.push(j), b.addEventListener(j.e, e, !1)
        })
    }
    function h(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }
    function g(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function f(a, b, d, f) {
        b = g(b);
        if (b.ns) var i = h(b.ns);
        return (c[e(a)] || []).filter(function (a) {
            return a && (!b.e || a.e == b.e) && (!b.ns || i.test(a.ns)) && (!d || a.fn == d) && (!f || a.sel == f)
        })
    }
    function e(a) {
        return a._zid || (a._zid = d++)
    }
    var b = a.qsa,
        c = {}, d = 1;
    a.event = {
        add: i,
        remove: j
    }, a.fn.bind = function (a, b) {
        return this.each(function () {
            i(this, a, b)
        })
    }, a.fn.unbind = function (a, b) {
        return this.each(function () {
            j(this, a, b)
        })
    }, a.fn.one = function (a, b) {
        return this.each(function () {
            var c = this;
            i(this, a, function () {
                b(), j(c, a, arguments.callee)
            })
        })
    };
    var k = ["preventDefault", "stopImmediatePropagation", "stopPropagation"];
    a.fn.delegate = function (c, d, e) {
        return this.each(function (f, g) {
            i(g, d, e, c, function (d, f) {
                var h = d.target,
                    i = b(g, c);
                while (h && i.indexOf(h) < 0) h = h.parentNode;
                h && h !== g && h !== document && e.call(h, a.extend(l(d), {
                    currentTarget: h,
                    liveFired: g
                }), f)
            })
        })
    }, a.fn.undelegate = function (a, b, c) {
        return this.each(function () {
            j(this, b, c, a)
        })
    }, a.fn.live = function (b, c) {
        a(document.body).delegate(this.selector, b, c);
        return this
    }, a.fn.die = function (b, c) {
        a(document.body).undelegate(this.selector, b, c);
        return this
    }, a.fn.trigger = function (a, b) {
        return this.each(function () {
            var c = document.createEvent("Events");
            c.initEvent(a, !0, !0), c.data = b, this.dispatchEvent(c)
        })
    }
}(Zepto),
function (a) {
    function b(a) {
        var a = a,
            b = {}, c = a.match(/(Android)\s+([\d.]+)/),
            d = a.match(/(iPhone\sOS)\s([\d_]+)/),
            e = a.match(/(iPad).*OS\s([\d_]+)/),
            f = a.match(/(webOS)\/([\d.]+)/),
            g = a.match(/(BlackBerry).*Version\/([\d.]+)/);
        c && (b.android = !0, b.version = c[2]), d && (b.ios = !0, b.version = d[2].replace(/_/g, "."), b.iphone = !0), e && (b.ios = !0, b.version = e[2].replace(/_/g, "."), b.ipad = !0), f && (b.webos = !0, b.version = f[2]), g && (b.blackberry = !0, b.version = g[2]);
        return b
    }
    a.os = b(navigator.userAgent), a.__detect = b;
    var c = navigator.userAgent.match(/WebKit\/([\d.]+)/);
    a.browser = c ? {
        webkit: !0,
        version: c[1]
    } : {
        webkit: !1
    }
}(Zepto),
function (a, b) {
    a.fn.anim = function (c, d, e, f) {
        var g = [],
            h, i;
        for (i in c) i === "opacity" ? h = c[i] : g.push(i + "(" + c[i] + ")");
        a.isFunction(f) && this.one("webkitTransitionEnd", f);
        return this.css({
            "-webkit-transition": "all " + (d !== b ? d : .5) + "s " + (e || ""),
            "-webkit-transform": g.join(" "),
            opacity: h
        })
    }
}(Zepto),
function (a) {
    function e() {}
    var b = 0,
        c = a.isObject,
        d;
    a.ajaxJSONP = function (c) {
        var d = "jsonp" + ++b,
            e = document.createElement("script");
        window[d] = function (a) {
            c.success(a), delete window[d]
        }, e.src = c.url.replace(/=\?/, "=" + d), a("head").append(e)
    }, a.ajaxSettings = {
        type: "GET",
        beforeSend: e,
        success: e,
        error: e,
        complete: e,
        accepts: {
            script: "text/javascript, application/javascript",
            json: "application/json",
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain"
        }
    }, a.ajax = function (b) {
        b = b || {};
        var e = a.extend({}, b);
        for (d in a.ajaxSettings) e[d] || (e[d] = a.ajaxSettings[d]);
        if (/=\?/.test(e.url)) return a.ajaxJSONP(e);
        e.url || (e.url = window.location.toString()), e.data && !e.contentType && (e.contentType = "application/x-www-form-urlencoded"), c(e.data) && (e.data = a.param(e.data));
        if (e.type.match(/get/i) && e.data) {
            var f = e.data;
            e.url.match(/\?.*=/) ? f = "&" + f : f[0] != "?" && (f = "?" + f), e.url += f
        }
        var g = e.accepts[e.dataType],
            h = new XMLHttpRequest;
        e.headers = a.extend({
            "X-Requested-With": "XMLHttpRequest"
        }, e.headers || {}), g && (e.headers.Accept = g), h.onreadystatechange = function () {
            if (h.readyState == 4) {
                var a, b = !1;
                if (h.status >= 200 && h.status < 300 || h.status == 0) {
                    if (g == "application/json") try {
                            a = JSON.parse(h.responseText)
                    } catch (c) {
                        b = c
                    } else a = h.responseText;
                    b ? e.error(h, "parsererror", b) : e.success(a, "success", h)
                } else b = !0, e.error(h, "error");
                e.complete(h, b ? "error" : "success")
            }
        }, h.open(e.type, e.url, !0);
        if (e.beforeSend(h, e) === !1) {
            h.abort();
            return !1
        }
        e.contentType && (e.headers["Content-Type"] = e.contentType);
        for (name in e.headers) h.setRequestHeader(name, e.headers[name]);
        h.send(e.data);
        return h
    }, a.get = function (b, c) {
        a.ajax({
            url: b,
            success: c
        })
    }, a.post = function (b, c, d, e) {
        a.isFunction(c) && (e = e || d, d = c, c = null), a.ajax({
            type: "POST",
            url: b,
            data: c,
            success: d,
            dataType: e
        })
    }, a.getJSON = function (b, c) {
        a.ajax({
            url: b,
            success: c,
            dataType: "json"
        })
    }, a.fn.load = function (b, c) {
        if (!this.length) return this;
        var d = this,
            e = b.split(/\s/),
            f;
        e.length > 1 && (b = e[0], f = e[1]), a.get(b, function (b) {
            d.html(f ? a(document.createElement("div")).html(b).find(f).html() : b), c && c()
        });
        return this
    }, a.param = function (b, e) {
        var f = [],
            g = function (a, b) {
                f.push(encodeURIComponent(e ? e + "[" + a + "]" : a) + "=" + encodeURIComponent(b))
            }, h = a.isArray(b);
        for (d in b) c(b[d]) ? f.push(a.param(b[d], e ? e + "[" + d + "]" : d)) : g(h ? "" : d, b[d]);
        return f.join("&").replace("%20", "+")
    }
}(Zepto),
function (a) {
    function e(a, b, c, d) {
        var e = Math.abs(a - b),
            f = Math.abs(c - d);
        return e >= f ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }
    function d(a) {
        return "tagName" in a ? a : a.parentNode
    }
    var b = {}, c;
    a(document).ready(function () {
        a(document.body).bind("touchstart", function (a) {
            var e = Date.now(),
                f = e - (b.last || e);
            b.target = d(a.touches[0].target), c && clearTimeout(c), b.x1 = a.touches[0].pageX, b.y1 = a.touches[0].pageY, f > 0 && f <= 250 && (b.isDoubleTap = !0), b.last = e
        }).bind("touchmove", function (a) {
            b.x2 = a.touches[0].pageX, b.y2 = a.touches[0].pageY
        }).bind("touchend", function (d) {
            b.isDoubleTap ? (a(b.target).trigger("doubleTap"), b = {}) : b.x2 > 0 || b.y2 > 0 ? ((Math.abs(b.x1 - b.x2) > 30 || Math.abs(b.y1 - b.y2) > 30) && a(b.target).trigger("swipe") && a(b.target).trigger("swipe" + e(b.x1, b.x2, b.y1, b.y2)), b.x1 = b.x2 = b.y1 = b.y2 = b.last = 0) : "last" in b && (c = setTimeout(function () {
                c = null, a(b.target).trigger("tap"), b = {}
            }, 250))
        }).bind("touchcancel", function () {
            b = {}
        })
    }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"].forEach(function (b) {
        a.fn[b] = function (a) {
            return this.bind(b, a)
        }
    })
}(Zepto)




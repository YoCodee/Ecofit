"use strict";
var _ie, _firefox, _opera, _webkit, _chrome, _ie_real_version, _osx, _windows, _linux, _android, _win64, _iphone, _ipad, _native, _mobile, _populated = !1;
function _populate() {
    if (!_populated) {
        _populated = !0;
        var t = navigator.userAgent
          , e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t)
          , i = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
        if (_iphone = /\b(iPhone|iP[ao]d)/.exec(t),
        _ipad = /\b(iP[ao]d)/.exec(t),
        _android = /Android/i.exec(t),
        _native = /FBAN\/\w+;/i.exec(t),
        _mobile = /Mobile/i.exec(t),
        _win64 = !!/Win64/.exec(t),
        e) {
            (_ie = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) && document && document.documentMode && (_ie = document.documentMode);
            var s = /(?:Trident\/(\d+.\d+))/.exec(t);
            _ie_real_version = s ? parseFloat(s[1]) + 4 : _ie,
            _firefox = e[2] ? parseFloat(e[2]) : NaN,
            _opera = e[3] ? parseFloat(e[3]) : NaN,
            (_webkit = e[4] ? parseFloat(e[4]) : NaN) ? (e = /(?:Chrome\/(\d+\.\d+))/.exec(t),
            _chrome = e && e[1] ? parseFloat(e[1]) : NaN) : _chrome = NaN
        } else
            _ie = _firefox = _opera = _chrome = _webkit = NaN;
        if (i) {
            if (i[1]) {
                var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                _osx = !n || parseFloat(n[1].replace("_", "."))
            } else
                _osx = !1;
            _windows = !!i[2],
            _linux = !!i[3]
        } else
            _osx = _windows = _linux = !1
    }
}
var useHasFeature, UserAgent_DEPRECATED = {
    ie: function() {
        return _populate() || _ie
    },
    ieCompatibilityMode: function() {
        return _populate() || _ie_real_version > _ie
    },
    ie64: function() {
        return UserAgent_DEPRECATED.ie() && _win64
    },
    firefox: function() {
        return _populate() || _firefox
    },
    opera: function() {
        return _populate() || _opera
    },
    webkit: function() {
        return _populate() || _webkit
    },
    safari: function() {
        return UserAgent_DEPRECATED.webkit()
    },
    chrome: function() {
        return _populate() || _chrome
    },
    windows: function() {
        return _populate() || _windows
    },
    osx: function() {
        return _populate() || _osx
    },
    linux: function() {
        return _populate() || _linux
    },
    iphone: function() {
        return _populate() || _iphone
    },
    mobile: function() {
        return _populate() || _iphone || _ipad || _android || _mobile
    },
    nativeApp: function() {
        return _populate() || _native
    },
    android: function() {
        return _populate() || _android
    },
    ipad: function() {
        return _populate() || _ipad
    }
}, canUseDOM = !("undefined" == typeof window || !window.document || !window.document.createElement), ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: "undefined" != typeof Worker,
    canUseEventListeners: canUseDOM && !(!window.addEventListener && !window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
};
function isEventSupported(t, e) {
    if (!ExecutionEnvironment.canUseDOM || e && !("addEventListener"in document))
        return !1;
    var i = "on" + t
      , s = i in document;
    if (!s) {
        var n = document.createElement("div");
        n.setAttribute(i, "return;"),
        s = "function" == typeof n[i]
    }
    return !s && useHasFeature && "wheel" === t && (s = document.implementation.hasFeature("Events.wheel", "3.0")),
    s
}
ExecutionEnvironment.canUseDOM && (useHasFeature = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
var PIXEL_STEP = 10
  , LINE_HEIGHT = 40
  , PAGE_HEIGHT = 800;
function normalizeWheel(t) {
    var e = 0
      , i = 0
      , s = 0
      , n = 0;
    return "detail"in t && (i = t.detail),
    "wheelDelta"in t && (i = -t.wheelDelta / 120),
    "wheelDeltaY"in t && (i = -t.wheelDeltaY / 120),
    "wheelDeltaX"in t && (e = -t.wheelDeltaX / 120),
    "axis"in t && t.axis === t.HORIZONTAL_AXIS && (e = i,
    i = 0),
    s = e * PIXEL_STEP,
    n = i * PIXEL_STEP,
    "deltaY"in t && (n = t.deltaY),
    "deltaX"in t && (s = t.deltaX),
    (s || n) && t.deltaMode && (1 == t.deltaMode ? (s *= LINE_HEIGHT,
    n *= LINE_HEIGHT) : (s *= PAGE_HEIGHT,
    n *= PAGE_HEIGHT)),
    s && !e && (e = s < 1 ? -1 : 1),
    n && !i && (i = n < 1 ? -1 : 1),
    {
        spinX: e,
        spinY: i,
        pixelX: s,
        pixelY: n
    }
}
normalizeWheel.getEventType = function() {
    return UserAgent_DEPRECATED.firefox() ? "DOMMouseScroll" : isEventSupported("wheel") ? "wheel" : "mousewheel"
}
;
const store = {
    ww: window.innerWidth,
    wh: window.innerHeight,
    isDevice: navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
class ClapatSlider {
    constructor(t, e={}) {
        if (this.bindAll(),
        this.isElement(t))
            this.el = t,
            this.el.clapat_slider = this;
        else {
            const i = document.querySelectorAll(t);
            for (let t = 0; t < i.length; t++) {
                let s = i[t];
                if (0 == t)
                    this.el = s,
                    this.el.clapat_slider = this;
                else {
                    new ClapatSlider(s,e)
                }
            }
        }
        this.opts = Object.assign({
            debug: !1,
            direction: "horizontal",
            eventTarget: ".clapat-slider",
            inner: ".clapat-slider-viewport",
            slides: ".clapat-slide",
            clones: "clapat-slide-clone",
            snap: !1,
            snapwait: {
                before: 10,
                after: 80
            },
            speed: 2,
            threshold: 50,
            ease: .075,
            click: !1,
            mousewheel: !0,
            navigation: !0,
            pagination: !0,
            renderBullet: null,
            parallax: null,
            on: {
                init: null,
                activeSlideChange: null,
                slideEnterViewport: null,
                slideLeaveViewport: null
            }
        }, e),
        this.elEventTarget = this.el.querySelector(this.opts.eventTarget),
        this.elInner = this.el.querySelector(this.opts.inner),
        this.btnNext = this.btnPrev = null,
        this.isObject(this.opts.navigation) || 1 == this.opts.navigation && (this.btnNext = this.el.querySelector(".clapat-button-next"),
        this.btnPrev = this.el.querySelector(".clapat-button-prev")),
        this.isObject(this.opts.navigation) && (this.btnNext = document.querySelector(this.opts.navigation.nextEl),
        this.btnPrev = document.querySelector(this.opts.navigation.prevEl)),
        null != this.btnNext && this.btnNext.addEventListener("click", this.debounce(this.onNext, 50)),
        null != this.btnPrev && this.btnPrev.addEventListener("click", this.debounce(this.onPrev, 50)),
        this.elPagination = null,
        this.isObject(this.opts.pagination) || 1 == this.opts.pagination && (this.elPagination = this.el.querySelector(".clapat-pagination")),
        this.isObject(this.opts.pagination) && (this.elPagination = this.el.querySelector(this.opts.navigation.el)),
        this.vh = store.wh,
        this.vw = store.ww,
        this.vshifth = 0,
        this.vshiftw = 0,
        this.state = {
            target: 0,
            current: 0,
            currentRounded: 0,
            currentScrollDirection: 0,
            currentSlideItem: null,
            moveOffset: 0,
            y: 0,
            on: {
                x: 0,
                y: 0
            },
            off: 0,
            progress: 0,
            diff: 0,
            flags: {
                mousedown: !1,
                dragging: !1,
                click: !0,
                resizing: !1
            }
        },
        this.items = [],
        this.itemsInitial = [],
        this.itemsCloned = [],
        this.itemsPagination = [],
        this.tl = null,
        this.events = {
            move: store.isDevice ? "touchmove" : "mousemove",
            up: store.isDevice ? "touchend" : "mouseup",
            down: store.isDevice ? "touchstart" : "mousedown",
            click: "click",
            wheel: "wheel",
            mousewheel: "mousewheel",
            resize: "resize"
        },
        this.enabled = !0,
        this.length = 0,
        this.updater = gsap.set(this.updateUI, {
            delay: .2,
            onRepeat: this.updateUI,
            repeat: -1,
            repeatDelay: .2
        }),
        this.snapWheelEvents = {
            tsSnap: null,
            events: []
        },
        this.init(),
        ClapatSlider.instances.push(this)
    }
    bindAll() {
        ["onDown", "onMove", "onUp", "onClick", "onWheel", "onResize", "onPagination", "onPrev", "onNext", "updateUI", "updateWheelSnap", "tick"].forEach((t => this[t] = this[t].bind(this)))
    }
    init() {
        return gsap.utils.pipe(this.setup(), this.setupEvents())
    }
    on(t, e) {
        this.opts.on[t] = e
    }
    destroy() {
        this.off(),
        this.state = null,
        this.items = null,
        this.opts = null,
        this.ui = null
    }
    setupEvents() {
        const {move: t, up: e, down: i, resize: s, wheel: n, mousewheel: l} = this.events;
        let a = this.elEventTarget;
        null != a && (a.addEventListener(i, this.onDown),
        a.addEventListener(t, this.onMove),
        this.opts.mousewheel && (a.addEventListener(n, this.onWheel),
        a.addEventListener(l, this.onWheel)),
        window.addEventListener(e, this.onUp)),
        window.addEventListener(s, this.debounce(this.onResize, 250))
    }
    off() {
        const {move: t, up: e, down: i, resize: s, wheel: n, mousewheel: l} = this.events;
        let a = this.elEventTarget;
        null != a && (a.removeEventListener(i, this.onDown),
        a.removeEventListener(t, this.onMove),
        this.opts.mousewheel && (a.removeEventListener(n, this.onWheel),
        a.removeEventListener(l, this.onWheel)),
        window.removeEventListener(e, this.onUp)),
        null != this.btnNext && this.btnNext.removeEventListener("click", this.debounce(this.onNext, 50)),
        null != this.btnPrev && this.btnPrev.removeEventListener("click", this.debounce(this.onPrev, 50)),
        null != this.el && 0 != this.opts.click && this.el.removeEventListener("click", this.onClick),
        window.removeEventListener(s, this.debounce(this.onResize, 250)),
        this.updater.kill(),
        this.updater = null,
        gsap.ticker.remove(this.tick)
    }
    viewportSize() {
        return "vertical" == this.opts.direction ? this.vh : this.vw
    }
    viewportShift() {
        return "vertical" == this.opts.direction ? this.vshifth : this.vshiftw
    }
    setup() {
        if (null != this.el) {
            const {top: t, left: e, width: i, height: s} = this.el.getBoundingClientRect();
            this.vh = s,
            this.vw = i,
            this.vshifth = t,
            this.vshiftw = e
        }
        const t = this.elInner.querySelectorAll(this.opts.slides);
        let e = 1;
        for (let i = t.length - 1; i >= 0; i--) {
            const s = t[i]
              , n = s.cloneNode(!0);
            "vertical" == this.opts.direction ? (s.style.top = 100 * i + "%",
            n.style.top = 100 * -e + "%",
            n.classList.add(this.opts.clones),
            this.elInner.append(n)) : (s.style.left = 100 * i + "%",
            n.style.left = 100 * -e + "%",
            n.classList.add(this.opts.clones),
            this.elInner.prepend(n)),
            e++
        }
        if (null != this.elPagination)
            for (let e = 0; e < t.length; e++) {
                t[e];
                let i = document.createElement("div");
                i.classList.add("clapat-pagination-bullet"),
                "function" == typeof this.opts.renderBullet && (i.innerHTML = this.opts.renderBullet()),
                this.elPagination.appendChild(i),
                i.addEventListener("click", this.onPagination),
                this.itemsPagination.push({
                    el: i
                })
            }
        this.tl = gsap.timeline({
            paused: !0,
            defaults: {
                duration: 1,
                ease: "linear"
            }
        });
        const i = this.elInner.querySelectorAll(this.opts.slides);
        for (let t = 0; t < i.length; t++) {
            const e = i[t]
              , {left: s, right: n, top: l, bottom: a, width: h, height: r} = e.getBoundingClientRect();
            let o = null;
            "vertical" == this.opts.direction ? (o = {
                el: e,
                start: l,
                end: a,
                length: r,
                translate: 0
            },
            this.length += r) : (o = {
                el: e,
                start: s,
                end: n,
                length: h,
                translate: 0
            },
            this.length += h),
            e.classList.contains(this.opts.clones) ? (this.itemsCloned.push(o),
            o.clone = !0) : (this.itemsInitial.push(o),
            o.clone = !1),
            this.items.push(o)
        }
        "vertical" == this.opts.direction && this.itemsCloned.reverse();
        const s = t.length;
        if ("vertical" == this.opts.direction) {
            for (let t = 0; t < s; t++) {
                const e = this.items[t];
                e.prevElement = 0 == t ? this.items[s] : this.items[t - 1],
                e.nextElement = t == s - 1 ? this.items[this.items.length - 1] : this.items[t + 1]
            }
            for (let t = this.items.length - 1; t >= s; t--) {
                const e = this.items[t];
                t == this.items.length - 1 ? e.prevElement = this.items[s - 1] : e.prevElement = this.items[t + 1],
                e.nextElement = t == s ? this.items[0] : this.items[t - 1]
            }
        } else
            for (let t = 0; t < this.items.length; t++) {
                const e = this.items[t];
                e.prevElement = 0 == t ? this.items[this.items.length - 1] : this.items[t - 1],
                t == this.items.length - 1 ? e.nextElement = this.items[0] : e.nextElement = this.items[t + 1]
            }
        null != this.el && 0 != this.opts.click && this.el.addEventListener("click", this.onClick),
        gsap.ticker.add(this.tick)
    }
    tick() {
        this.render()
    }
    calc() {
        const t = this.state;
        t.current += (t.target - t.current) * this.opts.ease,
        t.currentRounded = Math.round(100 * t.current) / 100,
        t.diff = t.target - t.currentRounded;
        const e = Math.round(-this.length / 2 * 100) / 100;
        t.progress = gsap.utils.wrap(0, 1, t.currentRounded / e),
        t.moveOffset = gsap.utils.wrap(0, this.length, Math.abs(t.currentRounded)),
        this.tl && this.tl.progress(t.progress)
    }
    render() {
        this.state.flags.resizing || (this.opts.snap && this.updateWheelSnap(),
        this.calc(),
        this.transformItems(),
        this.parallax())
    }
    transformItems() {
        const t = this.viewportSize()
          , e = this.viewportShift();
        for (let i = 0; i < this.items.length; i++) {
            const s = this.items[i];
            let n = this.state.moveOffset * Math.sign(this.state.currentRounded);
            n < 0 && s.end + n < t + e + s.length - this.length && (n += this.length),
            n > 0 && s.end + n > this.length && (n -= this.length),
            "vertical" == this.opts.direction ? s.el.style.transform = "translate(0, " + n + "px)" : s.el.style.transform = "translate(" + n + "px, 0)"
        }
    }
    updateUI() {
        const t = this.viewportSize()
          , e = this.viewportShift()
          , i = this.elInner.getBoundingClientRect()
          , s = gsap.utils.wrap(0, this.length, Math.abs(this.state.target))
          , n = Math.sign(this.state.target);
        null != this.el && (this.state.currentScrollDirection >= 0 ? (this.el.classList.contains("bw") && this.el.classList.remove("bw"),
        this.el.classList.add("fw")) : (this.el.classList.contains("fw") && this.el.classList.remove("fw"),
        this.el.classList.add("bw")));
        let l = this.state.currentSlideItem;
        this.state.currentSlideItem = null;
        for (let a = 0; a < this.items.length; a++) {
            const h = this.items[a];
            let r = s * n;
            r < 0 && h.end + r < t + e + h.length - this.length && (r += this.length),
            r > 0 && h.end + r > this.length && (r -= this.length);
            const o = h.start + r - (e + (t - h.length) / 2);
            if (Math.abs(o) < h.length / 2 ? (h.el.classList.add("clapat-slide-active"),
            h.nextElement.el.classList.add("clapat-slide-next"),
            h.nextElement.nextElement.el.classList.add("clapat-slide-next-two"),
            h.nextElement.nextElement.nextElement.el.classList.add("clapat-slide-next-three"),
            h.prevElement.el.classList.add("clapat-slide-prev"),
            h.prevElement.prevElement.el.classList.add("clapat-slide-prev-two"),
            h.prevElement.prevElement.prevElement.el.classList.add("clapat-slide-prev-three"),
            this.state.currentSlideItem = h,
            null != l && l !== this.state.currentSlideItem && "function" == typeof this.opts.on.activeSlideChanged && this.opts.on.activeSlideChanged(this.state.currentSlideItem.el, this.state.currentSlideItem.prevElement.el, this.state.currentSlideItem.nextElement.el)) : (h.el.classList.remove("clapat-slide-active"),
            h.nextElement.el.classList.remove("clapat-slide-next"),
            h.nextElement.nextElement.el.classList.remove("clapat-slide-next-two"),
            h.nextElement.nextElement.nextElement.el.classList.remove("clapat-slide-next-three"),
            h.prevElement.el.classList.remove("clapat-slide-prev"),
            h.prevElement.prevElement.el.classList.remove("clapat-slide-prev-two"),
            h.prevElement.prevElement.prevElement.el.classList.remove("clapat-slide-prev-three")),
            h.end + r > e && h.start + r < t + e ? h.el.classList.add("clapat-slide-visible") : h.el.classList.remove("clapat-slide-visible"),
            h.translate != r) {
                let t = this.isItemInsideView(i, h);
                h.translate = r;
                let e = this.isItemInsideView(i, h);
                t && !e && "function" == typeof this.opts.on.slideLeaveViewport && this.opts.on.slideLeaveViewport(h.el),
                !t && e && "function" == typeof this.opts.on.slideEnterViewport && this.opts.on.slideEnterViewport(h.el)
            }
        }
        this.state.flags.dragging ? this.el.classList.add("clapat-state-dragging") : this.el.classList.remove("clapat-state-dragging"),
        this.updatePaginationUI(),
        null == l && "function" == typeof this.opts.on.init && this.opts.on.init()
    }
    updatePaginationUI() {
        if (this.opts.pagination && !(this.itemsPagination.length <= 0) && null != this.state.currentSlideItem) {
            let t = null;
            t = this.state.currentSlideItem.clone ? this.itemsCloned : this.itemsInitial;
            let e = -1;
            for (let i = 0; i < t.length; i++) {
                const s = t[i];
                if (this.state.currentSlideItem.el === s.el) {
                    e = i;
                    break
                }
            }
            let i = this.itemsPagination[e];
            null != i && i.el.classList.add("clapat-pagination-bullet-active");
            let s = e - 1;
            s < 0 && (s = this.itemsPagination.length - 1);
            let n = this.itemsPagination[s];
            null != n && n.el.classList.add("clapat-pagination-bullet-prev");
            let l = e + 1;
            l >= this.itemsPagination.length && (l = 0);
            let a = this.itemsPagination[l];
            null != a && a.el.classList.add("clapat-pagination-bullet-next");
            for (let t = 0; t < this.itemsPagination.length; t++) {
                let i = this.itemsPagination[t];
                t != e && i.el.classList.remove("clapat-pagination-bullet-active"),
                t != l && i.el.classList.remove("clapat-pagination-bullet-next"),
                t != s && i.el.classList.remove("clapat-pagination-bullet-prev")
            }
        }
    }
    parallax() {
        if (null == this.opts.parallax || 0 == this.opts.parallax)
            return;
        const t = this.viewportSize()
          , e = this.viewportShift()
          , i = (this.elInner.getBoundingClientRect(),
        this.state.moveOffset * Math.sign(this.state.currentRounded));
        for (let s = 0; s < this.items.length; s++) {
            const n = this.items[s];
            let l = i;
            if (l < 0 && n.end + l < t + e + n.length - this.length && (l += this.length),
            l > 0 && n.end + l > this.length && (l -= this.length),
            n.end + l > e && n.start + l < t + e) {
                let i = n.start + l - (e + (t - n.length) / 2);
                if (Array.isArray(this.opts.parallax))
                    for (let e = 0; e < this.opts.parallax.length; e++) {
                        let s = this.opts.parallax[e];
                        if (void 0 !== s.element && void 0 !== s.margin) {
                            let e = n.el.querySelectorAll(s.element)
                              , l = -s.margin * i * 2 / (n.length + t);
                            for (let t = 0; t < e.length; t++) {
                                let i = e[t];
                                "vertical" == this.opts.direction ? i.style.transform = "translateY(" + l + "%)" : i.style.transform = "translateX(" + l + "%)"
                            }
                        }
                    }
            }
        }
    }
    snapTargetOnDrag(t) {
        const e = this.viewportSize()
          , i = this.viewportShift()
          , s = gsap.utils.wrap(0, this.length, Math.abs(t))
          , n = Math.sign(t);
        for (let l = 0; l < this.items.length; l++) {
            const a = this.items[l];
            let h = s * n;
            h < 0 && a.end + h < e + i + a.length - this.length && (h += this.length),
            h > 0 && a.end + h > this.length && (h -= this.length);
            const r = a.start + h - (i + (e - a.length) / 2);
            if (Math.abs(r) < a.length / 2)
                return t - r
        }
        return t
    }
    snapTargetOnWheel(t, e) {
        const i = this.viewportSize()
          , s = this.viewportShift()
          , n = gsap.utils.wrap(0, this.length, Math.abs(t))
          , l = Math.sign(t);
        let a = -1;
        for (let t = 0; t < this.items.length; t++) {
            let e = this.items[t]
              , h = n * l;
            h < 0 && e.end + h < i + s + e.length - this.length && (h += this.length),
            h > 0 && e.end + h > this.length && (h -= this.length);
            const r = e.start + h - (s + (i - e.length) / 2);
            if (Math.abs(r) < e.length / 2) {
                a = t;
                break
            }
        }
        const h = gsap.utils.wrap(0, this.length, Math.abs(e))
          , r = Math.sign(e);
        for (let n = 0; n < this.items.length; n++) {
            let l = this.items[n]
              , o = h * r;
            o < 0 && l.end + o < i + s + l.length - this.length && (o += this.length),
            o > 0 && l.end + o > this.length && (o -= this.length);
            const c = l.start + o - (s + (i - l.length) / 2);
            if (Math.abs(c) < l.length / 2) {
                return a == n && Math.abs(e - t) < this.length ? (this.log("Snapping - start and end items are the same, the scroll did not go over a full item"),
                this.state.currentScrollDirection > 0 ? c < 0 ? e - (l.length / 2 + c + l.nextElement.length / 2) : e - c : c < 0 ? e - c : e - c + l.prevElement.length) : (this.log("Snapping - start and end items are different"),
                e - c)
            }
        }
        return e
    }
    getPos({changedTouches: t, clientX: e, clientY: i, target: s}) {
        return {
            x: t ? t[0].clientX : e,
            y: t ? t[0].clientY : i,
            target: s
        }
    }
    onDown(t) {
        if (!this.enabled)
            return;
        const {x: e, y: i} = this.getPos(t)
          , {flags: s, on: n} = this.state;
        s.mousedown = !0,
        n.x = e,
        n.y = i
    }
    onMove(t) {
        if (!this.enabled)
            return;
        const e = this.state;
        if (!e.flags.mousedown)
            return;
        const {x: i, y: s} = this.getPos(t);
        e.flags.dragging = !0;
        const {off: n, on: l} = e
          , a = i - l.x
          , h = s - l.y;
        Math.abs(a) > Math.abs(h) && t.cancelable && t.preventDefault(),
        "vertical" == this.opts.direction ? (e.target = n + h * this.opts.speed,
        e.currentScrollDirection = -Math.sign(h)) : (e.target = n + a * this.opts.speed,
        e.currentScrollDirection = -Math.sign(a))
    }
    onUp(t) {
        if (!this.enabled)
            return;
        this.log("on up");
        const e = this.state;
        this.opts.snap && (e.target = this.snapTargetOnDrag(e.target));
        let i = e.flags.dragging;
        if (e.flags.mousedown = !1,
        e.flags.dragging = !1,
        e.off = e.target,
        i) {
            if (e.flags.click = !1,
            t.cancelable)
                return t.preventDefault(),
                t.stopPropagation(),
                this.log("ending dragging"),
                !1
        } else
            e.flags.click = !0,
            this.log("simple click")
    }
    onClick(t) {
        if (this.enabled) {
            if (this.log("on click. Drag? " + !this.state.flags.click),
            this.state.flags.click) {
                let e = null;
                null != t.target && (e = t.target.querySelector("a"),
                null != e && e.click())
            }
            this.state.flags.click = !1
        }
    }
    isItemInsideView(t, e) {
        let i = 0
          , s = 0
          , n = e.start + e.translate
          , l = e.end + e.translate;
        return "vertical" == this.opts.direction ? (i = t.top + 5,
        s = t.bottom - 5) : (i = t.left + 5,
        s = t.right - 5),
        l > i && n < s
    }
    distanceToCenter(t) {
        if (null == t)
            return null;
        const e = this.viewportSize()
          , i = this.viewportShift();
        let s = gsap.utils.wrap(0, this.length, Math.abs(this.state.target)) * Math.sign(this.state.target);
        return t.start + s - (i + (e - t.length) / 2)
    }
    goTo(t) {
        if (t < 0 || t >= this.items.length)
            return;
        let e = this.items[t];
        this.state.target -= this.distanceToCenter(e),
        this.state.off = this.state.target
    }
    update() {
        const t = this.viewportSize()
          , e = this.viewportShift()
          , i = gsap.utils.wrap(0, this.length, Math.abs(this.state.target))
          , s = Math.sign(this.state.target);
        let n = 0;
        for (let l = 0; l < this.items.length; l++) {
            const a = this.items[l];
            let h = i * s;
            h < 0 && a.end + h < t + e + a.length - this.length && (h += this.length),
            h > 0 && a.end + h > this.length && (h -= this.length);
            const r = a.start + h - (e + (t - a.length) / 2);
            if (Math.abs(r) < a.length / 2) {
                n = l;
                break
            }
        }
        if (null != this.el) {
            const {top: t, left: e, width: i, height: s} = this.el.getBoundingClientRect();
            this.vh = s,
            this.vw = i,
            this.vshifth = t,
            this.vshiftw = e
        } else
            this.vh = store.wh,
            this.vw = store.ww,
            this.vshifth = 0,
            this.vshiftw = 0;
        this.length = 0;
        for (let t = 0; t < this.items.length; t++) {
            const e = this.items[t];
            if ("vertical" == this.opts.direction) {
                e.el.style.transform = "translate(0, 0px)";
                const {left: t, right: i, top: s, bottom: n, width: l, height: a} = e.el.getBoundingClientRect();
                this.length += a,
                e.start = s,
                e.end = n,
                e.length = a
            } else {
                e.el.style.transform = "translate(0px, 0)";
                const {left: t, right: i, top: s, bottom: n, width: l, height: a} = e.el.getBoundingClientRect();
                this.length += l,
                e.start = t,
                e.end = i,
                e.length = l
            }
        }
        let l = 0;
        if (n < this.items.length / 2)
            if ("vertical" == this.opts.direction)
                for (let t = 0; t < n; t++) {
                    l -= this.items[t].length
                }
            else
                for (let t = n; t < this.items.length / 2; t++) {
                    l += this.items[t].length
                }
        else if ("vertical" == this.opts.direction)
            for (let t = this.items.length / 2; t <= n; t++) {
                l += this.items[t].length
            }
        else
            for (let t = this.items.length / 2; t < n; t++) {
                l -= this.items[t].length
            }
        this.state.currentRounded = this.state.current = this.state.target = l,
        this.state.off = this.state.target
    }
    onResize(t) {
        this.state.flags.resizing = !0,
        this.update(),
        this.state.flags.resizing = !1,
        this.log("on resize")
    }
    onPagination(t) {
        if (!this.enabled)
            return;
        let e = -1;
        for (let i = 0; i < this.itemsPagination.length; i++) {
            if (this.itemsPagination[i].el === t.currentTarget) {
                e = i;
                break
            }
        }
        if (e >= 0 && null != this.state.currentSlideItem) {
            let t = this.itemsInitial;
            this.state.currentSlideItem.clone && (t = this.itemsCloned);
            const i = t[e];
            this.state.target -= this.distanceToCenter(i),
            this.state.off = this.state.target
        }
    }
    onPrev(t) {
        if (!this.enabled)
            return;
        const e = this.viewportSize()
          , i = this.viewportShift()
          , s = gsap.utils.wrap(0, this.length, Math.abs(this.state.target))
          , n = Math.sign(this.state.target);
        for (let t = 0; t < this.items.length; t++) {
            const l = this.items[t];
            let a = s * n;
            a < 0 && l.end + a < e + i + l.length - this.length && (a += this.length),
            a > 0 && l.end + a > this.length && (a -= this.length);
            const h = l.start + a - (i + (e - l.length) / 2);
            Math.abs(h) < l.length / 2 && (this.state.target = this.state.target - h + l.prevElement.length,
            this.state.off = this.state.target)
        }
    }
    onNext(t) {
        if (!this.enabled)
            return;
        const e = this.viewportSize()
          , i = this.viewportShift()
          , s = gsap.utils.wrap(0, this.length, Math.abs(this.state.target))
          , n = Math.sign(this.state.target);
        for (let t = 0; t < this.items.length; t++) {
            const l = this.items[t];
            let a = s * n;
            a < 0 && l.end + a < e + i + l.length - this.length && (a += this.length),
            a > 0 && l.end + a > this.length && (a -= this.length);
            const h = l.start + a - (i + (e - l.length) / 2);
            Math.abs(h) < l.length / 2 && (this.state.target = this.state.target - (l.length / 2 + h + l.nextElement.length / 2),
            this.state.off = this.state.target)
        }
    }
    onWheel(t) {
        if (!this.enabled)
            return;
        let e = performance.now();
        const i = this.state
          , s = .2 * normalizeWheel(t).pixelY
          , {x: n, y: l} = this.getPos(t);
        i.flags.dragging = !1;
        const {off: a, on: h} = i;
        if (this.log("Event timestamp: " + e + " Scroll delta " + s),
        this.opts.snap && null != this.snapWheelEvents.tsSnap) {
            if (e - this.snapWheelEvents.tsSnap <= this.opts.snapwait.after)
                return void this.log("Ignoring wheel event as there is a snapping going on");
            this.log("Resetting the snapping events buffer"),
            this.snapWheelEvents.tsSnap = null,
            this.snapWheelEvents.events = []
        }
        i.target -= s * this.opts.speed,
        i.currentScrollDirection = Math.sign(s),
        this.opts.snap && this.snapWheelEvents.events.push({
            ts: e,
            delta: s,
            currentTarget: i.target
        }),
        "vertical" == this.opts.direction ? h.y = i.target : h.x = i.target,
        i.off = i.target
    }
    updateWheelSnap() {
        if (this.opts.snap && this.snapWheelEvents.events.length > 0) {
            let t = performance.now();
            if (t - this.snapWheelEvents.events[this.snapWheelEvents.events.length - 1].ts > this.opts.snapwait.before) {
                let e = 0
                  , i = 0
                  , s = 1e4
                  , n = 0
                  , l = 0
                  , a = 1e4
                  , h = 0;
                for (let t = 0; t < this.snapWheelEvents.events.length; t++) {
                    let r = this.snapWheelEvents.events[t];
                    if (0 == t && (h = r.currentTarget),
                    t > 0) {
                        let n = this.snapWheelEvents.events[t - 1]
                          , l = r.ts - n.ts;
                        e += l,
                        i < l && (i = l),
                        s > l && (s = l)
                    }
                    let o = r.delta;
                    n += o,
                    l < o && (l = o),
                    a > o && (a = o)
                }
                this.log("--\x3e Event timestamp: " + t + ". Snapping.\nAvg time interval between scroll events: " + e / this.snapWheelEvents.events.length + ".\nMin time interval between scroll events: " + s + ".\nMax time interval between scroll events: " + i + ".\nWheel events count: " + this.snapWheelEvents.events.length),
                this.log("Total delta interval: " + n + ".\nAvg delta interval between scroll events: " + n / this.snapWheelEvents.events.length + ".\nMin delta interval between scroll events: " + a + ".\nMax delta interval between scroll events: " + l + ".");
                const r = this.state
                  , {off: o, on: c} = r;
                r.target = this.snapTargetOnWheel(h, r.target),
                "vertical" == this.opts.direction ? c.y = r.target : c.x = r.target,
                r.off = r.target,
                this.snapWheelEvents.tsSnap = t,
                this.snapWheelEvents.events = []
            }
        }
    }
    debounce(t, e) {
        let i;
        return function(...s) {
            i && clearTimeout(i),
            i = setTimeout(( () => t(...s)), e)
        }
    }
    isObject(t) {
        return t instanceof Object && !Array.isArray(t) && null !== t
    }
    isElement(t) {
        return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
    }
    log(t) {
        1 == this.opts.debug && console.log(t)
    }
}
ClapatSlider.instances = [];

/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);   
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(91); // increased the angle
    }
}

Date.now ||
    (Date.now = function () {
        return new Date().getTime();
    }),
    (function () {
        "use strict";
        for (
            var e = ["webkit", "moz"], t = 0;
            t < e.length && !window.requestAnimationFrame;
            ++t
        ) {
            var i = e[t];
            (window.requestAnimationFrame =
                window[i + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                    window[i + "CancelAnimationFrame"] ||
                    window[i + "CancelRequestAnimationFrame"]);
        }
        if (
            /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) ||
            !window.requestAnimationFrame ||
            !window.cancelAnimationFrame
        ) {
            var n = 0;
            (window.requestAnimationFrame = function (e) {
                var t = Date.now(),
                    i = Math.max(n + 16, t);
                return setTimeout(function () {
                    e((n = i));
                }, i - t);
            }),
                (window.cancelAnimationFrame = clearTimeout);
        }
    })();
var snowFall = (function () {
    function e() {
        var e = {
                flakeCount: 35,
                flakeColor: "#ffffff",
                flakeIndex: 999999,
                flakePosition: "absolute",
                minSize: 1,
                maxSize: 2,
                minSpeed: 1,
                maxSpeed: 5,
                round: !1,
                shadow: !1,
                collection: !1,
                image: !1,
                collectionHeight: 40,
            },
            t = [],
            n = {},
            o = 0,
            s = 0,
            a = 0,
            r = 0,
            l = function (e, t) {
                for (var i in t) e.hasOwnProperty(i) && (e[i] = t[i]);
            },
            h = function (e, t) {
                (e.style.webkitTransform = t),
                    (e.style.MozTransform = t),
                    (e.style.msTransform = t),
                    (e.style.OTransform = t),
                    (e.style.transform = t);
            },
            m = function (e, t) {
                return Math.round(e + Math.random() * (t - e));
            },
            f = function (e, t) {
                for (var i in t)
                    e.style[i] =
                        t[i] + ("width" == i || "height" == i ? "px" : "");
            },
            d = function (t, i, n) {
                (this.x = m(a, s - a)),
                    (this.y = m(0, o)),
                    (this.size = i),
                    (this.speed = n),
                    (this.step = 0),
                    (this.stepSize = m(1, 10) / 100),
                    e.collection &&
                        (this.target =
                            canvasCollection[
                                m(0, canvasCollection.length - 1)
                            ]);
                var r = null;
                e.image
                    ? ((r = new Image()), (r.src = e.image))
                    : ((r = document.createElement("div")),
                      f(r, { background: e.flakeColor })),
                    (r.className = "snowfall-flakes"),
                    f(r, {
                        width: this.size,
                        height: this.size,
                        position: e.flakePosition,
                        top: 0,
                        left: 0,
                        "will-change": "transform",
                        fontSize: 0,
                        zIndex: e.flakeIndex,
                    }),
                    e.round &&
                        f(r, {
                            "-moz-border-radius": ~~e.maxSize + "px",
                            "-webkit-border-radius": ~~e.maxSize + "px",
                            borderRadius: ~~e.maxSize + "px",
                        }),
                    e.shadow &&
                        f(r, {
                            "-moz-box-shadow": "1px 1px 1px #555",
                            "-webkit-box-shadow": "1px 1px 1px #555",
                            boxShadow: "1px 1px 1px #555",
                        }),
                    t.tagName === document.body.tagName
                        ? document.body.appendChild(r)
                        : t.appendChild(r),
                    (this.element = r),
                    (this.update = function () {
                        (this.y += this.speed),
                            this.y > o - (this.size + 6) && this.reset(),
                            h(
                                this.element,
                                "translateY(" +
                                    this.y +
                                    "px) translateX(" +
                                    this.x +
                                    "px)"
                            ),
                            (this.step += this.stepSize),
                            (this.x += Math.cos(this.step)),
                            (this.x + this.size > s - a || this.x < a) &&
                                this.reset();
                    }),
                    (this.reset = function () {
                        (this.y = 0),
                            (this.x = m(a, s - a)),
                            (this.stepSize = m(1, 10) / 100),
                            (this.size =
                                m(100 * e.minSize, 100 * e.maxSize) / 100),
                            (this.element.style.width = this.size + "px"),
                            (this.element.style.height = this.size + "px"),
                            (this.speed = m(e.minSpeed, e.maxSpeed));
                    });
            },
            w = function () {
                for (var e = 0; e < t.length; e += 1) t[e].update();
                r = requestAnimationFrame(function () {
                    w();
                });
            };
        return {
            snow: function (r, h) {
                for (
                    l(e, h),
                        n = r,
                        o = n.offsetHeight,
                        s = n.offsetWidth,
                        n.snow = this,
                        "body" === n.tagName.toLowerCase() && (a = 25),
                        window.addEventListener(
                            "resize",
                            function () {
                                (o = n.clientHeight), (s = n.offsetWidth);
                            },
                            !0
                        ),
                        i = 0;
                    i < e.flakeCount;
                    i += 1
                )
                    t.push(
                        new d(
                            n,
                            m(100 * e.minSize, 100 * e.maxSize) / 100,
                            m(e.minSpeed, e.maxSpeed)
                        )
                    );
                w();
            },
            clear: function () {
                var e = null;
                e = n.getElementsByClassName
                    ? n.getElementsByClassName("snowfall-flakes")
                    : n.querySelectorAll(".snowfall-flakes");
                for (var t = e.length; t--; )
                    e[t].parentNode === n && n.removeChild(e[t]);
                cancelAnimationFrame(r);
            },
        };
    }
    return {
        snow: function (t, i) {
            if ("string" == typeof i)
                if (t.length > 0)
                    for (var n = 0; n < t.length; n++)
                        t[n].snow && t[n].snow.clear();
                else t.snow.clear();
            else if (t.length > 0)
                for (var n = 0; n < t.length; n++) new e().snow(t[n], i);
            else new e().snow(t, i);
        },
    };
})();

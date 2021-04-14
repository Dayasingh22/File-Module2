/*
@license

dhtmlxDiagram v.3.0.4 Evaluation

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

*/
if (
  (window.dhx && ((window.dhx_legacy = dhx), delete window.dhx),
  (function (t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.dhx = e())
      : (t.dhx = e());
  })(window, function () {
    return (
      (i = {}),
      (r.m = n = [
        function (t, c, i) {
          "use strict";
          (function (t) {
            Object.defineProperty(c, "__esModule", { value: !0 });
            var e = i(58);
            (c.el = e.defineElement),
              (c.sv = e.defineSvgElement),
              (c.view = e.defineView),
              (c.create = e.createView),
              (c.inject = e.injectView),
              (c.KEYED_LIST = e.KEYED_LIST);
            var u = [
              "animate",
              "animateMotion",
              "animateTransform",
              "circle",
              "clipPath",
              "color-profile",
              "defs",
              "desc",
              "discard",
              "ellipse",
              "feBlend",
              "feColorMatrix",
              "feComponentTransfer",
              "feComposite",
              "feConvolveMatrix",
              "feDiffuseLighting",
              "feDisplacementMap",
              "feDistantLight",
              "feDropShadow",
              "feFlood",
              "feFuncA",
              "feFuncB",
              "feFuncG",
              "feFuncR",
              "feGaussianBlur",
              "feImage",
              "feMerge",
              "feMergeNode",
              "feMorphology",
              "feOffset",
              "fePointLight",
              "feSpecularLighting",
              "feSpotLight",
              "feTile",
              "feTurbulence",
              "filter",
              "foreignObject",
              "g",
              "hatch",
              "hatchpath",
              "image",
              "line",
              "linearGradient",
              "marker",
              "mask",
              "mesh",
              "meshgradient",
              "meshpatch",
              "meshrow",
              "metadata",
              "mpath",
              "path",
              "pattern",
              "polygon",
              "polyline",
              "radialGradient",
              "rect",
              "script",
              "set",
              "solidcolor",
              "stop",
              "style",
              "svg",
              "switch",
              "symbol",
              "text",
              "textPath",
              "title",
              "tspan",
              "unknown",
              "use",
              "view",
            ];
            function n(n) {
              function e(t) {
                var e = t.el.offsetHeight,
                  t = t.el.offsetWidth;
                n(t, e);
              }
              var i = window.ResizeObserver;
              return i
                ? c.el("div.dhx-resize-observer", {
                    _hooks: {
                      didInsert: function (t) {
                        new i(function () {
                          return e(t);
                        }).observe(t.el);
                      },
                    },
                  })
                : c.el("iframe.dhx-resize-observer", {
                    _hooks: {
                      didInsert: function (t) {
                        (t.el.contentWindow.onresize = function () {
                          return e(t);
                        }),
                          e(t);
                      },
                    },
                  });
            }
            (c.disableHelp = function () {
              (e.DEVMODE.mutations = !1),
                (e.DEVMODE.warnings = !1),
                (e.DEVMODE.verbose = !1),
                (e.DEVMODE.UNKEYED_INPUT = !1);
            }),
              (c.resizer = n),
              (c.xmlToJson = function t(e) {
                var n = {};
                if (1 === e.nodeType) {
                  if (0 < e.attributes.length) {
                    n["@attributes"] = {};
                    for (var i = 0; i < e.attributes.length; i++) {
                      var r = e.attributes.item(i);
                      n["@attributes"][r.nodeName] = r.nodeValue;
                    }
                  }
                } else 3 === e.nodeType && (n = e.nodeValue);
                if (e.hasChildNodes())
                  for (var o = 0; o < e.childNodes.length; o++) {
                    var a,
                      s = e.childNodes.item(o),
                      l = s.nodeName;
                    void 0 === n[l]
                      ? (n[l] = t(s))
                      : (void 0 === n[l].push &&
                          ((a = n[l]), (n[l] = []), n[l].push(a)),
                        n[l].push(t(s)));
                  }
                return n;
              }),
              (c.jsonToVDOM = function t(e) {
                var n,
                  i,
                  r,
                  o = Object.keys(e)[0],
                  a = e[o],
                  s = a["#text"] ? [a["#text"]] : [];
                for (r in a)
                  if (
                    a.hasOwnProperty(r) &&
                    "@attributes" !== r &&
                    "#text" !== r
                  )
                    if (Array.isArray(a[r]))
                      for (var l in a[r])
                        a[r].hasOwnProperty(l) &&
                          s.push(t((((n = {})[r] = a[r][l]), n)));
                    else s.push(t((((i = {})[r] = a[r]), i)));
                return -1 !== u.indexOf(o)
                  ? c.sv(o, a["@attributes"] || {}, s)
                  : c.el(o, a["@attributes"] || {}, s);
              }),
              (c.resizeHandler = function (t, e) {
                return c
                  .create({
                    render: function () {
                      return n(e);
                    },
                  })
                  .mount(t);
              }),
              (c.awaitRedraw = function () {
                return new t(function (t) {
                  requestAnimationFrame(function () {
                    t();
                  });
                });
              });
          }.call(this, i(7)));
        },
        function (t, e, n) {
          "use strict";
          var u =
            (this && this.__assign) ||
            function () {
              return (u =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          function i(t, e, n) {
            for (
              void 0 === e && (e = "dhx_id"),
                void 0 === n && (n = "target"),
                t instanceof Event && (t = t[n]);
              t;

            ) {
              if (t.getAttribute && t.getAttribute(e)) return t;
              t = t.parentNode;
            }
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.toNode = function (t) {
              return "string" == typeof t
                ? document.getElementById(t) ||
                    document.querySelector(t) ||
                    document.body
                : t || document.body;
            }),
            (e.eventHandler = function (a, s, l) {
              var u = Object.keys(s);
              return function (t) {
                var e = a(t);
                if (e) {
                  var n = t.target;
                  t: for (; n; ) {
                    var i = (n.getAttribute && n.getAttribute("class")) || "";
                    if (i.length)
                      for (var r = i.split(" "), o = 0; o < u.length; o++)
                        if (r.includes(u[o])) {
                          if (!1 === s[u[o]](t, e)) return !1;
                          break t;
                        }
                    n = n.parentNode;
                  }
                }
                return l && l(t), !0;
              };
            }),
            (e.locateNode = i),
            (e.locate = function (t, e) {
              return (
                void 0 === e && (e = "dhx_id"),
                (t = i(t, e)) ? t.getAttribute(e) : ""
              );
            }),
            (e.locateNodeByClassName = function (t, e) {
              for (t instanceof Event && (t = t.target); t; ) {
                if (e) {
                  if (t.classList && t.classList.contains(e)) return t;
                } else if (t.getAttribute && t.getAttribute("dhx_id")) return t;
                t = t.parentNode;
              }
            }),
            (e.getBox = function (t) {
              var e = t.getBoundingClientRect(),
                n = document.body,
                i = window.pageYOffset || n.scrollTop,
                t = window.pageXOffset || n.scrollLeft;
              return {
                top: e.top + i,
                left: e.left + t,
                right: n.offsetWidth - e.right,
                bottom: n.offsetHeight - e.bottom,
                width: e.right - e.left,
                height: e.bottom - e.top,
              };
            });
          var r = -1;
          function o(t) {
            t = t.getBoundingClientRect();
            return {
              left: t.left + window.pageXOffset,
              right: t.right + window.pageXOffset,
              top: t.top + window.pageYOffset,
              bottom: t.bottom + window.pageYOffset,
            };
          }
          function c() {
            return {
              rightBorder: window.pageXOffset + window.innerWidth,
              bottomBorder: window.pageYOffset + window.innerHeight,
            };
          }
          function l(t, e) {
            var n,
              i,
              r,
              o = c(),
              a = o.rightBorder,
              s = o.bottomBorder - t.bottom - e.height,
              l = t.top - e.height;
            if (
              ("bottom" === e.mode
                ? 0 <= s
                  ? (n = t.bottom)
                  : 0 <= l && (n = l)
                : 0 <= l
                ? (n = l)
                : 0 <= s && (n = t.bottom),
              s < 0 && l < 0)
            ) {
              if (e.auto) return h(t, u(u({}, e), { mode: "right", auto: !1 }));
              n = l < s ? t.bottom : l;
            }
            return {
              left: e.centering
                ? ((i = t),
                  (r = e.width),
                  (o = a),
                  (s = (r - (i.right - i.left)) / 2),
                  (l = i.left - s),
                  (s = i.right + s),
                  0 <= l && s <= o ? l : l < 0 ? 0 : o - r)
                : ((a = a - t.left - e.width),
                  (e = t.right - e.width),
                  0 <= a || (!(0 <= e) && a < e) ? t.left : e),
              top: n,
            };
          }
          function h(t, e) {
            var n,
              i,
              r = c(),
              o = r.rightBorder,
              a = r.bottomBorder,
              s = o - t.right - e.width,
              r = t.left - e.width;
            if (
              ("right" === e.mode
                ? 0 <= s
                  ? (i = t.right)
                  : 0 <= r && (i = r)
                : 0 <= r
                ? (i = r)
                : 0 <= s && (i = t.right),
              r < 0 && s < 0)
            ) {
              if (e.auto)
                return l(t, u(u({}, e), { mode: "bottom", auto: !1 }));
              i = s < r ? r : t.right;
            }
            return {
              left: i,
              top: e.centering
                ? ((s = t),
                  (n = e.height),
                  (r = o),
                  (i = (n - (s.bottom - s.top)) / 2),
                  (o = s.top - i),
                  (i = s.bottom + i),
                  0 <= o && i <= r ? o : o < 0 ? 0 : r - n)
                : ((n = t.bottom - e.height),
                  !(0 <= (e = a - t.top - e.height)) && (0 < n || e < n)
                    ? n
                    : t.top),
            };
          }
          function a(t, e) {
            var n = ("bottom" === e.mode || "top" === e.mode ? l : h)(t, e),
              t = n.left,
              n = n.top;
            return {
              left: Math.round(t) + "px",
              top: Math.round(n) + "px",
              minWidth: Math.round(e.width) + "px",
              position: "absolute",
            };
          }
          (e.getScrollbarWidth = function () {
            if (-1 < r) return r;
            var t = document.createElement("div");
            return (
              document.body.appendChild(t),
              (t.style.cssText =
                "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;"),
              (r = t.offsetWidth - t.clientWidth),
              document.body.removeChild(t),
              r
            );
          }),
            (e.isIE = function () {
              var t = window.navigator.userAgent;
              return t.includes("MSIE ") || t.includes("Trident/");
            }),
            (e.getRealPosition = o),
            (e.calculatePosition = a),
            (e.fitPosition = function (t, e) {
              return a(o(t), e);
            }),
            (e.getStrSize = function (t, e) {
              e = u(
                {
                  fontSize: "14px",
                  fontFamily: "Arial",
                  lineHeight: "14px",
                  fontWeight: "normal",
                  fontStyle: "normal",
                },
                e
              );
              var n = document.createElement("span"),
                i = e.fontSize,
                r = e.fontFamily,
                o = e.lineHeight,
                a = e.fontWeight,
                e = e.fontStyle;
              return (
                (n.style.fontSize = i),
                (n.style.fontFamily = r),
                (n.style.lineHeight = o),
                (n.style.fontWeight = a),
                (n.style.fontStyle = e),
                (n.style.display = "inline-flex"),
                (n.innerText = t),
                document.body.appendChild(n),
                (e = n.offsetWidth),
                (t = n.clientHeight),
                document.body.removeChild(n),
                { width: e, height: t }
              );
            });
          var s = function (t) {
            return (
              t.href &&
              -1 === t.ownerNode.outerHTML.indexOf(window.location.origin) &&
              (-1 !== t.ownerNode.outerHTML.indexOf("http") ||
                -1 !== t.ownerNode.outerHTML.indexOf("https") ||
                -1 !== t.ownerNode.outerHTML.indexOf('href="//'))
            );
          };
          (e.getPageInlineCss = function () {
            for (var t = [], e = 0; e < document.styleSheets.length; e++) {
              var n = document.styleSheets[e];
              if (!s(n))
                for (
                  var i =
                      ("cssRules" in n) && n.cssRules.length
                        ? n.cssRules
                        : n.rules,
                    r = 0;
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  "cssText" in o
                    ? t.push(o.cssText)
                    : t.push(
                        o.selectorText + " {\n" + o.style.cssText + "\n}\n"
                      );
                }
            }
            return t.join("\n");
          }),
            (e.getPageLinksCss = function () {
              for (var t = [], e = 0; e < document.styleSheets.length; e++) {
                var n = document.styleSheets[e];
                s(n) &&
                  t.push('<link href="' + n.href + '" rel="stylesheet"/>');
              }
              return t.join("\n");
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(1),
            r = new Date().valueOf();
          (e.uid = function () {
            return "u" + r++;
          }),
            (e.extend = function t(e, n, i) {
              if ((void 0 === i && (i = !0), n))
                for (var r in n) {
                  var o = n[r],
                    a = e[r];
                  void 0 === o
                    ? delete e[r]
                    : !i ||
                      "object" != typeof a ||
                      a instanceof Date ||
                      a instanceof Array
                    ? (e[r] = o)
                    : t(a, o);
                }
              return e;
            }),
            (e.copy = function (t, e) {
              var n,
                i = {};
              for (n in t) (e && n.startsWith("$")) || (i[n] = t[n]);
              return i;
            }),
            (e.naturalSort = function (t) {
              return t.sort(function (t, e) {
                return "string" == typeof t ? t.localeCompare(e) : t - e;
              });
            }),
            (e.findIndex = function (t, e) {
              for (var n = t.length, i = 0; i < n; i++) if (e(t[i])) return i;
              return -1;
            }),
            (e.isEqualString = function (t, e) {
              if (((t = t.toString()), (e = e.toString()), t.length > e.length))
                return !1;
              for (var n = 0; n < t.length; n++)
                if (t[n].toLowerCase() !== e[n].toLowerCase()) return !1;
              return !0;
            }),
            (e.singleOuterClick = function (e) {
              var n = function (t) {
                e(t) && document.removeEventListener("click", n);
              };
              document.addEventListener("click", n);
            }),
            (e.detectWidgetClick = function (e, n) {
              function t(t) {
                return n(i.locate(t, "dhx_widget_id") === e);
              }
              return (
                document.addEventListener("click", t),
                function () {
                  return document.removeEventListener("click", t);
                }
              );
            }),
            (e.unwrapBox = function (t) {
              return Array.isArray(t) ? t[0] : t;
            }),
            (e.wrapBox = function (t) {
              return Array.isArray(t) ? t : [t];
            }),
            (e.isDefined = function (t) {
              return null != t;
            }),
            (e.range = function (t, e) {
              if (e < t) return [];
              for (var n = []; t <= e; ) n.push(t++);
              return n;
            }),
            (e.isNumeric = function (t) {
              return !isNaN(t - parseFloat(t));
            }),
            (e.downloadFile = function (t, e, n) {
              void 0 === n && (n = "text/plain");
              var i,
                r,
                n = new Blob([t], { type: n });
              window.navigator.msSaveOrOpenBlob
                ? window.navigator.msSaveOrOpenBlob(n, e)
                : ((i = document.createElement("a")),
                  (r = URL.createObjectURL(n)),
                  (i.href = r),
                  (i.download = e),
                  document.body.appendChild(i),
                  i.click(),
                  setTimeout(function () {
                    document.body.removeChild(i), window.URL.revokeObjectURL(r);
                  }, 0));
            }),
            (e.debounce = function (r, o, a) {
              var s;
              return function () {
                for (var t = this, e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                var i = a && !s;
                clearTimeout(s),
                  (s = setTimeout(function () {
                    (s = null), a || r.apply(t, e);
                  }, o)),
                  i && r.apply(this, e);
              };
            }),
            (e.compare = function t(e, n) {
              for (var i in e) {
                if (e.hasOwnProperty(i) !== n.hasOwnProperty(i)) return !1;
                switch (typeof e[i]) {
                  case "object":
                    if (!t(e[i], n[i])) return !1;
                    break;
                  case "function":
                    if (
                      void 0 === n[i] ||
                      ("compare" !== i && e[i].toString() !== n[i].toString())
                    )
                      return !1;
                    break;
                  default:
                    if (e[i] !== n[i]) return !1;
                }
              }
              for (var i in n) if (void 0 === e[i]) return !1;
              return !0;
            }),
            (e.isType = function (t) {
              return (
                (Object.prototype.toString
                  .call(t)
                  .match(/^\[object (\S+?)\]$/) || [])[1] || "undefined"
              ).toLowerCase();
            }),
            (e.isEmptyObj = function (t) {
              for (var e in t) return !1;
              return !0;
            }),
            (e.sign = function (t) {
              return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1;
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.en = {
              applyAll: "Apply all",
              exportData: "Export Data",
              importData: "Import Data",
              resetChanges: "Reset Changes",
              autoLayout: "Auto Layout",
              arrange: "Arrange",
              position: "Position",
              size: "Size",
              color: "Color",
              title: "Title",
              text: "Text",
              image: "Image",
              fill: "Fill",
              textProps: "Text",
              stroke: "Stroke",
              gridStep: "Grid step",
              shapeSections: "Shapes",
              imageUpload: "Click to upload",
              emptyState: "Select a shape or a connector",
            }),
            (e.default = e.en);
        },
        function (t, e, n) {
          "use strict";
          var i;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            ((i = e.TreeFilterType || (e.TreeFilterType = {})).all = "all"),
            (i.level = "level"),
            (i.leafs = "leafs"),
            ((i = e.DataEvents || (e.DataEvents = {})).afterAdd = "afteradd"),
            (i.beforeAdd = "beforeadd"),
            (i.removeAll = "removeall"),
            (i.beforeRemove = "beforeremove"),
            (i.afterRemove = "afterremove"),
            (i.change = "change"),
            (i.load = "load"),
            (i.loadError = "loaderror"),
            (i.beforeLazyLoad = "beforelazyload"),
            (i.afterLazyLoad = "afterlazyload"),
            ((i = e.DragEvents || (e.DragEvents = {})).beforeDrag =
              "beforeDrag"),
            (i.dragStart = "dragStart"),
            (i.dragOut = "dragOut"),
            (i.dragIn = "dragIn"),
            (i.canDrop = "canDrop"),
            (i.cancelDrop = "cancelDrop"),
            (i.beforeDrop = "beforeDrop"),
            (i.afterDrop = "afterDrop"),
            (i.afterDrag = "afterDrag"),
            ((e = e.DataDriver || (e.DataDriver = {})).json = "json"),
            (e.csv = "csv"),
            (e.xml = "xml");
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(10),
            r = n(32);
          (e.isEqualObj = function (t, e) {
            for (var n in t) if (t[n] !== e[n]) return !1;
            return !0;
          }),
            (e.naturalCompare = function (t, e) {
              if (isNaN(t) || isNaN(e)) {
                var i = [],
                  r = [];
                for (
                  t.replace(/(\d+)|(\D+)/g, function (t, e, n) {
                    i.push([e || 1 / 0, n || ""]);
                  }),
                    e.replace(/(\d+)|(\D+)/g, function (t, e, n) {
                      r.push([e || 1 / 0, n || ""]);
                    });
                  i.length && r.length;

                ) {
                  var n = i.shift(),
                    o = r.shift(),
                    o = n[0] - o[0] || n[1].localeCompare(o[1]);
                  if (o) return o;
                }
                return i.length - r.length;
              }
              return t - e;
            }),
            (e.findByConf = function (t, e) {
              if ("function" == typeof e) {
                if (e.call(this, t)) return t;
              } else if (e.by && e.match && t[e.by] === e.match) return t;
            }),
            (e.isDebug = function () {
              var t = window.dhx;
              if (void 0 !== t) return void 0 !== t.debug && t.debug;
            }),
            (e.dhxWarning = function (t) {
              console.warn(t);
            }),
            (e.dhxError = function (t) {
              throw new Error(t);
            }),
            (e.toProxy = function (t) {
              var e = typeof t;
              return "string" == e
                ? new i.DataProxy(t)
                : "object" == e
                ? t
                : void 0;
            }),
            (e.toDataDriver = function (t) {
              if ("string" == typeof t) {
                var e = window.dhx,
                  e = (e && e.dataDrivers) || r.dataDrivers;
                if (e[t]) return new e[t]();
                console.warn("Incorrect data driver type:", t),
                  console.warn(
                    "Available types:",
                    JSON.stringify(Object.keys(e))
                  );
              } else if ("object" == typeof t) return t;
            }),
            (e.copyWithoutInner = function (t, e) {
              var n,
                i = {};
              for (n in t) n.startsWith("$") || (e && e[n]) || (i[n] = t[n]);
              return i;
            }),
            (e.isTreeCollection = function (t) {
              return Boolean(t.getRoot);
            }),
            (e.hasJsonOrArrayStructure = function (t) {
              if ("object" == typeof t) return !0;
              if ("string" != typeof t) return !1;
              try {
                var e = JSON.parse(t);
                return (
                  "[object Object]" === Object.prototype.toString.call(e) ||
                  Array.isArray(e)
                );
              } catch (t) {
                return !1;
              }
            });
        },
        function (t, i, e) {
          "use strict";
          var r =
            (this && this.__assign) ||
            function () {
              return (r =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n = e(0),
            e = e(3);
          (i.meta = {
            grid: {
              id: "gridStep",
              type: "inputsGroup",
              label: e.default.gridStep,
              validate: "number",
              options: [
                {
                  id: "step",
                  value: 0,
                  icon: function () {
                    return n.el(".dxi.dxi-grid-step");
                  },
                  validate: "number",
                },
              ],
            },
            arrange: {
              id: "arrange",
              type: "inputsGroup",
              label: e.default.arrange,
              validate: "number",
              options: [
                { id: "x", value: "1000", label: "x", validate: "number" },
                { id: "y", value: "999", label: "y", validate: "number" },
                { id: "width", value: "1000", label: "w", validate: "number" },
                { id: "height", value: "999", label: "h", validate: "number" },
                {
                  id: "angle",
                  value: "999",
                  label: "y",
                  validate: "number",
                  icon: function () {
                    return n.el(".dxi.dxi-rotate-right.rotate_icon");
                  },
                },
              ],
            },
            position: {
              id: "position",
              type: "inputsGroup",
              label: e.default.position,
              validate: "number",
              options: [
                { id: "dx", value: "1000", label: "dx", validate: "number" },
                { id: "dy", value: "999", label: "dy", validate: "number" },
              ],
            },
            size: {
              id: "size",
              type: "inputsGroup",
              label: e.default.size,
              options: [
                { id: "width", value: "1000", label: "w", validate: "number" },
                { id: "height", value: "999", label: "h", validate: "number" },
              ],
            },
            color: { id: "headerColor", type: "color", label: e.default.color },
            title: { id: "title", type: "textarea", label: e.default.title },
            text: { id: "text", type: "textarea", label: e.default.text },
            img: { id: "img", type: "image", label: e.default.image },
            fill: { id: "fill", type: "color", label: e.default.fill },
            textProps: {
              id: "textProps",
              type: "textProps",
              label: e.default.textProps,
            },
            strokeProps: {
              id: "strokeProps",
              type: "stroke",
              label: e.default.stroke,
            },
          }),
            (i.getMeta = function (t) {
              return t.map(function (t) {
                var e = t.type,
                  n = t.label,
                  t = t.property;
                return r(r({}, i.meta[e]), {
                  id: t || i.meta[e].id,
                  label: n || i.meta[e].label,
                });
              });
            });
        },
        function (t, e, n) {
          (function (r, o) {
            !(function () {
              var e = 1,
                n = {},
                i = !1;
              function c(t) {
                r.setImmediate
                  ? o(t)
                  : r.importScripts
                  ? setTimeout(t)
                  : ((n[++e] = t), r.postMessage(e, "*"));
              }
              function h(t) {
                "use strict";
                if ("function" != typeof t && null != t) throw TypeError();
                if ("object" != typeof this || (this && this.then))
                  throw TypeError();
                var e,
                  n,
                  i = this,
                  o = 0,
                  a = 0,
                  r = [];
                ((i.promise = i).resolve = function (t) {
                  return (
                    (e = i.fn), (n = i.er), o || ((a = t), (o = 1), c(u)), i
                  );
                }),
                  (i.reject = function (t) {
                    return (
                      (e = i.fn), (n = i.er), o || ((a = t), (o = 2), c(u)), i
                    );
                  }),
                  (i._d = 1),
                  (i.then = function (t, e) {
                    if (1 != this._d) throw TypeError();
                    var n = new h();
                    return (
                      (n.fn = t),
                      (n.er = e),
                      3 == o ? n.resolve(a) : 4 == o ? n.reject(a) : r.push(n),
                      n
                    );
                  }),
                  (i.catch = function (t) {
                    return i.then(null, t);
                  });
                var s = function (t) {
                  (o = t || 4),
                    r.map(function (t) {
                      (3 == o && t.resolve(a)) || t.reject(a);
                    });
                };
                try {
                  "function" == typeof t && t(i.resolve, i.reject);
                } catch (t) {
                  i.reject(t);
                }
                return i;
                function l(t, e, n, i) {
                  if (2 == o) return i();
                  if (
                    ("object" != typeof a && "function" != typeof a) ||
                    "function" != typeof t
                  )
                    i();
                  else
                    try {
                      var r = 0;
                      t.call(
                        a,
                        function (t) {
                          r++ || ((a = t), e());
                        },
                        function (t) {
                          r++ || ((a = t), n());
                        }
                      );
                    } catch (t) {
                      (a = t), n();
                    }
                }
                function u() {
                  var t;
                  try {
                    t = a && a.then;
                  } catch (t) {
                    return (a = t), (o = 2), u();
                  }
                  l(
                    t,
                    function () {
                      (o = 1), u();
                    },
                    function () {
                      (o = 2), u();
                    },
                    function () {
                      try {
                        1 == o && "function" == typeof e
                          ? (a = e(a))
                          : 2 == o &&
                            "function" == typeof n &&
                            ((a = n(a)), (o = 1));
                      } catch (t) {
                        return (a = t), s();
                      }
                      a == i
                        ? ((a = TypeError()), s())
                        : l(
                            t,
                            function () {
                              s(3);
                            },
                            s,
                            function () {
                              s(1 == o && 3);
                            }
                          );
                    }
                  );
                }
              }
              (r = this).setImmediate ||
                r.addEventListener("message", function (t) {
                  if (t.source == r)
                    if (i) c(n[t.data]);
                    else {
                      i = !0;
                      try {
                        n[t.data]();
                      } catch (t) {}
                      delete n[t.data], (i = !1);
                    }
                }),
                (h.resolve = function (e) {
                  if (1 != this._d) throw TypeError();
                  return e instanceof h
                    ? e
                    : new h(function (t) {
                        t(e);
                      });
                }),
                (h.reject = function (n) {
                  if (1 != this._d) throw TypeError();
                  return new h(function (t, e) {
                    e(n);
                  });
                }),
                (h.all = function (i) {
                  if (1 != this._d) throw TypeError();
                  if (!(i instanceof Array)) return h.reject(TypeError());
                  var r = new h();
                  return (
                    (function n(t, e) {
                      return e
                        ? r.resolve(e)
                        : t
                        ? r.reject(t)
                        : (0 ==
                            i.reduce(function (t, e) {
                              return e && e.then ? t + 1 : t;
                            }, 0) && r.resolve(i),
                          void i.map(function (t, e) {
                            t &&
                              t.then &&
                              t.then(function (t) {
                                return (i[e] = t), n(), t;
                              }, n);
                          }));
                    })(),
                    r
                  );
                }),
                (h.race = function (i) {
                  if (1 != this._d) throw TypeError();
                  if (!(i instanceof Array)) return h.reject(TypeError());
                  if (0 == i.length) return new h();
                  var r = new h();
                  return (
                    (function n(t, e) {
                      return e
                        ? r.resolve(e)
                        : t
                        ? r.reject(t)
                        : (0 ==
                            i.reduce(function (t, e) {
                              return e && e.then ? t + 1 : t;
                            }, 0) && r.resolve(i),
                          void i.map(function (t, e) {
                            t &&
                              t.then &&
                              t.then(function (t) {
                                n(null, t);
                              }, n);
                          }));
                    })(),
                    r
                  );
                }),
                (h._d = 1),
                (t.exports = h);
            })();
          }.call(this, n(19), n(52).setImmediate));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i =
            ((r.prototype.on = function (t, e, n) {
              t = t.toLowerCase();
              (this.events[t] = this.events[t] || []),
                this.events[t].push({
                  callback: e,
                  context: n || this.context,
                });
            }),
            (r.prototype.detach = function (t, e) {
              var t = t.toLowerCase(),
                n = this.events[t];
              if (e && n && n.length)
                for (var i = n.length - 1; 0 <= i; i--)
                  n[i].context === e && n.splice(i, 1);
              else this.events[t] = [];
            }),
            (r.prototype.fire = function (t, e) {
              void 0 === e && (e = []);
              t = t.toLowerCase();
              return (
                !this.events[t] ||
                !this.events[t]
                  .map(function (t) {
                    return t.callback.apply(t.context, e);
                  })
                  .includes(!1)
              );
            }),
            (r.prototype.clear = function () {
              this.events = {};
            }),
            r);
          function r(t) {
            (this.events = {}), (this.context = t || this);
          }
          (e.EventSystem = i),
            (e.EventsMixin = function (t) {
              var e = new i((t = t || {}));
              (t.detachEvent = e.detach.bind(e)),
                (t.attachEvent = e.on.bind(e)),
                (t.callEvent = e.fire.bind(e));
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(2),
            r = n(1),
            n =
              ((o.prototype.mount = function (t, e) {
                e && (this._view = e),
                  t &&
                    this._view &&
                    this._view.mount &&
                    ((this._container = r.toNode(t)),
                    this._container.tagName
                      ? this._view.mount(this._container)
                      : this._container.attach && this._container.attach(this));
              }),
              (o.prototype.unmount = function () {
                var t = this.getRootView();
                t && t.node && (t.unmount(), (this._view = null));
              }),
              (o.prototype.getRootView = function () {
                return this._view;
              }),
              (o.prototype.getRootNode = function () {
                return this._view && this._view.node && this._view.node.el;
              }),
              (o.prototype.paint = function () {
                this._view &&
                  (this._view.node || this._container) &&
                  ((this._doNotRepaint = !1), this._view.redraw());
              }),
              o);
          function o(t, e) {
            (this.config = e || {}),
              (this._uid = this.config.rootId || i.uid());
          }
          (e.View = n),
            (e.toViewLike = function (e) {
              return {
                getRootView: function () {
                  return e;
                },
                paint: function () {
                  return e.node && e.redraw();
                },
                mount: function (t) {
                  return e.mount(t);
                },
              };
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(20),
            n =
              ((r.prototype.updateUrl = function (t, e) {
                for (var n in (void 0 === e && (e = {}),
                (this._url = this.url = t || this._url),
                (this.url += this.url.includes("?") ? "&" : "?"),
                e))
                  (this.config[n] = e[n]),
                    (this.url += n + "=" + encodeURIComponent(e[n]) + "&");
                this.url = this.url.slice(0, -1);
              }),
              (r.prototype.load = function () {
                return i.ajax.get(this.url, null, { responseType: "text" });
              }),
              (r.prototype.save = function (t, e) {
                switch (e) {
                  case "delete":
                    return i.ajax.delete(this.url, t);
                  case "update":
                  case "insert":
                  default:
                    return i.ajax.post(this.url, t);
                }
              }),
              r);
          function r(t, e) {
            (this.url = this._url = t), (this.config = e);
          }
          e.DataProxy = n;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(6),
            n =
              ((r.prototype.isConnector = function () {
                return !1;
              }),
              (r.prototype.canResize = function () {
                return !0;
              }),
              (r.prototype.getCenter = function () {
                var t = this.config;
                return { x: Math.abs(t.width / 2), y: Math.abs(t.height / 2) };
              }),
              (r.prototype.getBox = function () {
                var t = this.config,
                  e = t.x + (t.dx || 0),
                  n = e + t.width,
                  i = t.y + (t.dy || 0);
                return { left: e, right: n, top: i, bottom: i + t.height };
              }),
              (r.prototype.getMetaInfo = function () {
                return [i.meta.text];
              }),
              (r.prototype.move = function (t, e) {
                this.update({ x: t, y: e });
              }),
              (r.prototype.resize = function (t, e) {
                this.update({ width: t, height: e });
              }),
              (r.prototype.rotate = function (t) {
                this.update({ angle: t });
              }),
              (r.prototype.update = function (t) {
                for (var e in t)
                  (this.config[e] = t[e]),
                    this.config.id && (this.id = this.config.id);
              }),
              (r.prototype.render = function () {
                return "";
              }),
              (r.prototype.getPoint = function (t, e) {
                var n = this.config;
                if (n.angle) {
                  var i = n.x + n.width / 2,
                    r = n.y + n.height / 2,
                    n = n.angle * (Math.PI / 180);
                  return {
                    x: (t - i) * Math.cos(n) - (e - r) * Math.sin(n) + i,
                    y: (t - i) * Math.sin(n) + (e - r) * Math.cos(n) + r,
                  };
                }
                return { x: t, y: e };
              }),
              (r.prototype.setCss = function (t) {
                this.config.css = t;
              }),
              (r.prototype.getCss = function () {
                return (
                  (this.config.$selected
                    ? "dhx_selected "
                    : this.config.$blockSelected
                    ? "dhx_blockselected "
                    : "") + (this.config.css || "")
                );
              }),
              (r.prototype.setDefaults = function (t, e) {
                return t;
              }),
              (r.prototype.getCoords = function (t) {
                var e = t.x,
                  n = t.y;
                return (
                  t.dx && (e = t.x + t.dx),
                  t.dy && (n = t.y + t.dy),
                  { x: e, y: n }
                );
              }),
              r);
          function r(t, e) {
            (this.config = this.setDefaults(t, e.defaults)),
              (this.id = t.id),
              t.width && (t.width = parseFloat(t.width)),
              t.height && (t.height = parseFloat(t.height)),
              t.x && (t.x = parseFloat(t.x)),
              t.y && (t.y = parseFloat(t.y)),
              t.strokeWidth && (t.strokeWidth = parseFloat(t.strokeWidth));
          }
          e.BaseShape = n;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(30);
          e.SelectionEvents = i.SelectionEvents;
          n = n(16);
          (e.DataEvents = n.DataEvents),
            ((e = e.DiagramEvents || (e.DiagramEvents = {})).scroll = "scroll"),
            (e.beforeCollapse = "beforecollapse"),
            (e.afterCollapse = "aftercollapse"),
            (e.beforeExpand = "beforeexpand"),
            (e.afterExpand = "afterexpand"),
            (e.shapeMouseDown = "shapemousedown"),
            (e.shapeClick = "shapeclick"),
            (e.shapedDblClick = "shapedblclick"),
            (e.shapeIconClick = "shapeiconclick"),
            (e.beforeRender = "beforerender"),
            (e.shapeHover = "shapeHover"),
            (e.emptyAreaClick = "emptyAreaClick"),
            (e.emptyAreaMouseDown = "emptyAreaMouseDown"),
            (e.lineClick = "lineClick");
        },
        ,
        ,
        function (t, n, e) {
          "use strict";
          function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
          }
          Object.defineProperty(n, "__esModule", { value: !0 }),
            i(e(50)),
            i(e(51)),
            i(e(55)),
            i(e(39)),
            i(e(18));
        },
        function (t, n, e) {
          "use strict";
          function i(t) {
            for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
          }
          Object.defineProperty(n, "__esModule", { value: !0 }),
            i(e(4)),
            i(e(31)),
            i(e(66)),
            i(e(67)),
            i(e(10)),
            i(e(69)),
            i(e(5)),
            i(e(34)),
            i(e(33)),
            i(e(70)),
            i(e(32)),
            i(e(20));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(0);
          (e.getCircleTpl = function (t) {
            if ((!t.$count && !1 !== t.open) || !t.$kids) return "";
            var e = "vertical" === t.dir,
              n = !1 === t.open,
              i = t.width / 2,
              r = t.height / 2,
              r = { x: e ? 0 : i, y: e ? r : t.height };
            return o.el(
              "div",
              {
                dhx_diagram: "hide",
                class: n ? "dhx_expand_icon" : "dhx_hide_icon",
                style: { position: "absolute", top: r.y, left: r.x },
              },
              [
                o.el(
                  "div.dhx_icon-container",
                  { style: { background: t.$expandColor } },
                  [o.el("i.dxi", { class: n ? " dxi-plus" : " dxi-minus" })]
                ),
              ]
            );
          }),
            (e.getHeaderTpl = function (t) {
              var e = t.width,
                t = t.headerColor || "#20b6e2";
              return o.el("div", {
                class: "dhx_item_header",
                style: {
                  height: 4,
                  width: e,
                  top: 0,
                  left: 0,
                  position: "absolute",
                  background: t,
                },
              });
            }),
            (e.getTextTemplate = function (t, e) {
              var n = t.width,
                i = t.height;
              return "string" == typeof t.text || "string" == typeof t.title
                ? o.el(
                    "div.shape_content-container",
                    {
                      style: {
                        width: n,
                        height: i,
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                        transform: "translate(0 0)",
                        position: "absolute",
                      },
                    },
                    [
                      o.el(
                        "div",
                        {
                          class: "shape_content",
                          style: {
                            width: t.width,
                            height: t.height,
                            wordBreak: "break-word",
                            whiteSpace: "pre-wrap",
                            overflow: "hidden",
                          },
                        },
                        e
                      ),
                    ]
                  )
                : null;
            }),
            (e.getShapeCss = function (t) {
              return {
                width: t.width,
                height: t.height,
                display: "flex",
                "flex-direction": "column",
                "justify-content": {
                  bottom: "flex-end",
                  top: "flex-start",
                  center: "center",
                }[t.textVerticalAlign],
                "text-align": t.textAlign,
                "line-height": t.lineHeight,
                "font-size": t.fontSize,
                "font-style": t.fontStyle,
                "font-weight": t.fontWeight,
                color: t.fontColor,
                "word-break": "break-word",
                "white-space": "pre-wrap",
              };
            });
        },
        function (t, e, n) {
          "use strict";
          var i;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            ((i = e.RealPosition || (e.RealPosition = {})).left = "left"),
            (i.right = "right"),
            (i.top = "top"),
            (i.bottom = "bottom"),
            (i.center = "center"),
            ((i = e.Position || (e.Position = {})).right = "right"),
            (i.bottom = "bottom"),
            (i.center = "center"),
            ((e =
              e.MessageContainerPosition ||
              (e.MessageContainerPosition = {})).topLeft = "top-left"),
            (e.topRight = "top-right"),
            (e.bottomLeft = "bottom-left"),
            (e.bottomRight = "bottom-right");
        },
        function (t, e) {
          "use strict";
          var n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            i = (function () {
              return this;
            })();
          try {
            i = i || new Function("return this")();
          } catch (t) {
            "object" ===
              ("undefined" == typeof window ? "undefined" : n(window)) &&
              (i = window);
          }
          t.exports = i;
        },
        function (t, e, n) {
          "use strict";
          (function (u) {
            Object.defineProperty(e, "__esModule", { value: !0 });
            var c = n(4),
              h = n(5);
            function d(t) {
              return t
                ? t.includes("json")
                  ? "json"
                  : t.includes("xml")
                  ? "xml"
                  : "text"
                : "text";
            }
            function i(r, o, a, t, s) {
              var i,
                l = t || {};
              return (
                s && (l.Accept = "application/" + s),
                "GET" !== a &&
                  (l["Content-Type"] = l["Content-Type"] || "application/json"),
                "GET" === a &&
                  ((t =
                    o && "object" == typeof o
                      ? ((i = o),
                        Object.keys(i)
                          .reduce(function (t, e) {
                            var n =
                              "object" == typeof i[e]
                                ? JSON.stringify(i[e])
                                : i[e];
                            return t.push(e + "=" + encodeURIComponent(n)), t;
                          }, [])
                          .join("&"))
                      : o && "string" == typeof o
                      ? o
                      : "") && ((r += r.includes("?") ? "&" : "?"), (r += t)),
                  (o = null)),
                window.fetch
                  ? window
                      .fetch(r, {
                        method: a,
                        body: o ? JSON.stringify(o) : null,
                        headers: l,
                      })
                      .then(function (e) {
                        if (!e.ok)
                          return e.text().then(function (t) {
                            return u.reject({
                              status: e.status,
                              statusText: e.statusText,
                              message: t,
                            });
                          });
                        var t = s || d(e.headers.get("Content-Type"));
                        if ("raw" === t)
                          return {
                            headers: Object.fromEntries(e.headers.entries()),
                            url: e.url,
                            body: e.body,
                          };
                        if (204 !== e.status)
                          switch (t) {
                            case "json":
                              return e.json();
                            case "xml":
                              var n = h.toDataDriver(c.DataDriver.xml);
                              return n
                                ? e.text().then(function (t) {
                                    return n.toJsonObject(t);
                                  })
                                : e.text();
                            default:
                              return e.text();
                          }
                      })
                  : new u(function (t, e) {
                      var n,
                        i = new XMLHttpRequest();
                      for (n in ((i.onload = function () {
                        200 <= i.status && i.status < 300
                          ? ("raw" === s &&
                              t({
                                url: i.responseURL,
                                headers: i
                                  .getAllResponseHeaders()
                                  .trim()
                                  .split(/[\r\n]+/)
                                  .reduce(function (t, e) {
                                    e = e.split(": ");
                                    return (t[e[0]] = e[1]), t;
                                  }, {}),
                                body: i.response,
                              }),
                            204 === i.status
                              ? t()
                              : t(
                                  (function (t, e) {
                                    switch (e) {
                                      case "json":
                                        return JSON.parse(t);
                                      case "text":
                                        return t;
                                      case "xml":
                                        var n = h.toDataDriver(
                                          c.DataDriver.xml
                                        );
                                        return n
                                          ? n.toJsonObject(t)
                                          : {
                                              parseError:
                                                "Incorrect data driver type: 'xml'",
                                            };
                                      default:
                                        return t;
                                    }
                                  })(
                                    i.responseText,
                                    s || d(i.getResponseHeader("Content-Type"))
                                  )
                                ))
                          : e({ status: i.status, statusText: i.statusText });
                      }),
                      (i.onerror = function () {
                        e({
                          status: i.status,
                          statusText: i.statusText,
                          message: i.responseText,
                        });
                      }),
                      i.open(a, r),
                      l))
                        i.setRequestHeader(n, l[n]);
                      switch (a) {
                        case "POST":
                        case "DELETE":
                        case "PUT":
                          i.send(void 0 !== o ? JSON.stringify(o) : "");
                          break;
                        case "GET":
                        default:
                          i.send();
                      }
                    })
              );
            }
            e.ajax = {
              get: function (t, e, n) {
                return i(
                  t,
                  e,
                  "GET",
                  n && n.headers,
                  void 0 !== n ? n.responseType : void 0
                );
              },
              post: function (t, e, n) {
                return i(
                  t,
                  e,
                  "POST",
                  n && n.headers,
                  void 0 !== n ? n.responseType : void 0
                );
              },
              put: function (t, e, n) {
                return i(
                  t,
                  e,
                  "PUT",
                  n && n.headers,
                  void 0 !== n ? n.responseType : void 0
                );
              },
              delete: function (t, e, n) {
                return i(
                  t,
                  e,
                  "DELETE",
                  n && n.headers,
                  void 0 !== n ? n.responseType : void 0
                );
              },
            };
          }.call(this, n(7)));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i =
            ((r.prototype.copy = function () {
              var e = this,
                n = new r();
              return (
                (n.nodes = this.nodes.map(function (t) {
                  return {
                    id: t.id,
                    w: t.w,
                    h: t.h,
                    x: t.x,
                    y: t.y,
                    kids: [],
                    links: [],
                    isn: t.isn,
                    iss: t.iss,
                  };
                })),
                (n.hash = {}),
                n.nodes.forEach(function (t) {
                  n.hash[t.id] = t;
                }),
                n.nodes.forEach(function (t) {
                  (t.kids = e.hash[t.id].kids.map(function (t) {
                    return n.hash[t.id];
                  })),
                    (t.links = e.hash[t.id].links.map(function (t) {
                      return n.hash[t.id];
                    }));
                }),
                (n._tbounds = [].concat(this._tbounds)),
                (n._ybounds = [].concat(this._ybounds)),
                (n._bounds = this._bounds
                  ? this._bounds.map(function (t) {
                      return [].concat(t);
                    })
                  : []),
                (n.routes = this.routes),
                (n._root = this._root ? n.hash[this._root.id] : null),
                n
              );
            }),
            (r.prototype.collectSubNodes = function (t, e) {
              for (var n = 0; n < t.kids.length; n++) {
                var i = t.kids[n];
                e.push(i), i.kids && this.collectSubNodes(i, e);
              }
            }),
            (r.prototype.getLevelBounds = function () {
              return this._bounds;
            }),
            (r.prototype.getBounds = function (t, e, n) {
              t = n ? this._tbounds : this._bounds[t];
              return [t[0] ? t[0] - e / 4 : 0, t[1] ? t[1] + e / 4 : 0];
            }),
            (r.prototype.addEdge = function (t, e) {
              (t = this.hash[t]), (e = this.hash[e]);
              t.links.push(e), e.links.push(t);
            }),
            (r.prototype.importNodes = function (t) {
              var e = this;
              t.forEach(function (t) {
                (e.hash[t.id] = t), e.nodes.push(t);
              });
            }),
            (r.prototype.split = function (e) {
              var n = this,
                i = [];
              if (
                ((this.nodes = this.nodes.filter(function (t) {
                  return !e(t) || (delete n.hash[t.id], i.push(t), !1);
                })),
                !i.length)
              )
                return null;
              var t = new r();
              return t.importNodes(i), t;
            }),
            (r.prototype.addNode = function (t) {
              (t.kids = []),
                (t.links = []),
                this._root || (this._root = t),
                (this.hash[t.id] = t),
                this.nodes.push(t);
            }),
            (r.prototype.getNode = function (t) {
              return this.hash[t];
            }),
            (r.prototype.getRoot = function () {
              return this._root;
            }),
            (r.prototype.getLevels = function () {
              return this._deep;
            }),
            (r.prototype.clean = function () {
              this.nodes.forEach(function (e) {
                var n;
                1 < e.links.length &&
                  ((n = []),
                  (e.links = e.links.filter(function (t) {
                    return !n.includes(t) && e !== t && (n.push(t), !0);
                  })));
              });
            }),
            (r.prototype.getNodes = function () {
              return this.nodes;
            }),
            (r.prototype.getBox = function () {
              return [this._tbounds, this._ybounds];
            }),
            (r.prototype.setGlobalBox = function () {
              var r, o, a, s;
              this.nodes.length &&
                ((a = r = 1 / 0),
                (s = o = -1 / 0),
                this.nodes.forEach(function (t) {
                  var e = t.x - t.w / 2,
                    n = t.x + t.w / 2,
                    i = t.y - t.h / 2,
                    t = t.y + t.h / 2;
                  e < a && (a = e),
                    i < r && (r = i),
                    s < n && (s = n),
                    o < t && (o = t);
                }),
                (this._tbounds = [a, s]),
                (this._ybounds = [r, o]));
            }),
            (r.prototype.translate = function (e) {
              if (
                (this.nodes.forEach(function (t) {
                  (t.x += e.x), (t.y += e.y);
                }),
                (this._tbounds[0] += e.x),
                (this._tbounds[1] += e.x),
                this._bounds)
              )
                for (var t = 0; t < this._bounds.length; t++)
                  (this._bounds[t][0] += e.x), (this._bounds[t][1] += e.x);
              this._ybounds &&
                ((this._ybounds[0] += e.y), (this._ybounds[1] += e.y));
            }),
            (r.prototype.rotate = function (t) {
              var i = t.x,
                r = t.y;
              this.nodes.forEach(function (t) {
                var e = t.x * r - t.y * i,
                  n = t.x * i + t.y * r;
                (t.x = e), (t.y = n);
              });
              var e = this._tbounds,
                n = e[0],
                o = e[1],
                t = this._ybounds,
                e = t[0],
                t = t[1];
              (this._tbounds = [n * r - e * i, o * r - t * i].sort()),
                (this._ybounds = [n * i + e * r, o * i + t * r].sort());
            }),
            (r.prototype.setBox = function () {
              var t = this._deep[this._deep.length - 1],
                e = -1 / 0;
              t.forEach(function (t) {
                t = t.y + t.h / 2;
                e < t && (e = t);
              }),
                (this._ybounds = [this._root.y - this._root.h / 2, e]);
            }),
            (r.prototype.mirror = function () {
              this.nodes.forEach(function (t) {
                t.x = -t.x;
              });
              for (var t = 0; t < this._bounds.length; t++) {
                var e = this._bounds[t],
                  n = e[0],
                  e = e[1];
                this._bounds[t] = [-e, -n];
              }
              var i = this._tbounds,
                r = i[0],
                i = i[1];
              this._tbounds = [-i, -r];
            }),
            (r.prototype.nonLeaves = function (t) {
              return t.kids.filter(function (t) {
                return 0 < t.kids.length;
              });
            }),
            (r.prototype.toTree = function (t) {
              return (
                (t && this.hash[t.id]) || (t = this._detectRoot()),
                this.nodes.forEach(function (t) {
                  return (t.kids = []);
                }),
                this.setKids(t),
                t
              );
            }),
            (r.prototype.root = function (t, e) {
              this._deep = [[t]];
              e = Math.round((e && e.rotate ? t.h : t.w) / 2);
              (this._tbounds = [-e, e]),
                (this._bounds = [[-e, e]]),
                (this._leaves = []),
                (this._root = t),
                this._setLevels(t, 1),
                (this._width = 1);
              for (var n = 0; n < this._deep.length; n++) {
                var i = this._deep[n].length;
                i > this._width && (this._width = i);
              }
            }),
            (r.prototype.setKids = function (e) {
              var n = this;
              e.links.forEach(function (t) {
                t.kids.length || (e.kids.push(t), n.setKids(t));
              });
            }),
            (r.prototype._detectRoot = function () {
              for (
                var n = {}, t = this.nodes, i = [];
                i.forEach(function (t) {
                  return (n[t] = 1);
                }),
                  (i = []),
                  (t = t.filter(function (t) {
                    var e =
                      1 <
                      t.links
                        .map(function (t) {
                          return n[t.id] ? 0 : 1;
                        })
                        .reduce(function (t, e) {
                          return t + e;
                        }, 0);
                    return e || i.push(t.id), e;
                  })),
                  2 < t.length && i.length;

              );
              return t[0] || this.nodes[0];
            }),
            (r.prototype._setLevels = function (t, e) {
              for (var n = t.kids, i = 0; i < n.length; i++) {
                var r = n[i],
                  o = this._deep[e];
                o
                  ? o.push(r)
                  : ((this._deep[e] = [r]), (this._bounds[e] = [0, 0])),
                  r.kids.length
                    ? this._setLevels(r, e + 1)
                    : this._leaves.push(r);
              }
            }),
            (r.prototype.getIString = function () {
              for (var t = [], e = 0; e < this._leaves.length; e++)
                (this._leaves[e].isn = 0), (this._leaves[e].iss = "");
              for (e = this._deep.length - 2; 0 <= e; e--) {
                for (
                  var n = this._deep[e].filter(function (t) {
                      return 0 < t.kids.length;
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  for (var r = n[i], o = 0; o < r.kids.length; o++)
                    r.iss = r.kids
                      .map(function (t) {
                        return t.isn;
                      })
                      .sort()
                      .join(",");
                n.sort(function (t, e) {
                  return t.iss > e.iss ? 1 : -1;
                }),
                  t.push(
                    n
                      .map(function (t) {
                        return t.iss;
                      })
                      .join("|")
                  );
                for (var a = n[0].iss, s = 1, i = 0; i < n.length; i++)
                  a !== n[i].iss && ((a = n[i].iss), s++), (n[i].isn = s);
              }
              return t.join(";");
            }),
            r);
          function r(t, e, n) {
            (this._tbounds = [0, 0]),
              t
                ? ((this.nodes = [e]),
                  t.collectSubNodes(e, this.nodes),
                  (this.hash = t.hash),
                  this.root(e, n))
                : ((this.nodes = []), (this.hash = {}));
          }
          e.default = i;
        },
        ,
        ,
        function (t, d, e) {
          "use strict";
          var i,
            n =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(d, "__esModule", { value: !0 });
          var r,
            f = e(0),
            o = e(6),
            a = e(17),
            s = e(11),
            l = e(3),
            n =
              ((r = s.BaseShape),
              n(u, r),
              (u.prototype.getMetaInfo = function () {
                return o.getMeta([
                  { type: "grid", label: l.default.gridStep },
                  { type: "arrange", label: l.default.arrange },
                  { type: "fill", label: l.default.fill },
                  { type: "text", label: l.default.text },
                  { type: "strokeProps", label: l.default.stroke },
                  { type: "textProps", label: l.default.textProps },
                ]);
              }),
              (u.prototype.render = function () {
                this.config.strokeType &&
                  ("dash" === this.config.strokeType &&
                    (this.config.strokeDash = "5,5"),
                  "none" === this.config.strokeType &&
                    (this.config.stroke = "none"));
                var t = this.config,
                  e = t.id,
                  n = t.angle,
                  i = t.width,
                  r = t.height,
                  o = t.strokeWidth,
                  t = this.getCoords(this.config),
                  o = o / 2;
                return f.el(
                  "div",
                  {
                    _key: e,
                    class: "dhx_diagram_flow_item " + this.getCss(),
                    dhx_id: e,
                    style: {
                      transform: "rotate(" + (n || 0) + "deg)",
                      zIndex: this.config.$selected ? 1 : 0,
                      position: "absolute",
                      height: r,
                      width: i,
                      top: t.y,
                      left: t.x,
                    },
                  },
                  [
                    f.sv(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: r,
                        width: i,
                        viewBox: -o + " " + -o + " " + (i + o) + " " + (r + o),
                        reserveAspectRatio: "none",
                      },
                      [this._getShapeContour()]
                    ),
                    a.getTextTemplate(this.config, this.getContent()),
                    a.getCircleTpl(this.config),
                  ]
                );
              }),
              (u.prototype.setDefaults = function (t, e) {
                var n = t.width,
                  i = t.height,
                  r = t.stroke,
                  o = t.extraLinesStroke,
                  a = t.fill,
                  s = t.strokeWidth,
                  l = t.fontColor,
                  u = t.strokeDash,
                  c = t.textAlign,
                  h = t.lineHeight,
                  d = t.fontStyle,
                  f = t.textVerticalAlign,
                  p = t.type,
                  g = t.fontSize,
                  v = t.text,
                  y = t.preview,
                  _ = t.x,
                  m = t.y,
                  x = "roll" === p ? "#DEDEDE" : o || "#FFF";
                t.extraLinesStroke = e.extraLinesStroke || x;
                var b = ["circle", "or", "junction"].includes(p),
                  w = e.width ? parseFloat(e.width) : b ? 90 : 140,
                  o = e.height ? parseFloat(e.height) : 90,
                  x = e.lineHeight ? parseFloat(e.lineHeight) : 14,
                  p = e.fontSize ? parseFloat(e.fontSize) : 14,
                  b = e.strokeWidth ? parseFloat(e.strokeWidth) : 1;
                return (
                  (t.strokeWidth = s || b),
                  (t.width = n || w),
                  (t.height = i || o),
                  (t.fontSize = g || p),
                  (t.lineHeight = h || x),
                  (t.strokeDash = u || e.strokeDash || ""),
                  (t.fill = a || e.fill || "#DEDEDE"),
                  (t.stroke = r || e.stroke || "#DEDEDE"),
                  (t.text = "string" == typeof v ? v : e.text || ""),
                  (t.textAlign = c || e.textAlign || "center"),
                  (t.textVerticalAlign = f || e.textVerticalAlign || "center"),
                  (t.fontStyle = d || e.fontStyle || "normal"),
                  (t.fontColor = l || e.fontColor || "#4C4C4C"),
                  (t.preview = y || e.preview),
                  (t.x = _ || 0),
                  (t.y = m || 0),
                  t
                );
              }),
              (u.prototype.getContent = function () {
                return [
                  f.el(
                    "div",
                    {
                      class: "shape_content",
                      style: a.getShapeCss(this.config),
                    },
                    this.config.text
                  ),
                ];
              }),
              (u.prototype._getShapeContour = function () {
                var t,
                  e,
                  n = this.config,
                  i = n.width,
                  r = n.height,
                  o = n.stroke,
                  a = n.fill,
                  s = n.strokeWidth,
                  l = n.strokeDash,
                  u = n.extraLinesStroke,
                  c = n.type,
                  h = d.flowShapes[c],
                  n = Math.round(i / 12),
                  c = i - s / 2,
                  i = r - s / 2,
                  r = h.path(c, i, n),
                  n = h.additionalPath(c, i, n);
                return [
                  ((e = r),
                  f.sv("path", {
                    d: e,
                    class: "dhx_diagram_flow_shape dhx_item_shape ",
                    stroke: o,
                    fill: a,
                    "stroke-width": s,
                    "stroke-dasharray": l,
                  })),
                  ((t = n),
                  f.sv("path", {
                    d: t,
                    fill: "none",
                    stroke: u,
                    class: "dhx_diagram_extra_lines",
                  })),
                ];
              }),
              u);
          function u(t, e) {
            e = r.call(this, t, e) || this;
            return (e.config = t), (e.id = e.config.id), e;
          }
          (d.DiagramFlowShape = n),
            (d.flowShapes = {
              circle: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    t / 2 +
                    " 0 A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    "," +
                    e +
                    "\n\t\t\tA " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    ",0 Z"
                  );
                },
                additionalPath: function () {},
              },
              rectangle: {
                path: function (t, e) {
                  return (
                    "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                  );
                },
                additionalPath: function () {},
              },
              triangle: {
                path: function (t, e) {
                  return (
                    "M " + t / 2 + " 0 L" + t + " " + e + " L 0 " + e + " z"
                  );
                },
                additionalPath: function () {},
              },
              start: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    e / 2 +
                    " 0 A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    e / 2 +
                    "," +
                    e +
                    "\n\t\t\tH " +
                    (t - e / 2) +
                    " A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    (t - e / 2) +
                    ",0 H " +
                    e / 2 +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              end: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    e / 2 +
                    " 0 A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    e / 2 +
                    "," +
                    e +
                    "\n\t\t\tH " +
                    (t - e / 2) +
                    " A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    (t - e / 2) +
                    ",0 H " +
                    e / 2 +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              process: {
                path: function (t, e) {
                  return (
                    "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                  );
                },
                additionalPath: function () {},
              },
              output: {
                path: function (t, e, n) {
                  return (
                    "M " +
                    2 * n +
                    ",0 " +
                    t +
                    ",0 " +
                    (t - 2 * n) +
                    "," +
                    e +
                    " 0," +
                    e +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              decision: {
                path: function (t, e) {
                  return (
                    "M 0 " +
                    e / 2 +
                    " L " +
                    t / 2 +
                    " 0 L " +
                    t +
                    " " +
                    e / 2 +
                    " L " +
                    t / 2 +
                    " " +
                    e +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              display: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM 0 " +
                    e / 2 +
                    " L " +
                    t / 4 +
                    " 0 H " +
                    (3 * t) / 4 +
                    "\n\t\t\tA " +
                    t / 4 +
                    "," +
                    e / 2 +
                    " 0 1 1 " +
                    (3 * t) / 4 +
                    "," +
                    e +
                    "\n\t\t\tH " +
                    t / 4 +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              document: {
                path: function (t, e) {
                  return (
                    "M0 " +
                    (e -= 8) +
                    " C\n\t\t\t" +
                    t / 6 +
                    " " +
                    (10 * e) / 9 +
                    ",\n\t\t\t" +
                    t / 3 +
                    " " +
                    (10 * e) / 9 +
                    ",\n\t\t\t" +
                    t / 2 +
                    " " +
                    e +
                    " S\n\t\t\t" +
                    (5 * t) / 6 +
                    " " +
                    (8 * e) / 9 +
                    ",\n\t\t\t" +
                    t +
                    " " +
                    e +
                    "\n\t\t\tV 0 H 0 Z"
                  );
                },
                additionalPath: function () {},
              },
              data: {
                path: function (t, e, n) {
                  return (
                    "M " +
                    n +
                    " 0 Q\n\t\t\t" +
                    -n +
                    " " +
                    e / 2 +
                    ",\n\t\t\t" +
                    n +
                    " " +
                    e +
                    " H " +
                    t +
                    " Q\n\t\t\t" +
                    (t - 2 * n) +
                    " " +
                    e / 2 +
                    ",\n\t\t\t" +
                    t +
                    " 0 Z"
                  );
                },
                additionalPath: function () {},
              },
              database: {
                path: function (t, e, n) {
                  return (
                    "M 0 " +
                    n +
                    " A " +
                    t / 2 +
                    "," +
                    n +
                    " 0 1 0 " +
                    t +
                    "," +
                    n +
                    "\n\t\t\tA " +
                    t / 2 +
                    "," +
                    n +
                    " 0 1 0 0," +
                    n +
                    "\n\t\t\tV " +
                    e +
                    " H " +
                    t +
                    " V " +
                    n
                  );
                },
                additionalPath: function (t, e, n) {
                  return (
                    "M 0 " +
                    n +
                    " A " +
                    t / 2 +
                    "," +
                    n +
                    " 0 1 0 " +
                    t +
                    "," +
                    n
                  );
                },
              },
              internal: {
                path: function (t, e) {
                  return (
                    "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                  );
                },
                additionalPath: function (t, e, n) {
                  return "M " + n + " 0 V " + e + " M 0 " + n + " H " + t;
                },
              },
              offline: {
                path: function (t, e) {
                  return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z";
                },
                additionalPath: function (t, e, n) {
                  var i = e / Math.sqrt(Math.pow(t / 2, 2) + Math.pow(e, 2)),
                    i = Math.sqrt(Math.pow(n / i, 2) - Math.pow(n, 2));
                  return "M " + (t / 2 - i) + " " + (e - n) + " h " + 2 * i;
                },
              },
              delay: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM 0 0 H " +
                    (3 * t) / 4 +
                    "\n\t\t\tA " +
                    t / 4 +
                    "," +
                    e / 2 +
                    " 0 1 1 " +
                    (3 * t) / 4 +
                    "," +
                    e +
                    "\n\t\t\tH 0 Z"
                  );
                },
                additionalPath: function () {},
              },
              page: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM 0,0\n\t\t\t" +
                    t +
                    ",0\n\t\t\t" +
                    t +
                    "," +
                    e / 2 +
                    "\n\t\t\t" +
                    t / 2 +
                    "," +
                    e +
                    "\n\t\t\t0," +
                    e / 2 +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              input: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM 0," +
                    e / 3 +
                    "\n\t\t\t" +
                    t +
                    ",0\n\t\t\t" +
                    t +
                    "," +
                    e +
                    "\n\t\t\t0," +
                    e +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              operation: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM 0,0\n\t\t\t" +
                    t +
                    ",0\n\t\t\t" +
                    (3 * t) / 4 +
                    "," +
                    e +
                    "\n\t\t\t" +
                    t / 4 +
                    "," +
                    e +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              punchcard: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM 0," +
                    e / 4 +
                    "\n\t\t\t" +
                    t / 4 +
                    ",0\n\t\t\t" +
                    t +
                    ",0\n\t\t\t" +
                    t +
                    "," +
                    e +
                    "\n\t\t\t0," +
                    e +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              subroutine: {
                path: function (t, e) {
                  return (
                    "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
                  );
                },
                additionalPath: function (t, e, n) {
                  return "M " + n + " 0 V " + e + " M " + (t - n) + " 0 V " + e;
                },
              },
              comment: {
                path: function (t, e) {
                  return (
                    "M " +
                    t +
                    " 0 H 0 V " +
                    e +
                    " H" +
                    t +
                    " V" +
                    (e - 4) +
                    " H4 V4 H" +
                    t
                  );
                },
                additionalPath: function () {},
              },
              storage: {
                path: function (t, e) {
                  return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z";
                },
                additionalPath: function () {},
              },
              extract: {
                path: function (t, e) {
                  return "M 0," + e + " " + t + "," + e + " " + t / 2 + ",0 Z";
                },
                additionalPath: function () {},
              },
              collate: {
                path: function (t, e) {
                  return (
                    "M " +
                    t / 2 +
                    " " +
                    e / 2 +
                    " L 0 0 H " +
                    t +
                    " L 0 " +
                    e +
                    " H " +
                    t +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              or: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    t / 2 +
                    " 0 A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    "," +
                    e +
                    "\n\t\t\tA " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    ",0 Z"
                  );
                },
                additionalPath: function (t, e) {
                  return (
                    "\n\t\t\tM" +
                    (t - e) / 2 +
                    " " +
                    e / 2 +
                    " " +
                    (t - (t - e) / 2) +
                    " " +
                    e / 2 +
                    "\n\t\t\tM" +
                    t / 2 +
                    " 0 " +
                    t / 2 +
                    " " +
                    e
                  );
                },
              },
              junction: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    t / 2 +
                    " 0 A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    "," +
                    e +
                    "\n\t\t\tA " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    ",0 Z"
                  );
                },
                additionalPath: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    (t / 2 - (e * Math.SQRT2) / 4) +
                    " " +
                    (e / 2 - (e * Math.SQRT2) / 4) +
                    " L " +
                    (t / 2 + (e * Math.SQRT2) / 4) +
                    " " +
                    (e / 2 + (e * Math.SQRT2) / 4) +
                    "\n\t\t\tM " +
                    (t / 2 - (e * Math.SQRT2) / 4) +
                    " " +
                    (e / 2 + (e * Math.SQRT2) / 4) +
                    " L " +
                    (t / 2 + (e * Math.SQRT2) / 4) +
                    " " +
                    (e / 2 - (e * Math.SQRT2) / 4)
                  );
                },
              },
              keyring: {
                path: function (t, e, n) {
                  return (
                    "\n\t\t\tM " +
                    n +
                    " 0 A " +
                    n +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    n +
                    "," +
                    e +
                    "\n\t\t\tH " +
                    (t - n) +
                    " A " +
                    n +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    (t - n) +
                    ",0 H " +
                    n +
                    " Z"
                  );
                },
                additionalPath: function () {},
              },
              tape: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM0 " +
                    (e - 12) +
                    " C\n\t\t\t" +
                    t / 6 +
                    " " +
                    (10 * (e - 8)) / 9 +
                    ",\n\t\t\t" +
                    t / 3 +
                    " " +
                    (10 * (e - 8)) / 9 +
                    ",\n\t\t\t" +
                    t / 2 +
                    " " +
                    (e - 8) +
                    " S\n\t\t\t" +
                    (5 * t) / 6 +
                    " " +
                    (8 * (e - 8)) / 9 +
                    ",\n\t\t\t" +
                    t +
                    " " +
                    e +
                    "\n\t\t\tV 12 C\n\t\t\t" +
                    (5 * t) / 6 +
                    " " +
                    -e / 9 +
                    ",\n\t\t\t" +
                    (2 * t) / 3 +
                    " " +
                    e / 9 / 2 +
                    ",\n\t\t\t" +
                    t / 2 +
                    " 8 S\n\t\t\t" +
                    t / 6 +
                    " " +
                    e / 9 +
                    ",\n\t\t\t0 0 Z"
                  );
                },
                additionalPath: function () {},
              },
              preparation: {
                path: function (t, e) {
                  return (
                    "M0 " +
                    e / 2 +
                    "L20 0H" +
                    (t - 20) +
                    "L " +
                    t +
                    " " +
                    e / 2 +
                    "L" +
                    (t - 20) +
                    " " +
                    e +
                    "H20L0 " +
                    e / 2 +
                    "Z"
                  );
                },
                additionalPath: function () {},
              },
              endpoint: {
                path: function (t, e) {
                  return (
                    "M0 " +
                    e / 2 +
                    "  L" +
                    t / 2 +
                    " 0 L " +
                    t / 2 +
                    " " +
                    e +
                    " z"
                  );
                },
                additionalPath: function () {},
              },
              roll: {
                path: function (t, e) {
                  return (
                    "\n\t\t\tM " +
                    t / 2 +
                    " 0 A " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    "," +
                    e +
                    "\n\t\t\tA " +
                    e / 2 +
                    "," +
                    e / 2 +
                    " 0 1 0 " +
                    t / 2 +
                    ",0 Z"
                  );
                },
                additionalPath: function (t, e) {
                  return "M " + t / 2 + " " + e + " H " + t;
                },
              },
            });
        },
        ,
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          e.default = { apply: "apply", reject: "reject" };
        },
        function (t, e, n) {
          "use strict";
          function i(t) {
            var e = document.activeElement;
            e.classList.contains("dhx_alert__confirm-reject") ||
              e.classList.contains("dhx_alert__confirm-aply") ||
              t.preventDefault();
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.blockScreen = function (t) {
              var e = document.createElement("div");
              return (
                (e.className = "dhx_alert__overlay " + (t || "")),
                document.body.appendChild(e),
                document.addEventListener("keydown", i),
                function () {
                  document.body.removeChild(e),
                    document.removeEventListener("keydown", i);
                }
              );
            });
        },
        function (t, e, n) {},
        function (t, e, n) {
          "use strict";
          var f =
            (this && this.__assign) ||
            function () {
              return (f =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          function p(t, e, n) {
            switch (n) {
              case "top":
                return t.$shape.getPoint(t.x + t.width / 2, t.y - e);
              case "bottom":
                return t.$shape.getPoint(t.x + t.width / 2, t.y + t.height + e);
              case "left":
                return t.$shape.getPoint(t.x - e, t.y + t.height / 2);
              case "right":
                return t.$shape.getPoint(t.x + t.width + e, t.y + t.height / 2);
              case "center":
                return t.$shape.getPoint(t.x + t.width / 2, t.y + t.height / 2);
            }
          }
          function g(t, e, n, i, r, o) {
            if ((void 0 === o && (o = 10), !r)) {
              var a = n.y === i.y ? +o : 0,
                s = n.x === i.x ? +o : 0;
              return [
                t,
                { x1: n.x, y1: n.y, x: n.x + a, y: n.y + s },
                { x: i.x - a, y: i.y - s },
                { x1: i.x, y1: i.y, x: e.x, y: e.y },
              ];
            }
            var l = i.x < r.x ? -1 : 1,
              u = i.y < r.y ? -1 : 1,
              c = n.x > r.x ? 1 : -1,
              h = n.y > r.y ? 1 : -1,
              d = f({}, r),
              a = f({}, i),
              s = { x1: r.x, y1: r.y, x: r.x, y: r.y + o * u };
            return (
              n.x === r.x &&
                ((d.y += o * h),
                (a.x -= o * l),
                (s = { x1: r.x, y1: r.y, x: r.x + o * l, y: r.y })),
              n.y === r.y &&
                ((d.x += o * c),
                (a.y -= o * u),
                (s = { x1: r.x, y1: r.y, x: r.x, y: r.y + o * u })),
              [t, n, d, s, a, { x1: i.x, y1: i.y, x: e.x, y: e.y }]
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var v = ["top", "bottom", "right", "left", "center"];
          function o(t, e, s, n, i, r, o) {
            var a, l;
            void 0 === r && (r = ""), void 0 === o && (o = "");
            var u,
              c,
              h = i && n < i ? i : n || 0;
            if ("center" === r && "center" === o)
              return [
                { x: e.x + e.width / 2, y: e.y + e.height / 2 },
                { x: s.x + s.width / 2, y: s.y + s.height / 2 },
              ];
            r && ((a = p(e, 0, r)), (u = p(e, n, r))),
              o && ((l = p(s, 0, o)), (c = p(s, h, o))),
              (r && o) ||
                ((u = (d = v
                  .map(function (o) {
                    var a = p(e, n, o);
                    return v
                      .map(function (t) {
                        var e,
                          n,
                          i,
                          r = p(s, h, t),
                          e =
                            ((e = a),
                            (i = (n = r).x - e.x),
                            (e = n.y - e.y),
                            Math.sqrt(i * i + e * e));
                        return [a, r, e, o, t];
                      })
                      .sort(function (t, e) {
                        return t[2] - e[2];
                      })[0];
                  })
                  .sort(function (t, e) {
                    return t[2] - e[2];
                  })[0])[0]),
                (c = d[1]),
                (r = d[3]),
                (o = d[4]),
                (t.fromSide = r),
                (t.toSide = o),
                (a = p(e, 0, r)),
                (l = p(s, 0, o)));
            i =
              ("bottom" === r && "top" === o) || ("top" === r && "bottom" === o)
                ? Math.abs(l.y - a.y)
                : 0;
            0 <
              (i =
                i ||
                (("left" === r && "right" === o) ||
                ("right" === r && "left" === o)
                  ? Math.abs(l.x - a.x)
                  : 0)) &&
              i <= h + n &&
              (c = p(s, (h = i - n), o));
            var d = [];
            return (
              u.x === c.x || u.y === c.y
                ? (a.x === u.x && u.x === l.x) || (a.y === u.y && u.y === l.y)
                  ? (d = [a, l])
                  : ((d = [a, u, c, l]),
                    t.cornersRadius &&
                      "straight" !== t.connectType &&
                      (d = g(a, l, u, c, null, t.cornersRadius)))
                : ((r = u.x < a.x && u.x < c.x),
                  (i = u.y > a.y && u.y > c.y),
                  (o =
                    a.x === u.x || r ? { x: u.x, y: c.y } : { x: c.x, y: u.y }),
                  (o = i ? { x: c.x, y: u.y } : o),
                  (d =
                    "curved" === t.connectType
                      ? ((r = l),
                        [a, { x1: (i = o).x, y1: i.y, x: r.x, y: r.y }])
                      : t.cornersRadius && "straight" !== t.connectType
                      ? g(a, l, u, c, o, t.cornersRadius)
                      : [a, u, o, c, l])),
              d
            );
          }
          (e.nearestLinkPath = function (t, e, n, i) {
            if (e && n) {
              var r = o(t, e, n, i.lineGap, t.customGap, t.fromSide, t.toSide);
              if ("straight" === t.connectType)
                return (t.points = [r[0], r[r.length - 1]]);
              t.points
                ? (t.points.length === r.length
                    ? (t.points = t.points.map(function (t, e) {
                        return t && r[e] && !t.$custom ? r[e] : t;
                      }))
                    : ((i = t.points.filter(function (t) {
                        return t.$custom;
                      })),
                      (t.points = i.length ? t.points : r)),
                  t.$move ||
                    ((t.points[0] = r[0]),
                    (t.points[t.points.length - 1] = r[r.length - 1])))
                : (t.points = r);
            }
          }),
            (e.directLinkPath = function (t, e, n, i) {
              var r, o, a, s, l, u, c, h, d;
              t &&
                ((r = e.x + (e.dx || 0)),
                (o = e.y + (e.dy || 0)),
                (a = n.x + (n.dx || 0)),
                (s = n.y + (n.dy || 0)),
                "vertical" === e.dir
                  ? ((l = r),
                    (u = Math.round(o + e.height / 2)),
                    (c = a),
                    (h = Math.round(s + n.height / 2)),
                    (d = 0.5 - Math.round(i.margin.itemX / 2)),
                    (t.points = [
                      { x: l, y: u },
                      { x: l + d, y: u },
                      { x: l + d, y: h },
                      { x: c, y: h },
                    ]))
                  : ((l = Math.round(r + e.width / 2)),
                    (u = o + e.height),
                    (c = Math.round(a + n.width / 2)),
                    (h = s),
                    (d = Math.round(i.margin.itemY / 2) + 0.5),
                    (t.points = [
                      { x: l, y: u },
                      { x: l, y: u + d },
                      { x: c, y: u + d },
                      { x: c, y: h },
                    ])));
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            ((e =
              e.SelectionEvents || (e.SelectionEvents = {})).beforeUnSelect =
              "beforeunselect"),
            (e.afterUnSelect = "afterunselect"),
            (e.beforeSelect = "beforeselect"),
            (e.afterSelect = "afterselect");
        },
        function (t, e, n) {
          "use strict";
          var s =
            (this && this.__assign) ||
            function () {
              return (s =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(8),
            o = n(62),
            a = n(65),
            i = n(10),
            l = n(5),
            u = n(4),
            p = n(2),
            n =
              ((c.prototype._reset = function () {
                (this._order = []),
                  (this._pull = {}),
                  (this._changes = { order: [] }),
                  (this._initOrder = null),
                  (this._meta = new WeakMap()),
                  (this._loaded = !1);
              }),
              (c.prototype.add = function (t, n) {
                var i = this;
                if (this.events.fire(u.DataEvents.beforeAdd, [t])) {
                  t = Array.isArray(t)
                    ? t.map(function (t, e) {
                        return 0 !== e && (n += 1), i._add(t, n);
                      })
                    : this._add(t, n);
                  return this._applySmart(), t;
                }
              }),
              (c.prototype.remove = function (t) {
                var e = this;
                t &&
                  (t instanceof Array
                    ? t.map(function (t) {
                        e._remove(t);
                      })
                    : this._remove(t));
              }),
              (c.prototype.removeAll = function () {
                this._reset(),
                  this.events.fire(u.DataEvents.removeAll),
                  this.events.fire(u.DataEvents.change);
              }),
              (c.prototype.exists = function (t) {
                return !!this._pull[t];
              }),
              (c.prototype.getNearId = function (t) {
                if (!this._pull[t]) return this._order[0].id || "";
              }),
              (c.prototype.getItem = function (t) {
                return this._pull[t];
              }),
              (c.prototype.update = function (t, e, n) {
                var i = this.getItem(t);
                i
                  ? l.isEqualObj(e, i) ||
                    (e.id && t !== e.id
                      ? (l.dhxWarning("this method doesn't allow change id"),
                        l.isDebug())
                      : (e.parent &&
                          i.parent &&
                          e.parent !== i.parent &&
                          this.move(t, -1, this, e.parent),
                        p.extend(this._pull[t], e, !1),
                        this.config.update && this.config.update(this._pull[t]),
                        n || this._onChange("update", t, this._pull[t])),
                    this._applySmart())
                  : l.dhxWarning("item not found");
              }),
              (c.prototype.getIndex = function (e) {
                if (!e) return -1;
                var t = p.findIndex(this._order, function (t) {
                  return t && t.id.toString() === e.toString();
                });
                return this._pull[e] && 0 <= t ? t : void 0;
              }),
              (c.prototype.getId = function (t) {
                if (this._order[t]) return this._order[t].id;
              }),
              (c.prototype.getLength = function () {
                return this._order.length;
              }),
              (c.prototype.isDataLoaded = function (t, e) {
                return (
                  void 0 === t && (t = 0),
                  void 0 === e && (e = this._order.length),
                  p.isNumeric(t) && p.isNumeric(e)
                    ? 0 ===
                      this._order.slice(t, e).filter(function (t) {
                        return t && t.$empty;
                      }).length
                    : (this._loaded ||
                        (this._loaded = !this.find(function (t) {
                          return t.$empty;
                        })),
                      !!this._loaded)
                );
              }),
              (c.prototype.filter = function (t, e) {
                var n;
                this.isDataLoaded()
                  ? ((e && e.add) ||
                      ((this._order = this._initOrder || this._order),
                      (this._initOrder = null)),
                    !t ||
                      "function" == typeof t ||
                      (void 0 !== (n = t).by &&
                        void 0 !== n.match &&
                        (t = n.compare
                          ? function (t) {
                              return n.compare(t[n.by], n.match, t);
                            }
                          : function (t) {
                              return t[n.by] == n.match;
                            })),
                    (this._filter = e && e.smartFilter ? t : null),
                    this._applyFilters(t),
                    this.events.fire(u.DataEvents.change))
                  : l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype.find = function (t) {
                for (var e in this._pull) {
                  var n = l.findByConf(this._pull[e], t);
                  if (n) return n;
                }
                return null;
              }),
              (c.prototype.findAll = function (t) {
                var e,
                  n = [];
                for (e in this._pull) {
                  var i = l.findByConf(this._pull[e], t);
                  i && n.push(i);
                }
                return n;
              }),
              (c.prototype.sort = function (t, e) {
                this.isDataLoaded()
                  ? (e && e.smartSorting && (this._sorter = t),
                    t && this._applySorters(t),
                    this.events.fire(u.DataEvents.change))
                  : l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype.copy = function (t, n, i, r) {
                var o = this;
                return t instanceof Array
                  ? t.map(function (t, e) {
                      return o._copy(t, n, i, r, e);
                    })
                  : this._copy(t, n, i, r);
              }),
              (c.prototype.move = function (t, n, i, r) {
                var o = this;
                return t instanceof Array
                  ? t.map(function (t, e) {
                      return o._move(t, n, i, r, e);
                    })
                  : this._move(t, n, i, r);
              }),
              (c.prototype.forEach = function (t) {
                for (var e = 0; e < this._order.length; e++)
                  t.call(this, this._order[e], e, this._order);
              }),
              (c.prototype.load = function (t, e) {
                return (
                  "string" == typeof t &&
                    (this.dataProxy = t = new i.DataProxy(t)),
                  (this.dataProxy = t),
                  this._loader.load(t, e)
                );
              }),
              (c.prototype.parse = function (t, e) {
                return this._reset(), this._loader.parse(t, e);
              }),
              (c.prototype.$parse = function (t) {
                var e = this.config.approximate;
                e && (t = this._approximate(t, e.value, e.maxNum)),
                  this._parse_data(t),
                  this._applySmart(),
                  this.events.fire(u.DataEvents.change, ["load"]),
                  this.events.fire(u.DataEvents.load);
              }),
              (c.prototype.save = function (t) {
                "string" == typeof t && (t = new i.DataProxy(t)),
                  this._loader.save(t);
              }),
              (c.prototype.changeId = function (t, e, n) {
                var i;
                void 0 === e && (e = p.uid()),
                  n || this.isDataLoaded()
                    ? (i = this.getItem(t))
                      ? ((i.id = e),
                        p.extend(this._pull[t], i),
                        (this._pull[e] = this._pull[t]),
                        n || this._onChange("update", e, this._pull[e]),
                        delete this._pull[t])
                      : l.dhxWarning("item not found")
                    : l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype.isSaved = function () {
                return !this._changes.order.length;
              }),
              (c.prototype.map = function (t) {
                for (var e = [], n = 0; n < this._order.length; n++)
                  e.push(t.call(this, this._order[n], n, this._order));
                return e;
              }),
              (c.prototype.mapRange = function (t, e, n) {
                t < 0 && (t = 0),
                  e > this._order.length - 1 && (e = this._order.length - 1);
                for (
                  var i = this._order.slice(t, e), r = [], o = t;
                  o <= e;
                  o++
                )
                  r.push(n.call(this, this._order[o], o, i));
                return r;
              }),
              (c.prototype.reduce = function (t, e) {
                for (var n = 0; n < this._order.length; n++)
                  e = t.call(this, e, this._order[n], n);
                return e;
              }),
              (c.prototype.serialize = function (t) {
                void 0 === t && (t = u.DataDriver.json);
                var e = this.map(function (t) {
                    var e = s({}, t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        t.startsWith("$") && delete e[t];
                      }),
                      e
                    );
                  }),
                  t = l.toDataDriver(t);
                if (t) return t.serialize(e);
              }),
              (c.prototype.getInitialData = function () {
                return this._initOrder;
              }),
              (c.prototype.setMeta = function (t, e, n) {
                var i;
                t &&
                  ((i = this._meta.get(t)) || ((i = {}), this._meta.set(t, i)),
                  (i[e] = n));
              }),
              (c.prototype.getMeta = function (t, e) {
                t = this._meta.get(t);
                return t ? t[e] : null;
              }),
              (c.prototype.getMetaMap = function (t) {
                return this._meta.get(t);
              }),
              (c.prototype.setRange = function (t, e) {
                this._range = e ? [t, e] : null;
              }),
              (c.prototype.getRawData = function (t, e, n, i) {
                if (((n = n || this._order), 1 === i)) return n;
                var r;
                if (
                  (this._range &&
                    ((t = this._range[0] + t),
                    (e =
                      -1 === e || t + (r = e - t) > this._range[1]
                        ? this._range[1]
                        : t + r)),
                  !e || (0 === t && (-1 === e || e === n.length)))
                )
                  return n;
                if (t >= n.length) return [];
                (-1 === e || e > n.length) && (e = n.length);
                n = n.slice(t, e);
                return (
                  0 !==
                    n.filter(function (t) {
                      return t.$empty;
                    }).length && this.events.fire("dataRequest", [t, e]),
                  n
                );
              }),
              (c.prototype._add = function (t, e) {
                if (this.isDataLoaded()) {
                  e = this._addCore(t, e);
                  return (
                    this._onChange("add", t.id, t),
                    this.events.fire(u.DataEvents.afterAdd, [t]),
                    e
                  );
                }
                l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype._remove = function (t) {
                if (this.isDataLoaded()) {
                  var e = this._pull[t];
                  if (e) {
                    if (!this.events.fire(u.DataEvents.beforeRemove, [e]))
                      return;
                    this._removeCore(e.id), this._onChange("remove", t, e);
                  }
                  this.events.fire(u.DataEvents.afterRemove, [e]);
                } else l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype._copy = function (t, e, n, i, r) {
                if (this.isDataLoaded()) {
                  if (!this.exists(t)) return null;
                  var o = p.uid();
                  return (r && (e = -1 === e ? -1 : e + r), n)
                    ? n instanceof c || !i
                      ? n.exists(t)
                        ? (n.add(
                            s(s({}, l.copyWithoutInner(this.getItem(t))), {
                              id: o,
                            }),
                            e
                          ),
                          o)
                        : (n.add(l.copyWithoutInner(this.getItem(t)), e), t)
                      : void n.add(l.copyWithoutInner(this.getItem(t)), e)
                    : (this.add(
                        s(s({}, l.copyWithoutInner(this.getItem(t))), {
                          id: o,
                        }),
                        e
                      ),
                      o);
                }
                l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype._move = function (t, e, n, i, r) {
                if (this.isDataLoaded()) {
                  if (
                    (r && (e = -1 === e ? -1 : e + r),
                    n && n !== this && this.exists(t))
                  ) {
                    var o = p.copy(this.getItem(t), !0);
                    return (
                      n.exists(t) && (o.id = p.uid()),
                      i && (o.parent = i),
                      n.add(o, e),
                      this.remove(t),
                      o.id
                    );
                  }
                  if (this.getIndex(t) === e) return null;
                  o = this._order.splice(this.getIndex(t), 1)[0];
                  return (
                    -1 === e && (e = this._order.length),
                    this._order.splice(e, 0, o),
                    this.events.fire(u.DataEvents.change, [
                      t,
                      "update",
                      this.getItem(t),
                    ]),
                    t
                  );
                }
                l.dhxWarning("the method doesn't work with lazyLoad");
              }),
              (c.prototype._addCore = function (t, e) {
                return (
                  this.config.init && (t = this.config.init(t)),
                  (t.id = t.id ? t.id.toString() : p.uid()),
                  this._pull[t.id] && l.dhxError("Item already exist"),
                  this._initOrder &&
                    this._initOrder.length &&
                    this._addToOrder(this._initOrder, t, e),
                  this._addToOrder(this._order, t, e),
                  t.id
                );
              }),
              (c.prototype._removeCore = function (e) {
                0 <= this.getIndex(e) &&
                  ((this._order = this._order.filter(function (t) {
                    return t.id !== e;
                  })),
                  delete this._pull[e]),
                  this._initOrder &&
                    this._initOrder.length &&
                    ((this._initOrder = this._initOrder.filter(function (t) {
                      return t.id !== e;
                    })),
                    delete this._pull[e]);
              }),
              (c.prototype._parse_data = function (t) {
                var e = this._order.length;
                this.config.prep && (t = this.config.prep(t));
                for (var n = 0, i = t; n < i.length; n++) {
                  var r = i[n];
                  this.config.init && (r = this.config.init(r)),
                    (r.id = r.id || 0 === r.id ? r.id : p.uid()),
                    (this._pull[r.id] = r),
                    (this._order[e++] = r);
                }
              }),
              (c.prototype._approximate = function (t, e, n) {
                for (
                  var i = t.length,
                    r = e.length,
                    o = Math.floor(i / n),
                    a = Array(Math.ceil(i / o)),
                    s = 0,
                    l = 0;
                  l < i;
                  l += o
                ) {
                  for (
                    var u = p.copy(t[l]), c = Math.min(i, l + o), h = 0;
                    h < r;
                    h++
                  ) {
                    for (var d = 0, f = l; f < c; f++) d += t[f][e[h]];
                    u[e[h]] = d / (c - l);
                  }
                  a[s++] = u;
                }
                return a;
              }),
              (c.prototype._onChange = function (t, e, n) {
                for (var i = 0, r = this._changes.order; i < r.length; i++)
                  if ((a = r[i]).id === e && !a.saving) {
                    a.error && (a.error = !1);
                    var o = this._changes.order.indexOf(a),
                      a = s(s({}, a), { obj: n, status: t });
                    return (
                      this._changes.order.splice(o, 1, a),
                      this._loader.updateChanges(this._changes),
                      void this.events.fire(u.DataEvents.change, [e, t, n])
                    );
                  }
                this._changes.order.push({
                  id: e,
                  status: t,
                  obj: s({}, n),
                  saving: !1,
                }),
                  this._loader.updateChanges(this._changes),
                  this.events.fire(u.DataEvents.change, [e, t, n]);
              }),
              (c.prototype._addToOrder = function (t, e, n) {
                0 <= n && t[n]
                  ? ((this._pull[e.id] = e), t.splice(n, 0, e))
                  : ((this._pull[e.id] = e), t.push(e));
              }),
              (c.prototype._applySmart = function () {
                this._filter && this._applyFilters(),
                  this._sorter && this._applySorters();
              }),
              (c.prototype._applySorters = function (t) {
                this._sort.sort(this._order, t, this._sorter),
                  this._initOrder &&
                    this._initOrder.length &&
                    this._sort.sort(this._initOrder, t, this._sorter);
              }),
              (c.prototype._applyFilters = function (e) {
                var t,
                  n = this._filter;
                e === n && (e = null),
                  (e || n) &&
                    ((t = this._order.filter(function (t) {
                      return (!e || e(t)) && (!n || n(t));
                    })),
                    this._initOrder || (this._initOrder = this._order),
                    (this._order = t));
              }),
              c);
          function c(t, e) {
            var i = this;
            (this._changes = { order: [] }),
              (this.config = t || {}),
              (this._sort = new a.Sort()),
              (this._loader = new o.Loader(this, this._changes)),
              (this.events = e || new r.EventSystem(this)),
              this.events.on("dataRequest", function (t, e) {
                var n = i.dataProxy;
                n &&
                  n.updateUrl &&
                  (n.updateUrl(null, {
                    from: t,
                    limit: n.config.limit || e - t,
                  }),
                  i.load(n));
              }),
              this.events.on(u.DataEvents.loadError, function (t) {
                "string" != typeof t ? l.dhxError(t) : l.dhxWarning(t);
              }),
              this._reset();
          }
          e.DataCollection = n;
        },
        function (t, e, n) {
          "use strict";
          var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(33),
            o = n(34),
            n = n(63);
          (e.dataDrivers = { json: r.JsonDriver, csv: o.CsvDriver }),
            (e.dataDriversPro = i(i({}, e.dataDrivers), { xml: n.XMLDriver }));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i =
            ((r.prototype.toJsonArray = function (t) {
              return this.getRows(t);
            }),
            (r.prototype.serialize = function (t) {
              return t;
            }),
            (r.prototype.getFields = function (t) {
              return t;
            }),
            (r.prototype.getRows = function (t) {
              return "string" == typeof t ? JSON.parse(t) : t;
            }),
            r);
          function r() {}
          e.JsonDriver = i;
        },
        function (t, e, n) {
          "use strict";
          var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r =
            ((o.prototype.getFields = function (t, e) {
              for (
                var n = t.trim().split(this.config.columnDelimiter),
                  i = {},
                  r = 0;
                r < n.length;
                r++
              )
                i[e ? e[r] : r + 1] = isNaN(Number(n[r]))
                  ? n[r]
                  : parseFloat(n[r]);
              return i;
            }),
            (o.prototype.getRows = function (t) {
              return t.trim().split(this.config.rowDelimiter);
            }),
            (o.prototype.toJsonArray = function (t) {
              var e = this,
                n = this.getRows(t),
                i = this.config.names;
              return (
                this.config.skipHeader &&
                  ((t = n.splice(0, this.config.skipHeader)),
                  this.config.nameByHeader &&
                    (i = t[0].trim().split(this.config.columnDelimiter))),
                n.map(function (t) {
                  return e.getFields(t, i);
                })
              );
            }),
            (o.prototype.serialize = function (t, e) {
              var n = t[0]
                  ? Object.keys(t[0])
                      .filter(function (t) {
                        return !t.startsWith("$");
                      })
                      .join(this.config.columnDelimiter)
                  : "",
                t = this._serialize(t);
              return e ? t : n + t;
            }),
            (o.prototype._serialize = function (t) {
              var r = this;
              return t.reduce(function (t, i) {
                var e = Object.keys(i).reduce(function (t, e, n) {
                  return e.startsWith("$") || "items" === e
                    ? t
                    : "" +
                        t +
                        i[e] +
                        (n === i.length - 1 ? "" : r.config.columnDelimiter);
                }, "");
                return i.items
                  ? t + (t ? "\n" : "") + e + r._serialize(i.items)
                  : "" + t + (t ? r.config.rowDelimiter : "") + e;
              }, "");
            }),
            o);
          function o(t) {
            (this.config = i(
              i(
                {},
                {
                  skipHeader: 0,
                  nameByHeader: !1,
                  rowDelimiter: "\n",
                  columnDelimiter: ",",
                }
              ),
              t
            )),
              this.config.nameByHeader && (this.config.skipHeader = 1);
          }
          e.CsvDriver = r;
        },
        function (t, i, e) {
          "use strict";
          Object.defineProperty(i, "__esModule", { value: !0 });
          var n,
            r = e(71),
            o = e(36),
            a = e(72),
            s = e(24),
            l = e(73),
            u = e(41);
          for (n in ((i.shapes = {
            line: r.Line,
            dash: r.Line,
            card: o.OrgChartCard,
            "img-card": a.OrgChartImgCard,
            text: l.DiagramTextShape,
          }),
          s.flowShapes))
            i.shapes[n] = s.DiagramFlowShape;
          i.shapesFactory = function (t, e) {
            var n = i.shapes[t.type];
            return new (!n && ((n = i.shapes.card), e.shapes[t.type])
              ? u.DiagramCustomShape
              : n)(t, e);
          };
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o,
            a = n(0),
            s = n(6),
            l = n(3),
            u = n(11),
            c = n(17),
            r =
              ((o = u.BaseShape),
              r(h, o),
              (h.prototype.render = function () {
                var t = this.config,
                  e = t.id,
                  n = t.angle,
                  i = t.width,
                  r = t.height,
                  o = t.headerColor,
                  t = this.config.$selected ? o : "#E4E4E4",
                  o = this.getCoords(this.config);
                return a.el(
                  "div",
                  {
                    _key: e,
                    dhx_id: e,
                    class: "dhx_diagram_org_item " + this.getCss(),
                    style: {
                      transform: "rotate(" + (n || 0) + "deg)",
                      position: "absolute",
                      top: o.y,
                      left: o.x,
                      zIndex: 0,
                    },
                  },
                  [
                    a.el("div", {
                      class: "dhx_item_shape",
                      id: e,
                      style: {
                        height: r,
                        width: i,
                        border: "1px solid " + t,
                        borderRadius: "1px",
                      },
                    }),
                    c.getHeaderTpl(this.config),
                    c.getTextTemplate(this.config, this.getContent()),
                    c.getCircleTpl(this.config),
                  ]
                );
              }),
              (h.prototype.getMetaInfo = function () {
                return s.getMeta([
                  { type: "grid", label: l.default.gridStep },
                  { type: "color", label: l.default.color },
                  { type: "position", label: l.default.position },
                  { type: "size", label: l.default.size },
                  { type: "text", label: l.default.text },
                ]);
              }),
              (h.prototype.getCss = function () {
                return "dhx_diagram_item " + o.prototype.getCss.call(this);
              }),
              (h.prototype.setDefaults = function (t, e) {
                var n = t.width,
                  i = t.height,
                  r = t.text,
                  o = t.headerColor,
                  a = e.width ? parseFloat(e.width) : 140,
                  s = e.height ? parseFloat(e.height) : 90;
                return (
                  (t.width = n || a),
                  (t.height = i || s),
                  (t.text = "string" == typeof r ? r : e.text || ""),
                  (t.headerColor = o || e.headerColor || ""),
                  t
                );
              }),
              (h.prototype.getContent = function () {
                return this.config.text;
              }),
              h);
          function h(t, e) {
            e = o.call(this, t, e) || this;
            return (e.config = t), (e.id = e.config.id), e;
          }
          e.OrgChartCard = r;
        },
        function (t, e, n) {
          "use strict";
          var i, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            ((r = e.LineMode || (e.LineMode = {}))[(r.Direct = 1)] = "Direct"),
            (r[(r.Edges = 2)] = "Edges"),
            ((r = i = e.Direction || (e.Direction = {}))[(r.Top = 1)] = "Top"),
            (r[(r.Bottom = 2)] = "Bottom"),
            (r[(r.Right = 3)] = "Right"),
            (r[(r.Left = 4)] = "Left"),
            (e.DirVectors =
              (((e = {})[i.Bottom] = { x: 0, y: 1 }),
              (e[i.Top] = { x: 0, y: -1 }),
              (e[i.Right] = { x: 1, y: 0 }),
              (e[i.Left] = { x: -1, y: 0 }),
              e));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.sign = function (t) {
              return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1;
            });
        },
        function (t, e, n) {
          "use strict";
          var i =
            (this && this.__assign) ||
            function () {
              return (i =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(1),
            u = n(18),
            c = 750,
            h = 200;
          function s(t, e, n, i) {
            var r, o, a;
            switch (e) {
              case u.Position.center:
                return (
                  (o = t.left + window.pageXOffset + (t.width - n) / 2) + 8 <
                    window.pageXOffset && (o = t.left + window.pageXOffset),
                  {
                    left: o,
                    top: (a = t.top + window.pageYOffset + (t.height - i) / 2),
                    pos: (r = u.RealPosition.center),
                  }
                );
              case u.Position.right:
                return (
                  (r = u.RealPosition.right),
                  (o = t.right + window.pageXOffset) + n + 8 >
                    window.innerWidth + window.pageXOffset &&
                    ((o = window.pageXOffset + t.left - n),
                    (r = u.RealPosition.left)),
                  {
                    left: o,
                    top: (a = window.pageYOffset + t.top + (t.height - i) / 2),
                    pos: r,
                  }
                );
              case u.Position.bottom:
              default:
                return (
                  (o = window.pageXOffset + t.left + (t.width - n) / 2) + n >
                  window.innerWidth + window.pageXOffset
                    ? (o = window.innerWidth + window.pageXOffset - n)
                    : o < 0 && (o = 0),
                  (r = u.RealPosition.bottom),
                  (a = window.pageYOffset + t.bottom) + i + 8 >
                    window.innerHeight + window.pageYOffset &&
                    ((a = window.pageYOffset + t.top - i),
                    (r = u.RealPosition.top)),
                  { left: o, top: a, pos: r }
                );
            }
          }
          e.findPosition = s;
          var d = document.createElement("div"),
            l = document.createElement("span");
          (l.className = "dhx_tooltip__text"),
            d.appendChild(l),
            (d.style.position = "absolute");
          var f,
            p = null,
            g = !1,
            v = null,
            y = null;
          function _(t, e, n, i, r) {
            void 0 === r && (r = !1);
            t = t.getBoundingClientRect();
            (l.textContent = e),
              document.body.appendChild(d),
              (d.className =
                "dhx_widget dhx_tooltip" + (r ? " dhx_tooltip--forced" : ""));
            var e = d.getBoundingClientRect(),
              e = s(t, n, e.width, e.height),
              o = e.left,
              a = e.top,
              e = e.pos;
            switch (e) {
              case u.RealPosition.bottom:
              case u.RealPosition.top:
              case u.RealPosition.left:
              case u.RealPosition.right:
              case u.RealPosition.center:
                (d.style.left = o + "px"), (d.style.top = a + "px");
            }
            (d.className += " dhx_tooltip--" + e + " " + (i || "")),
              (g = !0),
              r ||
                setTimeout(function () {
                  d.className += " dhx_tooltip--animate";
                });
          }
          function o(e, t, n) {
            var i = n.force,
              r = n.showDelay,
              o = n.hideDelay,
              a = n.position,
              s = n.css;
            i ||
              (y = setTimeout(function () {
                _(e, t, a || u.Position.bottom, s);
              }, r || c));
            var l = function () {
              var t;
              g &&
                ((t = o),
                p &&
                  (v = setTimeout(function () {
                    document.body.removeChild(d), (g = !1), (v = null);
                  }, t || h))),
                clearTimeout(y),
                e.removeEventListener("mouseleave", l),
                e.removeEventListener("blur", l),
                document.removeEventListener("mousedown", l),
                (f = p = null);
            };
            i && _(e, t, a, s, i),
              e.addEventListener("mouseleave", l),
              e.addEventListener("blur", l),
              document.addEventListener("mousedown", l),
              (f = l);
          }
          function a(t, e) {
            var n = r.toNode(e.node);
            n !== p &&
              (f && (f(), (f = null)),
              (p = n),
              v
                ? (clearTimeout(v),
                  (v = null),
                  o(n, t, i(i({}, e), { force: !0 })))
                : o(n, t, e));
          }
          function m(t) {
            t = r.locateNode(t, "dhx_tooltip_text");
            t &&
              a(t.getAttribute("dhx_tooltip_text"), {
                position:
                  t.getAttribute("dhx_tooltip_position") || u.Position.bottom,
                node: t,
              });
          }
          (e.tooltip = a),
            (e.enableTooltip = function () {
              document.addEventListener("mousemove", m);
            }),
            (e.disableTooltip = function () {
              document.removeEventListener("mousemove", m);
            });
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            c =
              (this && this.__assign) ||
              function () {
                return (c =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            o =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                  t += arguments[e].length;
                for (var i = Array(t), r = 0, e = 0; e < n; e++)
                  for (
                    var o = arguments[e], a = 0, s = o.length;
                    a < s;
                    a++, r++
                  )
                    i[r] = o[a];
                return i;
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var a,
            s = n(8),
            l = n(2),
            h = n(0),
            u = n(1),
            d = n(9),
            f = n(59),
            p = n(29),
            g = n(60),
            v = n(61),
            y = n(35),
            _ = n(24),
            m = n(42),
            x = n(74),
            b = n(12),
            w = n(21),
            k = n(37),
            M = n(75),
            D = n(79),
            O = n(80),
            r =
              ((a = d.View),
              r(S, a),
              (S.prototype.addShape = function (t, e) {
                if (
                  o(
                    ["line", "dash", "card", "img-card", "text"],
                    Object.keys(this.flowShapes)
                  ).includes(t)
                )
                  throw new Error("Cannot reassign existing type");
                if ("function" != typeof e.template)
                  throw new Error(
                    "The template property must be set as a function"
                  );
                e.defaults && (this.config.defaults[t] = c({}, e.defaults)),
                  e.properties && (this.config.properties[t] = o(e.properties)),
                  (this.flowShapes[t] = e.template);
              }),
              (S.prototype.locate = function (t) {
                (t = u.locate(t, "dhx_id")), (t = this.data.getItem(t));
                return t ? t.$shape : null;
              }),
              (S.prototype.collapseItem = function (t) {
                this.events.fire(b.DiagramEvents.beforeCollapse, [t]) &&
                  (this.data.update(t, { open: !1 }),
                  this.events.fire(b.DiagramEvents.afterCollapse, [t]),
                  (t = this.data.getItem(t)) &&
                    t.parent &&
                    this.collapseItem(t.parent));
              }),
              (S.prototype.expandItem = function (t) {
                this.events.fire(b.DiagramEvents.beforeExpand, [t]) &&
                  (this.data.update(t, { open: !0 }),
                  this.events.fire(b.DiagramEvents.afterExpand, [t]),
                  (t = this.data.getItem(t)) &&
                    t.parent &&
                    this.expandItem(t.parent));
              }),
              (S.prototype.getScrollState = function () {
                var t = this.getRootView().node.el;
                return { x: t.scrollLeft, y: t.scrollTop };
              }),
              (S.prototype.scrollTo = function (t, e) {
                var n = this.getRootView().node.el;
                (n.scrollLeft = t), (n.scrollTop = e);
              }),
              (S.prototype.showItem = function (t) {
                var i = this,
                  r = this.data.getItem(t);
                r &&
                  (r.parent && this.expandItem(r.parent),
                  h.awaitRedraw().then(function () {
                    var t = i.getRootView().node.el,
                      e = r.$shape.getBox(),
                      n = t.offsetWidth / 2,
                      t = t.offsetHeight / 2;
                    i.scrollTo(e.right + 10 - n, e.bottom + 10 - t);
                  }));
              }),
              (S.prototype.autoPlace = function (t) {
                var i = this,
                  e = this.config,
                  n = e.autoplacement,
                  e = e.type,
                  r = (t && t.mode) || n.mode || "direct",
                  o = (t && t.root) || this.selection.getId();
                if ("org" === e)
                  throw new Error(
                    "This method does not work with this type of diagram"
                  );
                var a = new w.default();
                this.data.map(function (t) {
                  "line" !== t.type &&
                    "dash" !== t.type &&
                    a.addNode({
                      id: t.id.toString(),
                      w: t.width,
                      h: t.height,
                      x: t.x,
                      y: t.y,
                    });
                }),
                  this.data.map(function (t) {
                    ("line" === t.type || "dash" === t.type) && t.from && t.to
                      ? (i.data.update(t.id, {
                          fromSide: "direct" === r ? "center" : void 0,
                          toSide: "direct" === r ? "center" : void 0,
                        }),
                        a.addEdge(t.from.toString(), t.to.toString()))
                      : ("line" !== t.type && "dash" !== t.type) ||
                        i.data.remove(t.id);
                  }),
                  a.clean();
                var s = new M.default(),
                  e = D.compose(
                    O.decompose(a).map(function (t) {
                      return (
                        (t = s.layout(t, {
                          mode: r,
                          root: o,
                          dir: (n && n.direction) || k.Direction.Bottom,
                          wide: n && n.wide,
                          itemPadding: (n && n.itemPadding) || 0,
                          levelPadding: (n && n.levelPadding) || 0,
                          full: !0,
                          preserveLocation: !1,
                        })).setGlobalBox(),
                        t
                      );
                    }),
                    {
                      padding:
                        "number" == typeof n.graphPadding
                          ? (t && t.graphPadding) || n.graphPadding
                          : 200,
                    }
                  ),
                  t = e.getBox();
                e.translate({ x: -t[0][0], y: -t[1][0] }),
                  e.getNodes().forEach(function (t) {
                    var e = Math.floor(t.x - t.w / 2),
                      n = Math.floor(t.y - t.h / 2);
                    i.data.update(t.id, { x: e, y: n });
                  });
              }),
              (S.prototype.destructor = function () {
                this.events.clear(), this.unmount();
              }),
              (S.prototype._render = function (t) {
                if (this._doNotRepaint && t.node) return t.node;
                this._doNotRepaint = !0;
                var e = this._getContent(),
                  n = e.size,
                  i = e.svgContent,
                  r = e.htmlContent;
                this.events.fire(b.DiagramEvents.beforeRender, [n]);
                var o = n.x - n.left + 2 * this.config.margin.x,
                  a = n.y - n.top + 2 * this.config.margin.y,
                  s =
                    "org" === this.config.type
                      ? "dhx_org_chart"
                      : "dhx_free_diagram";
                (n.left -= this.config.margin.x),
                  (n.top -= this.config.margin.y);
                var l =
                    n.top + this.config.margin.y < 0
                      ? Math.abs(n.top)
                      : this.config.margin.y,
                  t =
                    n.left + this.config.margin.x < 0
                      ? Math.abs(n.left)
                      : this.config.margin.x,
                  e = null;
                !this.toolbar ||
                  ((u = this.selection.getId()) &&
                    (e = this.toolbar.render(
                      this.data.getItem(u),
                      c(c({}, n), { scale: this.config.scale })
                    )));
                var u = [];
                return (
                  this.config.$svg && (u = this.config.$svg(n)),
                  h.el(
                    ".dhx_diagram.dhx_widget",
                    c(c({}, this._htmlevents), { dhx_widget_id: this._uid }),
                    [
                      h.el(
                        "div.dhx_diagram__container",
                        {
                          class: s,
                          style: {
                            height: a * this.config.scale,
                            width: o * this.config.scale,
                          },
                        },
                        [
                          h.el(
                            ".dhx_wrapper",
                            {
                              style: {
                                transform: "scale(" + this.config.scale + ")",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transformOrigin: "top",
                                zIndex:
                                  "org" === this.config.type && this._active
                                    ? 1
                                    : 0,
                              },
                            },
                            [
                              h.el("div.dhx_diagram__scale-container", [
                                h.sv(
                                  "svg",
                                  {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: o,
                                    height: a,
                                    viewBox:
                                      n.left + " " + n.top + " " + o + " " + a,
                                  },
                                  [
                                    h.sv("defs", [
                                      h.sv(
                                        "filter",
                                        {
                                          x: 0,
                                          y: 0,
                                          width: 1,
                                          height: 1,
                                          id: "dhx_text_background",
                                        },
                                        [
                                          h.sv("feFlood", {
                                            "flood-color": "white",
                                          }),
                                          h.sv("feComposite", {
                                            in: "SourceGraphic",
                                          }),
                                        ]
                                      ),
                                    ]),
                                    h.sv(
                                      "g",
                                      {
                                        "shape-rendering":
                                          1 === this.config.scale &&
                                          "org" === this.config.type
                                            ? "crispedges"
                                            : "auto",
                                      },
                                      i
                                    ),
                                  ]
                                ),
                                h.el(
                                  ".dhx_shape-container",
                                  {
                                    style: {
                                      position: "absolute",
                                      top: l,
                                      left: t,
                                    },
                                  },
                                  r
                                ),
                              ]),
                            ]
                          ),
                          u,
                          e,
                        ]
                      ),
                    ]
                  )
                );
              }),
              (S.prototype._init_events = function () {
                var r = this;
                this._htmlevents = {
                  onscroll: function () {
                    r.events.fire(b.DiagramEvents.scroll, [r.getScrollState()]);
                  },
                  onmousedown: u.eventHandler(
                    function (t) {
                      return r.locate(t);
                    },
                    {
                      dhx_diagram_item: function (t, e) {
                        (r._active = !0),
                          r.events.fire(b.DiagramEvents.shapeMouseDown, [
                            e.id,
                            t,
                          ]);
                      },
                      dhx_diagram_flow_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeMouseDown, [
                          e.id,
                          t,
                        ]);
                      },
                      dhx_diagram_connector: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeMouseDown, [
                          e.id,
                          t,
                          r._getPoint(t.clientX, t.clientY),
                        ]);
                      },
                      dhx_diagram: function (t) {
                        var e = t.target,
                          n =
                            e.getAttribute &&
                            (e.getAttribute("class") || "").match(
                              /dhx_diagram\b/
                            ),
                          i = "svg" === e.tagName;
                        u.locateNodeByClassName(e, "dhx_popup_toolbar") ||
                          (!n && !i) ||
                          r.events.fire(b.DiagramEvents.emptyAreaMouseDown, [
                            t,
                          ]);
                      },
                    }
                  ),
                  onmouseout: u.eventHandler(
                    function (t) {
                      return r.locate(t);
                    },
                    {
                      dhx_selected: function () {
                        (r._active = !1), r.paint();
                      },
                    }
                  ),
                  onmouseover: u.eventHandler(
                    function (t) {
                      return r.locate(t);
                    },
                    {
                      dhx_selected: function () {
                        (r._active = !0), r.paint();
                      },
                      dhx_diagram_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeHover, [e.id, t]);
                      },
                      dhx_diagram_flow_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeHover, [e.id, t]);
                      },
                      dhx_diagram_connector: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeHover, [e.id, t]);
                      },
                    }
                  ),
                  onclick: u.eventHandler(
                    function (t) {
                      return r.locate(t);
                    },
                    {
                      dhx_expand_icon: function (t, e) {
                        return r.expandItem(e.id);
                      },
                      dhx_hide_icon: function (t, e) {
                        return r.collapseItem(e.id);
                      },
                      dhx_diagram_connector: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeClick, [e.id, t]);
                      },
                      dhx_diagram_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeClick, [e.id, t]),
                          !r.config.select ||
                            t.shiftKey ||
                            t.altKey ||
                            r.selection.add(e.id || e.config.id);
                      },
                      dhx_diagram_flow_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapeClick, [e.id, t]);
                      },
                      dhx_diagram_line: function (t, e) {
                        r.events.fire(b.DiagramEvents.lineClick, [e.id, t]);
                      },
                      dhx_diagram: function (t) {
                        var e = t.target,
                          n =
                            e.getAttribute &&
                            (e.getAttribute("class") || "").match(
                              /dhx_diagram\b/
                            ),
                          e = "svg" === e.tagName;
                        (n || e) &&
                          r.events.fire(b.DiagramEvents.emptyAreaClick, [t]);
                      },
                    }
                  ),
                  ondblclick: u.eventHandler(
                    function (t) {
                      return r.locate(t);
                    },
                    {
                      dhx_diagram_connector: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapedDblClick, [
                          e.id,
                          t,
                        ]);
                      },
                      dhx_diagram_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapedDblClick, [
                          e.id,
                          t,
                        ]);
                      },
                      dhx_diagram_flow_item: function (t, e) {
                        r.events.fire(b.DiagramEvents.shapedDblClick, [
                          e.id,
                          t,
                        ]);
                      },
                    }
                  ),
                };
              }),
              (S.prototype._set_defaults = function () {
                this.config = l.extend(
                  {
                    defaultShapeType: "card",
                    defaultLinkType: "line",
                    lineGap: 10,
                    scale: 1,
                    margin: { x: 40, y: 40, itemX: 40, itemY: 40 },
                    gridStep: 10,
                    defaults: {},
                    properties: {},
                    autoplacement: { mode: "direct", graphPadding: 200 },
                  },
                  this.config
                );
              }),
              (S.prototype._init_struct = function () {
                var n = this;
                (this.events = new s.EventSystem(this)),
                  (this.flowShapes = c({}, _.flowShapes)),
                  (this.data = new m.ShapesCollection(
                    {
                      init: function (t) {
                        var e =
                          "from" in t
                            ? n.config.defaultLinkType
                            : n.config.defaultShapeType;
                        return (
                          (t.type = t.type || e),
                          "org" !== n.config.type &&
                            t.from &&
                            (t.stroke = t.stroke || "#2196F3"),
                          (t.$shape = y.shapesFactory(t, {
                            defaults: n.config.defaults[t.type] || {},
                            properties: n.config.properties[t.type] || {},
                            shapes: n.flowShapes,
                          })),
                          t
                        );
                      },
                      update: function (t) {
                        t.$shape.config = t;
                      },
                      type: this.config.type,
                    },
                    this.events
                  )),
                  (this.selection = new v.Selection(
                    {},
                    this.data,
                    this.events
                  )),
                  (this.export = new f.Exporter("diagram", this.version, this)),
                  this.data.events.on(b.DataEvents.change, function () {
                    return n.paint();
                  }),
                  this.events.on(b.SelectionEvents.afterSelect, function () {
                    return n.paint();
                  });
              }),
              (S.prototype._getContent = function () {
                var e = this,
                  n = !1;
                "org" === this.config.type &&
                  (g.placeOrgonogram(this.data, this.config), (n = !0));
                var i = {
                    x: 0,
                    y: 0,
                    left: 0,
                    top: 0,
                    scale: this.config.scale,
                  },
                  r = [],
                  o = [];
                return (
                  this.data.mapVisible(function (t) {
                    t &&
                      (t.$shape.isConnector()
                        ? (n ||
                            p.nearestLinkPath(
                              t,
                              e.data.getItem(t.from),
                              e.data.getItem(t.to),
                              e.config
                            ),
                          r.push(t.$shape.render()))
                        : o.push(t.$shape.render()),
                      (t = t.$shape.getBox()).right > i.x && (i.x = t.right),
                      t.left < i.left && (i.left = t.left),
                      t.bottom > i.y && (i.y = t.bottom),
                      t.top < i.top && (i.top = t.top));
                  }),
                  { size: i, svgContent: r, htmlContent: o }
                );
              }),
              (S.prototype._getPoint = function (t, e) {
                var n = this.getRootView().node.el.getBoundingClientRect();
                return {
                  x: t - n.left - this.config.margin.x,
                  y: e - n.top - this.config.margin.y,
                };
              }),
              S);
          function S(t, e) {
            var n = a.call(this, t, e) || this;
            (n.version = "3.0.4"),
              n._set_defaults(),
              n._init_events(),
              n._init_struct(),
              n.config.toolbar &&
                (n.toolbar = new x.Toolbar(n.events, n.config.toolbar));
            e = h.create(
              {
                render: function (t) {
                  return n._render(t);
                },
              },
              n
            );
            return n.mount(t, e), n;
          }
          e.Diagram = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o,
            a = n(0),
            s = n(2),
            f = n(6),
            l = n(17),
            u = n(11),
            p = n(3),
            r =
              ((o = u.BaseShape),
              r(c, o),
              (c.prototype.getMetaInfo = function () {
                return this._getMetaInfoStructure(this.config);
              }),
              (c.prototype.render = function () {
                var t = this.config,
                  e = t.id,
                  n = t.angle,
                  i = t.width,
                  r = t.height,
                  t = this.getCoords(this.config);
                return a.el(
                  "div",
                  {
                    _key: e,
                    class: "dhx_diagram_flow_item " + this.getCss(),
                    dhx_id: e,
                    style: {
                      transform: "rotate(" + (n || 0) + "deg)",
                      zIndex: this.config.$selected ? 1 : 0,
                      position: "absolute",
                      height: r,
                      width: i,
                      top: t.y,
                      left: t.x,
                    },
                  },
                  [this._getCustomContent(), l.getCircleTpl(this.config)]
                );
              }),
              (c.prototype.setDefaults = function (e, n) {
                Object.keys(n).forEach(function (t) {
                  e[t] = e[t] || n[t];
                });
                var t = n.width ? parseFloat(n.width) : 140,
                  i = n.height ? parseFloat(n.height) : 90;
                return (
                  (e.width = e.width || t),
                  (e.height = e.height || i),
                  (e.x = e.x || 0),
                  (e.y = e.y || 0),
                  e
                );
              }),
              (c.prototype._getMetaInfoStructure = function (t) {
                return s.isEmptyObj(this._properties)
                  ? this._getBaseMetaInfoStructure(t)
                  : f.getMeta(this._properties);
              }),
              (c.prototype._getBaseMetaInfoStructure = function (t) {
                var e = t.text,
                  n = t.title,
                  i = t.img,
                  r = t.fill,
                  o = t.stroke,
                  a = t.strokeWidth,
                  s = t.textAlign,
                  l = t.lineHeight,
                  u = t.fontStyle,
                  c = t.textVerticalAlign,
                  h = t.fontSize,
                  d = [],
                  d = t.$expandColor
                    ? f.getMeta([
                        { type: "grid", label: p.default.gridStep },
                        { type: "position", label: p.default.position },
                        { type: "size", label: p.default.size },
                      ])
                    : f.getMeta([
                        { type: "grid", label: p.default.gridStep },
                        { type: "arrange", label: p.default.arrange },
                      ]);
                return (
                  r &&
                    d.push(
                      f.getMeta([{ type: "fill", label: p.default.fill }])[0]
                    ),
                  n &&
                    d.push(
                      f.getMeta([{ type: "title", label: p.default.title }])[0]
                    ),
                  e &&
                    d.push(
                      f.getMeta([{ type: "text", label: p.default.text }])[0]
                    ),
                  o &&
                    a &&
                    d.push(
                      f.getMeta([
                        { type: "strokeProps", label: p.default.stroke },
                      ])[0]
                    ),
                  s &&
                    l &&
                    u &&
                    c &&
                    h &&
                    d.push(
                      f.getMeta([
                        { type: "textProps", label: p.default.textProps },
                      ])[0]
                    ),
                  i &&
                    d.push(
                      f.getMeta([{ type: "img", label: p.default.image }])[0]
                    ),
                  d
                );
              }),
              (c.prototype._getCustomContent = function () {
                var t = this.config,
                  e = t.type,
                  n = t.width,
                  t = t.height,
                  e = this.shapes[e];
                if ("function" == typeof e)
                  return [
                    a.el(
                      "div",
                      {
                        class: "dhx_diagram_flow_shape dhx_item_shape ",
                        style: { width: n, height: t },
                      },
                      this._getShapeFromFunction(e)
                    ),
                  ];
              }),
              (c.prototype._getShapeFromFunction = function (t) {
                t = new DOMParser().parseFromString(t(this.config), "text/xml");
                return [a.jsonToVDOM(a.xmlToJson(t))];
              }),
              c);
          function c(t, e) {
            var n = o.call(this, t, e) || this;
            return (
              (n.config = t),
              (n.id = n.config.id),
              (n.shapes = e.shapes),
              (n._properties = e.properties),
              n
            );
          }
          e.DiagramCustomShape = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o,
            a = n(16),
            s = n(12),
            r =
              ((o = a.DataCollection),
              r(l, o),
              (l.prototype.getNearId = function (t) {
                t = this._pull[t];
                if (!t) return this._order.length ? this._order[0].id : "";
                for (var e = t; this._orgMode && e.$parent; )
                  if (!1 === (e = this._pull[this._pull[e.$parent].from]).open)
                    return e.id;
                return t.id;
              }),
              (l.prototype.mapVisible = function (i) {
                var r = this,
                  o = [];
                if (this._orgMode)
                  for (var t = this.getRoots(), e = 0; e < t.length; e++)
                    this._eachBranch(this.getItem(t[e]), i, o);
                else
                  this.map(function (t) {
                    if (!t.hidden) {
                      if (t.$shape.isConnector()) {
                        var e = r.getItem(t.from) || {},
                          n = r.getItem(t.to) || {};
                        if (e.hidden || n.hidden) return;
                      }
                      o.push(i(t));
                    }
                  });
                return o;
              }),
              (l.prototype.getRoots = function () {
                return this._roots;
              }),
              (l.prototype._removeNested = function (t) {
                var e = t.$kids;
                if (e)
                  for (var n = 0; n < e.length; n++)
                    this._orgMode &&
                      (this._removeNested(this.getItem(e[n][1])),
                      this._removeCore(e[n][1])),
                      this._removeCore(e[n][0]);
              }),
              (l.prototype._eachBranch = function (t, e, n) {
                if (!t.hidden && (n.push(e(t)), !1 !== t.open)) {
                  var i = t.$kids;
                  if (i)
                    for (var r = 0; r < i.length; r++) {
                      var o = this.getItem(i[r][1]);
                      o.hidden ||
                        (n.push(e(this.getItem(i[r][0]))),
                        this._eachBranch(o, e, n));
                    }
                }
              }),
              (l.prototype._parse_data = function (t) {
                for (var e = [], n = !1, i = 0; i < t.length; i++) {
                  var r = t[i];
                  r.parent && !n && e.push({ from: r.parent, to: r.id }),
                    r.from && (n = !0);
                }
                e.length && !n && (t = t.concat(e)),
                  o.prototype._parse_data.call(this, t);
              }),
              (l.prototype._mark_chains = function () {
                var e = this;
                this._roots = [];
                var n = {},
                  i = {};
                this.map(function (t) {
                  var e;
                  t.$shape.isConnector() &&
                    ((i[(e = t).to] = e.id),
                    (n[e.from] = n[e.from] || []).push([t.id, e.to]));
                }),
                  this.map(function (t) {
                    t.$shape.isConnector() ||
                      ((t.$parent = i[t.id]),
                      (t.$kids = n[t.id]),
                      t.$parent || e._roots.push(t.id));
                  });
              }),
              l);
          function l(t, e) {
            var i = o.call(this, t, e) || this;
            return (
              (i._roots = []),
              (i._orgMode = "org" === t.type),
              i.events.on(s.DataEvents.change, function (t, e, n) {
                "remove" === e &&
                  (i._removeNested(n), i._removeCore(n.$parent)),
                  "add" === e &&
                    n.parent &&
                    i._addCore({ from: n.parent, to: n.id }, -1),
                  i._mark_chains();
              }),
              i
            );
          }
          e.ShapesCollection = r;
        },
        ,
        ,
        function (t, e) {
          Object.values =
            Object.values ||
            function (e) {
              var t = Object.prototype.toString.call(e);
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              if (
                ~[
                  "[object String]",
                  "[object Object]",
                  "[object Array]",
                  "[object Function]",
                ].indexOf(t)
              ) {
                if (Object.keys)
                  return Object.keys(e).map(function (t) {
                    return e[t];
                  });
                var n,
                  i = [];
                for (n in e) e.hasOwnProperty(n) && i.push(e[n]);
                return i;
              }
              return [];
            };
        },
        function (t, e) {
          Array.prototype.includes ||
            Object.defineProperty(Array.prototype, "includes", {
              value: function (t, e) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var n = Object(this),
                  i = n.length >>> 0;
                if (0 == i) return !1;
                var r,
                  o,
                  e = 0 | e,
                  a = Math.max(0 <= e ? e : i - Math.abs(e), 0);
                for (; a < i; ) {
                  if (
                    (r = n[a]) === (o = t) ||
                    ("number" == typeof r &&
                      "number" == typeof o &&
                      isNaN(r) &&
                      isNaN(o))
                  )
                    return !0;
                  a++;
                }
                return !1;
              },
              configurable: !0,
              writable: !0,
            }),
            Array.prototype.find ||
              Object.defineProperty(Array.prototype, "find", {
                value: function (t) {
                  if (null == this)
                    throw new TypeError('"this" is null or not defined');
                  var e = Object(this),
                    n = e.length >>> 0;
                  if ("function" != typeof t)
                    throw new TypeError("predicate must be a function");
                  for (var i = arguments[1], r = 0; r < n; ) {
                    var o = e[r];
                    if (t.call(i, o, r, e)) return o;
                    r++;
                  }
                },
                configurable: !0,
                writable: !0,
              }),
            Array.prototype.findIndex ||
              (Array.prototype.findIndex = function (t) {
                if (null == this)
                  throw new TypeError(
                    "Array.prototype.findIndex called on null or undefined"
                  );
                if ("function" != typeof t)
                  throw new TypeError("predicate must be a function");
                for (
                  var e,
                    n = Object(this),
                    i = n.length >>> 0,
                    r = arguments[1],
                    o = 0;
                  o < i;
                  o++
                )
                  if (((e = n[o]), t.call(r, e, o, n))) return o;
                return -1;
              });
        },
        function (t, e) {
          String.prototype.includes ||
            (String.prototype.includes = function (t, e) {
              "use strict";
              return (
                "number" != typeof e && (e = 0),
                !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
              );
            }),
            String.prototype.startsWith ||
              Object.defineProperty(String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: function (t, e) {
                  return (e = e || 0), this.indexOf(t, e) === e;
                },
              }),
            String.prototype.padStart ||
              (String.prototype.padStart = function (t, e) {
                return (
                  (t >>= 0),
                  (e = String(e || " ")),
                  this.length > t
                    ? String(this)
                    : ((t -= this.length) > e.length &&
                        (e += e.repeat(t / e.length)),
                      e.slice(0, t) + String(this))
                );
              });
        },
        function (t, e) {
          var n;
          Element &&
            !Element.prototype.matches &&
            ((n = Element.prototype).matches =
              n.matchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector ||
              n.oMatchesSelector ||
              n.webkitMatchesSelector),
            "classList" in SVGElement.prototype ||
              Object.defineProperty(SVGElement.prototype, "classList", {
                get: function () {
                  var n = this;
                  return {
                    contains: function (t) {
                      return -1 !== n.className.baseVal.split(" ").indexOf(t);
                    },
                    add: function (t) {
                      return n.setAttribute(
                        "class",
                        n.getAttribute("class") + " " + t
                      );
                    },
                    remove: function (t) {
                      var e = n
                        .getAttribute("class")
                        .replace(
                          new RegExp("(\\s|^)".concat(t, "(\\s|$)"), "g"),
                          "$2"
                        );
                      n.classList.contains(t) && n.setAttribute("class", e);
                    },
                    toggle: function (t) {
                      this.contains(t) ? this.remove(t) : this.add(t);
                    },
                  };
                },
                configurable: !0,
              });
          var i = Function.bind.call(Function.call, Array.prototype.reduce),
            r = Function.bind.call(
              Function.call,
              Object.prototype.propertyIsEnumerable
            ),
            o = Function.bind.call(Function.call, Array.prototype.concat);
          Object.entries ||
            (Object.entries = function (n) {
              return i(
                Object.keys(n),
                function (t, e) {
                  return o(
                    t,
                    "string" == typeof e && r(n, e) ? [[e, n[e]]] : []
                  );
                },
                []
              );
            });
        },
        function (t, e, n) {
          "use strict";
          n.r(e);
          var i,
            r = n(15),
            e = n(28),
            o = [
              "dhx_638523928_message",
              "undefined",
              "Please contact us at <a style='color: white;' href='mailto:contact@dhtmlx.com?subject=DHTMLX Licensing - Trial End' target='_blank'>contact@dhtmlx.com</a> or visit ",
              " target='_blank'>dhtmlx.com</a> in order to obtain a proper license.",
              "Your evaluation period for DHTMLX has expired.",
              "now",
              "BUILD_TIMESTAMP",
              "join",
              "<a style='color: white;' href='https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=popup&utm_campaign=second_month#suite'",
            ];
          (i = o),
            (function (t) {
              for (; --t; ) i.push(i.shift());
            })(150);
          function a(t, e) {
            return o[(t -= 374)];
          }
          setTimeout(function () {
            var t,
              e,
              n = a,
              i = [n(382), n(380), n(377) + n(381)][n(376)]("<br>");
            typeof n(375) !== n(379) &&
              setInterval(function () {
                var t,
                  e = n;
                (t = n),
                  2592e6 < Date[t(374)]() - t(375) &&
                    Object(r.message)({
                      text: i,
                      icon: "dxi-close",
                      css: e(378),
                    });
              }, ((t = 6e4),
              (e = 12e4),
              Math.floor(Math.random() * (e - t + 1)) + t));
          }, 1);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(1),
            a = n(18),
            s = new WeakMap(),
            l = new Map();
          function u(t, e) {
            var n = document.createElement("div");
            return (
              n.setAttribute("data-position", e),
              (n.className =
                "dhx_message-container dhx_message-container--" +
                e +
                (t === document.body ? " dhx_message-container--in-body" : "")),
              n
            );
          }
          function c(t, e) {
            e && clearTimeout(s.get(t));
            var n = t.parentNode,
              i = n.getAttribute("data-position"),
              r = n.parentNode,
              e = l.get(r);
            e &&
              (!(e = e[i]) ||
                (-1 !== (e = (i = e.stack).indexOf(t)) &&
                  (n.removeChild(t),
                  i.splice(e, 1),
                  0 === i.length && r.removeChild(n))));
          }
          e.message = function (t) {
            "string" == typeof t && (t = { text: t }),
              (t.position = t.position || a.MessageContainerPosition.topRight);
            var e = document.createElement("div");
            (e.className = "dhx_widget dhx_message " + (t.css || "")),
              t.html
                ? (e.innerHTML = t.html)
                : (e.innerHTML =
                    '<span class="dhx_message__text">' +
                    t.text +
                    "</span>\n\t\t" +
                    (t.icon
                      ? '<span class="dhx_message__icon dxi ' +
                        t.icon +
                        '"></span>'
                      : ""));
            var n = t.node ? o.toNode(t.node) : document.body;
            "static" === getComputedStyle(n).position &&
              (n.style.position = "relative"),
              (r = l.get(n))
                ? r[t.position] ||
                  (r[t.position] = { stack: [], container: u(n, t.position) })
                : l.set(
                    n,
                    (((i = {})[t.position] = {
                      stack: [],
                      container: u(n, t.position),
                    }),
                    i)
                  );
            var i = (r = l.get(n)[t.position]).stack,
              r = r.container;
            0 === i.length && n.appendChild(r),
              i.push(e),
              r.appendChild(e),
              t.expire &&
                ((t = setTimeout(function () {
                  return c(e);
                }, t.expire)),
                s.set(e, t)),
              (e.onclick = function () {
                return c(e, !0);
              });
          };
        },
        function (t, n, i) {
          "use strict";
          (function (t) {
            Object.defineProperty(n, "__esModule", { value: !0 });
            var e = i(26),
              o = i(27);
            n.alert = function (n) {
              var i =
                  n.buttons && n.buttons[0] ? n.buttons[0] : e.default.apply,
                r = o.blockScreen(n.blockerCss);
              return new t(function (t) {
                var e = document.createElement("div");
                (e.className = "dhx_widget dhx_alert " + (n.css || "")),
                  (e.innerHTML =
                    "\n\t\t\t" +
                    (n.header
                      ? '<div class="dhx_alert__header"> ' +
                        n.header +
                        " </div>"
                      : "") +
                    "\n\t\t\t" +
                    (n.text
                      ? '<div class="dhx_alert__content">' + n.text + "</div>"
                      : "") +
                    '\n\t\t\t<div class="dhx_alert__footer ' +
                    (n.buttonsAlignment
                      ? "dhx_alert__footer--" + n.buttonsAlignment
                      : "") +
                    '">\n\t\t\t\t<button class="dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' +
                    i +
                    "</button>\n\t\t\t</div>"),
                  document.body.appendChild(e),
                  e.querySelector(".dhx_alert__apply-button").focus(),
                  e
                    .querySelector("button")
                    .addEventListener("click", function () {
                      r(), document.body.removeChild(e), t(!0);
                    });
              });
            };
          }.call(this, i(7)));
        },
        function (t, r, o) {
          (function (t) {
            var e =
                (void 0 !== t && t) ||
                ("undefined" != typeof self && self) ||
                window,
              n = Function.prototype.apply;
            function i(t, e) {
              (this._id = t), (this._clearFn = e);
            }
            (r.setTimeout = function () {
              return new i(n.call(setTimeout, e, arguments), clearTimeout);
            }),
              (r.setInterval = function () {
                return new i(n.call(setInterval, e, arguments), clearInterval);
              }),
              (r.clearTimeout = r.clearInterval = function (t) {
                t && t.close();
              }),
              (i.prototype.unref = i.prototype.ref = function () {}),
              (i.prototype.close = function () {
                this._clearFn.call(e, this._id);
              }),
              (r.enroll = function (t, e) {
                clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
              }),
              (r.unenroll = function (t) {
                clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
              }),
              (r._unrefActive = r.active = function (t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                0 <= e &&
                  (t._idleTimeoutId = setTimeout(function () {
                    t._onTimeout && t._onTimeout();
                  }, e));
              }),
              o(53),
              (r.setImmediate =
                ("undefined" != typeof self && self.setImmediate) ||
                (void 0 !== t && t.setImmediate) ||
                (this && this.setImmediate)),
              (r.clearImmediate =
                ("undefined" != typeof self && self.clearImmediate) ||
                (void 0 !== t && t.clearImmediate) ||
                (this && this.clearImmediate));
          }.call(this, o(19)));
        },
        function (t, e, n) {
          (function (t, p) {
            !(function (n, i) {
              "use strict";
              var r, o, a, s, l, u, e, c, t;
              function h(t) {
                delete o[t];
              }
              function d(t) {
                if (a) setTimeout(d, 0, t);
                else {
                  var e = o[t];
                  if (e) {
                    a = !0;
                    try {
                      !(function (t) {
                        var e = t.callback,
                          n = t.args;
                        switch (n.length) {
                          case 0:
                            e();
                            break;
                          case 1:
                            e(n[0]);
                            break;
                          case 2:
                            e(n[0], n[1]);
                            break;
                          case 3:
                            e(n[0], n[1], n[2]);
                            break;
                          default:
                            e.apply(i, n);
                        }
                      })(e);
                    } finally {
                      h(t), (a = !1);
                    }
                  }
                }
              }
              function f(t) {
                t.source === n &&
                  "string" == typeof t.data &&
                  0 === t.data.indexOf(c) &&
                  d(+t.data.slice(c.length));
              }
              n.setImmediate ||
                ((r = 1),
                (a = !(o = {})),
                (s = n.document),
                (t =
                  (t = Object.getPrototypeOf && Object.getPrototypeOf(n)) &&
                  t.setTimeout
                    ? t
                    : n),
                (l =
                  "[object process]" === {}.toString.call(n.process)
                    ? function (t) {
                        p.nextTick(function () {
                          d(t);
                        });
                      }
                    : (function () {
                        if (n.postMessage && !n.importScripts) {
                          var t = !0,
                            e = n.onmessage;
                          return (
                            (n.onmessage = function () {
                              t = !1;
                            }),
                            n.postMessage("", "*"),
                            (n.onmessage = e),
                            t
                          );
                        }
                      })()
                    ? ((c = "setImmediate$" + Math.random() + "$"),
                      n.addEventListener
                        ? n.addEventListener("message", f, !1)
                        : n.attachEvent("onmessage", f),
                      function (t) {
                        n.postMessage(c + t, "*");
                      })
                    : n.MessageChannel
                    ? (((e = new MessageChannel()).port1.onmessage = function (
                        t
                      ) {
                        d(t.data);
                      }),
                      function (t) {
                        e.port2.postMessage(t);
                      })
                    : s && "onreadystatechange" in s.createElement("script")
                    ? ((u = s.documentElement),
                      function (t) {
                        var e = s.createElement("script");
                        (e.onreadystatechange = function () {
                          d(t),
                            (e.onreadystatechange = null),
                            u.removeChild(e),
                            (e = null);
                        }),
                          u.appendChild(e);
                      })
                    : function (t) {
                        setTimeout(d, 0, t);
                      }),
                (t.setImmediate = function (t) {
                  "function" != typeof t && (t = new Function("" + t));
                  for (
                    var e = new Array(arguments.length - 1), n = 0;
                    n < e.length;
                    n++
                  )
                    e[n] = arguments[n + 1];
                  return (t = { callback: t, args: e }), (o[r] = t), l(r), r++;
                }),
                (t.clearImmediate = h));
            })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
          }.call(this, n(19), n(54)));
        },
        function (t, e) {
          var n,
            i,
            t = (t.exports = {});
          function r() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === r || !n) && setTimeout)
              return (n = setTimeout), setTimeout(e, 0);
            try {
              return n(e, 0);
            } catch (t) {
              try {
                return n.call(null, e, 0);
              } catch (t) {
                return n.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              n = "function" == typeof setTimeout ? setTimeout : r;
            } catch (t) {
              n = r;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (t) {
              i = o;
            }
          })();
          var s,
            l = [],
            u = !1,
            c = -1;
          function h() {
            u &&
              s &&
              ((u = !1),
              s.length ? (l = s.concat(l)) : (c = -1),
              l.length && d());
          }
          function d() {
            if (!u) {
              var t = a(h);
              u = !0;
              for (var e = l.length; e; ) {
                for (s = l, l = []; ++c < e; ) s && s[c].run();
                (c = -1), (e = l.length);
              }
              (s = null),
                (u = !1),
                (function (e) {
                  if (i === clearTimeout) return clearTimeout(e);
                  if ((i === o || !i) && clearTimeout)
                    return (i = clearTimeout), clearTimeout(e);
                  try {
                    i(e);
                  } catch (t) {
                    try {
                      return i.call(null, e);
                    } catch (t) {
                      return i.call(this, e);
                    }
                  }
                })(t);
            }
          }
          function f(t, e) {
            (this.fun = t), (this.array = e);
          }
          function p() {}
          (t.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            l.push(new f(t, e)), 1 !== l.length || u || a(d);
          }),
            (f.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (t.title = "browser"),
            (t.browser = !0),
            (t.env = {}),
            (t.argv = []),
            (t.version = ""),
            (t.versions = {}),
            (t.on = p),
            (t.addListener = p),
            (t.once = p),
            (t.off = p),
            (t.removeListener = p),
            (t.removeAllListeners = p),
            (t.emit = p),
            (t.prependListener = p),
            (t.prependOnceListener = p),
            (t.listeners = function (t) {
              return [];
            }),
            (t.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (t.cwd = function () {
              return "/";
            }),
            (t.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            }),
            (t.umask = function () {
              return 0;
            });
        },
        function (t, r, o) {
          "use strict";
          (function (e) {
            Object.defineProperty(r, "__esModule", { value: !0 });
            var n = o(26),
              i = o(27);
            r.confirm = function (t) {
              t.buttonsAlignment = t.buttonsAlignment || "right";
              var a =
                  t.buttons && t.buttons[1] ? t.buttons[1] : n.default.apply,
                s = t.buttons && t.buttons[0] ? t.buttons[0] : n.default.reject,
                l = i.blockScreen(t.blockerCss);
              return new e(function (e) {
                function n(t) {
                  l(),
                    i.removeEventListener("click", r),
                    i.removeEventListener("keydown", o),
                    document.body.removeChild(i),
                    e(t);
                }
                var i = document.createElement("div"),
                  r = function (t) {
                    "BUTTON" === t.target.tagName &&
                      n(t.target.classList.contains("dhx_alert__confirm-aply"));
                  },
                  o = function (t) {
                    ("Escape" !== t.key && "Esc" !== t.key) ||
                      (i.querySelector(".dhx_alert__confirm-aply").focus(),
                      n(
                        t.target.classList.contains("dhx_alert__confirm-reject")
                      ));
                  };
                (i.className =
                  "dhx_widget dhx_alert dhx_alert--confirm" +
                  (t.css ? " " + t.css : "")),
                  (i.innerHTML =
                    "\n\t\t" +
                    (t.header
                      ? '<div class="dhx_alert__header"> ' +
                        t.header +
                        " </div>"
                      : "") +
                    "\n\t\t" +
                    (t.text
                      ? '<div class="dhx_alert__content">' + t.text + "</div>"
                      : "") +
                    '\n\t\t\t<div class="dhx_alert__footer ' +
                    (t.buttonsAlignment
                      ? "dhx_alert__footer--" + t.buttonsAlignment
                      : "") +
                    '">\n\t\t\t\t<button class="dhx_alert__confirm-reject dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium">' +
                    s +
                    '</button>\n\t\t\t\t<button class="dhx_alert__confirm-aply dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' +
                    a +
                    "</button>\n\t\t\t</div>"),
                  document.body.appendChild(i),
                  i.querySelector(".dhx_alert__confirm-aply").focus(),
                  i.addEventListener("click", r),
                  i.addEventListener("keydown", o);
              });
            };
          }.call(this, o(7)));
        },
        function (t, e, n) {
          "use strict";
          n.r(e);
          var i,
            a = n(15),
            e = n(28),
            r = [
              "contact@dhtmlx.com</a> or visit <a style='color: #0288d1;text-decoration: unset;' href='https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=",
              "BUILD_TIMESTAMP",
              "https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=popup&utm_campaign=second_month#suite",
              "random",
              "popup&utm_campaign=second_month#suite' target='_blank'>dhtmlx.com</a> in order to obtain a proper license.",
              "<svg class='dhx_alert__header--icon' xmlns='http://www.w3.org/2000/sv' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 24 24'><path d='M11,15H13V17H",
              "now",
              "right",
              "floor",
              "open",
              "_blank",
              "Please contact us at <a style='color: #0288d1;text-decoration: unset;' href='mailto:contact@dhtmlx.com?subject=DHTMLX Licensing - Trial End' target='_blank'>",
              "dhx_547239261_alert",
              "16.42 16.42,20 12,20Z'></path></svg><div class='dhx_alert__header--text'>Your evaluation period for DHTMLX has expired</div>",
            ];
          (i = r),
            (function (t) {
              for (; --t; ) i.push(i.shift());
            })(148);
          function s(t, e) {
            return r[(t -= 257)];
          }
          setTimeout(function () {
            var t,
              e,
              n,
              i = s,
              r =
                i(269) +
                "11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20," +
                i(263),
              o = i(261) + i(264) + i(268);
            void 0 !== i(265) &&
              setInterval(function () {
                var t,
                  e = i;
                (t = i),
                  5184e6 < Date[t(270)]() - t(265) &&
                    Object(a.alert)({
                      header: r,
                      text: o,
                      buttonsAlignment: e(257),
                      buttons: ["check licensing"],
                      css: e(262),
                    }).then(function () {
                      var t = e;
                      window[t(259)](t(266), t(260));
                    });
              }, ((t = 6e4),
              (e = 12e4),
              (n = i),
              Math[n(258)](Math[n(267)]() * (e - t + 1)) + t));
          }, 1);
        },
        function (t, e) {
          var n,
            i = ["BUILD_TIMESTAMP", "random", "undefined", "floor", "now"];
          (n = i),
            (function (t) {
              for (; --t; ) n.push(n.shift());
            })(179);
          function r(t, e) {
            return i[(t -= 168)];
          }
          setTimeout(function () {
            var t,
              e,
              n,
              i = r;
            typeof i(170) !== i(172) &&
              setInterval(function () {
                var t;
                (t = i),
                  7776e6 < Date[t(169)]() - t(170) &&
                    alert(
                      "Your evaluation period for DHTMLX has expired.\nPlease contact us at contact@dhtmlx.com or visit dhtmlx.com in order to obtain a proper license."
                    );
              }, ((t = 6e4),
              (e = 12e4),
              (n = i),
              Math[n(168)](Math[n(171)]() * (e - t + 1)) + t));
          }, 1);
        },
        function (t, e, n) {
          /**
           * Copyright (c) 2017, Leon Sorokin
           * All rights reserved. (MIT Licensed)
           *
           * domvm.js (DOM ViewModel)
           * A thin, fast, dependency-free vdom view layer
           * @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
           */
          t.exports = (function () {
            "use strict";
            var S = 1,
              l = 2,
              C = 3,
              E = 4,
              P = 5,
              t = typeof window !== "undefined",
              e,
              o = (t ? window : {}).requestAnimationFrame,
              u = {};
            function n() {}
            var p = Array.isArray;
            function c(t) {
              return t != null;
            }
            function a(t) {
              return t != null && t.constructor === Object;
            }
            function r(t, e, n, i) {
              t.splice.apply(t, [n, i].concat(e));
            }
            function s(t) {
              var e = typeof t;
              return e === "string" || e === "number";
            }
            function h(t) {
              return typeof t === "function";
            }
            function d(t) {
              return typeof t === "object" && h(t.then);
            }
            function f(t) {
              var e = arguments;
              for (var n = 1; n < e.length; n++)
                for (var i in e[n]) t[i] = e[n][i];
              return t;
            }
            function g(t, e, n) {
              var i;
              while ((i = e.shift()))
                if (e.length === 0) t[i] = n;
                else t[i] = t = t[i] || {};
            }
            function v(t, e) {
              var n = [];
              for (var i = e; i < t.length; i++) n.push(t[i]);
              return n;
            }
            function y(t, e) {
              for (var n in t) if (t[n] !== e[n]) return false;
              return true;
            }
            function _(t, e) {
              var n = t.length;
              if (e.length !== n) return false;
              for (var i = 0; i < n; i++) if (t[i] !== e[i]) return false;
              return true;
            }
            function m(t) {
              if (!o) return t;
              var e, n, i;
              function r() {
                e = 0;
                t.apply(n, i);
              }
              return function () {
                n = this;
                i = arguments;
                if (!e) e = o(r);
              };
            }
            function x(t, e, n) {
              return function () {
                return t.apply(n, e);
              };
            }
            function b(t) {
              var e = t.slice();
              var n = [];
              n.push(0);
              var i;
              var r;
              for (var o = 0, a = t.length; o < a; ++o) {
                var s = n[n.length - 1];
                if (t[s] < t[o]) {
                  e[o] = s;
                  n.push(o);
                  continue;
                }
                i = 0;
                r = n.length - 1;
                while (i < r) {
                  var l = ((i + r) / 2) | 0;
                  if (t[n[l]] < t[o]) i = l + 1;
                  else r = l;
                }
                if (t[o] < t[n[i]]) {
                  if (i > 0) e[o] = n[i - 1];
                  n[i] = o;
                }
              }
              i = n.length;
              r = n[i - 1];
              while (i-- > 0) {
                n[i] = r;
                r = e[r];
              }
              return n;
            }
            function w(t, e) {
              var n = 0;
              var i = e.length - 1;
              var r;
              var o = i <= 2147483647 ? true : false;
              if (o)
                while (n <= i) {
                  r = (n + i) >> 1;
                  if (e[r] === t) return r;
                  else if (e[r] < t) n = r + 1;
                  else i = r - 1;
                }
              else
                while (n <= i) {
                  r = Math.floor((n + i) / 2);
                  if (e[r] === t) return r;
                  else if (e[r] < t) n = r + 1;
                  else i = r - 1;
                }
              return n == e.length ? null : n;
            }
            function k(t) {
              return t[0] === "o" && t[1] === "n";
            }
            function M(t) {
              return t[0] === "_";
            }
            function D(t) {
              return t === "style";
            }
            function O(t) {
              t && t.el && t.el.offsetHeight;
            }
            function T(t) {
              return t.node != null && t.node.el != null;
            }
            function j(t, e) {
              switch (e) {
                case "value":
                case "checked":
                case "selected":
                  return true;
              }
              return false;
            }
            function I(t) {
              t = t || u;
              while (t.vm == null && t.parent) t = t.parent;
              return t.vm;
            }
            function L() {}
            var i = (L.prototype = {
              constructor: L,
              type: null,
              vm: null,
              key: null,
              ref: null,
              data: null,
              hooks: null,
              ns: null,
              el: null,
              tag: null,
              attrs: null,
              body: null,
              flags: 0,
              _class: null,
              _diff: null,
              _dead: false,
              _lis: false,
              idx: null,
              parent: null,
            });
            function A(t) {
              var e = new L();
              e.type = l;
              e.body = t;
              return e;
            }
            var N = {},
              R = /\[(\w+)(?:=(\w+))?\]/g;
            function H(t) {
              {
                var e = N[t];
                if (e == null) {
                  var n, i, r, o;
                  N[t] = e = {
                    tag: (n = t.match(/^[-\w]+/)) ? n[0] : "div",
                    id: (i = t.match(/#([-\w]+)/)) ? i[1] : null,
                    class: (r = t.match(/\.([-\w.]+)/))
                      ? r[1].replace(/\./g, " ")
                      : null,
                    attrs: null,
                  };
                  while ((o = R.exec(t))) {
                    if (e.attrs == null) e.attrs = {};
                    e.attrs[o[1]] = o[2] || "";
                  }
                }
                return e;
              }
            }
            var z = 1,
              F = 2,
              B = 4,
              W = 8;
            function $(t, e, n, i) {
              var r = new L();
              r.type = S;
              if (c(i)) r.flags = i;
              r.attrs = e;
              var o = H(t);
              r.tag = o.tag;
              if (o.id || o.class || o.attrs) {
                var a = r.attrs || {};
                if (o.id && !c(a.id)) a.id = o.id;
                if (o.class) {
                  r._class = o.class;
                  a.class = o.class + (c(a.class) ? " " + a.class : "");
                }
                if (o.attrs)
                  for (var s in o.attrs) if (!c(a[s])) a[s] = o.attrs[s];
                r.attrs = a;
              }
              var l = r.attrs;
              if (c(l)) {
                if (c(l._key)) r.key = l._key;
                if (c(l._ref)) r.ref = l._ref;
                if (c(l._hooks)) r.hooks = l._hooks;
                if (c(l._data)) r.data = l._data;
                if (c(l._flags)) r.flags = l._flags;
                if (!c(r.key))
                  if (c(r.ref)) r.key = r.ref;
                  else if (c(l.id)) r.key = l.id;
                  else if (c(l.name))
                    r.key =
                      l.name +
                      (l.type === "radio" || l.type === "checkbox"
                        ? l.value
                        : "");
              }
              if (n != null) r.body = n;
              return r;
            }
            function V(t, e, n) {
              var i = ["refs"].concat(e.split("."));
              g(t, i, n);
            }
            function U(t) {
              while ((t = t.parent)) t.flags |= z;
            }
            function X(t, e, n, i) {
              if (t.type === P || t.type === E) return;
              t.parent = e;
              t.idx = n;
              t.vm = i;
              if (t.ref != null) V(I(t), t.ref, t);
              var r = t.hooks,
                o = i && i.hooks;
              if (
                (r && (r.willRemove || r.didRemove)) ||
                (o && (o.willUnmount || o.didUnmount))
              )
                U(t);
              if (p(t.body)) G(t);
              else;
            }
            function G(t) {
              var e = t.body;
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                if (i === false || i == null) e.splice(n--, 1);
                else if (p(i)) r(e, i, n--, 1);
                else {
                  if (i.type == null) e[n] = i = A("" + i);
                  if (i.type === l)
                    if (i.body == null || i.body === "") e.splice(n--, 1);
                    else if (n > 0 && e[n - 1].type === l) {
                      e[n - 1].body += i.body;
                      e.splice(n--, 1);
                    } else X(i, t, n, null);
                  else X(i, t, n, null);
                }
              }
            }
            var Y = {
              animationIterationCount: true,
              boxFlex: true,
              boxFlexGroup: true,
              boxOrdinalGroup: true,
              columnCount: true,
              flex: true,
              flexGrow: true,
              flexPositive: true,
              flexShrink: true,
              flexNegative: true,
              flexOrder: true,
              gridRow: true,
              gridColumn: true,
              order: true,
              lineClamp: true,
              borderImageOutset: true,
              borderImageSlice: true,
              borderImageWidth: true,
              fontWeight: true,
              lineHeight: true,
              opacity: true,
              orphans: true,
              tabSize: true,
              widows: true,
              zIndex: true,
              zoom: true,
              fillOpacity: true,
              floodOpacity: true,
              stopOpacity: true,
              strokeDasharray: true,
              strokeDashoffset: true,
              strokeMiterlimit: true,
              strokeOpacity: true,
              strokeWidth: true,
            };
            function Z(t, e) {
              return !isNaN(e) && !Y[t] ? e + "px" : e;
            }
            function J(t, e) {
              var n = (t.attrs || u).style;
              var i = e ? (e.attrs || u).style : null;
              if (n == null || s(n)) t.el.style.cssText = n;
              else {
                for (var r in n) {
                  var o = n[r];
                  if (i == null || (o != null && o !== i[r]))
                    t.el.style[r] = Z(r, o);
                }
                if (i) for (var a in i) if (n[a] == null) t.el.style[a] = "";
              }
            }
            var q = [];
            function Q(t, e, n, i, r) {
              if (t != null) {
                var o = n.hooks[e];
                if (o)
                  if (e[0] === "d" && e[1] === "i" && e[2] === "d")
                    r ? O(n.parent) && o(n, i) : q.push([o, n, i]);
                  else return o(n, i);
              }
            }
            function K(t) {
              if (q.length) {
                O(t.node);
                var e;
                while ((e = q.shift())) e[0](e[1], e[2]);
              }
            }
            var tt = t ? document : null;
            function et(t) {
              while (t._node == null) t = t.parentNode;
              return t._node;
            }
            function nt(t, e) {
              if (e != null) return tt.createElementNS(e, t);
              return tt.createElement(t);
            }
            function it(t) {
              return tt.createTextNode(t);
            }
            function rt(t) {
              return tt.createComment(t);
            }
            function ot(t) {
              return t.nextSibling;
            }
            function at(t) {
              return t.previousSibling;
            }
            function st(t) {
              var e = t.vm;
              var n = e != null && Q(e.hooks, "willUnmount", e, e.data);
              var i = Q(t.hooks, "willRemove", t);
              if ((t.flags & z) === z && p(t.body))
                for (var r = 0; r < t.body.length; r++) st(t.body[r]);
              return n || i;
            }
            function lt(t, e, n) {
              var i = e._node,
                r = i.vm;
              if (p(i.body))
                if ((i.flags & z) === z)
                  for (var o = 0; o < i.body.length; o++) lt(e, i.body[o].el);
                else ct(i);
              delete e._node;
              t.removeChild(e);
              Q(i.hooks, "didRemove", i, null, n);
              if (r != null) {
                Q(r.hooks, "didUnmount", r, r.data, n);
                r.node = null;
              }
            }
            function ut(t, e) {
              var n = e._node;
              if (n._dead) return;
              var i = st(n);
              if (i != null && d(i)) {
                n._dead = true;
                i.then(x(lt, [t, e, true]));
              } else lt(t, e);
            }
            function ct(t) {
              var e = t.body;
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                delete i.el._node;
                if (i.vm != null) i.vm.node = null;
                if (p(i.body)) ct(i);
              }
            }
            function ht(t) {
              var e = t.el;
              if ((t.flags & z) === 0) {
                p(t.body) && ct(t);
                e.textContent = null;
              } else {
                var n = e.firstChild;
                do {
                  var i = ot(n);
                  ut(e, n);
                } while ((n = i));
              }
            }
            function dt(t, e, n) {
              var i = e._node,
                r = e.parentNode != null;
              var o = e === n || !r ? i.vm : null;
              if (o != null) Q(o.hooks, "willMount", o, o.data);
              Q(i.hooks, r ? "willReinsert" : "willInsert", i);
              t.insertBefore(e, n);
              Q(i.hooks, r ? "didReinsert" : "didInsert", i);
              if (o != null) Q(o.hooks, "didMount", o, o.data);
            }
            function ft(t, e, n) {
              dt(t, e, n ? ot(n) : null);
            }
            var pt = {};
            function gt(t) {
              f(pt, t);
            }
            function vt(t) {
              var e = this,
                n = e,
                i = v(arguments, 1).concat(n, n.data);
              do {
                var r = e.onemit,
                  r = r ? r[t] : null;
                if (r) {
                  r.apply(e, i);
                  break;
                }
              } while ((e = e.parent()));
              if (pt[t]) pt[t].apply(e, i);
            }
            var yt = n;
            function _t(t) {
              yt = t.onevent || yt;
              if (t.onemit) gt(t.onemit);
            }
            function mt(t, e, n) {
              t[e] = n;
            }
            function xt(t, e, n, i, r) {
              var o = t.apply(r, e.concat([n, i, r, r.data]));
              r.onevent(n, i, r, r.data, e);
              yt.call(null, n, i, r, r.data, e);
              if (o === false) {
                n.preventDefault();
                n.stopPropagation();
              }
            }
            function bt(t) {
              var e = et(t.target);
              var n = I(e);
              var i = t.currentTarget._node.attrs["on" + t.type],
                r,
                o;
              if (p(i)) {
                r = i[0];
                o = i.slice(1);
                xt(r, o, t, e, n);
              } else
                for (var a in i)
                  if (t.target.matches(a)) {
                    var s = i[a];
                    if (p(s)) {
                      r = s[0];
                      o = s.slice(1);
                    } else {
                      r = s;
                      o = [];
                    }
                    xt(r, o, t, e, n);
                  }
            }
            function wt(t, e, n, i) {
              if (n === i) return;
              var r = t.el;
              if (n == null || h(n)) mt(r, e, n);
              else if (i == null) mt(r, e, bt);
            }
            function kt(t, e, n) {
              if (e[0] === ".") {
                e = e.substr(1);
                n = true;
              }
              if (n) t.el[e] = "";
              else t.el.removeAttribute(e);
            }
            function Mt(t, e, n, i, r) {
              var o = t.el;
              if (n == null) !r && kt(t, e, false);
              else if (t.ns != null) o.setAttribute(e, n);
              else if (e === "class") o.className = n;
              else if (e === "id" || typeof n === "boolean" || i) o[e] = n;
              else if (e[0] === ".") o[e.substr(1)] = n;
              else o.setAttribute(e, n);
            }
            function Dt(t, e, n) {
              var i = t.attrs || u;
              var r = e.attrs || u;
              if (i === r);
              else {
                for (var o in i) {
                  var a = i[o];
                  var s = j(t.tag, o);
                  var l = s ? t.el[o] : r[o];
                  if (a === l);
                  else if (D(o)) J(t, e);
                  else if (M(o));
                  else if (k(o)) wt(t, o, a, l);
                  else Mt(t, o, a, s, n);
                }
                for (var o in r)
                  !(o in i) && !M(o) && kt(t, o, j(t.tag, o) || k(o));
              }
            }
            function Ot(t, e, n, i) {
              if (t.type === E) {
                e = t.data;
                n = t.key;
                i = t.opts;
                t = t.view;
              }
              return new Xt(t, e, n, i);
            }
            function St(t) {
              for (var e = 0; e < t.body.length; e++) {
                var n = t.body[e];
                var i = n.type;
                if (i <= C) dt(t.el, Ct(n));
                else if (i === E) {
                  var r = Ot(n.view, n.data, n.key, n.opts)._redraw(
                    t,
                    e,
                    false
                  );
                  i = r.node.type;
                  dt(t.el, Ct(r.node));
                } else if (i === P) {
                  var r = n.vm;
                  r._redraw(t, e);
                  i = r.node.type;
                  dt(t.el, r.node.el);
                }
              }
            }
            function Ct(t, e) {
              if (t.el == null)
                if (t.type === S) {
                  t.el = e || nt(t.tag, t.ns);
                  if (t.attrs != null) Dt(t, u, true);
                  if ((t.flags & W) === W) t.body.body(t);
                  if (p(t.body)) St(t);
                  else if (t.body != null && t.body !== "")
                    t.el.textContent = t.body;
                } else if (t.type === l) t.el = e || it(t.body);
                else if (t.type === C) t.el = e || rt(t.body);
              t.el._node = t;
              return t.el;
            }
            function Et(t, e) {
              return e[t.idx + 1];
            }
            function Pt(t, e) {
              return e[t.idx - 1];
            }
            function Tt(t) {
              return t.parent;
            }
            window.lisMove = At;
            var jt = 1,
              It = 2;
            function Lt(l, u, c, h, d, f, p, g) {
              return function (t, e, n, i, r, o) {
                var a, s;
                if (i[h] != null) {
                  if ((a = i[h]._node) == null) {
                    i[h] = l(i[h]);
                    return;
                  }
                  if (Tt(a) !== t) {
                    s = l(i[h]);
                    a.vm != null ? a.vm.unmount(true) : ut(e, i[h]);
                    i[h] = s;
                    return;
                  }
                }
                if (i[d] == r) return It;
                else if (i[d].el == null) {
                  c(e, Ct(i[d]), i[h]);
                  i[d] = u(i[d], n);
                } else if (i[d].el === i[h]) {
                  i[d] = u(i[d], n);
                  i[h] = l(i[h]);
                } else if (!o && a === i[p]) {
                  s = i[h];
                  i[h] = l(s);
                  g(e, s, i[f]);
                  i[f] = s;
                } else {
                  if (o && i[h] != null) return At(l, u, c, h, d, e, n, a, i);
                  return jt;
                }
              };
            }
            function At(t, e, n, i, r, o, a, s, l) {
              if (s._lis) {
                n(o, l[r].el, l[i]);
                l[r] = e(l[r], a);
              } else {
                var u = w(s.idx, l.tombs);
                s._lis = true;
                var c = t(l[i]);
                n(o, l[i], u != null ? a[l.tombs[u]].el : u);
                if (u == null) l.tombs.push(s.idx);
                else l.tombs.splice(u, 0, s.idx);
                l[i] = c;
              }
            }
            var Nt = Lt(
                ot,
                Et,
                dt,
                "lftSib",
                "lftNode",
                "rgtSib",
                "rgtNode",
                ft
              ),
              Rt = Lt(at, Pt, ft, "rgtSib", "rgtNode", "lftSib", "lftNode", dt);
            function Ht(t, e) {
              var n = e.body,
                i = t.el,
                r = t.body,
                o = {
                  lftNode: r[0],
                  rgtNode: r[r.length - 1],
                  lftSib: (n[0] || u).el,
                  rgtSib: (n[n.length - 1] || u).el,
                };
              t: while (1) {
                while (1) {
                  var a = Nt(t, i, r, o, null, false);
                  if (a === jt) break;
                  if (a === It) break t;
                }
                while (1) {
                  var s = Rt(t, i, r, o, o.lftNode, false);
                  if (s === jt) break;
                  if (s === It) break t;
                }
                zt(t, i, r, o);
                break;
              }
            }
            function zt(t, e, n, i) {
              var r = Array.prototype.slice.call(e.childNodes);
              var o = [];
              for (var a = 0; a < r.length; a++) {
                var s = r[a]._node;
                if (s.parent === t) o.push(s.idx);
              }
              var l = b(o).map(function (t) {
                return o[t];
              });
              for (var u = 0; u < l.length; u++) n[l[u]]._lis = true;
              i.tombs = l;
              while (1) {
                var c = Nt(t, e, n, i, null, true);
                if (c === It) break;
              }
            }
            function Ft(t) {
              return t.el._node.parent !== t.parent;
            }
            function Bt(t, e, n) {
              return e[n];
            }
            function Wt(t, e, n) {
              for (; n < e.length; n++) {
                var i = e[n];
                if (i.vm != null) {
                  if (
                    (t.type === E &&
                      i.vm.view === t.view &&
                      i.vm.key === t.key) ||
                    (t.type === P && i.vm === t.vm)
                  )
                    return i;
                } else if (
                  !Ft(i) &&
                  t.tag === i.tag &&
                  t.type === i.type &&
                  t.key === i.key &&
                  (t.flags & ~z) === (i.flags & ~z)
                )
                  return i;
              }
              return null;
            }
            function $t(t, e, n) {
              return e[e._keys[t.key]];
            }
            function Vt(t, e) {
              Q(e.hooks, "willRecycle", e, t);
              var n = (t.el = e.el);
              var i = e.body;
              var r = t.body;
              n._node = t;
              if (t.type === l && r !== i) {
                n.nodeValue = r;
                return;
              }
              if (t.attrs != null || e.attrs != null) Dt(t, e, false);
              var o = p(i);
              var a = p(r);
              var s = (t.flags & W) === W;
              if (o) {
                if (a || s) Ut(t, e);
                else if (r !== i)
                  if (r != null) n.textContent = r;
                  else ht(e);
              } else if (a) {
                ht(e);
                St(t);
              } else if (r !== i)
                if (n.firstChild) n.firstChild.nodeValue = r;
                else n.textContent = r;
              Q(e.hooks, "didRecycle", e, t);
            }
            function Ut(t, e) {
              var n = t.body,
                i = n.length,
                r = e.body,
                o = r.length,
                a = (t.flags & W) === W,
                s = (t.flags & F) === F,
                l = (t.flags & B) === B,
                u = !s && t.type === S,
                c = true,
                h = l ? $t : s || a ? Bt : Wt;
              if (l) {
                var d = {};
                for (var f = 0; f < r.length; f++) d[r[f].key] = f;
                r._keys = d;
              }
              if (u && i === 0) {
                ht(e);
                if (a) t.body = [];
                return;
              }
              var p,
                g,
                v,
                y = 0,
                _ = false,
                m = 0;
              if (a) {
                var x = { key: null };
                var b = Array(i);
              }
              for (var f = 0; f < i; f++) {
                if (a) {
                  var w = false;
                  var k = null;
                  if (c) {
                    if (l) x.key = n.key(f);
                    p = h(x, r, m);
                  }
                  if (p != null) {
                    v = p.idx;
                    k = n.diff(f, p);
                    if (k === true) {
                      g = p;
                      g.parent = t;
                      g.idx = f;
                      g._lis = false;
                    } else w = true;
                  } else w = true;
                  if (w) {
                    g = n.tpl(f);
                    X(g, t, f);
                    g._diff = k != null ? k : n.diff(f);
                    if (p != null) Vt(g, p);
                  } else;
                  b[f] = g;
                } else {
                  var g = n[f];
                  var M = g.type;
                  if (M <= C) {
                    if ((p = c && h(g, r, m))) {
                      Vt(g, p);
                      v = p.idx;
                    }
                  } else if (M === E) {
                    if ((p = c && h(g, r, m))) {
                      v = p.idx;
                      var D = p.vm._update(g.data, t, f);
                    } else
                      var D = Ot(g.view, g.data, g.key, g.opts)._redraw(
                        t,
                        f,
                        false
                      );
                    M = D.node.type;
                  } else if (M === P) {
                    var O = T(g.vm);
                    var D = g.vm._update(g.data, t, f, O);
                    M = D.node.type;
                  }
                }
                if (!l && p != null) {
                  if (v === m) {
                    m++;
                    if (m === o && i > o) {
                      p = null;
                      c = false;
                    }
                  } else _ = true;
                  if (o > 100 && _ && ++y % 10 === 0)
                    while (m < o && Ft(r[m])) m++;
                }
              }
              if (a) t.body = b;
              u && Ht(t, e);
            }
            function Xt(t, e, n, i) {
              var r = this;
              r.view = t;
              r.data = e;
              r.key = n;
              if (i) {
                r.opts = i;
                r.config(i);
              }
              var o = a(t) ? t : t.call(r, r, e, n, i);
              if (h(o)) r.render = o;
              else {
                r.render = o.render;
                r.config(o);
              }
              r._redrawAsync = m(function (t) {
                return r.redraw(true);
              });
              r._updateAsync = m(function (t) {
                return r.update(t, true);
              });
              r.init && r.init.call(r, r, r.data, r.key, i);
            }
            var Gt = (Xt.prototype = {
              constructor: Xt,
              _diff: null,
              init: null,
              view: null,
              key: null,
              data: null,
              state: null,
              api: null,
              opts: null,
              node: null,
              hooks: null,
              onevent: n,
              refs: null,
              render: null,
              mount: Yt,
              unmount: Zt,
              config: function (t) {
                var e = this;
                if (t.init) e.init = t.init;
                if (t.diff) e.diff = t.diff;
                if (t.onevent) e.onevent = t.onevent;
                if (t.hooks) e.hooks = f(e.hooks || {}, t.hooks);
                if (t.onemit) e.onemit = f(e.onemit || {}, t.onemit);
              },
              parent: function () {
                return I(this.node.parent);
              },
              root: function () {
                var t = this.node;
                while (t.parent) t = t.parent;
                return t.vm;
              },
              redraw: function (t) {
                var e = this;
                t ? e._redraw(null, null, T(e)) : e._redrawAsync();
                return e;
              },
              update: function (t, e) {
                var n = this;
                e ? n._update(t, null, null, T(n)) : n._updateAsync(t);
                return n;
              },
              _update: Qt,
              _redraw: qt,
              _redrawAsync: null,
              _updateAsync: null,
            });
            function Yt(t, e) {
              var n = this;
              if (e) {
                ht({ el: t, flags: 0 });
                n._redraw(null, null, false);
                if (t.nodeName.toLowerCase() !== n.node.tag) {
                  Ct(n.node);
                  dt(t.parentNode, n.node.el, t);
                  t.parentNode.removeChild(t);
                } else dt(t.parentNode, Ct(n.node, t), t);
              } else {
                n._redraw(null, null);
                if (t) dt(t, n.node.el);
              }
              if (t) K(n);
              return n;
            }
            function Zt(t) {
              var e = this;
              var n = e.node;
              var i = n.el.parentNode;
              ut(i, n.el);
              if (!t) K(e);
            }
            function Jt(t, e, n, i) {
              if (n != null) {
                n.body[i] = e;
                e.idx = i;
                e.parent = n;
                e._lis = false;
              }
              return t;
            }
            function qt(t, e, n) {
              var i = t == null;
              var r = this;
              var o = r.node && r.node.el && r.node.el.parentNode;
              var a = r.node,
                s,
                l;
              if (r.diff != null) {
                s = r._diff;
                r._diff = l = r.diff(r, r.data);
                if (a != null) {
                  var u = p(s) ? _ : y;
                  var c = s === l || u(s, l);
                  if (c) return Jt(r, a, t, e);
                }
              }
              o && Q(r.hooks, "willRedraw", r, r.data);
              var h = r.render.call(r, r, r.data, s, l);
              if (h === a) return Jt(r, a, t, e);
              r.refs = null;
              if (r.key != null && h.key !== r.key) h.key = r.key;
              r.node = h;
              if (t) {
                X(h, t, e, r);
                t.body[e] = h;
              } else if (a && a.parent) {
                X(h, a.parent, a.idx, r);
                a.parent.body[a.idx] = h;
              } else X(h, null, null, r);
              if (n !== false)
                if (a)
                  if (a.tag !== h.tag || a.key !== h.key) {
                    a.vm = h.vm = null;
                    var d = a.el.parentNode;
                    var f = ot(a.el);
                    ut(d, a.el);
                    dt(d, Ct(h), f);
                    a.el = h.el;
                    h.vm = r;
                  } else Vt(h, a);
                else Ct(h);
              o && Q(r.hooks, "didRedraw", r, r.data);
              if (i && o) K(r);
              return r;
            }
            function Qt(t, e, n, i) {
              var r = this;
              if (t != null)
                if (r.data !== t) {
                  Q(r.hooks, "willUpdate", r, t);
                  r.data = t;
                }
              return r._redraw(e, n, i);
            }
            function Kt(t, e, n, i) {
              var r, o;
              if (n == null)
                if (a(e)) r = e;
                else o = e;
              else {
                r = e;
                o = n;
              }
              return $(t, r, o, i);
            }
            var te = "http://www.w3.org/2000/svg";
            function ee(t, e, n, i) {
              var r = Kt(t, e, n, i);
              r.ns = te;
              return r;
            }
            function ne(t) {
              var e = new L();
              e.type = C;
              e.body = t;
              return e;
            }
            function ie(t, e, n, i) {
              this.view = t;
              this.data = e;
              this.key = n;
              this.opts = i;
            }
            function re(t, e, n, i) {
              return new ie(t, e, n, i);
            }
            function oe(t) {
              this.vm = t;
            }
            function ae(t) {
              return new oe(t);
            }
            function se(t) {
              var e = new L();
              e.type = S;
              e.el = e.key = t;
              return e;
            }
            function le(o, a) {
              var r = o.length;
              var s = {
                items: o,
                length: r,
                key: function (t) {
                  return a.key(o[t], t);
                },
                diff: function (t, e) {
                  var n = a.diff(o[t], t);
                  if (e == null) return n;
                  var i = e._diff;
                  var r = n === i || p(i) ? _(n, i) : y(n, i);
                  return r || n;
                },
                tpl: function (t) {
                  return a.tpl(o[t], t);
                },
                map: function (t) {
                  a.tpl = t;
                  return s;
                },
                body: function (t) {
                  var e = Array(r);
                  for (var n = 0; n < r; n++) {
                    var i = s.tpl(n);
                    i._diff = s.diff(n);
                    e[n] = i;
                    X(i, t, n);
                  }
                  t.body = e;
                },
              };
              return s;
            }
            (ie.prototype = {
              constructor: ie,
              type: E,
              view: null,
              data: null,
              key: null,
              opts: null,
            }),
              (oe.prototype = { constructor: oe, type: P, vm: null });
            var ue = {
              config: _t,
              ViewModel: Xt,
              VNode: L,
              createView: Ot,
              defineElement: Kt,
              defineSvgElement: ee,
              defineText: A,
              defineComment: ne,
              defineView: re,
              injectView: ae,
              injectElement: se,
              lazyList: le,
              FIXED_BODY: F,
              DEEP_REMOVE: z,
              KEYED_LIST: B,
              LAZY_LIST: W,
            };
            function ce(t, e) {
              !(function (t, e, n) {
                {
                  var i, r;
                  null != e.type
                    ? null == t.vm &&
                      (X(e, t.parent, t.idx, null),
                      Vt((t.parent.body[t.idx] = e), t),
                      n && O(e),
                      K(I(e)))
                    : (((i = Object.create(t)).attrs = f({}, t.attrs)),
                      (r = f(t.attrs, e)),
                      null != t._class &&
                        ((e = r.class),
                        (r.class =
                          null != e && "" !== e
                            ? t._class + " " + e
                            : t._class)),
                      Dt(t, i),
                      n && O(t));
                }
              })(this, t, e);
            }
            function he(t, e, n) {
              if (null != e.type)
                null == t.vm &&
                  (X(e, t.parent, t.idx, null),
                  Vt((t.parent.body[t.idx] = e), t),
                  n && O(e),
                  K(I(e)));
              else {
                var i = Object.create(t);
                (i = Object.create(t)).attrs = f({}, t.attrs);
                var r = f(t.attrs, e),
                  a;
                null != t._class &&
                  ((e = r.class),
                  (r.class =
                    null != e && "" !== e ? t._class + " " + e : t._class)),
                  Dt(t, i),
                  n && O(t);
              }
            }
            function de(t, e) {
              var n = t.body;
              if (p(n))
                for (var i = 0; i < n.length; i++) {
                  var r = n[i];
                  if (r.vm != null) e.push(r.vm);
                  else de(r, e);
                }
              return e;
            }
            function fe(t) {
              var e = arguments;
              var n = e.length;
              var i, r;
              if (n > 1) {
                var o = 1;
                if (a(e[1])) {
                  r = e[1];
                  o = 2;
                }
                if (
                  n === o + 1 &&
                  (s(e[o]) || p(e[o]) || (r && (r._flags & W) === W))
                )
                  i = e[o];
                else i = v(e, o);
              }
              return $(t, r, i);
            }
            function pe() {
              var t = fe.apply(null, arguments);
              return (t.ns = te), t;
            }
            return (
              (i.patch = function (t, e) {
                !(function (t, e, n) {
                  {
                    var i, r;
                    null != e.type
                      ? null == t.vm &&
                        (X(e, t.parent, t.idx, null),
                        Vt((t.parent.body[t.idx] = e), t),
                        n && O(e),
                        K(I(e)))
                      : (((i = Object.create(t)).attrs = f({}, t.attrs)),
                        (r = f(t.attrs, e)),
                        null != t._class &&
                          ((e = r.class),
                          (r.class =
                            null != e && "" !== e
                              ? t._class + " " + e
                              : t._class)),
                        Dt(t, i),
                        n && O(t));
                  }
                })(this, t, e);
              }),
              (Gt.emit = function (t) {
                var e = this,
                  n = e,
                  i = v(arguments, 1).concat(n, n.data);
                do {
                  var r = e.onemit,
                    r = r ? r[t] : null;
                  if (r) {
                    r.apply(e, i);
                    break;
                  }
                } while ((e = e.parent()));
                pt[t] && pt[t].apply(e, i);
              }),
              (Gt.onemit = null),
              (Gt.body = function () {
                return (function t(e, n) {
                  var i = e.body;
                  if (p(i))
                    for (var r = 0; r < i.length; r++) {
                      var o = i[r];
                      null != o.vm ? n.push(o.vm) : t(o, n);
                    }
                  return n;
                })(this.node, []);
              }),
              (ue.defineElementSpread = fe),
              (ue.defineSvgElementSpread = function () {
                var t = fe.apply(null, arguments);
                return (t.ns = te), t;
              }),
              ue
            );
          })();
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(1),
            n =
              ((i.prototype.pdf = function (t) {
                this._rawExport(t, "pdf", this._view);
              }),
              (i.prototype.png = function (t) {
                this._rawExport(t, "png", this._view);
              }),
              (i.prototype._rawExport = function (t, e, n) {
                var i = this;
                ((t = t || {}).url =
                  t.url || "https://export.dhtmlx.ru/" + this._name + "/" + e),
                  (t.url += "/" + this._version);
                var n = (
                    "\n\t\t\t\t" +
                    o.getPageLinksCss() +
                    "\n\t\t\t\t<style>" +
                    o.getPageInlineCss() +
                    "</style>\n\t\t\t\t" +
                    n.getRootView().node.el.parentNode.innerHTML +
                    "\n\t\t\t"
                  ).replace(
                    /(src|href)=("(.+?\.(jpeg|jpg|png|apng|gif|svg|bmp|ico))")/gm,
                    function (t) {
                      if (t.includes("://")) return t;
                      var e = t.replace(/(src|href)="/, "").replace('"', "");
                      return (
                        /(src|href)="/.exec(t)[0] + i._normalizeLink(e) + '"'
                      );
                    }
                  ),
                  r = document.createElement("form");
                r.setAttribute("method", "POST"),
                  r.setAttribute("action", t.url),
                  (r.innerHTML =
                    '<input type="hidden" name="raw"><input type="hidden" name="config">'),
                  (r.childNodes[0].value = n),
                  (r.childNodes[1].value = JSON.stringify(t)),
                  document.body.appendChild(r),
                  r.submit(),
                  setTimeout(function () {
                    r.parentNode.removeChild(r);
                  }, 100);
              }),
              (i.prototype._normalizeLink = function (t) {
                var e = window.location.pathname.split("/");
                return (
                  "" === e[0] && (e.shift(), e.pop()),
                  window.location.origin +
                    "/" +
                    e.join("/") +
                    ("/" !== t[0] ? "/" + t : t)
                );
              }),
              i);
          function i(t, e, n) {
            (this._name = t), (this._version = e), (this._view = n);
          }
          e.Exporter = n;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var p = n(29),
            g = [
              "#FF9800",
              "#607D8B",
              "#00C7B5",
              "#03A9F4",
              "#9575CD",
              "#F06292",
            ];
          e.placeOrgonogram = function (t, e) {
            var n = t.getRoots();
            1 === n.length &&
              ((n = t.getItem(n[0])),
              (function t(e, n, i, r, o) {
                var a = n.$kids;
                var s = "vertical" === n.dir;
                var l = s ? i.margin.itemX / 2 : 0;
                var u = 0;
                if (!1 !== n.open && a) {
                  for (var c = 0, h = 0; h < a.length; h++) {
                    var d = e.getItem(a[h][1]);
                    d.hidden ||
                      ((d = t(e, d, i, r + l, l)),
                      s ? (u = Math.max(u, d)) : (u += d),
                      c++);
                  }
                  c && !s && (u += (c - 1) * i.margin.itemX), (n.$count = c);
                }
                u = Math.max(n.width, u);
                {
                  var f, p;
                  s
                    ? (n.x = r)
                    : ((f = i.gridStep || 1),
                      (p = (u - n.width) / 2 + r),
                      (n.x = Math.ceil(p / f) * f));
                }
                n.y = 0;
                n.$width = u;
                return u + o;
              })(t, n, e, 0, 0),
              (function t(e, n, i, r, o, a) {
                var s = n.$kids;
                var l = "vertical" === n.dir;
                var u = 0;
                n.x += i;
                n.y += r;
                o.gridStep && (n.y = Math.ceil(n.y / o.gridStep) * o.gridStep);
                r += n.height + o.margin.itemY;
                if (!1 !== n.open && s)
                  for (var c, h = void 0, d = 0; d < s.length; d++)
                    (h = e.getItem(s[d][1])).hidden ||
                      ((c = t(e, h, i, r, o, a + 1)),
                      l
                        ? ((r += c + o.margin.itemY), (u += c + o.margin.itemY))
                        : ((u = Math.max(u, c + o.margin.itemY)),
                          (i += h.$width + o.margin.itemX)),
                      p.directLinkPath(e.getItem(s[d][0]), n, h, o));
                {
                  var f;
                  s &&
                    ((f = e.getItem(s[0][1]).headerColor),
                    (n.$expandColor = f || g[(a + 1) % g.length]));
                }
                n.headerColor = n.headerColor || g[a % g.length];
                return n.height + u;
              })(t, n, 0, 0, e, 0));
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(8),
            o = n(12),
            n =
              ((i.prototype.getId = function () {
                return this._selected;
              }),
              (i.prototype.getItem = function () {
                return this._selected
                  ? this._data.getItem(this._selected)
                  : null;
              }),
              (i.prototype.remove = function (t) {
                return (
                  !(t = t || this._selected) ||
                  (!!this.events.fire(o.SelectionEvents.beforeUnSelect, [t]) &&
                    (this._data.update(t, { $selected: !1 }, !0),
                    (this._selected = null),
                    this.events.fire(o.SelectionEvents.afterUnSelect, [t]),
                    !0))
                );
              }),
              (i.prototype.add = function (t) {
                this._selected !== t &&
                  (this.remove(),
                  this.events.fire(o.SelectionEvents.beforeSelect, [t]) &&
                    ((this._selected = t),
                    this._data.update(t, { $selected: !0 }, !0),
                    this.events.fire(o.SelectionEvents.afterSelect, [t])));
              }),
              i);
          function i(t, e, n) {
            var i = this;
            (this.events = n || new r.EventSystem()),
              (this._data = e),
              this._data.events.on(o.DataEvents.removeAll, function () {
                i._selected = null;
              }),
              this._data.events.on(o.DataEvents.change, function () {
                var t, e;
                !i._selected ||
                  ((t = i._data.getNearId(i._selected)) !== i._selected &&
                    ((e = i._data.getItem(i._selected)) && (e.$selected = !1),
                    (i._selected = null),
                    t && i.add(t)));
              });
          }
          e.Selection = n;
        },
        function (t, n, i) {
          "use strict";
          (function (a) {
            var l =
              (this && this.__assign) ||
              function () {
                return (l =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
            Object.defineProperty(n, "__esModule", { value: !0 });
            var u = i(5),
              c = i(4),
              t =
                ((e.prototype.load = function (t, e) {
                  var n = this;
                  if (
                    !t.config ||
                    this._parent.events.fire(c.DataEvents.beforeLazyLoad, [])
                  )
                    return (this._parent.loadData = t
                      .load()
                      .then(function (t) {
                        return t ? n.parse(t, e) : [];
                      })
                      .catch(function (t) {
                        n._parent.events.fire(c.DataEvents.loadError, [t]);
                      }));
                }),
                (e.prototype.parse = function (t, e) {
                  var i = this;
                  if (
                    (void 0 === e && (e = "json"),
                    "json" !== e ||
                      u.hasJsonOrArrayStructure(t) ||
                      this._parent.events.fire(c.DataEvents.loadError, [
                        "Uncaught SyntaxError: Unexpected end of input",
                      ]),
                    !(
                      (t = (e = u.toDataDriver(e)).toJsonArray(t)) instanceof
                      Array
                    ))
                  ) {
                    var n = t.total_count - 1,
                      r = t.from;
                    if (((t = t.data), 0 !== this._parent.getLength()))
                      return (
                        t.forEach(function (t, e) {
                          var n = r + e,
                            e = i._parent.getId(n);
                          e
                            ? (n = i._parent.getItem(e)) &&
                              n.$empty &&
                              (i._parent.changeId(e, t.id, !0),
                              i._parent.update(
                                t.id,
                                l(l({}, t), { $empty: void 0 }),
                                !0
                              ))
                            : u.dhxWarning("item not found");
                        }),
                        this._parent.events.fire(c.DataEvents.afterLazyLoad, [
                          r,
                          t.length,
                        ]),
                        this._parent.events.fire(c.DataEvents.change),
                        t
                      );
                    for (var o = [], a = 0, s = 0; a <= n; a++)
                      r <= a && a <= r + t.length - 1
                        ? (o.push(t[s]), s++)
                        : o.push({ $empty: !0 });
                    t = o;
                  }
                  return (
                    this._parent.getInitialData() && this._parent.removeAll(),
                    this._parent.$parse(t),
                    t
                  );
                }),
                (e.prototype.save = function (r) {
                  for (
                    var o = this, e = this, t = 0, n = this._changes.order;
                    t < n.length;
                    t++
                  )
                    !(function (n) {
                      var i, t;
                      n.saving || n.pending
                        ? u.dhxWarning("item is saving")
                        : (i = e._findPrevState(n.id)) && i.saving
                        ? ((t = new a(function (t, e) {
                            i.promise
                              .then(function () {
                                (n.pending = !1), t(o._setPromise(n, r));
                              })
                              .catch(function (t) {
                                o._removeFromOrder(i),
                                  o._setPromise(n, r),
                                  u.dhxWarning(t),
                                  e(t);
                              });
                          })),
                          e._addToChain(t),
                          (n.pending = !0))
                        : e._setPromise(n, r);
                    })(n[t]);
                  this._changes.order.length &&
                    this._parent.saveData.then(function () {
                      o._saving = !1;
                    });
                }),
                (e.prototype.updateChanges = function (t) {
                  this._changes = t;
                }),
                (e.prototype._setPromise = function (e, t) {
                  var n = this;
                  return (
                    (e.promise = t.save(e.obj, e.status)),
                    e.promise
                      .then(function () {
                        n._removeFromOrder(e);
                      })
                      .catch(function (t) {
                        (e.saving = !1), (e.error = !0), u.dhxError(t);
                      }),
                    (e.saving = !0),
                    (this._saving = !0),
                    this._addToChain(e.promise),
                    e.promise
                  );
                }),
                (e.prototype._addToChain = function (t) {
                  this._parent.saveData && this._saving
                    ? (this._parent.saveData = this._parent.saveData.then(
                        function () {
                          return t;
                        }
                      ))
                    : (this._parent.saveData = t);
                }),
                (e.prototype._findPrevState = function (t) {
                  for (var e = 0, n = this._changes.order; e < n.length; e++) {
                    var i = n[e];
                    if (i.id === t) return i;
                  }
                  return null;
                }),
                (e.prototype._removeFromOrder = function (e) {
                  this._changes.order = this._changes.order.filter(function (
                    t
                  ) {
                    return !u.isEqualObj(t, e);
                  });
                }),
                e);
            function e(t, e) {
              (this._parent = t), (this._changes = e);
            }
            n.Loader = t;
          }.call(this, i(7)));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(64);
          (r.prototype.toJsonArray = function (t) {
            return this.getRows(t);
          }),
            (r.prototype.toJsonObject = function (t) {
              var e;
              return (
                "string" == typeof t && (e = this._fromString(t)),
                (function t(e, n) {
                  n = n || {};
                  var i = e.attributes;
                  if (i && i.length)
                    for (var r = 0; r < i.length; r++)
                      n[i[r].name] = i[r].value;
                  for (var o, a = e.childNodes, r = 0; r < a.length; r++)
                    1 === a[r].nodeType &&
                      (n[(o = a[r].tagName)]
                        ? ("function" != typeof n[o].push && (n[o] = [n[o]]),
                          n[o].push(t(a[r], {})))
                        : (n[o] = t(a[r], {})));
                  return n;
                })(e)
              );
            }),
            (r.prototype.serialize = function (t) {
              return i.jsonToXML(t);
            }),
            (r.prototype.getFields = function (t) {
              return t;
            }),
            (r.prototype.getRows = function (t) {
              if (("string" == typeof t && (t = this._fromString(t)), t)) {
                t =
                  t.childNodes && t.childNodes[0] && t.childNodes[0].childNodes;
                return t && t.length ? this._getRows(t) : null;
              }
              return [];
            }),
            (r.prototype._getRows = function (t) {
              for (var e = [], n = 0; n < t.length; n++)
                "item" === t[n].tagName && e.push(this._nodeToJS(t[n]));
              return e;
            }),
            (r.prototype._fromString = function (t) {
              try {
                return new DOMParser().parseFromString(t, "text/xml");
              } catch (t) {
                return null;
              }
            }),
            (r.prototype._nodeToJS = function (t) {
              var e = {};
              if (this._haveAttrs(t))
                for (var n = t.attributes, i = 0; i < n.length; i++) {
                  var r = n[i],
                    o = r.name,
                    r = r.value;
                  e[o] = this._toType(r);
                }
              if (3 === t.nodeType)
                return (e.value = e.value || this._toType(t.textContent)), e;
              var a = t.childNodes;
              if (a)
                for (i = 0; i < a.length; i++) {
                  var s = a[i],
                    l = s.tagName;
                  l &&
                    ("items" === l && s.childNodes
                      ? (e[l] = this._getRows(s.childNodes))
                      : this._haveAttrs(s)
                      ? (e[l] = this._nodeToJS(s))
                      : (e[l] = this._toType(s.textContent)));
                }
              return e;
            }),
            (r.prototype._toType = function (t) {
              return "false" === t || "true" === t
                ? "true" === t
                : isNaN(t)
                ? t
                : Number(t);
            }),
            (r.prototype._haveAttrs = function (t) {
              return t.attributes && t.attributes.length;
            }),
            (n = r);
          function r() {}
          e.XMLDriver = n;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = 4;
          function a(t) {
            return " ".repeat(t);
          }
          e.jsonToXML = function (t, e) {
            void 0 === e && (e = "root");
            for (
              var n =
                  '<?xml version="1.0" encoding="iso-8859-1"?>\n<' + e + ">",
                i = 0;
              i < t.length;
              i++
            )
              n +=
                "\n" +
                (function e(t, n) {
                  void 0 === n && (n = o);
                  var i,
                    r = a(n) + "<item>\n";
                  for (i in t)
                    Array.isArray(t[i])
                      ? ((r += a(n + o) + "<" + i + ">\n"),
                        (r +=
                          t[i]
                            .map(function (t) {
                              return e(t, n + 2 * o);
                            })
                            .join("\n") + "\n"),
                        (r += a(n + o) + "</" + i + ">\n"))
                      : (r +=
                          a(n + o) + ("<" + i + ">" + t[i]) + "</" + i + ">\n");
                  return (r += a(n) + "</item>");
                })(t[i]);
            return n + "\n</" + e + ">";
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(5),
            n =
              ((i.prototype.sort = function (t, e, n) {
                this._createSorter(e),
                  n === e && (e = null),
                  (n || e) && this._sort(t, n, e);
              }),
              (i.prototype._createSorter = function (n) {
                var i = this;
                n &&
                  !n.rule &&
                  (n.rule = function (t, e) {
                    (t = i._checkVal(n.as, t[n.by])),
                      (e = i._checkVal(n.as, e[n.by]));
                    return r.naturalCompare(t.toString(), e.toString());
                  });
              }),
              (i.prototype._checkVal = function (t, e) {
                return t ? t.call(this, e) : e;
              }),
              (i.prototype._sort = function (t, i, r) {
                var o = this,
                  a = { asc: 1, desc: -1 };
                return t.sort(function (t, e) {
                  var n = 0;
                  return (
                    i && (n = i.rule.call(o, t, e) * (a[i.dir] || a.asc)),
                    0 === n &&
                      r &&
                      (n = r.rule.call(o, t, e) * (a[r.dir] || a.asc)),
                    n
                  );
                });
              }),
              i);
          function i() {}
          e.Sort = n;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                  t += arguments[e].length;
                for (var i = Array(t), r = 0, e = 0; e < n; e++)
                  for (
                    var o = arguments[e], a = 0, s = o.length;
                    a < s;
                    a++, r++
                  )
                    i[r] = o[a];
                return i;
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var c = n(2),
            a = n(31),
            s = n(10),
            h = n(5),
            f = n(4);
          function l(t, e, n, i) {
            void 0 !== i && -1 !== i && t[n] && t[n][i]
              ? t[n].splice(i, 0, e)
              : (t[n] || (t[n] = []), t[n].push(e));
          }
          var u,
            r =
              ((u = a.DataCollection),
              r(d, u),
              (d.prototype.add = function (t, n, i) {
                var r = this;
                return (
                  void 0 === n && (n = -1),
                  void 0 === i && (i = this._root),
                  "object" != typeof t && (t = { value: t }),
                  Array.isArray(t)
                    ? t.map(function (t, e) {
                        return r._add(t, n, i, e);
                      })
                    : this._add(t, n, i)
                );
              }),
              (d.prototype.getRoot = function () {
                return this._root;
              }),
              (d.prototype.getParent = function (t, e) {
                if ((void 0 === e && (e = !1), !this._pull[t])) return null;
                t = this._pull[t].parent;
                return e ? this._pull[t] : t;
              }),
              (d.prototype.getItems = function (t) {
                return this._childs && this._childs[t] ? this._childs[t] : [];
              }),
              (d.prototype.getLength = function (t) {
                return (
                  void 0 === t && (t = this._root),
                  this._childs[t] ? this._childs[t].length : null
                );
              }),
              (d.prototype.removeAll = function (t) {
                if (t) {
                  if (this._childs[t])
                    for (var e = 0, n = o(this._childs[t]); e < n.length; e++) {
                      var i = n[e];
                      this.remove(i.id);
                    }
                } else {
                  u.prototype.removeAll.call(this);
                  var r = this._root;
                  (this._initChilds = null),
                    (this._childs = (((t = {})[r] = []), t));
                }
              }),
              (d.prototype.getIndex = function (e) {
                var t = this.getParent(e);
                return t && this._childs[t]
                  ? c.findIndex(this._childs[t], function (t) {
                      return t.id === e;
                    })
                  : -1;
              }),
              (d.prototype.sort = function (t) {
                var e = this;
                if (t) {
                  for (var n in this._childs)
                    this._sort.sort(this._childs[n], t);
                  if (this._initChilds && Object.keys(this._initChilds).length)
                    for (var n in this._initChilds)
                      this._sort.sort(this._initChilds[n], t);
                } else if (
                  ((this._childs = {}),
                  this._parse_data(
                    Object.keys(this._pull).map(function (t) {
                      return e._pull[t];
                    })
                  ),
                  this._filters)
                )
                  for (var n in this._filters) {
                    var i = this._filters[n];
                    this.filter(i.rule, i.config);
                  }
                this.events.fire(f.DataEvents.change);
              }),
              (d.prototype.filter = function (t, e) {
                var i,
                  r = this;
                void 0 === e && (e = {}),
                  t
                    ? (this._initChilds || (this._initChilds = this._childs),
                      (e.type = e.type || f.TreeFilterType.all),
                      (this._filters = {}),
                      (this._filters._ = { rule: t, config: e }),
                      (i = {}),
                      this._recursiveFilter(t, e, this._root, 0, i),
                      Object.keys(i).forEach(function (t) {
                        for (var e = r.getParent(t), n = r.getItem(t); e; )
                          i[e] || (i[e] = []),
                            n &&
                              !i[e].find(function (t) {
                                return t.id === n.id;
                              }) &&
                              i[e].push(n),
                            (n = r.getItem(e)),
                            (e = r.getParent(e));
                      }),
                      (this._childs = i),
                      this.events.fire(f.DataEvents.change))
                    : this.restoreOrder();
              }),
              (d.prototype.restoreOrder = function () {
                this._initChilds &&
                  ((this._childs = this._initChilds),
                  (this._initChilds = null)),
                  this.events.fire(f.DataEvents.change);
              }),
              (d.prototype.copy = function (t, n, i, r) {
                var o = this;
                return (
                  void 0 === i && (i = this),
                  void 0 === r && (r = this._root),
                  t instanceof Array
                    ? t.map(function (t, e) {
                        return o._copy(t, n, i, r, e);
                      })
                    : this._copy(t, n, i, r)
                );
              }),
              (d.prototype.move = function (t, n, i, r) {
                var o = this;
                return (
                  void 0 === i && (i = this),
                  void 0 === r && (r = this._root),
                  t instanceof Array
                    ? t.map(function (t, e) {
                        return o._move(t, n, i, r, e);
                      })
                    : this._move(t, n, i, r)
                );
              }),
              (d.prototype.forEach = function (t, e, n) {
                if (
                  (void 0 === e && (e = this._root),
                  void 0 === n && (n = 1 / 0),
                  this.haveItems(e) && !(n < 1))
                )
                  for (var i = this._childs[e], r = 0; r < i.length; r++)
                    t.call(this, i[r], r, i),
                      this.haveItems(i[r].id) && this.forEach(t, i[r].id, --n);
              }),
              (d.prototype.eachChild = function (t, e, n, i) {
                if (
                  (void 0 === n && (n = !0),
                  void 0 === i &&
                    (i = function () {
                      return !0;
                    }),
                  this.haveItems(t))
                )
                  for (var r = 0; r < this._childs[t].length; r++)
                    e.call(this, this._childs[t][r], r),
                      n &&
                        i(this._childs[t][r]) &&
                        this.eachChild(this._childs[t][r].id, e, n, i);
              }),
              (d.prototype.getNearId = function (t) {
                return t;
              }),
              (d.prototype.loadItems = function (e, n) {
                var i = this;
                void 0 === n && (n = "json");
                var t = this.config.autoload + "?id=" + e;
                new s.DataProxy(t).load().then(function (t) {
                  (t = (n = h.toDataDriver(n)).toJsonArray(t)),
                    i._parse_data(t, e),
                    i.events.fire(f.DataEvents.change);
                });
              }),
              (d.prototype.refreshItems = function (t, e) {
                void 0 === e && (e = "json"),
                  this.removeAll(t),
                  this.loadItems(t, e);
              }),
              (d.prototype.eachParent = function (t, e, n) {
                void 0 === n && (n = !1);
                t = this.getItem(t);
                t &&
                  (n && e.call(this, t),
                  t.parent !== this._root &&
                    ((n = this.getItem(t.parent)),
                    e.call(this, n),
                    this.eachParent(t.parent, e)));
              }),
              (d.prototype.haveItems = function (t) {
                return t in this._childs;
              }),
              (d.prototype.canCopy = function (e, t) {
                if (e === t) return !1;
                var n = !0;
                return (
                  this.eachParent(t, function (t) {
                    return t.id === e ? (n = !1) : null;
                  }),
                  n
                );
              }),
              (d.prototype.serialize = function (t, e) {
                void 0 === t && (t = f.DataDriver.json);
                (e = this._serialize(this._root, e)), (t = h.toDataDriver(t));
                if (t) return t.serialize(e);
              }),
              (d.prototype.getId = function (t, e) {
                if (
                  (void 0 === e && (e = this._root),
                  this._childs[e] && this._childs[e][t])
                )
                  return this._childs[e][t].id;
              }),
              (d.prototype.map = function (t, e, n) {
                void 0 === e && (e = this._root), void 0 === n && (n = !0);
                var i = [];
                if (!this.haveItems(e)) return i;
                for (var r, o = 0; o < this._childs[e].length; o++)
                  i.push(t.call(this, this._childs[e][o], o, this._childs)),
                    n &&
                      ((r = this.map(t, this._childs[e][o].id, n)),
                      (i = i.concat(r)));
                return i;
              }),
              (d.prototype.getRawData = function (t, e, n, i, r) {
                r =
                  (r = r || this._root) === this._root
                    ? u.prototype.getRawData.call(this, t, e, this._childs[r])
                    : this._childs[r];
                return 2 === i ? this.flatten(r) : r;
              }),
              (d.prototype.flatten = function (t) {
                var n = this,
                  i = [];
                return (
                  t.forEach(function (t) {
                    i.push(t);
                    var e = n._childs[t.id];
                    e && t.$opened && (i = i.concat(n.flatten(e)));
                  }),
                  i
                );
              }),
              (d.prototype._add = function (t, e, n, i) {
                void 0 === e && (e = -1),
                  void 0 === n && (n = this._root),
                  (t.parent = t.parent ? t.parent.toString() : n),
                  0 < i && -1 !== e && (e += 1);
                e = u.prototype._add.call(this, t, e);
                if (Array.isArray(t.items))
                  for (var r = 0, o = t.items; r < o.length; r++) {
                    var a = o[r];
                    this.add(a, -1, t.id);
                  }
                return e;
              }),
              (d.prototype._copy = function (t, e, n, i, r) {
                if (
                  (void 0 === n && (n = this),
                  void 0 === i && (i = this._root),
                  !this.exists(t))
                )
                  return null;
                var o = this._childs[t];
                if (
                  (r && (e = -1 === e ? -1 : e + r),
                  n === this && !this.canCopy(t, i))
                )
                  return null;
                r = h.copyWithoutInner(this.getItem(t), { items: !0 });
                if ((n.exists(t) && (r.id = c.uid()), h.isTreeCollection(n))) {
                  if (
                    (this.exists(t) &&
                      ((r.parent = i),
                      n !== this &&
                        i === this._root &&
                        (r.parent = n.getRoot()),
                      n.add(r, e),
                      (t = r.id)),
                    o)
                  )
                    for (var a = 0, s = o; a < s.length; a++) {
                      var l = s[a].id,
                        u = this.getIndex(l);
                      "string" == typeof t && this.copy(l, u, n, t);
                    }
                  return t;
                }
                n.add(r, e);
              }),
              (d.prototype._move = function (t, e, n, i, r) {
                if (
                  (void 0 === n && (n = this),
                  void 0 === i && (i = this._root),
                  !this.exists(t))
                )
                  return null;
                if ((r && (e = -1 === e ? -1 : e + r), n !== this)) {
                  if (!h.isTreeCollection(n))
                    return (
                      n.add(h.copyWithoutInner(this.getItem(t)), e),
                      void this.remove(t)
                    );
                  var o = this.copy(t, e, n, i);
                  return this.remove(t), o;
                }
                if (!this.canCopy(t, i)) return null;
                (n = this.getParent(t)),
                  (o = this.getIndex(t)),
                  (o = this._childs[n].splice(o, 1)[0]);
                return (
                  (o.parent = i),
                  this._childs[n].length || delete this._childs[n],
                  this.haveItems(i) || (this._childs[i] = []),
                  -1 === e
                    ? (e = this._childs[i].push(o))
                    : this._childs[i].splice(e, 0, o),
                  this.events.fire(f.DataEvents.change, [
                    t,
                    "update",
                    this.getItem(t),
                  ]),
                  t
                );
              }),
              (d.prototype._reset = function (t) {
                if (t)
                  for (var e = 0, n = o(this._childs[t]); e < n.length; e++) {
                    var i = n[e];
                    this.remove(i.id);
                  }
                else {
                  u.prototype._reset.call(this);
                  var r = this._root;
                  (this._initChilds = null),
                    (this._childs = (((t = {})[r] = []), t));
                }
              }),
              (d.prototype._removeCore = function (e) {
                var t;
                this._pull[e] &&
                  ((t = this.getParent(e)),
                  (this._childs[t] = this._childs[t].filter(function (t) {
                    return t.id !== e;
                  })),
                  t === this._root ||
                    this._childs[t].length ||
                    delete this._childs[t],
                  this._initChilds &&
                    this._initChilds[t] &&
                    ((this._initChilds[t] = this._initChilds[t].filter(
                      function (t) {
                        return t.id !== e;
                      }
                    )),
                    t === this._root ||
                      this._initChilds[t].length ||
                      delete this._initChilds[t]),
                  this._fastDeleteChilds(this._childs, e),
                  this._initChilds &&
                    this._fastDeleteChilds(this._initChilds, e));
              }),
              (d.prototype._addToOrder = function (t, e, n) {
                var i = this._childs,
                  r = this._initChilds,
                  o = e.parent;
                l(i, (this._pull[e.id] = e), o, n), r && l(r, e, o, n);
              }),
              (d.prototype._parse_data = function (t, e) {
                void 0 === e && (e = this._root);
                for (var n = 0, i = t; n < i.length; n++) {
                  var r = i[n];
                  this.config.init && (r = this.config.init(r)),
                    "object" != typeof r && (r = { value: r }),
                    (r.id = r.id ? r.id.toString() : c.uid()),
                    (r.parent =
                      void 0 === r.parent || (r.parent && r.$items)
                        ? e
                        : r.parent.toString()),
                    (this._pull[r.id] = r),
                    this._childs[r.parent] || (this._childs[r.parent] = []),
                    this._childs[r.parent].push(r),
                    r.items &&
                      r.items instanceof Object &&
                      this._parse_data(r.items, r.id);
                }
              }),
              (d.prototype._fastDeleteChilds = function (t, e) {
                if ((this._pull[e] && delete this._pull[e], t[e])) {
                  for (var n = 0; n < t[e].length; n++)
                    this._fastDeleteChilds(t, t[e][n].id);
                  delete t[e];
                }
              }),
              (d.prototype._recursiveFilter = function (e, n, t, i, r) {
                var o = this,
                  a = this._childs[t];
                if (a) {
                  var s,
                    l,
                    u = function (t) {
                      switch (n.type) {
                        case f.TreeFilterType.all:
                          return !0;
                        case f.TreeFilterType.level:
                          return i === n.level;
                        case f.TreeFilterType.leafs:
                          return !o.haveItems(t.id);
                      }
                    };
                  "function" == typeof e
                    ? ((s = function (t) {
                        return u(t) && e(t);
                      }),
                      (l = a.filter(s)).length && (r[t] = l))
                    : e.by &&
                      e.match &&
                      ((s = function (t) {
                        return (
                          u(t) &&
                          t[e.by] &&
                          -1 !==
                            t[e.by]
                              .toString()
                              .toLowerCase()
                              .indexOf(e.match.toString().toLowerCase())
                        );
                      }),
                      (l = a.filter(s)).length && (r[t] = l));
                  for (var c = 0, h = a; c < h.length; c++) {
                    var d = h[c];
                    this._recursiveFilter(e, n, d.id, i + 1, r);
                  }
                }
              }),
              (d.prototype._serialize = function (t, i) {
                var r = this;
                return (
                  void 0 === t && (t = this._root),
                  this.map(
                    function (t) {
                      var e,
                        n = {};
                      for (e in t)
                        "parent" !== e && "items" !== e && (n[e] = t[e]);
                      return (
                        i && (n = i(n)),
                        r.haveItems(t.id) && (n.items = r._serialize(t.id, i)),
                        n
                      );
                    },
                    t,
                    !1
                  )
                );
              }),
              d);
          function d(t, e) {
            var n = u.call(this, t, e) || this;
            n._childs = {};
            e = n._root = (t && t.rootId) || "_ROOT_" + c.uid();
            return (
              (n._childs = (((t = {})[e] = []), t)), (n._initChilds = null), n
            );
          }
          e.TreeCollection = r;
        },
        function (t, e, n) {
          "use strict";
          var d =
            (this && this.__assign) ||
            function () {
              return (d =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }).apply(this, arguments);
            };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var f = n(1),
            p = n(68),
            g = n(4),
            v = n(5);
          var i =
            ((r.prototype.setItem = function (t, e) {
              p.collectionStore.setItem(t, e);
            }),
            (r.prototype.onMouseDown = function (t, e, n) {
              var i, r, o, a;
              (1 !== t.which && !t.targetTouches) ||
                (t.targetTouches
                  ? (document.addEventListener(
                      "touchmove",
                      this._onMouseMove,
                      !1
                    ),
                    document.addEventListener("touchend", this._onMouseUp, !1))
                  : (document.addEventListener("mousemove", this._onMouseMove),
                    document.addEventListener("mouseup", this._onMouseUp)),
                (r =
                  (i = f.locateNode(t, "dhx_id")) && i.getAttribute("dhx_id")),
                (o = f.locate(t, "dhx_widget_id")),
                e && e.includes(r) && 1 < e.length
                  ? ((this._transferData.source = e), (this._itemsForGhost = n))
                  : ((this._transferData.source = [r]),
                    (this._itemsForGhost = null)),
                r &&
                  o &&
                  ((e = (a = f.getBox(i)).left),
                  (n = a.top),
                  (a = (t.targetTouches ? t.targetTouches[0] : t).pageX),
                  (t = (t.targetTouches ? t.targetTouches[0] : t).pageY),
                  (this._transferData.initXOffset = a - e),
                  (this._transferData.initYOffset = t - n),
                  (this._transferData.x = a),
                  (this._transferData.y = t),
                  (this._transferData.componentId = o),
                  (this._transferData.start = r),
                  (this._transferData.item = i)));
            }),
            (r.prototype.isDrag = function () {
              return this._isDrag;
            }),
            (r.prototype._moveGhost = function (t, e) {
              this._transferData.ghost &&
                ((this._transferData.ghost.style.left =
                  t - this._transferData.initXOffset + "px"),
                (this._transferData.ghost.style.top =
                  e - this._transferData.initYOffset + "px"));
            }),
            (r.prototype._removeGhost = function () {
              document.body.removeChild(this._transferData.ghost);
            }),
            (r.prototype._onDrop = function (t) {
              var e, n, i, r, o;
              this._canMove &&
                ((o = (r = this._transferData).start),
                (n = r.source),
                (e = r.target),
                (i = r.dropComponentId),
                (n = {
                  start: o,
                  source: n,
                  target: e,
                  dropPosition: r.dropPosition,
                }),
                (i = (r = p.collectionStore.getItem(i)) && r.config),
                r &&
                  "source" !== i.dragMode &&
                  r.events.fire(g.DragEvents.beforeDrop, [n, t]) &&
                  ((r = { id: e, component: r }),
                  (o = { id: o, component: this._transferData.component }),
                  this._move(o, r),
                  r.component.events.fire(g.DragEvents.afterDrop, [n, t]))),
                this._endDrop(t);
            }),
            (r.prototype._onDragStart = function (t, e, n) {
              var i = p.collectionStore.getItem(e),
                r = i.config,
                o = this._transferData,
                e = { start: o.start, source: o.source, target: o.target };
              if ("target" === r.dragMode) return null;
              o = (function (t, e, n) {
                void 0 === n && (n = !1);
                var i = t.getBoundingClientRect(),
                  r = document.createElement("div"),
                  o = t.cloneNode(!0);
                return (
                  (o.style.width = i.width + "px"),
                  (o.style.height = i.height + "px"),
                  (o.style.maxHeight = i.height + "px"),
                  (o.style.fontSize = window.getComputedStyle(
                    t.parentElement
                  ).fontSize),
                  (o.style.opacity = "0.8"),
                  (o.style.fontSize = window.getComputedStyle(
                    t.parentElement
                  ).fontSize),
                  (n && e && e.length) || r.appendChild(o),
                  e &&
                    e.length &&
                    e.forEach(function (t, e) {
                      t = t.cloneNode(!0);
                      (t.style.width = i.width + "px"),
                        (t.style.height = i.height + "px"),
                        (t.style.maxHeight = i.height + "px"),
                        (t.style.top =
                          12 * (e + 1) - i.height - i.height * e + "px"),
                        (t.style.left = 12 * (e + 1) + "px"),
                        (t.style.opacity = "0.6"),
                        (t.style.zIndex = "" + (-e - 1)),
                        r.appendChild(t);
                    }),
                  (r.className = "dhx_drag-ghost"),
                  r
                );
              })(
                this._transferData.item,
                this._itemsForGhost,
                "column" === r.dragItem
              );
              return i.events.fire(g.DragEvents.beforeDrag, [e, n, o]) && t
                ? (i.events.fire(g.DragEvents.dragStart, [e, n]),
                  (this._isDrag = !0),
                  this._toggleTextSelection(!0),
                  (this._transferData.component = i),
                  (this._transferData.dragConfig = r),
                  o)
                : null;
            }),
            (r.prototype._onDrag = function (t) {
              var e = (t.targetTouches ? t.targetTouches[0] : t).clientX,
                n = (t.targetTouches ? t.targetTouches[0] : t).clientY,
                i = document.elementFromPoint(e, n),
                r = f.locate(i, "dhx_widget_id");
              if (r) {
                var o = this._transferData,
                  a = o.dropComponentId,
                  s = o.start,
                  l = o.source,
                  u = o.target,
                  c = o.componentId,
                  h = o.dropPosition,
                  e = p.collectionStore.getItem(r),
                  n = f.locate(i, "dhx_id");
                if (!n)
                  return (
                    this._cancelCanDrop(t),
                    (this._transferData.dropComponentId = r),
                    (this._transferData.target = null),
                    void this._canDrop(t)
                  );
                if ("complex" === e.config.dropBehaviour) {
                  o =
                    ((i = (o = t).clientY),
                    (o = f.locateNode(o))
                      ? ((o = o.childNodes[0].getBoundingClientRect()),
                        (i - o.top) / o.height)
                      : null);
                  this._transferData.dropPosition =
                    o <= 0.25 ? "top" : 0.75 <= o ? "bottom" : "in";
                } else if (u === n && a === r) return;
                a = { id: s, component: this._transferData.component };
                "source" !== e.config.dragMode &&
                  (a.component.events.fire(g.DragEvents.dragOut, [
                    { start: s, source: l, target: u },
                    t,
                  ]),
                  r !== c ||
                  !v.isTreeCollection(a.component.data) ||
                  (v.isTreeCollection(a.component.data) &&
                    a.component.data.canCopy(a.id, n))
                    ? (this._cancelCanDrop(t),
                      (this._transferData.target = n),
                      (this._transferData.dropComponentId = r),
                      a.component.events.fire(g.DragEvents.dragIn, [
                        { start: s, source: l, target: u, dropPosition: h },
                        t,
                      ]) && this._canDrop(t))
                    : this._cancelCanDrop(t));
              } else this._canMove && this._cancelCanDrop(t);
            }),
            (r.prototype._move = function (e, n) {
              var i = e.component.data,
                r = n.component.data,
                o = 0,
                a = n.id,
                t = v.isTreeCollection(r)
                  ? n.component.config.dropBehaviour
                  : void 0,
                s = e.component.config.columns ? e.component.config : void 0;
              if (
                s &&
                ("complex" === s.dragItem || "column" === s.dragItem) &&
                s.columns
                  .map(function (t) {
                    return t.id;
                  })
                  .filter(function (t) {
                    return t === e.id || t === n.id;
                  }).length &&
                e.component === n.component &&
                e.id !== n.id
              ) {
                var l = e.component,
                  u = l.config.columns.map(function (t) {
                    return d({}, t);
                  }),
                  c = u.findIndex(function (t) {
                    return t.id === e.id;
                  }),
                  s = u.findIndex(function (t) {
                    return t.id === n.id;
                  });
                return (
                  u.splice(s, 0, u.splice(c, 1)[0]),
                  l.setColumns(u),
                  void l.paint()
                );
              }
              switch (t) {
                case "child":
                  break;
                case "sibling":
                  (a = r.getParent(a)), (o = r.getIndex(n.id) + 1);
                  break;
                case "complex":
                  var h = this._transferData.dropPosition;
                  "top" === h
                    ? ((a = r.getParent(a)), (o = r.getIndex(n.id)))
                    : "bottom" === h &&
                      ((a = r.getParent(a)), (o = r.getIndex(n.id) + 1));
                  break;
                default:
                  o = n.id
                    ? e.component === n.component &&
                      r.getIndex(e.id) < r.getIndex(n.id)
                      ? r.getIndex(n.id) - 1
                      : r.getIndex(n.id)
                    : -1;
              }
              this._transferData.dragConfig.dragCopy
                ? this._transferData.source instanceof Array &&
                  1 < this._transferData.source.length
                  ? this._transferData.source.map(function (t) {
                      i.copy(t, o, r, a), -1 < o && o++;
                    })
                  : i.copy(e.id, o, r, a)
                : this._transferData.source instanceof Array &&
                  1 < this._transferData.source.length
                ? this._transferData.source.map(function (t) {
                    i.move(t, o, r, a), -1 < o && o++;
                  })
                : i.move(e.id, o, r, a);
            }),
            (r.prototype._endDrop = function (t) {
              var e;
              this._toggleTextSelection(!1),
                this._transferData.component &&
                  ((e = {
                    start: (e = this._transferData).start,
                    source: e.source,
                    target: e.target,
                  }),
                  this._transferData.component.events.fire(
                    g.DragEvents.afterDrag,
                    [e, t]
                  )),
                this._cancelCanDrop(t),
                (this._canMove = !0),
                (this._transferData = {}),
                (this._transferData.target = null),
                (this._transferData.dropComponentId = null);
            }),
            (r.prototype._cancelCanDrop = function (t) {
              (this._canMove = !1), (this._isDrag = !1);
              var e = this._transferData,
                n = e.start,
                i = e.source,
                r = e.target,
                e = e.dropComponentId,
                i = { start: n, source: i, target: r },
                e = p.collectionStore.getItem(e);
              e && r && e.events.fire(g.DragEvents.cancelDrop, [i, t]),
                (this._transferData.dropComponentId = null),
                (this._transferData.target = null);
            }),
            (r.prototype._canDrop = function (t) {
              this._canMove = !0;
              var e = this._transferData,
                n = {
                  start: e.start,
                  source: e.source,
                  target: e.target,
                  dropPosition: e.dropPosition,
                },
                e = p.collectionStore.getItem(
                  this._transferData.dropComponentId
                );
              e &&
                this._transferData.target &&
                e.events.fire(g.DragEvents.canDrop, [n, t]);
            }),
            (r.prototype._toggleTextSelection = function (t) {
              t
                ? document.body.classList.add("dhx_no-select")
                : document.body.classList.remove("dhx_no-select");
            }),
            r);
          function r() {
            var s = this;
            (this._transferData = {}),
              (this._canMove = !0),
              (this._isDrag = !1),
              (this._onMouseMove = function (t) {
                if (s._transferData.start) {
                  var e = (t.targetTouches ? t.targetTouches[0] : t).pageX,
                    n = (t.targetTouches ? t.targetTouches[0] : t).pageY,
                    i = s._transferData,
                    r = i.x,
                    o = i.y,
                    a = i.start,
                    i = i.componentId;
                  if (!s._transferData.ghost) {
                    if (Math.abs(r - e) < 3 && Math.abs(o - n) < 3) return;
                    i = s._onDragStart(a, i, t);
                    if (!i) return void s._endDrop(t);
                    (s._transferData.ghost = i),
                      document.body.appendChild(s._transferData.ghost);
                  }
                  s._moveGhost(e, n), s._onDrag(t);
                }
              }),
              (this._onMouseUp = function (t) {
                s._transferData.x &&
                  (s._transferData.ghost
                    ? (s._removeGhost(), s._onDrop(t))
                    : s._endDrop(t),
                  t.targetTouches
                    ? (document.removeEventListener(
                        "touchmove",
                        s._onMouseMove
                      ),
                      document.removeEventListener("touchend", s._onMouseUp))
                    : (document.removeEventListener(
                        "mousemove",
                        s._onMouseMove
                      ),
                      document.removeEventListener("mouseup", s._onMouseUp)));
              });
          }
          n = window.dhxHelpers = window.dhxHelpers || {};
          (n.dragManager = n.dragManager || new i()),
            (e.dragManager = n.dragManager);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i =
            ((r.prototype.setItem = function (t, e) {
              this._store[t] = e;
            }),
            (r.prototype.getItem = function (t) {
              return this._store[t] || null;
            }),
            r);
          function r() {
            this._store = {};
          }
          var o = (window.dhxHelpers = window.dhxHelpers || {});
          (o.collectionStore = o.collectionStore || new i()),
            (e.collectionStore = o.collectionStore);
        },
        function (t, l, u) {
          "use strict";
          (function (t) {
            var i,
              e =
                (this && this.__extends) ||
                ((i = function (t, e) {
                  return (i =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    })(t, e);
                }),
                function (t, e) {
                  function n() {
                    this.constructor = t;
                  }
                  i(t, e),
                    (t.prototype =
                      null === e
                        ? Object.create(e)
                        : ((n.prototype = e.prototype), new n()));
                });
            Object.defineProperty(l, "__esModule", { value: !0 });
            var r,
              n = u(10),
              o = u(2),
              a = u(20),
              e =
                ((r = n.DataProxy),
                e(s, r),
                (s.prototype.load = function () {
                  var e = this;
                  return new t(function (t) {
                    e._timeout
                      ? (clearTimeout(e._timeout),
                        (e._timeout = setTimeout(function () {
                          a.ajax.get(e.url, { responseType: "text" }).then(t),
                            (e._cooling = !0);
                        }, e.config.delay)),
                        e._cooling && (t(null), (e._cooling = !1)))
                      : (a.ajax.get(e.url, { responseType: "text" }).then(t),
                        (e._cooling = !0),
                        (e._timeout = setTimeout(function () {})));
                  });
                }),
                s);
            function s(t, e) {
              var n = r.call(this, t) || this;
              return (
                (n.config = o.extend(
                  { from: 0, limit: 50, delay: 50, prepare: 0 },
                  e
                )),
                n.updateUrl(t, { from: n.config.from, limit: n.config.limit }),
                n
              );
            }
            l.LazyDataProxy = e;
          }.call(this, u(7)));
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(8),
            i = n(30),
            o = n(4),
            n =
              ((a.prototype.getId = function () {
                return this._selected;
              }),
              (a.prototype.getItem = function () {
                return this._selected
                  ? this._data.getItem(this._selected)
                  : null;
              }),
              (a.prototype.remove = function (t) {
                return (
                  !(t = t || this._selected) ||
                  (!!this.events.fire(i.SelectionEvents.beforeUnSelect, [t]) &&
                    (this._data.update(t, { $selected: !1 }, !0),
                    (this._selected = null),
                    this.events.fire(i.SelectionEvents.afterUnSelect, [t]),
                    !0))
                );
              }),
              (a.prototype.add = function (t) {
                this._selected !== t &&
                  !this.config.disabled &&
                  this._data.exists(t) &&
                  (this.remove(), this._addSingle(t));
              }),
              (a.prototype.enable = function () {
                this.config.disabled = !1;
              }),
              (a.prototype.disable = function () {
                this.remove(), (this.config.disabled = !0);
              }),
              (a.prototype._addSingle = function (t) {
                this.events.fire(i.SelectionEvents.beforeSelect, [t]) &&
                  ((this._selected = t),
                  this._data.update(t, { $selected: !0 }, !0),
                  this.events.fire(i.SelectionEvents.afterSelect, [t]));
              }),
              a);
          function a(t, e, n) {
            var i = this;
            (this.events = n || new r.EventSystem(this)),
              (this._data = e),
              (this.config = t),
              this._data.events.on(o.DataEvents.removeAll, function () {
                i._selected = null;
              }),
              this._data.events.on(o.DataEvents.change, function () {
                var t;
                !i._selected ||
                  ((t = i._data.getNearId(i._selected)) !== i._selected &&
                    ((i._selected = null), t && i.add(t)));
              });
          }
          e.Selection = n;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              },
            a =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                  t += arguments[e].length;
                for (var i = Array(t), r = 0, e = 0; e < n; e++)
                  for (
                    var o = arguments[e], a = 0, s = o.length;
                    a < s;
                    a++, r++
                  )
                    i[r] = o[a];
                return i;
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var s,
            h = n(0),
            l = n(6),
            u = n(11),
            c = n(3),
            r =
              ((s = u.BaseShape),
              r(d, s),
              (d.prototype.isConnector = function () {
                return !0;
              }),
              (d.prototype.getMetaInfo = function () {
                var t = l.getMeta([
                  { type: "grid", label: c.default.gridStep },
                ]);
                return (
                  t.push({
                    id: "strokeProps",
                    type: "stroke",
                    label: "Stroke",
                    connector: !0,
                  }),
                  t
                );
              }),
              (d.prototype.setDefaults = function (t) {
                return (
                  (t.connectType = t.connectType || "elbow"),
                  (t.stroke = t.stroke || "#CCC"),
                  (t.strokeWidth = t.strokeWidth || 2),
                  (t.cornersRadius = t.cornersRadius || 0),
                  t
                );
              }),
              (d.prototype.render = function () {
                var t = this.config.$selected;
                this.id = this.config.id;
                var e = this._getPoints(),
                  n = this._getArrowLine() || [];
                return h.sv(
                  "g",
                  {
                    dhx_id: this.config.id || "",
                    _key: this.config.id,
                    class: "dhx_diagram_connector " + this.getCss(),
                  },
                  a(
                    [
                      h.sv("path", {
                        d: e,
                        fill: "none",
                        class:
                          "dhx_diagram_line " +
                          (t ? "dhx_diagram_line--selected" : ""),
                        "stroke-dasharray": this._getType(),
                        "stroke-linejoin": "round",
                        stroke: this.config.stroke,
                        "stroke-width": this.config.strokeWidth,
                      }),
                    ],
                    n
                  )
                );
              }),
              (d.prototype.getBox = function () {
                var t = o({}, this.config),
                  e = t.points.reduce(
                    function (t, e) {
                      return (
                        (t.x = Math.max(t.x, e.x)),
                        (t.y = Math.max(t.y, e.y)),
                        t
                      );
                    },
                    { x: 0, y: 0 }
                  ),
                  n = e.x - t.x,
                  i = e.y - t.y,
                  e = t.x,
                  n = e + n,
                  t = t.y;
                return { left: e, right: n, top: t, bottom: t + i };
              }),
              (d.prototype._getType = function () {
                if (
                  (this.config.strokeType &&
                    (this.config.type = this.config.strokeType),
                  this.config.type)
                )
                  switch (this.config.type) {
                    case "line":
                      return "";
                    case "dash":
                      return "5, 5";
                    default:
                      return "";
                  }
              }),
              (d.prototype._getPoints = function () {
                return this._getStringPoints();
              }),
              (d.prototype._getStringPoints = function () {
                return (
                  (this.config.width = Math.abs(
                    this.config.points[this.config.points.length - 1].x -
                      this.config.points[0].x
                  )),
                  (this.config.height = Math.abs(
                    this.config.points[this.config.points.length - 1].y -
                      this.config.points[0].y
                  )),
                  (this.config.x = this.config.points[0].x),
                  (this.config.y = this.config.points[0].y),
                  "M " +
                    this.config.x +
                    "," +
                    this.config.y +
                    this.config.points
                      .map(function (t) {
                        return t.x1 && t.y1
                          ? "Q" + t.x1 + "," + t.y1 + " " + t.x + "," + t.y
                          : "L " + t.x + "," + t.y;
                      })
                      .join(" ")
                );
              }),
              (d.prototype._getArrowLine = function () {
                var t = this.config.points,
                  e = this.config.backArrow,
                  n = this.config.forwardArrow;
                if (e || n)
                  return [
                    e
                      ? "straight" === this.config.connectType
                        ? this._angleArrow(t[1], t[0])
                        : this._arrow(t[1], t[0])
                      : null,
                    n
                      ? "straight" === this.config.connectType
                        ? this._angleArrow(t[t.length - 2], t[t.length - 1])
                        : this._arrow(t[t.length - 2], t[t.length - 1])
                      : null,
                  ];
              }),
              (d.prototype._angleArrow = function (t, e) {
                var n = t.x - e.x,
                  i = t.y - e.y,
                  r = 1 / Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)),
                  o = n * r,
                  a = i * r,
                  s = e.x,
                  l = e.y,
                  u = e.x - 5,
                  c = e.y - 5,
                  n = e.x + 5,
                  i = e.y - 5,
                  r = Math.atan((e.x - t.x) / (e.y - t.y)) * (-180 / 3.14);
                return (
                  t.y > e.y && (r += 180),
                  h.sv("path", {
                    d:
                      "M" +
                      u +
                      "," +
                      c +
                      " L" +
                      s +
                      "," +
                      l +
                      " L" +
                      n +
                      "," +
                      i +
                      " Z",
                    class: "dhx_diagram_arrow",
                    "shape-rendering": "auto",
                    stroke: this.config.stroke,
                    fill: this.config.stroke,
                    transform:
                      "translate(" +
                      o +
                      " " +
                      a +
                      ") rotate(" +
                      r +
                      "," +
                      s +
                      "," +
                      l +
                      ")",
                  })
                );
              }),
              (d.prototype._arrow = function (t, e) {
                var n = t.x !== e.x,
                  i = (n ? t.x < e.x : t.y < e.y) ? 1 : -1,
                  r = e.x - (n ? i : 0),
                  o = e.y - (n ? 0 : i),
                  a = e.x - (n ? 7 * i : 5 * i),
                  s = e.y - (n ? 5 : 7 * i),
                  t = e.x + (n ? -7 * i : 5 * i),
                  i = e.y - (n ? -5 : 7 * i);
                return h.sv("path", {
                  d:
                    "M" +
                    a +
                    "," +
                    s +
                    " L" +
                    r +
                    "," +
                    o +
                    " L" +
                    t +
                    "," +
                    i +
                    " Z",
                  class: "dhx_diagram_arrow",
                  "shape-rendering": "auto",
                  stroke: this.config.stroke,
                  fill: this.config.stroke,
                });
              }),
              d);
          function d(t, e) {
            return s.call(this, t, e) || this;
          }
          e.Line = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o,
            a = n(0),
            s = n(3),
            l = n(6),
            n = n(36),
            r =
              ((o = n.OrgChartCard),
              r(u, o),
              (u.prototype.getMetaInfo = function () {
                return l.getMeta([
                  { type: "grid", label: s.default.gridStep },
                  { type: "color", label: s.default.color },
                  { type: "position", label: s.default.position },
                  { type: "size", label: s.default.size },
                  { type: "title", label: s.default.title },
                  { type: "text", label: s.default.text },
                  { type: "img", label: s.default.image },
                ]);
              }),
              (u.prototype.setDefaults = function (t, e) {
                var n = t.width,
                  i = t.height,
                  r = t.text,
                  o = t.title,
                  a = t.headerColor,
                  s = e.width ? parseFloat(e.width) : 210,
                  l = e.height ? parseFloat(e.height) : 90;
                return (
                  (t.width = n || s),
                  (t.height = i || l),
                  (t.title = "string" == typeof o ? o : e.title || ""),
                  (t.text = "string" == typeof r ? r : e.text || ""),
                  (t.headerColor = a || e.headerColor || ""),
                  t
                );
              }),
              (u.prototype.getCss = function () {
                return "dhx_diagram_image " + o.prototype.getCss.call(this);
              }),
              (u.prototype.getContent = function () {
                var t = this.config,
                  e = t.img,
                  n = t.headerColor,
                  i = t.title,
                  r = t.text,
                  o = t.width,
                  t = e ? "" + e : null;
                return [
                  a.el("img.dhx_orgcard__img", {
                    style: { backgroundColor: e ? null : n },
                    src: t,
                  }),
                  a.el("div.dhx_orgcard__title", i),
                  a.el(
                    "div.dhx_orgcard__text",
                    {
                      class: i ? "" : "dhx_content_text-alone",
                      style: { maxWidth: o - 80, marginLeft: 80 },
                    },
                    r
                  ),
                ];
              }),
              u);
          function u() {
            return (null !== o && o.apply(this, arguments)) || this;
          }
          e.OrgChartImgCard = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++)
                      for (var r in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var a,
            s = n(0),
            l = n(6),
            u = n(11),
            y = n(1),
            c = n(17),
            h = n(3),
            r =
              ((a = u.BaseShape),
              r(d, a),
              (d.prototype.render = function () {
                var t = this.getCoords(this.config),
                  e = this.config,
                  n = e.id,
                  i = e.angle,
                  r = e.text,
                  e = {
                    fontSize: e.fontSize + "px",
                    fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
                    lineHeight: e.lineHeight + "px",
                    fontWeight: e.fontWeight,
                    fontStyle: e.fontStyle,
                  };
                return (
                  this._oldText &&
                    this.config.text !== this._oldText &&
                    ((e = y.getStrSize(r, e)),
                    (this.config.width = e.width + 4),
                    (this.config.height = e.height + 2)),
                  (this._oldText = this.config.text),
                  s.el(
                    "div",
                    {
                      _key: n,
                      class: "dhx_diagram_flow_item " + this.getCss(),
                      dhx_id: n,
                      zIndex: 2,
                      style: o(
                        {
                          position: "absolute",
                          top: t.y,
                          left: t.x,
                          transform: "rotate(" + (i || 0) + "deg)",
                        },
                        c.getShapeCss(this.config)
                      ),
                    },
                    [this.getContent()]
                  )
                );
              }),
              (d.prototype.getMetaInfo = function () {
                var t = l.getMeta([
                  { type: "grid", label: h.default.gridStep },
                  { type: "arrange", label: h.default.arrange },
                  { type: "text", label: h.default.text },
                ]);
                return (
                  t.push({
                    id: "textProps",
                    type: "textProps",
                    label: h.default.textProps,
                    alignments: !1,
                  }),
                  t
                );
              }),
              (d.prototype.setDefaults = function (t, e) {
                var n = t.width,
                  i = t.height,
                  r = t.fontColor,
                  o = t.fontSize,
                  a = t.fontStyle,
                  s = t.textAlign,
                  l = t.lineHeight,
                  u = t.textVerticalAlign,
                  c = t.text,
                  h = t.fontWeight,
                  d = t.x,
                  f = t.y,
                  p = e.lineHeight ? parseFloat(e.lineHeight) : 14,
                  g = e.fontSize ? parseFloat(e.fontSize) : 14,
                  v = {
                    fontSize: (o || g) + "px",
                    fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
                    lineHeight: (l || p) + "px",
                    fontWeight: h,
                    fontStyle: a,
                  },
                  h = y.getStrSize(c, v),
                  v = e.width ? parseFloat(e.width) : h.width + 4,
                  h = e.height ? parseFloat(e.height) : h.height + 2;
                return (
                  (t.width = n || v),
                  (t.height = i || h),
                  (t.lineHeight = l || p),
                  (t.fontSize = o || g),
                  (t.text = c || e.text || ""),
                  (t.fontColor = r || e.fontColor || "rgba(0,0,0,0.70)"),
                  (t.textAlign = s || e.textAlign || "center"),
                  (t.fontStyle = a || e.fontStyle || "normal"),
                  (t.textVerticalAlign = u || e.textVerticalAlign || "center"),
                  (t.x = d || 0),
                  (t.y = f || 0),
                  t
                );
              }),
              (d.prototype.getContent = function () {
                return s.el("span.dhx_item_shape", this.config.text);
              }),
              d);
          function d(t, e) {
            e = a.call(this, t, e) || this;
            return (e.config = t), (e.id = e.config.id), e;
          }
          e.DiagramTextShape = r;
        },
        function (t, e, n) {
          "use strict";
          var i,
            r =
              (this && this.__extends) ||
              ((i = function (t, e) {
                return (i =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(t, e);
              }),
              function (t, e) {
                function n() {
                  this.constructor = t;
                }
                i(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o,
            a = n(0),
            s = n(1),
            l = n(12),
            n = n(9),
            r =
              ((o = n.View),
              r(u, o),
              (u.prototype.render = function (t, e) {
                var n = this.config,
                  i = this._getIcons(t, n.icons),
                  r = n.iconWidth * i.length + n.gap,
                  n = this._getCoords(t, r / e.scale, n.height / e.scale);
                return a.el(
                  "div",
                  {
                    class: "dhx_popup_toolbar",
                    style: {
                      display: this._hidden ? "none" : "block",
                      maxHeight: this.config.height,
                      width: r,
                      top: (n.y - e.top) * e.scale,
                      left: (n.x - e.left) * e.scale,
                    },
                    onclick: this._handlers.onclick,
                  },
                  [a.el("div", { class: "dhx_item_toolbar" }, i)]
                );
              }),
              (u.prototype.hide = function () {
                (this._hidden = !0), this.paint();
              }),
              (u.prototype.show = function () {
                (this._hidden = !1), this.paint();
              }),
              (u.prototype._getIcons = function (t, e) {
                for (var n = [], i = 0; i < e.length; i++) {
                  var r,
                    o = e[i];
                  (o.check && !o.check(t)) ||
                    ((r = o.css ? o.css(t) : ""),
                    (r = { _key: o.id, class: "dhx_icon " + r, dhx_id: o.id }),
                    "string" ==
                    typeof (o =
                      "function" == typeof o.content ? o.content(t) : o.content)
                      ? ((r[".innerHTML"] = o), n.push(a.el("div", r)))
                      : n.push(a.el("div", r, [o])));
                }
                return n;
              }),
              (u.prototype._getCoords = function (t, e, n) {
                if (t.$shape.isConnector())
                  return this._pressCoords
                    ? {
                        x: this._pressCoords.x - 50,
                        y: this._pressCoords.y - 50,
                      }
                    : { x: t.points[0].x, y: t.points[0].y };
                t = t.$shape.getBox();
                return {
                  x: t.right / 2 + t.left / 2 - e / 2,
                  y: t.top - n - 8,
                };
              }),
              u);
          function u(t, e) {
            var i =
              o.call(this, null, {
                height: 50,
                iconWidth: 30,
                gap: 16,
                icons: e,
              }) || this;
            return (
              (i.events = t),
              (i._handlers = {
                onclick: s.eventHandler(
                  function (t) {
                    return s.locate(t);
                  },
                  {
                    dhx_icon: function (t, e) {
                      i.events.fire(l.DiagramEvents.shapeIconClick, [e, t]);
                    },
                  }
                ),
              }),
              i.events.on(l.DiagramEvents.shapeMouseDown, function (t, e, n) {
                i._pressCoords = n;
              }),
              i.events.on(l.DiagramEvents.emptyAreaClick, function () {
                i._pressCoords = null;
              }),
              i
            );
          }
          e.Toolbar = r;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var l = n(76),
            u = n(77),
            c = n(78),
            s = n(38),
            n =
              ((i.prototype.layout = function (t, e) {
                if (((t.routes = new u.default()), !e.full)) {
                  var n = h(t, e);
                  return (
                    e.preserveLocation || d(n.n, n.size),
                    f(n.mx, n.n, n.n, n.size),
                    n.n,
                    t.setGlobalBox(),
                    t
                  );
                }
                var i = c.split(t);
                if (1 == i.length && null !== i[0].root)
                  return new l.default().layout(i[0].g, e);
                (t = i[0].g).routes = new u.default();
                var r,
                  o,
                  a,
                  s,
                  n = h(t, e);
                return (
                  e.preserveLocation || d(n.n, n.size),
                  f(n.mx, n.n, n.n, n.size),
                  n.n,
                  e.full &&
                    ((function (h, t, e, d) {
                      e.length,
                        e.forEach(function (t) {
                          return (t.iss = "");
                        });
                      var n = []
                        .concat(e)
                        .filter(function (t) {
                          return 3 <= t.links.length;
                        })
                        .sort(function (t, e) {
                          return t.links.length > e.links.length
                            ? -1
                            : t.links.length == e.links.length
                            ? 0
                            : 1;
                        });
                      n
                        .map(function (r) {
                          var o = [];
                          return (
                            r.links.forEach(function (t) {
                              var e =
                                  Math.atan2(t.x - r.x, t.y - r.y) + Math.PI,
                                n = 2 * Math.ceil(e / (2 * p)) * p,
                                i = 2 * Math.floor(e / (2 * p)) * p;
                              o.push([t, n, Math.abs(e - n)]),
                                o.push([t, i, Math.abs(e - i)]);
                            }),
                            o.sort(function (t, e) {
                              return t[2] > e[2] ? 1 : -1;
                            }),
                            [r, o]
                          );
                        })
                        .forEach(function (t) {
                          var e = t[0],
                            n = t[1],
                            i = e.x,
                            r = e.y;
                          (e.x = Math.round(e.x / d) * d),
                            (e.y = Math.round(e.y / d) * d);
                          for (var o = 0; o < n.length; o++) {
                            var a,
                              s,
                              l,
                              u = n[o],
                              c = u[0];
                            h.getRoute(e.id, c.id) ||
                              ((a = (l = v(e, c, u[1], d, i, r))[0]),
                              (s = l[1]),
                              (u = l[2]),
                              (l = l[3]),
                              h.hasRoute(e.id, u, l) ||
                                h.isAligned(c.id) ||
                                ((c.x += a),
                                (c.y += s),
                                h.addRoute(e.id, c.id, u, l)));
                          }
                        }),
                        f(
                          t,
                          e,
                          e.filter(function (t) {
                            return !h.isAligned(t.id);
                          }),
                          d
                        ),
                        n.forEach(function (e) {
                          h.isAligned(e.id) ||
                            ((e.x = Math.round(e.x / d) * d),
                            (e.y = Math.round(e.y / d) * d)),
                            e.links.forEach(function (t) {
                              2 == t.links.length && g(e, t, h, d);
                            });
                        }),
                        0 === n.length &&
                          ((n = e[0]),
                          ((e = e[0].links[0]).x = Math.round(e.x / d) * d),
                          (e.y = Math.round(e.y / d) * d),
                          g(n, e, h, d));
                    })(t.routes, n.mx, n.n, n.size),
                    (r = t),
                    (o = n.mx),
                    (i = i.slice(1).sort(x)),
                    (a = n.size),
                    (s = r.getNodes().length),
                    i.forEach(function (t) {
                      var e = t.g,
                        n = t.root;
                      new l.default().layout(e, { root: e.getNodes()[0].id });
                      var u,
                        c,
                        h,
                        d,
                        f,
                        p,
                        i =
                          ((u = o),
                          (c = r),
                          (h = e),
                          (d = n),
                          (f = a),
                          (p = s),
                          y
                            .map(function (t) {
                              if (
                                !t[2] &&
                                !t[3] &&
                                c.routes.hasRoute(d, t[0], t[1])
                              )
                                return null;
                              var e = h.copy(),
                                n = c.copy(),
                                i = e.getRoot(),
                                r = n.hash[d];
                              e.rotate({ x: -t[0], y: t[1] });
                              var o,
                                a = e.getBox(),
                                s = a[0][1] - a[0][0],
                                l = a[1][1] - a[1][0];
                              !(function (t, e, n, i, r, o, a, s) {
                                var l,
                                  u,
                                  c,
                                  h,
                                  d = e.x + (s[2] || s[0]) * a,
                                  f = e.y + (s[3] || s[1]) * a;
                                if (
                                  m(
                                    t,
                                    d - a / 2,
                                    d + a / 2,
                                    f - a / 2,
                                    f + a / 2
                                  )
                                )
                                  return _(
                                    t,
                                    d - (a / 2) * s[0],
                                    f - (a / 2) * s[1],
                                    n,
                                    i,
                                    s,
                                    a
                                  );
                                if ((s[0] ? n : i) / a - 1 <= 0) return;
                                var e = 0.45 * a;
                                e = s[0]
                                  ? ((u = d + (a / 2) * s[0]),
                                    (c = u + n * s[0]),
                                    (h = f - i / 2 - e - o) + i + 2 * e)
                                  : ((c = (u = d - n / 2 - e - r) + n + 2 * e),
                                    (h = f + (a / 2) * s[1]),
                                    h + i * s[1]);
                                e < h && ((h = (l = [e, h])[0]), (e = l[1]));
                                c < u && ((u = (l = [c, u])[0]), (c = l[1]));
                                m(t, u, c, h, e) && _(t, d, f, n, i, s, a);
                              })(
                                n,
                                r,
                                s,
                                l,
                                i.x - a[0][0] - s / 2,
                                i.y - a[1][0] - l / 2,
                                f,
                                t
                              ),
                                (o = n),
                                (s = e),
                                (a = i),
                                (l = f),
                                (e = t),
                                (r = (i = r).x + l * (e[0] || e[2]) - a.x),
                                (a = i.y + l * (e[1] || e[3]) - a.y),
                                s.translate({ x: r, y: a }),
                                o.importNodes(s.getNodes());
                              s = (function (t, e) {
                                for (
                                  var n, i = e.length, r = 0, o = 0;
                                  o < i;
                                  o++
                                ) {
                                  n = 0;
                                  for (
                                    var a,
                                      s,
                                      l,
                                      u,
                                      c,
                                      h = e[o],
                                      d = t[h.isn],
                                      f = 0;
                                    f < i;
                                    f++
                                  )
                                    h.isn != f &&
                                      ((c = e[f]),
                                      (a = d[c.isn]),
                                      (s = 0.5 / (a * a)),
                                      (l = h.x - c.x),
                                      (u = h.y - c.y),
                                      (c = Math.sqrt(
                                        Math.pow(l, 2) + Math.pow(u, 2)
                                      )) &&
                                        ((n += s * (l - (a * l) / c)),
                                        (n += s * (u - (a * u) / c))));
                                  r += Math.sqrt(
                                    Math.pow(n, 2) + Math.pow(0, 2)
                                  );
                                }
                                return r;
                              })(u, n.getNodes().slice(0, p));
                              return { g: n, s: s, dir: t };
                            })
                            .reduce(function (t, e) {
                              return !t || (e && e.s < t.s) ? e : t;
                            }));
                      if (i) {
                        r = i.g;
                        t = e.getRoot().id;
                        return (
                          i.dir[2] ||
                            i.dir[3] ||
                            r.routes.addRoute(
                              n,
                              e.getRoot().id,
                              i.dir[0],
                              i.dir[1]
                            ),
                          r.hash[n].links.push(r.hash[t]),
                          void r.hash[t].links.push(r.hash[n])
                        );
                      }
                      console.log("Can't position sub tree");
                    }),
                    (t = r)),
                  t.setGlobalBox(),
                  t
                );
              }),
              i);
          function i() {}
          function h(t, e) {
            var n = t.getNodes(),
              i = 0;
            return (
              n.forEach(function (t, e) {
                (t.isn = e), (i += t.w + t.h);
              }),
              (i = Math.round(i / (2 * n.length))),
              e.itemPadding ? (i += e.itemPadding) : (i *= 2),
              {
                n: n,
                mx: (function (t) {
                  for (var e = [], n = t.getNodes(), i = 0; i < n.length; i++) {
                    var r = (e[i] = []);
                    (r[n[i].isn] = 0),
                      (function (t, e, n, i) {
                        var r = [t],
                          o = [];
                        for (; r.length; ) {
                          for (var a = 0; a < r.length; a++)
                            for (var s = r[a], l = 0; l < s.links.length; l++) {
                              var u = s.links[l],
                                c = u.isn;
                              c == n || e[c] || ((e[c] = i), o.push(u));
                            }
                          i++, (r = o), (o = []);
                        }
                      })(n[i], r, i, 1);
                  }
                  return e;
                })(t),
                size: i,
              }
            );
          }
          function d(t, e) {
            var n = (2 * Math.PI) / t.length,
              i = 0,
              r = 5 * e;
            t.forEach(function (t, e) {
              (t.x = Math.round(Math.cos(i) * r)),
                (t.y = Math.round(Math.sin(i) * r)),
                (i += n);
            });
          }
          function f(t, e, n, i) {
            for (var r = 0; r++ < 100; ) {
              var o = (function (t, e, n, i) {
                  for (
                    var r,
                      o,
                      a = 0,
                      s = 0,
                      l = 0,
                      u = 0,
                      c = e.length,
                      h = n.length,
                      d = 0;
                    d < h;
                    d++
                  ) {
                    o = r = 0;
                    for (var f = n[d], p = t[f.isn], g = 0; g < c; g++)
                      f.isn != g &&
                        ((m = 0.5 / ((_ = p[(y = e[g]).isn]) * _)),
                        (x = f.x - y.x),
                        (b = f.y - y.y),
                        (M = Math.sqrt(Math.pow(x, 2) + Math.pow(b, 2))) &&
                          ((r += m * (x - (i * _ * x) / M)),
                          (o += m * (b - (i * _ * b) / M))));
                    var v = Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
                    s < v && ((a = f.isn), (s = v), (l = r), (u = o));
                  }
                  for (
                    var y,
                      _,
                      m,
                      x,
                      b,
                      w,
                      k,
                      M,
                      D,
                      O = 0,
                      S = 0,
                      C = 0,
                      E = e[a],
                      P = t[a],
                      g = 0;
                    g < c;
                    g++
                  )
                    a != g &&
                      ((m = 0.5 / ((_ = P[(y = e[g]).isn]) * _)),
                      (w = (x = E.x - y.x) * x),
                      (k = (b = E.y - y.y) * b),
                      (M = Math.sqrt(Math.pow(w + k, 3))) &&
                        ((O += m * (1 - (i * _ * k) / M)),
                        (S += (m * i * _ * b * x) / M),
                        (C += m * (1 - (i * _ * w) / M))));
                  return [
                    a,
                    s,
                    (D =
                      (-l / O + (S * u) / (C * O)) / (1 + (S * S) / (C * O))),
                    (-u - S * D) / C,
                  ];
                })(t, e, n, i),
                a = o[0],
                s = o[1],
                l = o[2],
                o = o[3];
              if (s < 10) break;
              (e[a].x += l), (e[a].y += o);
            }
          }
          e.default = n;
          var p = Math.PI / 4;
          function g(t, e, n, i) {
            for (;;) {
              var r = e.links[0];
              if (
                (r == t && (r = e.links[1]), (t = e), 2 < (e = r).links.length)
              )
                break;
              for (
                var o = Math.atan2(e.x - t.x, e.y - t.y) + Math.PI,
                  a = 2 * Math.ceil(o / (2 * p)) * p,
                  r = 2 * Math.floor(o / (2 * p)) * p,
                  s = Math.abs(o - a) < Math.abs(o - r) ? [a, r] : [r, a],
                  l = 0;
                l < s.length;
                l++
              ) {
                var u = v(t, e, s[l], i, t.x, t.y),
                  c = u[0],
                  h = u[1],
                  d = u[2],
                  u = u[3];
                if (!n.hasRoute(t.id, d, u)) {
                  if (n.isAligned(e.id)) return;
                  (e.x += c), (e.y += h), n.addRoute(t.id, e.id, d, u);
                  break;
                }
              }
            }
          }
          function v(t, e, n, i, r, o) {
            return n <= p || 7 * p < n
              ? [t.x - e.x, a(t.y, e.y, o, i), 0, -1]
              : n <= 3 * p && p < n
              ? [a(t.x, e.x, r, i), t.y - e.y, -1, 0]
              : n <= 5 * p && 3 * p < n
              ? [t.x - e.x, a(t.y, e.y, o, i), 0, 1]
              : [a(t.x, e.x, r, i), t.y - e.y, 1, 0];
          }
          function a(t, e, n, i) {
            var r = s.sign(n - e);
            return t - e - (Math.round((n - e) / i) || r) * i;
          }
          var y = [
            [0, 1, 0, 0],
            [1, 0, 0, 0],
            [-1, 0, 0, 0],
            [0, -1, 0, 0],
          ].concat([
            [0, 1, -1, 1],
            [-1, 0, -1, 1],
            [0, 1, 1, 1],
            [1, 0, 1, 1],
            [1, 0, 1, -1],
            [0, -1, 1, -1],
            [-1, 0, -1, -1],
            [0, -1, -1, -1],
          ]);
          function _(t, e, n, i, r, o, a) {
            t.getNodes().forEach(function (t) {
              o[1]
                ? s.sign(t.y - n) == o[1] && (t.y += (r + a / 2) * o[1])
                : o[0] &&
                  s.sign(t.x - e) == o[0] &&
                  (t.x += (i + a / 2) * o[0]);
            });
          }
          function m(t, e, n, i, r) {
            for (var o = t.getNodes(), a = 0; a < o.length; a++) {
              var s = o[a];
              if (s.x >= e && s.x <= n && s.y >= i && s.y <= r) return 1;
            }
          }
          function x(t, e) {
            (t = t.g.getNodes().length), (e = e.g.getNodes().length);
            return e < t ? -1 : t === e ? 0 : 1;
          }
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(37),
            c = n(21),
            n =
              ((r.prototype.layout = function (t, e) {
                t.root(t.toTree(t.hash[e.root]));
                var n = t.getNodes();
                (e.levelPadding = e.levelPadding || this._getStep(n)),
                  (e.itemPadding = e.itemPadding || this._getStep(n)),
                  (e.dir = e.dir || i.Direction.Bottom),
                  (e.rotate =
                    e.dir === i.Direction.Right || e.dir === i.Direction.Left);
                n = i.DirVectors[e.dir];
                this._layout(t, e),
                  t.setBox(),
                  e.dir !== i.Direction.Bottom && t.rotate(n);
                n = t.getBox();
                return (
                  t.translate({ x: -1 * n[0][0], y: -1 * n[1][0] }),
                  t.setBox(),
                  t
                );
              }),
              (r.prototype._layout = function (e, n) {
                var i = this,
                  t = e.getRoot();
                if (((t.x = t.y = 0), 1 == e.getLevels().length))
                  return (e._symmetry = !0), "0";
                var r = t.kids.map(function (t) {
                    return new c.default(e, t, n);
                  }),
                  a = {};
                r.forEach(function (t) {
                  var e = i._layout(t, n);
                  a[e] ? a[e].push(t) : (a[e] = [t]);
                });
                for (
                  var o = Object.keys(a).sort(function (t, e) {
                      var n = a[t][0],
                        i = a[e][0],
                        r = n._width,
                        o = i._width;
                      if (o < r) return -1;
                      if (r < o) return 1;
                      (n = n.getLevels().length), (i = i.getLevels().length);
                      return !(i < n) && (n < i || t < e) ? 1 : -1;
                    }),
                    s = 0,
                    l = 0,
                    u = 0;
                  u < o.length;
                  u++
                )
                  a[o[u]].length % 2 == 1 && (s++, (l = u));
                (t = !1), (r = !1);
                return (
                  1 == s
                    ? (a[o[l]][0]._symmetry && (r = !0),
                      (t = !0),
                      0 !== l && (o.unshift(o[l]), o.splice(l + 1, 1)))
                    : 0 === s && (r = !0),
                  (e._symmetry = r),
                  this._layout_place(e, a, o, t, n),
                  e.getIString()
                );
              }),
              (r.prototype._layout_place = function (v, t, e, y, _) {
                for (
                  var m = { x: 0, y: _.levelPadding }, x = !0, n = 0;
                  n < e.length;
                  n++
                )
                  t[e[n]].forEach(function (t) {
                    if (y) {
                      (y = !1), t.translate(m);
                      for (
                        var e = 0, n = 0, i = t.getLevelBounds(), r = 0;
                        r < i.length;
                        r++
                      ) {
                        var o = i[r],
                          a = o[0],
                          o = o[1];
                        (v._bounds[r + 1] = [a, o]),
                          a < e && (e = a),
                          n < o && (n = o);
                      }
                      v._tbounds = [e, n];
                    } else {
                      var s = x ? 1 : 0,
                        l = x ? 0 : 1;
                      x && t.mirror();
                      for (
                        var u = void 0,
                          c = void 0,
                          c = (u = 999999 * (x ? -1 : 1)),
                          h = _.itemPadding,
                          d = 0;
                        d < t._bounds.length;
                        d++
                      ) {
                        var f =
                          v.getBounds(d + 1, h, _.wide)[s] -
                          t.getBounds(d, h, _.wide)[l];
                        ((x && c < f) || (!x && f < c)) && (c = f);
                      }
                      t.translate({ x: c, y: m.y });
                      for (var p = 0; p < v._bounds.length; p++) {
                        var g = void 0,
                          g =
                            0 == p || p > t._bounds.length
                              ? v._bounds[p][s]
                              : (v._bounds[p][s] = t._bounds[p - 1][s]);
                        ((x && u < g) || (!x && g < u)) && (u = g);
                      }
                      (v._tbounds[s] = u), (x = !x);
                    }
                  });
              }),
              (r.prototype._getStep = function (t) {
                var e, n;
                return (
                  0 === this._step &&
                    ((e = t.length),
                    (n = 0),
                    t.forEach(function (t) {
                      return (n += t.w + t.h);
                    }),
                    (this._step = n / e)),
                  this._step
                );
              }),
              r);
          function r() {
            this._step = 0;
          }
          e.default = n;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(38),
            r = [1, 2, 4, 8, 0, 16, 32, 64, 128],
            n =
              ((o.prototype.getRoute = function (t, e) {
                t = this._map[t];
                return (t && t.map[e]) || null;
              }),
              (o.prototype.addRoute = function (t, e, n, i) {
                this.addPath(t, e, n, i), this.addPath(e, t, -n, -i);
              }),
              (o.prototype.hasRoute = function (t, e, n) {
                t = this._map[t];
                return !!t && 0 < (t.dir & this._code(e, n));
              }),
              (o.prototype.isAligned = function (t) {
                return !!this._map[t];
              }),
              (o.prototype.isAxisAligned = function (t, e, n) {
                var i,
                  r = this._map[t];
                if (!r) return null;
                for (i in r.map) {
                  var o = r.map[i];
                  if ((e && o.dy) || (n && o.dx)) return !1;
                }
                return !0;
              }),
              (o.prototype.addPath = function (t, e, n, i, r) {
                var o = this._map[t];
                ((o = o || (this._map[t] = { map: {}, dir: 0 })).map[e] = {
                  dx: n,
                  dy: i,
                  points: r,
                }),
                  (o.dir = o.dir | this._code(n, i));
              }),
              (o.prototype._code = function (t, e) {
                return r[i.sign(t) + 1 + 3 * (i.sign(e) + 1)];
              }),
              o);
          function o() {
            this._map = {};
          }
          e.default = n;
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = n(21);
          function s(t, e) {
            var n = new i.default();
            return n.importNodes(t), { g: n, root: e };
          }
          e.split = function (n) {
            var t = n.getNodes();
            if (t.length < 3) return [{ g: n }];
            for (var e = t[0], i = [], r = t.length + 1; r != t.length; )
              (r = t.length),
                (t = t.filter(function (e) {
                  if (1 != e.links.length) return !0;
                  var t = n.hash[e.links[0].id];
                  return (
                    t &&
                      (t.links = t.links.filter(function (t) {
                        return t.id != e.id;
                      })),
                    i.push(e),
                    !1
                  );
                }));
            if (t.length < 2)
              return (
                i
                  .filter(function (t) {
                    return 0 < t.links.length;
                  })
                  .forEach(function (t) {
                    t.links[0].links.push(t);
                  }),
                n.root(n.toTree(e)),
                [{ g: n }]
              );
            var o = {};
            return (
              i.forEach(function (t) {
                return (o[t.id] = t);
              }),
              (e = i
                .filter(function (t) {
                  return !o[t.links[0].id];
                })
                .map(function (t) {
                  return [t];
                })),
              i.forEach(function (t) {
                var e = o[t.links[0].id];
                e && e.links.push(t);
              }),
              (e = e.map(function (t) {
                for (var e, n = 0; (e = t[n++]); ) {
                  var i = e.links.length;
                  if (1 < i)
                    for (var r = 1; r < i; r++) {
                      var o = e.links[r];
                      t.push(o);
                    }
                }
                var a = t[0].links.splice(0, 1)[0].id;
                return s(t, a);
              })),
              [s(t, null)].concat(e)
            );
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.compose = function (t, i) {
              if (t.length < 2) return t[0] || null;
              var r = t[0].getBox(),
                o = i.padding,
                e = t.reduce(function (t, e) {
                  var n = e.getBox();
                  return (
                    e.translate({
                      x: r[0][1] - n[0][0] + o,
                      y: r[1][0] - n[1][0],
                    }),
                    t.importNodes(e.getNodes()),
                    (o += i.padding + n[0][1] - n[0][0]),
                    t
                  );
                });
              return t.length && e.setGlobalBox(), e;
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.decompose = function (n) {
              for (
                var i = [],
                  t = function () {
                    var e = {},
                      t = n.getNodes();
                    if (!t.length) return { value: i };
                    !(function e(t, n) {
                      n[t.id] = 1;
                      t.links.forEach(function (t) {
                        n[t.id] || e(t, n);
                      });
                    })(t[0], e);
                    t = n.split(function (t) {
                      return !e[t.id];
                    });
                    if ((i.push(n), !t)) return { value: i };
                    n = t;
                  };
                ;

              ) {
                var e = t();
                if ("object" == typeof e) return e.value;
              }
            });
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
          n(45), n(46), n(47), n(48), n(49), n(56), n(57), (t.exports = n(102));
        },
        function (t, r, e) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }), e(103);
          var n = e(40);
          r.Diagram = n.Diagram;
          n = e(0);
          r.awaitRedraw = n.awaitRedraw;
          (n = e(3)), (e = window);
          (r.i18n = e.dhx && e.dhx.i18n ? e.dhx.i18 : {}),
            (r.i18n.setLocale = function (t, e) {
              var n,
                i = r.i18n[t];
              for (n in e) i[n] = e[n];
            }),
            (r.i18n.diagram = r.i18n.diagram || n.default);
        },
        function (t, e, n) {},
      ]),
      (r.c = i),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = "/codebase/"),
      r((r.s = 101))
    );
    function r(t) {
      if (i[t]) return i[t].exports;
      var e = (i[t] = { i: t, l: !1, exports: {} });
      return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
    }
    var n, i;
  }),
  window.dhx_legacy)
) {
  if (window.dhx) for (var key in dhx) dhx_legacy[key] = dhx[key];
  (window.dhx = dhx_legacy), delete window.dhx_legacy;
}

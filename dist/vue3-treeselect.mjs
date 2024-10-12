import { defineComponent as Ut, openBlock as h, createElementBlock as y, Fragment as z, renderList as Te, createCommentVNode as T, createElementVNode as L, normalizeClass as I, normalizeStyle as at, toDisplayString as F, resolveComponent as k, renderSlot as x, createTextVNode as ee, createBlock as A, createVNode as X, TransitionGroup as Xt, withCtx as R, createSlots as te, Transition as ct, toRaw as Yt, createApp as kn, ref as Ae, useSlots as Bn, reactive as Vn, computed as C, nextTick as Ie, watch as U, onMounted as zn, provide as Fn } from "vue";
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function le(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $n(e, n) {
  var o = n.length, c = e.length;
  if (c > o)
    return !1;
  if (c === o)
    return e === n;
  e:
    for (var u = 0, r = 0; u < c; u++) {
      for (var p = e.charCodeAt(u); r < o; )
        if (n.charCodeAt(r++) === p)
          continue e;
      return !1;
    }
  return !0;
}
var Hn = $n;
const Wn = /* @__PURE__ */ le(Hn);
function Pn() {
}
var jn = Pn;
const Qn = /* @__PURE__ */ le(jn), J = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  Qn
) : function(n, o) {
  if (!n()) {
    const c = ["[Vue-Treeselect Warning]"].concat(o());
    console.error(...c);
  }
};
function de(e) {
  return function(o, ...c) {
    o.type === "mousedown" && o.button === 0 && e.call(this, o, ...c);
  };
}
function Kn(e, n) {
  const o = e.getBoundingClientRect(), c = n.getBoundingClientRect(), u = n.offsetHeight / 3;
  c.bottom + u > o.bottom ? e.scrollTop = Math.min(
    n.offsetTop + n.clientHeight - e.offsetHeight + u,
    e.scrollHeight
  ) : c.top - u < o.top && (e.scrollTop = Math.max(n.offsetTop - u, 0));
}
function qn(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Gt = qn, Un = typeof ke == "object" && ke && ke.Object === Object && ke, Xn = Un, Yn = Xn, Gn = typeof self == "object" && self && self.Object === Object && self, Jn = Yn || Gn || Function("return this")(), Jt = Jn, Zn = Jt, es = function() {
  return Zn.Date.now();
}, ts = es, ns = /\s/;
function ss(e) {
  for (var n = e.length; n-- && ns.test(e.charAt(n)); )
    ;
  return n;
}
var rs = ss, os = rs, as = /^\s+/;
function ls(e) {
  return e && e.slice(0, os(e) + 1).replace(as, "");
}
var is = ls, cs = Jt, us = cs.Symbol, Zt = us, xt = Zt, en = Object.prototype, ds = en.hasOwnProperty, hs = en.toString, be = xt ? xt.toStringTag : void 0;
function fs(e) {
  var n = ds.call(e, be), o = e[be];
  try {
    e[be] = void 0;
    var c = !0;
  } catch {
  }
  var u = hs.call(e);
  return c && (n ? e[be] = o : delete e[be]), u;
}
var ps = fs, ms = Object.prototype, vs = ms.toString;
function gs(e) {
  return vs.call(e);
}
var ys = gs, At = Zt, Ss = ps, _s = ys, bs = "[object Null]", Os = "[object Undefined]", It = At ? At.toStringTag : void 0;
function ws(e) {
  return e == null ? e === void 0 ? Os : bs : It && It in Object(e) ? Ss(e) : _s(e);
}
var Es = ws;
function Ts(e) {
  return e != null && typeof e == "object";
}
var Cs = Ts, Ns = Es, Ds = Cs, Ls = "[object Symbol]";
function Ms(e) {
  return typeof e == "symbol" || Ds(e) && Ns(e) == Ls;
}
var Rs = Ms, xs = is, kt = Gt, As = Rs, Bt = NaN, Is = /^[-+]0x[0-9a-f]+$/i, ks = /^0b[01]+$/i, Bs = /^0o[0-7]+$/i, Vs = parseInt;
function zs(e) {
  if (typeof e == "number")
    return e;
  if (As(e))
    return Bt;
  if (kt(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kt(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xs(e);
  var o = ks.test(e);
  return o || Bs.test(e) ? Vs(e.slice(2), o ? 2 : 8) : Is.test(e) ? Bt : +e;
}
var tn = zs, Fs = Gt, nt = ts, Vt = tn, $s = "Expected a function", Hs = Math.max, Ws = Math.min;
function Ps(e, n, o) {
  var c, u, r, p, v, g, S = 0, b = !1, E = !1, B = !0;
  if (typeof e != "function")
    throw new TypeError($s);
  n = Vt(n) || 0, Fs(o) && (b = !!o.leading, E = "maxWait" in o, r = E ? Hs(Vt(o.maxWait) || 0, n) : r, B = "trailing" in o ? !!o.trailing : B);
  function ne(w) {
    var N = c, V = u;
    return c = u = void 0, S = w, p = e.apply(V, N), p;
  }
  function Q(w) {
    return S = w, v = setTimeout(i, n), b ? ne(w) : p;
  }
  function ze(w) {
    var N = w - g, V = w - S, se = n - N;
    return E ? Ws(se, r - V) : se;
  }
  function s(w) {
    var N = w - g, V = w - S;
    return g === void 0 || N >= n || N < 0 || E && V >= r;
  }
  function i() {
    var w = nt();
    if (s(w))
      return Ce(w);
    v = setTimeout(i, ze(w));
  }
  function Ce(w) {
    return v = void 0, B && c ? ne(w) : (c = u = void 0, p);
  }
  function Fe() {
    v !== void 0 && clearTimeout(v), S = 0, c = g = u = v = void 0;
  }
  function he() {
    return v === void 0 ? p : Ce(nt());
  }
  function H() {
    var w = nt(), N = s(w);
    if (c = arguments, u = this, g = w, N) {
      if (v === void 0)
        return Q(g);
      if (E)
        return clearTimeout(v), v = setTimeout(i, n), ne(g);
    }
    return v === void 0 && (v = setTimeout(i, n)), p;
  }
  return H.cancel = Fe, H.flush = he, H;
}
var js = Ps;
const Qs = /* @__PURE__ */ le(js);
var Ks = function(e, n) {
  var o = document.createElement("_"), c = o.appendChild(document.createElement("_")), u = o.appendChild(document.createElement("_")), r = c.appendChild(document.createElement("_")), p = void 0, v = void 0;
  return c.style.cssText = o.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", r.style.cssText = u.style.cssText = "display:block;height:100%;transition:0s;width:100%", r.style.width = r.style.height = "200%", e.appendChild(o), g(), b;
  function g() {
    S();
    var E = e.offsetWidth, B = e.offsetHeight;
    (E !== p || B !== v) && (p = E, v = B, u.style.width = E * 2 + "px", u.style.height = B * 2 + "px", o.scrollLeft = o.scrollWidth, o.scrollTop = o.scrollHeight, c.scrollLeft = c.scrollWidth, c.scrollTop = c.scrollHeight, n({ width: E, height: B })), c.addEventListener("scroll", g), o.addEventListener("scroll", g);
  }
  function S() {
    c.removeEventListener("scroll", g), o.removeEventListener("scroll", g);
  }
  function b() {
    S(), e.removeChild(o);
  }
};
function nn(e, n) {
  const o = e.indexOf(n);
  o !== -1 && e.splice(o, 1);
}
let lt;
const Ve = [], qs = 100;
function Us() {
  lt = setInterval(() => {
    Ve.forEach(sn);
  }, qs);
}
function Xs() {
  clearInterval(lt), lt = null;
}
function sn(e) {
  const { $el: n, listener: o, lastWidth: c, lastHeight: u } = e, r = n.offsetWidth, p = n.offsetHeight;
  (c !== r || u !== p) && (e.lastWidth = r, e.lastHeight = p, o({ width: r, height: p }));
}
function Ys(e, n) {
  const o = {
    $el: e,
    listener: n,
    lastWidth: null,
    lastHeight: null
  }, c = () => {
    nn(Ve, o), Ve.length || Xs();
  };
  return Ve.push(o), sn(o), Us(), c;
}
function rn(e, n) {
  const o = document.documentMode === 9;
  let c = !0;
  const p = (o ? Ys : Ks)(e, (...v) => c || n(...v));
  return c = !1, p;
}
function Gs(e) {
  const n = [];
  let o = e.parentNode;
  for (; o && o.nodeName !== "BODY" && o.nodeType === document.ELEMENT_NODE; )
    Js(o) && n.push(o), o = o.parentNode;
  return n.push(window), n;
}
function Js(e) {
  const { overflow: n, overflowX: o, overflowY: c } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(n + c + o);
}
function on(e, n) {
  const o = Gs(e);
  return window.addEventListener("resize", n, { passive: !0 }), o.forEach((c) => {
    c.addEventListener("scroll", n, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", n, { passive: !0 }), o.forEach((u) => {
      u.removeEventListener("scroll", n, { passive: !0 });
    });
  };
}
function an(e) {
  return e !== e;
}
function ln(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var Zs = tn, zt = 1 / 0, er = 17976931348623157e292;
function tr(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Zs(e), e === zt || e === -zt) {
    var n = e < 0 ? -1 : 1;
    return n * er;
  }
  return e === e ? e : 0;
}
var nr = tr, sr = nr;
function rr(e) {
  var n = sr(e), o = n % 1;
  return n === n ? o ? n - o : n : 0;
}
var or = rr, ar = or, lr = "Expected a function";
function ir(e, n) {
  var o;
  if (typeof n != "function")
    throw new TypeError(lr);
  return e = ar(e), function() {
    return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = void 0), o;
  };
}
var cr = ir, ur = cr;
function dr(e) {
  return ur(2, e);
}
var hr = dr;
const fr = /* @__PURE__ */ le(hr);
function pr(e) {
  return e;
}
var mr = pr;
const vr = /* @__PURE__ */ le(mr);
function gr(e) {
  return function() {
    return e;
  };
}
var yr = gr;
const Ft = /* @__PURE__ */ le(yr), P = () => /* @__PURE__ */ Object.create(null);
function Sr(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
var _r = Sr;
const $t = /* @__PURE__ */ le(_r);
function Z(e, n) {
  return e.indexOf(n) !== -1;
}
function cn(e, n, o) {
  for (let c = 0, u = e.length; c < u; c++)
    if (n.call(o, e[c], c, e))
      return e[c];
}
function br(e, n) {
  if (e.length !== n.length)
    return !0;
  for (let o = 0; o < e.length; o++)
    if (e[o] !== n[o])
      return !0;
  return !1;
}
let Or = 0;
const wr = () => Or++, ae = null, it = 0, un = 1, dn = 2, ue = "ALL_CHILDREN", Oe = "ALL_DESCENDANTS", we = "LEAF_CHILDREN", Ee = "LEAF_DESCENDANTS", Er = "LOAD_ROOT_OPTIONS", Tr = "LOAD_CHILDREN_OPTIONS", Cr = "ASYNC_SEARCH", st = "ALL", Be = "BRANCH_PRIORITY", rt = "LEAF_PRIORITY", ot = "ALL_WITH_INDETERMINATE", Ht = "ORDER_SELECTED", Wt = "LEVEL", Pt = "INDEX", M = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
}, Nr = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), jt = 5, Qt = 40, $ = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, u] of n)
    o[c] = u;
  return o;
}, Dr = Ut({
  name: "vue-treeselect--hidden-fields",
  inject: ["instance"],
  computed: {
    canRender() {
      return !this.instance || !this.instance.name || this.instance.disabled || !this.instance.hasValue;
    },
    values() {
      let e = this.instance.internalValue.value.map(this.stringifyValue);
      return this.instance.multiple && this.instance.joinValues && (e = [
        e.join(this.instance.delimiter)
      ]), e;
    }
  },
  methods: {
    stringifyValue(e) {
      return typeof e == "string" ? e : e != null && !an(e) ? JSON.stringify(e) : "";
    }
  }
}), Lr = ["name", "value"];
function Mr(e, n, o, c, u, r) {
  return e.canRender ? (h(!0), y(z, { key: 0 }, Te(e.values, (p, v) => (h(), y("input", {
    type: "hidden",
    name: e.instance.name,
    value: p,
    key: "hidden-field-" + v
  }, null, 8, Lr))), 128)) : T("", !0);
}
const Rr = /* @__PURE__ */ $(Dr, [["render", Mr]]), xr = [
  M.ENTER,
  M.END,
  M.HOME,
  M.ARROW_LEFT,
  M.ARROW_UP,
  M.ARROW_RIGHT,
  M.ARROW_DOWN
], Ar = {
  name: "vue-treeselect--input",
  inject: ["instance"],
  data: () => ({
    inputWidth: jt,
    value: ""
  }),
  computed: {
    isSearchable() {
      return this.instance.searchable;
    },
    isDisabled() {
      return this.instance.disabled;
    },
    isRequired() {
      return this.instance.required;
    },
    tabIndex() {
      return this.instance.tabIndex;
    },
    hasValue() {
      return this.instance.hasValue.value;
    },
    isEmpty() {
      return !this.value.length;
    },
    needAutoSize() {
      const { instance: e } = this;
      return e.searchable && !e.disabled && e.multiple;
    },
    inputStyle() {
      return {
        // width: this.needAutoSize ? `${this.inputWidth}px` : null,
      };
    }
  },
  watch: {
    "instance.trigger.searchQuery"(e) {
      this.value = e;
    },
    value() {
      this.needAutoSize && this.$nextTick(this.updateInputWidth);
    }
  },
  mounted() {
    this.debouncedCallback = Qs(
      this.updateSearchQuery,
      Nr,
      { leading: !0, trailing: !0 }
    );
  },
  methods: {
    clear() {
      this.onInput({
        target: { value: "" }
      });
    },
    focus() {
      const { instance: e } = this;
      e.disabled || this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus() {
      const { instance: e } = this;
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    },
    onBlur() {
      const { instance: e } = this, n = e.getMenu();
      if (n && document.activeElement === n)
        return this.focus();
      e.trigger.isFocused = !1, this.value = "";
    },
    onInput(e) {
      const { value: n } = e.target;
      this.value = n, n ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
    },
    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown(e) {
      const { instance: n } = this, o = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!n.menu.isOpen && Z(xr, o))
          return e.preventDefault(), n.openMenu();
        switch (o) {
          case M.BACKSPACE: {
            n.backspaceRemoves && !this.value.length && n.removeLastValue();
            break;
          }
          case M.ENTER: {
            if (e.preventDefault(), n.menu.current === null)
              return;
            const c = n.getNode(n.menu.current);
            if (c.isBranch && n.disableBranchNodes)
              return;
            n.select(c);
            break;
          }
          case M.ESCAPE: {
            this.value.length ? this.clear() : n.menu.isOpen && n.closeMenu();
            break;
          }
          case M.END: {
            e.preventDefault(), n.highlightLastOption();
            break;
          }
          case M.HOME: {
            e.preventDefault(), n.highlightFirstOption();
            break;
          }
          case M.ARROW_LEFT: {
            const c = n.getNode(n.menu.current);
            c.isBranch && n.shouldExpand(c) ? (e.preventDefault(), n.toggleExpanded(c)) : !c.isRootNode && (c.isLeaf || c.isBranch && !n.shouldExpand(c)) && (e.preventDefault(), n.setCurrentHighlightedOption(c.parentNode));
            break;
          }
          case M.ARROW_UP: {
            e.preventDefault(), n.highlightPrevOption();
            break;
          }
          case M.ARROW_RIGHT: {
            const c = n.getNode(n.menu.current);
            c.isBranch && !n.shouldExpand(c) && (e.preventDefault(), n.toggleExpanded(c));
            break;
          }
          case M.ARROW_DOWN: {
            e.preventDefault(), n.highlightNextOption();
            break;
          }
          case M.DELETE: {
            n.deleteRemoves && !this.value.length && n.removeLastValue();
            break;
          }
          default:
            n.openMenu();
        }
      }
    },
    updateInputWidth() {
      this.inputWidth = Math.max(
        jt,
        this.$refs.sizer.scrollWidth + 15
      );
    },
    updateSearchQuery() {
      const { instance: e } = this;
      e.trigger.searchQuery = this.value;
    }
  }
}, Ir = ["tabindex"], kr = ["tabIndex", "required", "value"];
function Br(e, n, o, c, u, r) {
  return h(), y("div", {
    class: "vue-treeselect__input-container",
    tabindex: !r.isSearchable && !r.isDisabled ? r.instance.tabIndex : "",
    onFocus: n[4] || (n[4] = (p) => r.isSearchable ? null : r.onFocus),
    onBlur: n[5] || (n[5] = (p) => r.isSearchable ? null : r.onBlur),
    onKeydown: n[6] || (n[6] = (p) => r.isSearchable ? null : r.onKeyDown)
  }, [
    r.isSearchable && !r.isDisabled ? (h(), y(z, { key: 0 }, [
      L("input", {
        ref: "input",
        class: I(["vue-treeselect__input", { "is-empty": r.isEmpty }]),
        type: "text",
        autocomplete: "off",
        tabIndex: r.tabIndex,
        required: r.isRequired && !r.hasValue,
        value: e.value,
        style: at(r.inputStyle),
        onFocus: n[0] || (n[0] = (...p) => r.onFocus && r.onFocus(...p)),
        onInput: n[1] || (n[1] = (...p) => r.onInput && r.onInput(...p)),
        onBlur: n[2] || (n[2] = (...p) => r.onBlur && r.onBlur(...p)),
        onKeydown: n[3] || (n[3] = (...p) => r.onKeyDown && r.onKeyDown(...p))
      }, null, 46, kr),
      r.needAutoSize ? (h(), y("div", {
        key: 0,
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, F(e.value), 513)) : T("", !0)
    ], 64)) : T("", !0)
  ], 40, Ir);
}
const hn = /* @__PURE__ */ $(Ar, [["render", Br]]), Vr = {
  name: "vue-treeselect--placeholder",
  inject: ["instance"],
  computed: {
    hasValue() {
      return this.instance.hasValue.value;
    },
    hasSearchQuery() {
      return !!this.instance.trigger.searchQuery;
    }
  }
};
function zr(e, n, o, c, u, r) {
  return h(), y("div", {
    class: I({
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": r.hasValue || r.hasSearchQuery
    })
  }, F(r.instance.placeholder), 3);
}
const fn = /* @__PURE__ */ $(Vr, [["render", zr]]), Fr = {
  name: "vue-treeselect--single-value",
  inject: ["instance"],
  components: { Placeholder: fn, Input: hn },
  computed: {
    node() {
      return this.instance.selectedNodes.value[0];
    },
    hasValue() {
      return this.instance.hasValue.value;
    },
    hasActiveQuery() {
      return this.instance.trigger.searchQuery;
    },
    isFocused() {
      return this.instance.trigger.isFocused;
    }
  }
}, $r = {
  key: 0,
  class: "vue-treeselect__value-container"
}, Hr = { class: "vue-treeselect__single-value s-value-container" };
function Wr(e, n, o, c, u, r) {
  const p = k("Placeholder"), v = k("Input");
  return h(), y(z, null, [
    r.hasValue ? (h(), y("div", $r, [
      L("div", Hr, [
        e.$slots["value-label"] ? x(e.$slots, "value-label", {
          key: 0,
          node: r.node
        }) : (h(), y(z, { key: 1 }, [
          ee(F(r.node.label), 1)
        ], 64))
      ])
    ])) : T("", !0),
    !r.hasValue && !r.isFocused ? (h(), A(p, {
      key: 1,
      class: "s-value-container"
    })) : T("", !0),
    X(v, {
      ref: "input",
      class: I({ "as-overlay": r.hasValue })
    }, null, 8, ["class"])
  ], 64);
}
const Kt = /* @__PURE__ */ $(Fr, [["render", Wr]]), Pr = {
  name: "vue-treeselect--x"
}, jr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, Qr = /* @__PURE__ */ L("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1), Kr = [
  Qr
];
function qr(e, n, o, c, u, r) {
  return h(), y("svg", jr, Kr);
}
const pn = /* @__PURE__ */ $(Pr, [["render", qr]]), Ur = {
  name: "vue-treeselect--multi-value-item",
  inject: ["instance"],
  components: { DeleteIcon: pn },
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  computed: {
    itemClass() {
      return {
        "vue-treeselect__multi-value-item": !0,
        "vue-treeselect__multi-value-item-disabled": this.node.isDisabled,
        "vue-treeselect__multi-value-item-new": this.node.isNew
      };
    }
  },
  methods: {
    handleMouseDown: de(function() {
      const { instance: n, node: o } = this;
      n.select(o);
    })
  }
}, Xr = { class: "vue-treeselect__multi-value-item-container" }, Yr = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
function Gr(e, n, o, c, u, r) {
  const p = k("DeleteIcon");
  return h(), y("div", Xr, [
    L("div", {
      class: I(r.itemClass),
      onMousedown: n[0] || (n[0] = (...v) => r.handleMouseDown && r.handleMouseDown(...v))
    }, [
      e.$slots["value-label"] ? x(e.$slots, "value-label", {
        key: 0,
        node: o.node
      }) : (h(), y(z, { key: 1 }, [
        ee(F(o.node.label), 1)
      ], 64)),
      L("span", Yr, [
        X(p)
      ])
    ], 34)
  ]);
}
const Jr = /* @__PURE__ */ $(Ur, [["render", Gr]]), Zr = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  components: { Placeholder: fn, TransitionGroup: Xt, Input: hn, MultiValueItem: Jr },
  computed: {
    multiValueItems() {
      return this.instance.internalValue.value.slice(0, this.instance.limit).map(this.instance.getNode);
    },
    count() {
      return this.instance.internalValue.length - this.instance.limit;
    },
    isFocused() {
      return this.instance.trigger.isFocused;
    },
    hasValue() {
      return this.instance.hasValue.value;
    }
  }
}, eo = {
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
  key: "exceed-limit-tip"
}, to = { class: "vue-treeselect__limit-tip-text" };
function no(e, n, o, c, u, r) {
  const p = k("MultiValueItem"), v = k("Placeholder"), g = k("Input");
  return h(), A(Xt, {
    class: "vue-treeselect__multi-value",
    tag: "div",
    name: "vue-treeselect__multi-value-item--transition",
    appear: "{true}"
  }, {
    default: R(() => [
      (h(!0), y(z, null, Te(r.multiValueItems, (S) => (h(), A(p, {
        key: `multi-value-item-${S.id}`,
        node: S
      }, te({ _: 2 }, [
        e.$slots["value-label"] ? {
          name: "value-label",
          fn: R(({ node: b }) => [
            x(e.$slots, "value-label", { node: b })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["node"]))), 128)),
      r.count > 0 ? (h(), y("div", eo, [
        L("span", to, F(r.instance.limitText(r.count)), 1)
      ])) : T("", !0),
      !r.hasValue && !r.isFocused ? (h(), A(v, { key: "placeholder" })) : T("", !0),
      X(g, {
        ref: "input",
        key: "input"
      }, null, 512)
    ]),
    _: 3
  });
}
const qt = /* @__PURE__ */ $(Zr, [["render", no]]), so = {
  name: "vue-treeselect--arrow"
}, ro = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
}, oo = /* @__PURE__ */ L("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1), ao = [
  oo
];
function lo(e, n, o, c, u, r) {
  return h(), y("svg", ro, ao);
}
const mn = /* @__PURE__ */ $(so, [["render", lo]]), io = {
  name: "vue-treeselect--control",
  inject: ["instance"],
  components: {
    SingleValue: Kt,
    MultiValue: qt,
    DeleteIcon: pn,
    ArrowIcon: mn
  },
  data() {
    return {
      SingleValue: Kt,
      MultiValue: qt
    };
  },
  computed: {
    isSingle() {
      return this.instance.single.value;
    },
    /* eslint-disable valid-jsdoc */
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX() {
      const { instance: e } = this;
      return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
    },
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow() {
      const { instance: e } = this;
      return e.alwaysOpen ? !e.menu.isOpen : !0;
    },
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue() {
      const { instance: e } = this;
      return e.hasValue && e.internalValue.value.some((n) => !e.getNode(n).isDisabled);
    }
    /* eslint-enable valid-jsdoc */
  },
  methods: {
    getTitleX() {
      return this.instance.multiple ? this.instance.clearAllText : this.instance.clearValueText;
    },
    getArrowClass() {
      return {
        "vue-treeselect__control-arrow": !0,
        "vue-treeselect__control-arrow--rotated": this.instance.menu.isOpen
      };
    },
    handleMouseDownOnX: de(function(n) {
      n.stopPropagation(), n.preventDefault();
      const { instance: o } = this, c = o.beforeClearAll(), u = (r) => {
        r && o.clear();
      };
      ln(c) ? c.then(u) : setTimeout(() => u(c), 0);
    }),
    handleMouseDownOnArrow: de(function(n) {
      n.preventDefault(), n.stopPropagation();
      const { instance: o } = this;
      o.focusInput(), o.toggleMenu();
    })
    // This is meant to be called by child `<Value />` component.
  }
}, co = ["title"];
function uo(e, n, o, c, u, r) {
  const p = k("SingleValue"), v = k("MultiValue"), g = k("DeleteIcon"), S = k("ArrowIcon");
  return h(), y("div", {
    class: "vue-treeselect__control",
    onMousedown: n[2] || (n[2] = (...b) => r.instance.handleMouseDown && r.instance.handleMouseDown(...b))
  }, [
    r.isSingle ? (h(), A(p, {
      key: 0,
      ref: "value-container"
    }, te({ _: 2 }, [
      e.$slots["value-label"] ? {
        name: "value-label",
        fn: R(({ node: b }) => [
          x(e.$slots, "value-label", { node: b })
        ]),
        key: "0"
      } : void 0
    ]), 1536)) : (h(), A(v, {
      key: 1,
      ref: "value-container"
    }, te({ _: 2 }, [
      e.$slots["value-label"] ? {
        name: "value-label",
        fn: R(({ node: b }) => [
          x(e.$slots, "value-label", { node: b })
        ]),
        key: "0"
      } : void 0
    ]), 1536)),
    r.shouldShowX ? (h(), y("div", {
      key: 2,
      class: "vue-treeselect__x-container",
      title: r.getTitleX(),
      onMousedown: n[0] || (n[0] = (...b) => r.handleMouseDownOnX && r.handleMouseDownOnX(...b))
    }, [
      X(g, { class: "vue-treeselect__x" })
    ], 40, co)) : T("", !0),
    L("div", {
      class: "vue-treeselect__control-arrow-container",
      onMousedown: n[1] || (n[1] = (...b) => r.handleMouseDownOnArrow && r.handleMouseDownOnArrow(...b))
    }, [
      X(S, {
        class: I(r.getArrowClass())
      }, null, 8, ["class"])
    ], 32)
  ], 32);
}
const ho = /* @__PURE__ */ $(io, [["render", uo]]), fo = Ut({
  name: "vue-treeselect--tip",
  props: {
    type: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  }
}), po = { class: "vue-treeselect__icon-container" };
function mo(e, n, o, c, u, r) {
  return h(), y("div", {
    class: I(`vue-treeselect__tip vue-treeselect__${e.type}-tip`)
  }, [
    L("div", po, [
      L("span", {
        class: I(`vue-treeselect__icon-${e.icon}`)
      }, null, 2)
    ]),
    L("span", {
      class: I(`vue-treeselect__tip-text vue-treeselect__${e.type}-tip-text`)
    }, [
      x(e.$slots, "default")
    ], 2)
  ], 2);
}
const vn = /* @__PURE__ */ $(fo, [["render", mo]]), vo = {
  name: "VueTreeselectOption",
  inject: ["instance"],
  components: { ArrowIcon: mn, Transition: ct, Tip: vn },
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      UNCHECKED: it,
      INDETERMINATE: un,
      CHECKED: dn
    };
  },
  computed: {
    isSingle() {
      return this.instance.single.value;
    },
    shouldExpand() {
      const { instance: e, node: n } = this;
      return n.isBranch && e.shouldExpand(n);
    },
    shouldShow() {
      const { instance: e, node: n } = this;
      return e.shouldShowOptionInMenu(n);
    },
    checkedState() {
      return this.instance.forest.checkedStateMap[this.node.id];
    },
    shouldShowCount() {
      return this.node.isBranch && (this.instance.localSearch.active ? this.instance.showCountOnSearchComputed : this.instance.showCount);
    },
    childrenStatesLoaded() {
      return this.node.childrenStates.isLoaded;
    }
  },
  methods: {
    getCount() {
      return this.shouldShowCount ? this.instance.localSearch.active ? this.instance.localSearch.countMap[this.node.id][this.instance.showCountOf] : this.node.count[this.instance.showCountOf] : NaN;
    },
    handleMouseEnterOption(e) {
      const { instance: n, node: o } = this;
      e.target === e.currentTarget && n.setCurrentHighlightedOption(o, !1);
    },
    handleMouseDownOnArrow: de(function() {
      const { instance: n, node: o } = this;
      n.toggleExpanded(o);
    }),
    handleMouseDownOnLabelContainer: de(function() {
      const { instance: n, node: o } = this;
      o.isBranch && n.disableBranchNodes ? n.toggleExpanded(o) : n.select(o);
    }),
    handleMouseDownOnRetry: de(function() {
      const { instance: n, node: o } = this;
      n.loadChildrenOptions(o);
    })
  }
}, go = ["data-id"], yo = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
}, So = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
}, _o = /* @__PURE__ */ L("span", { class: "vue-treeselect__check-mark" }, null, -1), bo = /* @__PURE__ */ L("span", { class: "vue-treeselect__minus-mark" }, null, -1), Oo = [
  _o,
  bo
], wo = {
  key: 2,
  class: /* @__PURE__ */ I("vue-treeselect__label")
}, Eo = {
  key: 0,
  class: /* @__PURE__ */ I("vue-treeselect__count")
}, To = { key: 0 }, Co = { class: "vue-treeselect__list" }, No = ["title"];
function Do(e, n, o, c, u, r) {
  const p = k("ArrowIcon"), v = k("VueTreeselectOption"), g = k("Tip");
  return h(), y("div", {
    class: I({
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${r.instance.shouldFlattenOptions ? 0 : o.node.level}`]: !0
    })
  }, [
    L("div", {
      class: I({
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": o.node.isDisabled,
        "vue-treeselect__option--selected": r.instance.isSelected(o.node),
        "vue-treeselect__option--highlight": o.node.isHighlighted,
        "vue-treeselect__option--matched": r.instance.localSearch.active && o.node.isMatched,
        "vue-treeselect__option--hide": !r.shouldShow
      }),
      onMouseenter: n[2] || (n[2] = (...S) => r.handleMouseEnterOption && r.handleMouseEnterOption(...S)),
      "data-id": o.node.id
    }, [
      r.instance.shouldFlattenOptions && this.shouldShow ? T("", !0) : (h(), y(z, { key: 0 }, [
        o.node.isBranch ? (h(), y("div", {
          key: 0,
          class: "vue-treeselect__option-arrow-container",
          onMousedown: n[0] || (n[0] = (...S) => r.handleMouseDownOnArrow && r.handleMouseDownOnArrow(...S))
        }, [
          X(p, {
            class: I({
              "vue-treeselect__option-arrow": !0,
              "vue-treeselect__option-arrow--rotated": r.shouldExpand
            })
          }, null, 8, ["class"])
        ], 32)) : T("", !0),
        r.instance.hasBranchNodes ? (h(), y("div", yo, " ")) : T("", !0)
      ], 64)),
      L("div", {
        class: "vue-treeselect__label-container",
        onMousedown: n[1] || (n[1] = (...S) => r.handleMouseDownOnLabelContainer && r.handleMouseDownOnLabelContainer(...S))
      }, [
        !r.isSingle && !(r.instance.disableBranchNodes && o.node.isBranch) ? (h(), y("div", So, [
          L("span", {
            class: I({
              "vue-treeselect__checkbox": !0,
              "vue-treeselect__checkbox--checked": r.checkedState === u.CHECKED,
              "vue-treeselect__checkbox--indeterminate": r.checkedState === u.INDETERMINATE,
              "vue-treeselect__checkbox--unchecked": r.checkedState === u.UNCHECKED,
              "vue-treeselect__checkbox--disabled": o.node.isDisabled
            })
          }, Oo, 2)
        ])) : T("", !0),
        e.$slots["option-label"] ? x(e.$slots, "option-label", {
          key: 1,
          node: o.node,
          shouldShowCount: r.shouldShowCount,
          count: r.getCount()
        }) : (h(), y("label", wo, [
          ee(F(o.node.label) + " ", 1),
          r.shouldShowCount ? (h(), y("span", Eo, "({ getCount() })")) : T("", !0)
        ]))
      ], 32)
    ], 42, go),
    o.node.isBranch && r.shouldExpand ? (h(), y("div", To, [
      X(ct, { name: "vue-treeselect__list--transition" }, {
        default: R(() => [
          L("div", Co, [
            r.childrenStatesLoaded ? (h(!0), y(z, { key: 0 }, Te(o.node.children, (S) => (h(), A(v, {
              node: S,
              key: S.id
            }, te({ _: 2 }, [
              e.$slots["option-label"] ? {
                name: "option-label",
                fn: R(({ node: b, shouldShowCount: E, count: B }) => [
                  x(e.$slots, "option-label", {
                    node: b,
                    shouldShowCount: E,
                    count: B
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["node"]))), 128)) : (h(), y(z, { key: 1 }, [
              o.node.childrenStates.isLoaded && !o.node.children.length ? (h(), A(g, {
                key: 0,
                type: "no-children",
                icon: "warning"
              }, {
                default: R(() => [
                  ee(F(r.instance.noChildrenText), 1)
                ]),
                _: 1
              })) : T("", !0),
              o.node.childrenStates.isLoading ? (h(), A(g, {
                key: 1,
                type: "loading",
                icon: "loader"
              }, {
                default: R(() => [
                  ee(F(r.instance.loadingText), 1)
                ]),
                _: 1
              })) : T("", !0),
              o.node.childrenStates.loadingError ? (h(), A(g, {
                key: 2,
                type: "error",
                icon: "error"
              }, {
                default: R(() => [
                  ee(" { node.childrenStates.loadingError } "),
                  L("a", {
                    class: "vue-treeselect__retry",
                    title: r.instance.retryTitle,
                    onMousedown: n[3] || (n[3] = (...S) => r.handleMouseDownOnRetry && r.handleMouseDownOnRetry(...S))
                  }, F(r.instance.retryText), 41, No)
                ]),
                _: 1
              })) : T("", !0)
            ], 64))
          ])
        ]),
        _: 3
      })
    ])) : T("", !0)
  ], 2);
}
const Lo = /* @__PURE__ */ $(vo, [["render", Do]]), Mo = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, Ro = {
  name: "vue-treeselect--menu",
  inject: ["instance"],
  components: { Transition: ct, Tip: vn, Option: Lo },
  computed: {
    getTipIcon() {
      const e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, n = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
      return e ? "warning" : this.entry.isLoading ? "loader" : this.entry.loadingError ? "error" : n ? "warning" : null;
    },
    menuStyle() {
      const { instance: e } = this;
      return {
        maxHeight: e.maxHeight + "px"
      };
    },
    menuContainerStyle() {
      const { instance: e } = this;
      return {
        zIndex: e.appendToBody ? null : e.zIndex
      };
    },
    getTipText() {
      const e = this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions, n = e ? !1 : this.entry.isLoaded && this.entry.options.length === 0;
      return e ? this.instance.searchPromptText : this.entry.isLoading ? this.instance.loadingText : this.entry.loadingError ? this.entry.loadingError : n ? this.instance.noResultsText : null;
    },
    getNormalTip() {
      return this.instance.rootOptionsStates.isLoading ? ["loader", this.instance.loadingText] : this.instance.rootOptionsStates.loadingError ? ["error", this.instance.rootOptionsStates.loadingError, this.instance.retryText] : this.instance.rootOptionsStates.isLoaded && this.instance.forest.normalizedOptions.length === 0 ? ["warning", this.instance.noOptionsText] : this.instance.localSearch.noResults ? ["warning", this.instance.noResultsText] : null;
    },
    shouldShowSearchPromptTip() {
      return this.instance.trigger.searchQuery === "" && !this.instance.defaultOptions;
    },
    entry() {
      return this.instance.getRemoteSearchEntry();
    },
    normalizedOptions() {
      return Yt(this.instance.forest.normalizedOptions);
    }
  },
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
    }
  },
  mounted() {
    this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null, this.instance.menu.isOpen && this.$nextTick(this.onMenuOpen);
  },
  unmounted() {
    this.onMenuClose();
  },
  methods: {
    onMenuOpen() {
      this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose() {
      this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection() {
      const { instance: e } = this;
      if (!e.menu.isOpen)
        return;
      const n = e.getMenu(), o = e.getControl(), c = n.getBoundingClientRect(), u = o.getBoundingClientRect(), r = c.height, p = window.innerHeight, v = u.top, g = window.innerHeight - u.bottom, S = u.top >= 0 && u.top <= p || u.top < 0 && u.bottom > 0, b = g > r + Qt, E = v > r + Qt;
      S ? e.openDirection !== "auto" ? e.menu.placement = Mo[e.openDirection] : b || !E ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const { instance: e } = this, n = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: rn(n, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const { instance: e } = this, n = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: on(n, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    }
  }
}, xo = ["title"], Ao = ["title"];
function Io(e, n, o, c, u, r) {
  const p = k("Tip"), v = k("Option");
  return h(), y("div", {
    ref: "menu-container",
    class: "vue-treeselect__menu-container",
    style: at(r.menuContainerStyle)
  }, [
    r.instance.menu.isOpen ? (h(), y("div", {
      key: 0,
      ref: "menu",
      class: "vue-treeselect__menu",
      onMousedown: n[2] || (n[2] = (...g) => r.instance.handleMouseDown && r.instance.handleMouseDown(...g)),
      style: at(r.menuStyle)
    }, [
      x(e.$slots, "before-list"),
      r.instance.async ? (h(), y(z, { key: 0 }, [
        r.entry.isLoading || !r.entry.isLoaded || r.entry.loadingError || !r.entry.options.length ? (h(), A(p, {
          key: 0,
          type: "search-prompt",
          icon: r.getTipIcon
        }, {
          default: R(() => [
            ee(F(r.getTipText) + " ", 1),
            r.getTipIcon === "error" ? (h(), y("a", {
              key: 0,
              class: "vue-treeselect__retry",
              onClick: n[0] || (n[0] = (...g) => r.instance.handleRemoteSearch && r.instance.handleRemoteSearch(...g)),
              title: r.instance.retryTitle
            }, F(r.instance.retryText), 9, xo)) : T("", !0)
          ]),
          _: 1
        }, 8, ["icon"])) : (h(!0), y(z, { key: 1 }, Te(r.normalizedOptions, (g) => (h(), A(v, {
          node: g,
          key: g.id
        }, te({ _: 2 }, [
          e.$slots["option-label"] ? {
            name: "option-label",
            fn: R(({ node: S, shouldShowCount: b, count: E }) => [
              x(e.$slots, "option-label", {
                node: S,
                shouldShowCount: b,
                count: E
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["node"]))), 128))
      ], 64)) : (h(), y(z, { key: 1 }, [
        r.getNormalTip ? (h(), A(p, {
          key: 0,
          type: "search-prompt",
          icon: r.getNormalTip[0]
        }, {
          default: R(() => [
            ee(F(r.getNormalTip[1]) + " ", 1),
            r.getNormalTip[2] ? (h(), y("a", {
              key: 0,
              class: "vue-treeselect__retry",
              onClick: n[1] || (n[1] = (...g) => r.instance.loadRootOptions && r.instance.loadRootOptions(...g)),
              title: r.instance.retryTitle
            }, F(r.instance.retryText), 9, Ao)) : T("", !0)
          ]),
          _: 1
        }, 8, ["icon"])) : (h(!0), y(z, { key: 1 }, Te(r.normalizedOptions, (g) => (h(), A(v, {
          node: g,
          key: g.id
        }, te({ _: 2 }, [
          e.$slots["option-label"] ? {
            name: "option-label",
            fn: R(({ node: S, shouldShowCount: b, count: E }) => [
              x(e.$slots, "option-label", {
                node: S,
                shouldShowCount: b,
                count: E
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["node"]))), 128))
      ], 64)),
      x(e.$slots, "after-list")
    ], 36)) : T("", !0)
  ], 4);
}
const ko = /* @__PURE__ */ $(Ro, [["render", Io]]), Bo = {
  name: "vue-treeselect--portal-target",
  inject: ["instance"],
  watch: {
    "instance.menu.isOpen"(e) {
      e ? this.setupHandlers() : this.removeHandlers();
    },
    "instance.menu.placement"() {
      this.updateMenuContainerOffset();
    }
  },
  created() {
    this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
  },
  mounted() {
    const { instance: e } = this;
    e.menu.isOpen && this.setupHandlers();
  },
  methods: {
    setupHandlers() {
      this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
    },
    removeHandlers() {
      this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners() {
      const { instance: e } = this, n = e.getControl();
      this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
        remove: on(n, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const { instance: e } = this, n = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: rn(n, () => {
          this.updateWidth(), this.updateMenuContainerOffset();
        })
      });
    },
    removeControlResizeAndScrollEventListeners() {
      this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
    },
    removeControlSizeWatcher() {
      this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
    },
    updateWidth() {
      const { instance: e } = this, n = this.$el, c = e.getControl().getBoundingClientRect();
      n.style.width = c.width + "px";
    },
    updateMenuContainerOffset() {
      const { instance: e } = this, n = e.getControl(), o = this.$el, c = n.getBoundingClientRect(), u = o.getBoundingClientRect(), r = e.menu.placement === "bottom" ? c.height : 0, p = Math.round(c.left - u.left) + "px", v = Math.round(c.top - u.top + r) + "px", g = this.$refs.menu.$refs["menu-container"].style, b = cn(["transform", "webkitTransform", "MozTransform", "msTransform"], (E) => E in document.body.style);
      g[b] = `translate(${p}, ${v})`;
    }
  },
  unmounted() {
    this.removeHandlers();
  }
}, Vo = {
  name: "vue-treeselect--menu-portal",
  created() {
    this.portalTarget = null;
  },
  mounted() {
    this.setup();
  },
  unmounted() {
    this.teardown();
  },
  methods: {
    setup() {
      const e = document.createElement("div");
      document.body.appendChild(e), this.portalTarget = kn({
        parent: this,
        ...Bo
      }), this.portalTarget.mount(e);
    },
    teardown() {
      document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
    }
  }
}, zo = { class: "vue-treeselect__menu-placeholder" };
function Fo(e, n, o, c, u, r) {
  return h(), y("div", zo);
}
const $o = /* @__PURE__ */ $(Vo, [["render", Fo]]), Ho = {
  name: "vue-treeselect"
}, Po = /* @__PURE__ */ Object.assign(Ho, {
  props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
      type: Boolean,
      default: !1
    },
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable async search mode.
     */
    async: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: Ft(!0)
    },
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
      type: Boolean,
      default: !0
    },
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
      type: String,
      default: "Clear all"
    },
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Title for the "×" button.
     */
    clearValueText: {
      type: String,
      default: "Clear value"
    },
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
      default: !1
    },
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
      type: String,
      default: ","
    },
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: !1
    },
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
     */
    joinValues: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: 1 / 0
    },
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function(n) {
        return `and ${n} more`;
      }
    },
    /**
     * Text displayed when loading options.
     */
    loadingText: {
      type: String,
      default: "Loading..."
    },
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
      type: Array,
      default: Ft(["label"])
    },
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
      type: String
    },
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
      type: String,
      default: "No sub-options."
    },
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
      type: String,
      default: "No options available."
    },
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: "No results found..."
    },
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: vr
    },
    /**
     * By default (`auto`), the menu will open below the control. If there is not
     * enough space, vue-treeselect will automatically flip the menu.
     * You can use one of other four options to force the menu to be always opened
     * to specified direction.
     * Acceptable values:
     *   - `"auto"`
     *   - `"below"`
     *   - `"bottom"`
     *   - `"above"`
     *   - `"top"`
     */
    openDirection: {
      type: String,
      default: "auto",
      validator(e) {
        return Z(["auto", "top", "bottom", "above", "below"], e);
      }
    },
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
      type: Array
    },
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: "Select..."
    },
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
      type: String,
      default: "Retry?"
    },
    /**
     * Title for the retry button.
     */
    retryTitle: {
      type: String,
      default: "Click to retry"
    },
    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: !1
    },
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
      type: String,
      default: "Type to search..."
    },
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
      type: Boolean,
      default: !1
    },
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: ue,
      validator(e) {
        return Z([ue, Oe, we, Ee], e);
      }
    },
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: Ht,
      validator(e) {
        return Z([Ht, Wt, Pt], e);
      }
    },
    /**
     * Tab index of the control.
     */
    tabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null,
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: Be,
      validator(e) {
        return Z([st, Be, rt, ot], e);
      }
    },
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: "id"
    },
    /**
     * z-index of the menu.
     */
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  emits: ["update:modelValue", "search-change", "close", "open", "select", "deselect"],
  setup(e, { emit: n }) {
    const o = Ae(null), c = Ae(null), u = Ae(null), r = Ae(null), p = wr(), v = (t, a) => {
      let l = 0;
      do {
        if (t.level < l)
          return -1;
        if (a.level < l)
          return 1;
        if (t.index[l] !== a.index[l])
          return t.index[l] - a.index[l];
        l++;
      } while (!0);
    }, g = (t, a) => t.level === a.level ? v(t, a) : t.level - a.level, S = () => ({
      isLoaded: !1,
      isLoading: !1,
      loadingError: ""
    }), b = (t) => typeof t == "string" ? t : typeof t == "number" && !an(t) ? t + "" : "", E = (t, a, l) => t ? Wn(a, l) : Z(l, a), B = (t) => t.message || /* istanbul ignore next */
    String(t), ne = () => s.modelValue == null ? [] : s.valueFormat === "id" ? s.multiple ? s.modelValue.slice() : [s.modelValue] : (s.multiple ? s.modelValue : [s.modelValue]).map((t) => Se(t)).map((t) => t.id), Q = n, ze = Bn(), s = e, i = Vn({
      trigger: {
        // Is the control focused?
        isFocused: !1,
        // User entered search query - value of the input.
        searchQuery: ""
      },
      menu: {
        // Is the menu opened?
        isOpen: !1,
        // Id of current highlighted option.
        current: null,
        // The scroll position before last menu closing.
        lastScrollPosition: 0,
        // Which direction to open the menu.
        placement: "bottom"
      },
      forest: {
        // Normalized options.
        normalizedOptions: [],
        // <id, node> map for quick look-up.
        nodeMap: P(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: P(),
        // Id list of all selected options.
        selectedNodeIds: ne(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: P()
      },
      rootOptionsStates: S(),
      localSearch: {
        // Has user entered any query to search local options?
        active: !1,
        // Has any options matched the search query?
        noResults: !1,
        // <id, countObject> map for counting matched children/descendants.
        countMap: P()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: P(),
      isReady: !1,
      _blurOnSelect: !1
    }), Ce = C(() => ({
      name: s.name || "vue-treeselect",
      hasValue: w,
      trigger: i.trigger,
      forest: i.forest,
      localSearch: i.localSearch,
      remoteSearch: i.remoteSearch,
      isReady: i.isReady,
      rootOptionsStates: i.rootOptionsStates,
      internalValue: H,
      selectedNodes: he,
      $slots: ze,
      $refs: {
        control: o.value,
        wrapper: c.value,
        portal: u.value,
        menu: r.value
      },
      menu: i.menu,
      single: N,
      verifyProps: ut,
      resetFlags: dt,
      initialize: ie,
      getInstanceId: K,
      getValue: ht,
      getNode: O,
      createFallbackNode: ft,
      extractCheckedNodeIdsFromValue: ne,
      extractNodeFromValue: pt,
      fixSelectedNodeIds: $e,
      keepDataOfSelectedNodes: mt,
      isSelected: j,
      traverseDescendantsBFS: fe,
      traverseDescendantsDFS: Ne,
      traverseAllNodesDFS: He,
      traverseAllNodesByIndex: We,
      toggleClickOutsideEvent: Pe,
      getValueContainer: vt,
      getInput: je,
      focusInput: gt,
      blurInput: yt,
      handleMouseDown: Cn,
      handleClickOutside: Qe,
      handleLocalSearch: St,
      getRemoteSearchEntry: De,
      shouldExpand: _t,
      shouldOptionBeIncludedInSearchResult: Ke,
      shouldShowOptionInMenu: bt,
      getControl: Nn,
      getMenu: pe,
      setCurrentHighlightedOption: me,
      resetHighlightedOptionWhenNecessary: ve,
      highlightFirstOption: qe,
      highlightPrevOption: Dn,
      highlightNextOption: Ln,
      highlightLastOption: Ot,
      resetSearchQuery: Ue,
      closeMenu: ce,
      openMenu: ge,
      toggleMenu: Mn,
      toggleExpanded: Rn,
      buildForestState: ye,
      enhancedNormalizer: Se,
      normalize: Le,
      loadRootOptions: Xe,
      loadChildrenOptions: Ye,
      callLoadOptionsProp: Me,
      checkDuplication: wt,
      verifyNodeShape: Et,
      select: Tt,
      clear: Ge,
      _selectNode: Ct,
      _deselectNode: Nt,
      addValue: Y,
      removeValue: G,
      removeLastValue: xn,
      saveMenuScrollPosition: Dt,
      restoreMenuScrollPosition: Lt,
      handleRemoteSearch: Je,
      allowClearingDisabled: s.allowClearingDisabled,
      allowSelectingDisabledDescendants: s.allowSelectingDisabledDescendants,
      alwaysOpen: s.alwaysOpen,
      appendToBody: s.appendToBody,
      async: s.async,
      autoFocus: s.autoFocus,
      autoLoadRootOptions: s.autoLoadRootOptions,
      autoDeselectAncestors: s.autoDeselectAncestors,
      autoDeselectDescendants: s.autoDeselectDescendants,
      autoSelectAncestors: s.autoSelectAncestors,
      autoSelectDescendants: s.autoSelectDescendants,
      backspaceRemoves: s.backspaceRemoves,
      beforeClearAll: s.beforeClearAll,
      branchNodesFirst: s.branchNodesFirst,
      cacheOptions: s.cacheOptions,
      clearable: s.clearable,
      clearAllText: s.clearAllText,
      clearOnSelect: s.clearOnSelect,
      clearValueText: s.clearValueText,
      closeOnSelect: s.closeOnSelect,
      defaultExpandLevel: s.defaultExpandLevel,
      defaultOptions: s.defaultOptions,
      deleteRemoves: s.deleteRemoves,
      delimiter: s.delimiter,
      flattenSearchResults: s.flattenSearchResults,
      disableBranchNodes: s.disableBranchNodes,
      disabled: s.disabled,
      disableFuzzyMatching: s.disableFuzzyMatching,
      flat: s.flat,
      instanceId: p,
      joinValues: s.joinValues,
      limit: s.limit,
      limitText: s.limitText,
      loadingText: s.loadingText,
      loadOptions: s.loadOptions,
      matchKeys: s.matchKeys,
      maxHeight: s.maxHeight,
      multiple: s.multiple,
      noChildrenText: s.noChildrenText,
      noOptionsText: s.noOptionsText,
      noResultsText: s.noResultsText,
      normalizer: s.normalizer,
      openDirection: s.openDirection,
      openOnClick: s.openOnClick,
      openOnFocus: s.openOnFocus,
      options: s.options,
      placeholder: s.placeholder,
      required: s.required,
      retryText: s.retryText,
      retryTitle: s.retryTitle,
      searchable: s.searchable,
      searchNested: s.searchNested,
      searchPromptText: s.searchPromptText,
      showCount: s.showCount,
      showCountOf: s.showCountOf,
      showCountOnSearch: s.showCountOnSearch,
      sortValueBy: s.sortValueBy,
      tabIndex: s.tabIndex,
      modelValue: s.modelValue,
      valueConsistsOf: s.valueConsistsOf,
      valueFormat: s.valueFormat,
      zIndex: s.zIndex
    })), Fe = C(() => ({
      "vue-treeselect": !0,
      "vue-treeselect--single": N.value,
      "vue-treeselect--multi": s.multiple,
      "vue-treeselect--searchable": s.searchable,
      "vue-treeselect--disabled": s.disabled,
      "vue-treeselect--focused": i.trigger.isFocused,
      "vue-treeselect--has-value": w.value,
      "vue-treeselect--open": i.menu.isOpen,
      "vue-treeselect--open-above": i.menu.placement === "top",
      "vue-treeselect--open-below": i.menu.placement === "bottom",
      "vue-treeselect--branch-nodes-disabled": s.disableBranchNodes,
      "vue-treeselect--append-to-body": s.appendToBody
    })), he = C(() => i.forest.selectedNodeIds.map(O)), H = C(() => {
      let t;
      if (N.value || s.flat || s.disableBranchNodes || s.valueConsistsOf === st)
        t = i.forest.selectedNodeIds.slice();
      else if (s.valueConsistsOf === Be)
        t = i.forest.selectedNodeIds.filter((a) => {
          const l = O(a);
          return l.isRootNode ? !0 : !j(l.parentNode);
        });
      else if (s.valueConsistsOf === rt)
        t = i.forest.selectedNodeIds.filter((a) => {
          const l = O(a);
          return l.isLeaf ? !0 : l.children.length === 0;
        });
      else if (s.valueConsistsOf === ot) {
        const a = [];
        t = i.forest.selectedNodeIds.slice(), he.value.forEach((l) => {
          l.ancestors.forEach((f) => {
            Z(a, f.id) || Z(t, f.id) || a.push(f.id);
          });
        }), t.push(...a);
      }
      return s.sortValueBy === Wt ? t.sort((a, l) => g(O(a), O(l))) : s.sortValueBy === Pt && t.sort((a, l) => v(O(a), O(l))), t;
    }), w = C(() => H.value.length > 0), N = C(() => !s.multiple), V = C(() => {
      const t = [];
      return We((a) => {
        if ((!i.localSearch.active || Ke(a)) && t.push(a.id), a.isBranch && !_t(a))
          return !1;
      }), t;
    }), se = C(() => V.value.length !== 0);
    C(() => typeof s.showCountOnSearch == "boolean" ? s.showCountOnSearch : s.showCount), C(() => i.forest.normalizedOptions.some((t) => t.isBranch)), C(() => i.localSearch.active && s.flattenSearchResults);
    const gn = C(() => i.trigger.searchQuery), yn = C(() => s.modelValue), Sn = C(() => s.alwaysOpen), _n = C(() => s.branchNodesFirst), bn = C(() => s.disabled), On = C(() => s.flat), wn = C(() => s.matchKeys), En = C(() => s.multiple), Tn = C(() => s.options), ut = () => {
      J(
        () => s.async ? s.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), s.options == null && !s.loadOptions && J(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), s.flat && J(
        () => s.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), s.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((a) => {
        J(
          () => !s[a],
          () => `"${a}" only applies to flat mode.`
        );
      });
    }, dt = () => {
      i._blurOnSelect = !1;
    }, ie = () => {
      const t = s.async ? De().options : Yt(s.options);
      if (Array.isArray(t)) {
        const a = i.forest.nodeMap;
        i.forest.nodeMap = P(), mt(a), i.forest.normalizedOptions = Le(ae, t, a), $e(H.value);
        const { searchQuery: l } = i.trigger;
        i.remoteSearch[l] = De();
      } else
        i.forest.normalizedOptions = [];
    }, K = () => p, ht = () => {
      if (s.valueFormat === "id")
        return s.multiple ? H.value.slice() : H.value[0];
      const t = H.value.map((a) => O(a).raw);
      return s.multiple ? t : t[0];
    }, O = (t) => (J(
      () => t != null,
      () => `Invalid node id: ${t}`
    ), t == null ? null : t in i.forest.nodeMap ? i.forest.nodeMap[t] : ft(t)), ft = (t) => {
      const a = pt(t), l = Se(a).label || `${t} (unknown)`, f = {
        id: t,
        label: l,
        ancestors: [],
        parentNode: ae,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: a
      };
      return i.forest.nodeMap[t] = f;
    }, pt = (t) => {
      const a = { id: t };
      if (s.valueFormat === "id")
        return a;
      const l = s.multiple ? Array.isArray(s.modelValue) ? s.modelValue : [] : s.modelValue ? [s.modelValue] : [];
      return cn(
        l,
        (d) => d && Se(d).id === t
      ) || a;
    }, $e = (t) => {
      let a = [];
      if (N.value || s.flat || s.disableBranchNodes || s.valueConsistsOf === st)
        a = t;
      else if (s.valueConsistsOf === Be)
        t.forEach((l) => {
          a.push(l);
          const f = O(l);
          f.isBranch && fe(f, (d) => {
            a.push(d.id);
          });
        });
      else if (s.valueConsistsOf === rt) {
        const l = P(), f = t.slice();
        for (; f.length; ) {
          const d = f.shift(), _ = O(d);
          a.push(d), !_.isRootNode && (_.parentNode.id in l || (l[_.parentNode.id] = _.parentNode.children.length), --l[_.parentNode.id] === 0 && f.push(_.parentNode.id));
        }
      } else if (s.valueConsistsOf === ot) {
        const l = P(), f = t.filter((d) => {
          const _ = O(d);
          return _.isLeaf || _.children.length === 0;
        });
        for (; f.length; ) {
          const d = f.shift(), _ = O(d);
          a.push(d), !_.isRootNode && (_.parentNode.id in l || (l[_.parentNode.id] = _.parentNode.children.length), --l[_.parentNode.id] === 0 && f.push(_.parentNode.id));
        }
      }
    }, mt = (t) => {
      i.forest.selectedNodeIds.forEach((a) => {
        t[a] && (i.forest.nodeMap[a] = {
          ...t[a],
          isFallbackNode: !0
        });
      });
    }, j = (t) => i.forest.selectedNodeMap[t.id] === !0, fe = (t, a) => {
      if (!t.isBranch)
        return;
      const l = t.children.slice();
      for (; l.length; ) {
        const f = l[0];
        f.isBranch && l.push(...f.children), a(f), l.shift();
      }
    }, Ne = (t, a) => {
      t.isBranch && t.children.forEach((l) => {
        Ne(l, a), a(l);
      });
    }, He = (t) => {
      i.forest.normalizedOptions.forEach((a) => {
        Ne(a, t), t(a);
      });
    }, We = (t) => {
      const a = (l) => {
        l.children.forEach((f) => {
          t(f) !== !1 && f.isBranch && a(f);
        });
      };
      a({ children: i.forest.normalizedOptions });
    }, Pe = (t) => {
      t ? document.addEventListener("mousedown", Qe, !1) : document.removeEventListener("mousedown", Qe, !1);
    }, vt = () => o.value.$refs["value-container"], je = () => vt().$refs.input, gt = () => {
      je().focus();
    }, yt = () => {
      je().blur();
    }, Cn = () => {
    }, Qe = (t) => {
      c.value && !c.value.contains(t.target) && (yt(), ce());
    }, St = () => {
      const { searchQuery: t } = i.trigger, a = () => ve(!0);
      if (!t)
        return i.localSearch.active = !1, i.localSearch.noResults = !1, a();
      i.localSearch.active = !0, i.localSearch.noResults = !0, He((d) => {
        d.isBranch && (d.isExpandedOnSearch = !1, d.showAllChildrenOnSearch = !1, d.isMatched = !1, d.hasMatchedDescendants = !1, i.localSearch.countMap[d.id] = {
          [ue]: 0,
          [Oe]: 0,
          [we]: 0,
          [Ee]: 0
        });
      });
      const l = t.trim().toLocaleLowerCase(), f = l.replace(/\s+/g, " ").split(" ");
      He((d) => {
        s.searchNested && f.length > 1 ? d.isMatched = f.every(
          (_) => E(!1, _, d.nestedSearchLabel)
        ) : d.isMatched = s.matchKeys.some(
          (_) => E(!s.disableFuzzyMatching, l, d.lowerCased[_])
        ), d.isMatched && (i.localSearch.noResults = !1, d.ancestors.forEach((_) => i.localSearch.countMap[_.id][Oe]++), d.isLeaf && d.ancestors.forEach((_) => i.localSearch.countMap[_.id][Ee]++), d.parentNode !== ae && (i.localSearch.countMap[d.parentNode.id][ue] += 1, d.isLeaf && (i.localSearch.countMap[d.parentNode.id][we] += 1))), (d.isMatched || d.isBranch && d.isExpandedOnSearch) && d.parentNode !== ae && (d.parentNode.isExpandedOnSearch = !0, d.parentNode.hasMatchedDescendants = !0);
      }), a();
    }, De = () => {
      const { searchQuery: t } = i.trigger, a = i.remoteSearch[t] || {
        ...S(),
        options: []
      };
      if (t === "") {
        if (Array.isArray(s.defaultOptions))
          return a.options = s.defaultOptions, a.isLoaded = !0, a;
        if (s.defaultOptions !== !0)
          return a.isLoaded = !0, a;
      }
      return i.remoteSearch[t] || (i.remoteSearch[t] = a), i.remoteSearch[t];
    }, _t = (t) => i.localSearch.active ? t.isExpandedOnSearch : t.isExpanded, Ke = (t) => !!(t.isMatched || t.isBranch && t.hasMatchedDescendants && !s.flattenSearchResults || !t.isRootNode && t.parentNode.showAllChildrenOnSearch), bt = (t) => !(i.localSearch.active && !Ke(t)), Nn = () => o.value.$el, pe = () => r.value.$el, me = (t, a = !0) => {
      const l = i.menu.current;
      if (l != null && l in i.forest.nodeMap && (i.forest.nodeMap[l].isHighlighted = !1), i.menu.current = t.id, t.isHighlighted = !0, i.menu.isOpen && a) {
        const f = () => {
          const d = pe(), _ = d.querySelector(`.vue-treeselect__option[data-id="${t.id}"]`);
          _ && Kn(d, _);
        };
        pe() ? f() : Ie(f);
      }
    }, ve = (t = !1) => {
      const { current: a } = i.menu;
      (t || a == null || !(a in i.forest.nodeMap) || !bt(O(a))) && qe();
    }, qe = () => {
      if (!se.value)
        return;
      const t = V.value[0];
      me(O(t));
    }, Dn = () => {
      if (!se.value)
        return;
      const t = V.value.indexOf(i.menu.current) - 1;
      if (t === -1)
        return Ot();
      me(O(V.value[t]));
    }, Ln = () => {
      if (!se.value)
        return;
      const t = V.value.indexOf(i.menu.current) + 1;
      if (t === V.value.length)
        return qe();
      me(O(V.value[t]));
    }, Ot = () => {
      if (!se.value)
        return;
      const t = $t(V.value);
      me(O(t));
    }, Ue = () => {
      i.trigger.searchQuery = "";
    }, ce = () => {
      !i.menu.isOpen || !s.disabled && s.alwaysOpen || (Dt(), i.menu.isOpen = !1, Pe(!1), Ue(), Q("close", ht(), K()));
    }, ge = () => {
      s.disabled || i.menu.isOpen || (i.menu.isOpen = !0, Ie(ve), Ie(Lt), !s.options && !s.async && Xe(), Pe(!0), Q("open", K()));
    }, Mn = () => {
      i.menu.isOpen ? ce() : ge();
    }, Rn = (t) => {
      let a;
      i.localSearch.active ? (a = t.isExpandedOnSearch = !t.isExpandedOnSearch, a && (t.showAllChildrenOnSearch = !0)) : a = t.isExpanded = !t.isExpanded, a && !t.childrenStates.isLoaded && Ye(t);
    }, ye = () => {
      const t = P();
      i.forest.selectedNodeIds.forEach((l) => {
        t[l] = !0;
      }), i.forest.selectedNodeMap = t;
      const a = P();
      s.multiple && (We((l) => {
        a[l.id] = it;
      }), he.value.forEach((l) => {
        a[l.id] = dn, !s.flat && !s.disableBranchNodes && l.ancestors.forEach((f) => {
          j(f) || (a[f.id] = un);
        });
      })), i.forest.checkedStateMap = a;
    }, Se = (t) => ({
      ...t,
      ...s.normalizer(t, K())
    }), Le = (t, a, l) => {
      let f = a.map((d) => [Se(d), d]).map(([d, _], re) => {
        wt(d), Et(d);
        const { id: q, label: Re, children: W, isDefaultExpanded: _e } = d, oe = t === ae, Mt = oe ? 0 : t.level + 1, Ze = Array.isArray(W) || W === null, et = !Ze, Rt = !!d.isDisabled || !s.flat && !oe && t.isDisabled, An = !!d.isNew, tt = s.matchKeys.reduce((D, xe) => ({
          ...D,
          [xe]: b(d[xe]).toLocaleLowerCase()
        }), {}), In = oe ? tt.label : t.nestedSearchLabel + " " + tt.label;
        i.forest.nodeMap[q] = P();
        const m = i.forest.nodeMap[q];
        if (m.id = q, m.label = Re, m.level = Mt, m.ancestors = oe ? [] : [t].concat(t.ancestors), m.index = (oe ? [] : t.index).concat(re), m.parentNode = t, m.lowerCased = tt, m.nestedSearchLabel = In, m.isDisabled = Rt, m.isNew = An, m.isMatched = !1, m.isHighlighted = !1, m.isBranch = Ze, m.isLeaf = et, m.isRootNode = oe, m.raw = _, Ze) {
          const D = Array.isArray(W);
          m.childrenStates = { ...S(), isLoaded: D }, m.isExpanded = typeof _e == "boolean" ? _e : Mt < s.defaultExpandLevel, m.hasMatchedDescendants = !1, m.hasDisabledDescendants = !1, m.isExpandedOnSearch = !1, m.showAllChildrenOnSearch = !1, m.count = {
            [ue]: 0,
            [Oe]: 0,
            [we]: 0,
            [Ee]: 0
          }, m.children = D ? Le(m, W, l) : [], _e === !0 && m.ancestors.forEach((xe) => {
            xe.isExpanded = !0;
          }), !D && typeof s.loadOptions != "function" ? J(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !D && m.isExpanded && Ye(m);
        }
        if (m.ancestors.forEach((D) => D.count[Oe]++), et && m.ancestors.forEach((D) => D.count[Ee]++), oe || (t.count[ue] += 1, et && (t.count[we] += 1), Rt && (t.hasDisabledDescendants = !0)), l && l[q]) {
          const D = l[q];
          m.isMatched = D.isMatched, m.showAllChildrenOnSearch = D.showAllChildrenOnSearch, m.isHighlighted = D.isHighlighted, D.isBranch && m.isBranch && (m.isExpanded = D.isExpanded, m.isExpandedOnSearch = D.isExpandedOnSearch, D.childrenStates.isLoaded && !m.childrenStates.isLoaded ? m.isExpanded = !1 : m.childrenStates = { ...D.childrenStates });
        }
        return m;
      });
      if (s.branchNodesFirst) {
        const d = f.filter((re) => re.isBranch), _ = f.filter((re) => re.isLeaf);
        f = d.concat(_);
      }
      return f;
    }, Xe = () => {
      Me({
        action: Er,
        isPending: () => i.rootOptionsStates.isLoading,
        start: () => {
          i.rootOptionsStates.isLoading = !0, i.rootOptionsStates.loadingError = "";
        },
        succeed: () => {
          i.rootOptionsStates.isLoaded = !0, Ie(() => {
            ve(!0);
          });
        },
        fail: (t) => {
          i.rootOptionsStates.loadingError = B(t);
        },
        end: () => {
          i.rootOptionsStates.isLoading = !1;
        }
      });
    }, Ye = (t) => {
      const { id: a, raw: l } = t;
      Me({
        action: Tr,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: l
        },
        isPending: () => O(a).childrenStates.isLoading,
        start: () => {
          O(a).childrenStates.isLoading = !0, O(a).childrenStates.loadingError = "";
        },
        succeed: (f) => {
          const d = O(a);
          d.children = Le(t, f), d.childrenStates.isLoaded = !0;
        },
        fail: (f) => {
          O(a).childrenStates.loadingError = B(f);
        },
        end: () => {
          O(a).childrenStates.isLoading = !1;
        }
      });
    }, Me = ({ action: t, args: a, isPending: l, start: f, succeed: d, fail: _, end: re }) => {
      if (!s.loadOptions || l())
        return;
      f();
      const q = fr((W, _e) => {
        W ? _(W) : d(_e), re();
      }), Re = s.loadOptions({
        id: K(),
        instanceId: K(),
        action: t,
        ...a,
        callback: q
      });
      ln(Re) && Re.then(() => {
        q();
      }, (W) => {
        q(W);
      }).catch((W) => {
        console.error(W);
      });
    }, wt = (t) => {
      J(
        () => !(t.id in i.forest.nodeMap && !i.forest.nodeMap[t.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(t.id)}. Their labels are "${i.forest.nodeMap[t.id].label}" and "${t.label}" respectively.`
      );
    }, Et = (t) => {
      J(
        () => !(t.children === void 0 && t.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    }, Tt = (t) => {
      if (s.disabled || t.isDisabled)
        return;
      N.value && Ge();
      const a = s.multiple && !s.flat ? i.forest.checkedStateMap[t.id] === it : !j(t);
      a ? Ct(t) : Nt(t), ye(), Q(a ? "select" : "deselect", t.raw, K()), i.localSearch.active && a && (N.value || s.clearOnSelect) && Ue(), N.value && s.closeOnSelect && (ce(), s.searchable && (i._blurOnSelect = !0)), Q("update:modelValue", s.multiple ? i.forest.selectedNodeIds : i.forest.selectedNodeIds[0] || null);
    }, Ge = () => {
      w.value && (N.value || s.allowClearingDisabled ? i.forest.selectedNodeIds = [] : i.forest.selectedNodeIds = i.forest.selectedNodeIds.filter(
        (t) => O(t).isDisabled
      ), ye(), Q("update:modelValue", null));
    }, Ct = (t) => {
      if (N.value || s.disableBranchNodes)
        return Y(t);
      if (s.flat) {
        Y(t), s.autoSelectAncestors ? t.ancestors.forEach((l) => {
          !j(l) && !l.isDisabled && Y(l);
        }) : s.autoSelectDescendants && fe(t, (l) => {
          !j(l) && !l.isDisabled && Y(l);
        });
        return;
      }
      const a = t.isLeaf || /* node.isBranch && */
      !t.hasDisabledDescendants || /* node.isBranch && */
      s.allowSelectingDisabledDescendants;
      if (a && Y(t), t.isBranch && fe(t, (l) => {
        (!l.isDisabled || s.allowSelectingDisabledDescendants) && Y(l);
      }), a) {
        let l = t;
        for (; (l = l.parentNode) !== ae && l.children.every(j); )
          Y(l);
      }
    }, Nt = (t) => {
      if (s.disableBranchNodes)
        return G(t);
      if (s.flat) {
        G(t), s.autoDeselectAncestors ? t.ancestors.forEach((l) => {
          j(l) && !l.isDisabled && G(l);
        }) : s.autoDeselectDescendants && fe(t, (l) => {
          j(l) && !l.isDisabled && G(l);
        });
        return;
      }
      let a = !1;
      if (t.isBranch && Ne(t, (l) => {
        (!l.isDisabled || s.allowSelectingDisabledDescendants) && (G(l), a = !0);
      }), t.isLeaf || /* node.isBranch && */
      a || /* node.isBranch && */
      t.children.length === 0) {
        G(t);
        let l = t;
        for (; (l = l.parentNode) !== ae && j(l); )
          G(l);
      }
    }, Y = (t) => {
      i.forest.selectedNodeIds.push(t.id), i.forest.selectedNodeMap[t.id] = !0;
    }, G = (t) => {
      nn(i.forest.selectedNodeIds, t.id), delete i.forest.selectedNodeMap[t.id];
    }, xn = () => {
      if (!w.value)
        return;
      if (N.value)
        return Ge();
      const t = $t(H.value), a = O(t);
      Tt(a);
    }, Dt = () => {
      const t = pe();
      t && (r.value.lastScrollPosition = t.scrollTop);
    }, Lt = () => {
      const t = pe();
      t && (t.scrollTop = r.value.lastScrollPosition);
    }, Je = () => {
      const { searchQuery: t } = i.trigger, a = De(), l = () => {
        ie(), ve(!0);
      };
      if ((t === "" || s.cacheOptions) && a.isLoaded)
        return l();
      Me({
        action: Cr,
        args: { searchQuery: t },
        isPending() {
          return a.isLoading;
        },
        start: () => {
          a.isLoading = !0, a.isLoaded = !1, a.loadingError = "";
        },
        succeed: (f) => {
          a.isLoading = !1, a.isLoaded = !0, a.options = f, i.trigger.searchQuery === t && l();
        },
        fail: (f) => {
          a.isLoading = !1, a.loadingError = B(f);
        },
        end: () => {
          a.isLoading = !1;
        }
      });
    };
    return U(Sn, (t) => {
      t ? ge() : ce();
    }), U(_n, () => {
      ie();
    }), U(bn, (t) => {
      t && i.menu.isOpen ? ce() : !t && !i.menu.isOpen && s.alwaysOpen && ge();
    }), U(On, () => {
      ie();
    }), U(wn, () => {
      ie();
    }), U(En, (t) => {
      t && ye();
    }), U(Tn, () => {
      s.async || (ie(), i.rootOptionsStates.isLoaded = Array.isArray(s.options));
    }, {
      deep: !0,
      immediate: !0
    }), U(gn, () => {
      s.async ? Je() : St(), Q("search-change", i.trigger.searchQuery, K());
    }), U(yn, () => {
      const t = ne();
      br(t, H.value) && $e(t);
    }), zn(() => {
      ut(), dt(), i.isReady = !0, s.autoFocus && gt(), !s.options && !s.async && s.autoLoadRootOptions && Xe(), s.alwaysOpen && ge(), s.async && s.defaultOptions && Je(), ye();
    }), Fn("instance", Ce.value), (t, a) => (h(), y("div", {
      ref_key: "wrapper",
      ref: c,
      class: I(Fe.value)
    }, [
      i.isReady ? (h(), y(z, { key: 0 }, [
        X(Rr),
        X(ho, {
          ref_key: "control",
          ref: o
        }, te({ _: 2 }, [
          t.$slots["value-label"] ? {
            name: "value-label",
            fn: R(({ node: l }) => [
              x(t.$slots, "value-label", { node: l })
            ]),
            key: "0"
          } : void 0
        ]), 1536),
        e.appendToBody ? (h(), A($o, {
          key: 0,
          ref_key: "portal",
          ref: u
        }, null, 512)) : (h(), A(ko, {
          key: 1,
          ref_key: "rmenu",
          ref: r
        }, te({ _: 2 }, [
          t.$slots["before-list"] ? {
            name: "before-list",
            fn: R(() => [
              x(t.$slots, "before-list")
            ]),
            key: "0"
          } : void 0,
          t.$slots["after-list"] ? {
            name: "after-list",
            fn: R(() => [
              x(t.$slots, "after-list")
            ]),
            key: "1"
          } : void 0,
          t.$slots["option-label"] ? {
            name: "option-label",
            fn: R(({ node: l, shouldShowCount: f, count: d }) => [
              x(t.$slots, "option-label", {
                node: l,
                shouldShowCount: f,
                count: d
              })
            ]),
            key: "2"
          } : void 0
        ]), 1536))
      ], 64)) : T("", !0)
    ], 2));
  }
});
export {
  Cr as ASYNC_SEARCH,
  Tr as LOAD_CHILDREN_OPTIONS,
  Er as LOAD_ROOT_OPTIONS,
  Po as Treeselect,
  Po as default
};

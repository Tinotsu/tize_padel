!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).Sweetalert2 =
        t());
})(this, function () {
  "use strict";
  function e(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t))
      return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function t(t, n) {
    return t.get(e(t, n));
  }
  function n(e, t, n) {
    (function (e, t) {
      if (t.has(e))
        throw new TypeError(
          "Cannot initialize the same private elements twice on an object"
        );
    })(e, t),
      t.set(e, n);
  }
  const o = {},
    i = (e) =>
      new Promise((t) => {
        if (!e) return t();
        const n = window.scrollX,
          i = window.scrollY;
        (o.restoreFocusTimeout = setTimeout(() => {
          o.previousActiveElement instanceof HTMLElement
            ? (o.previousActiveElement.focus(),
              (o.previousActiveElement = null))
            : document.body && document.body.focus(),
            t();
        }, 100)),
          window.scrollTo(n, i);
      }),
    s = "swal2-",
    r = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
      "draggable",
      "dragging",
    ].reduce((e, t) => ((e[t] = s + t), e), {}),
    a = ["success", "warning", "info", "question", "error"].reduce(
      (e, t) => ((e[t] = s + t), e),
      {}
    ),
    l = "SweetAlert2:",
    c = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    u = (e) => {
      console.warn(`${l} ${"object" == typeof e ? e.join(" ") : e}`);
    },
    d = (e) => {
      console.error(`${l} ${e}`);
    },
    p = [],
    m = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      var n;
      (n = `"${e}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`),
        p.includes(n) || (p.push(n), u(n));
    },
    h = (e) => ("function" == typeof e ? e() : e),
    g = (e) => e && "function" == typeof e.toPromise,
    f = (e) => (g(e) ? e.toPromise() : Promise.resolve(e)),
    b = (e) => e && Promise.resolve(e) === e,
    y = () => document.body.querySelector(`.${r.container}`),
    v = (e) => {
      const t = y();
      return t ? t.querySelector(e) : null;
    },
    w = (e) => v(`.${e}`),
    C = () => w(r.popup),
    A = () => w(r.icon),
    E = () => w(r.title),
    k = () => w(r["html-container"]),
    B = () => w(r.image),
    L = () => w(r["progress-steps"]),
    $ = () => w(r["validation-message"]),
    x = () => v(`.${r.actions} .${r.confirm}`),
    P = () => v(`.${r.actions} .${r.cancel}`),
    T = () => v(`.${r.actions} .${r.deny}`),
    S = () => v(`.${r.loader}`),
    O = () => w(r.actions),
    M = () => w(r.footer),
    j = () => w(r["timer-progress-bar"]),
    H = () => w(r.close),
    I = () => {
      const e = C();
      if (!e) return [];
      const t = e.querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        ),
        n = Array.from(t).sort((e, t) => {
          const n = parseInt(e.getAttribute("tabindex") || "0"),
            o = parseInt(t.getAttribute("tabindex") || "0");
          return n > o ? 1 : n < o ? -1 : 0;
        }),
        o = e.querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        ),
        i = Array.from(o).filter((e) => "-1" !== e.getAttribute("tabindex"));
      return [...new Set(n.concat(i))].filter((e) => ee(e));
    },
    D = () =>
      N(document.body, r.shown) &&
      !N(document.body, r["toast-shown"]) &&
      !N(document.body, r["no-backdrop"]),
    q = () => {
      const e = C();
      return !!e && N(e, r.toast);
    },
    V = (e, t) => {
      if (((e.textContent = ""), t)) {
        const n = new DOMParser().parseFromString(t, "text/html"),
          o = n.querySelector("head");
        o &&
          Array.from(o.childNodes).forEach((t) => {
            e.appendChild(t);
          });
        const i = n.querySelector("body");
        i &&
          Array.from(i.childNodes).forEach((t) => {
            t instanceof HTMLVideoElement || t instanceof HTMLAudioElement
              ? e.appendChild(t.cloneNode(!0))
              : e.appendChild(t);
          });
      }
    },
    N = (e, t) => {
      if (!t) return !1;
      const n = t.split(/\s+/);
      for (let t = 0; t < n.length; t++)
        if (!e.classList.contains(n[t])) return !1;
      return !0;
    },
    _ = (e, t, n) => {
      if (
        (((e, t) => {
          Array.from(e.classList).forEach((n) => {
            Object.values(r).includes(n) ||
              Object.values(a).includes(n) ||
              Object.values(t.showClass || {}).includes(n) ||
              e.classList.remove(n);
          });
        })(e, t),
        !t.customClass)
      )
        return;
      const o = t.customClass[n];
      o &&
        ("string" == typeof o || o.forEach
          ? z(e, o)
          : u(
              `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`
            ));
    },
    F = (e, t) => {
      if (!t) return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(`.${r.popup} > .${r[t]}`);
        case "checkbox":
          return e.querySelector(`.${r.popup} > .${r.checkbox} input`);
        case "radio":
          return (
            e.querySelector(`.${r.popup} > .${r.radio} input:checked`) ||
            e.querySelector(`.${r.popup} > .${r.radio} input:first-child`)
          );
        case "range":
          return e.querySelector(`.${r.popup} > .${r.range} input`);
        default:
          return e.querySelector(`.${r.popup} > .${r.input}`);
      }
    },
    R = (e) => {
      if ((e.focus(), "file" !== e.type)) {
        const t = e.value;
        (e.value = ""), (e.value = t);
      }
    },
    U = (e, t, n) => {
      e &&
        t &&
        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach((t) => {
          Array.isArray(e)
            ? e.forEach((e) => {
                n ? e.classList.add(t) : e.classList.remove(t);
              })
            : n
            ? e.classList.add(t)
            : e.classList.remove(t);
        }));
    },
    z = (e, t) => {
      U(e, t, !0);
    },
    W = (e, t) => {
      U(e, t, !1);
    },
    K = (e, t) => {
      const n = Array.from(e.children);
      for (let e = 0; e < n.length; e++) {
        const o = n[e];
        if (o instanceof HTMLElement && N(o, t)) return o;
      }
    },
    Y = (e, t, n) => {
      n === `${parseInt(n)}` && (n = parseInt(n)),
        n || 0 === parseInt(n)
          ? e.style.setProperty(t, "number" == typeof n ? `${n}px` : n)
          : e.style.removeProperty(t);
    },
    X = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
      e && (e.style.display = t);
    },
    Z = (e) => {
      e && (e.style.display = "none");
    },
    J = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "block";
      e &&
        new MutationObserver(() => {
          Q(e, e.innerHTML, t);
        }).observe(e, { childList: !0, subtree: !0 });
    },
    G = (e, t, n, o) => {
      const i = e.querySelector(t);
      i && i.style.setProperty(n, o);
    },
    Q = function (e, t) {
      t
        ? X(
            e,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "flex"
          )
        : Z(e);
    },
    ee = (e) =>
      !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    te = (e) => !!(e.scrollHeight > e.clientHeight),
    ne = (e) => {
      const t = window.getComputedStyle(e),
        n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        o = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    },
    oe = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const n = j();
      n &&
        ee(n) &&
        (t && ((n.style.transition = "none"), (n.style.width = "100%")),
        setTimeout(() => {
          (n.style.transition = `width ${e / 1e3}s linear`),
            (n.style.width = "0%");
        }, 10));
    },
    ie =
      `\n <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">\n   <button type="button" class="${r.close}"></button>\n   <ul class="${r["progress-steps"]}"></ul>\n   <div class="${r.icon}"></div>\n   <img class="${r.image}" />\n   <h2 class="${r.title}" id="${r.title}"></h2>\n   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>\n   <input class="${r.input}" id="${r.input}" />\n   <input type="file" class="${r.file}" />\n   <div class="${r.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${r.select}" id="${r.select}"></select>\n   <div class="${r.radio}"></div>\n   <label class="${r.checkbox}">\n     <input type="checkbox" id="${r.checkbox}" />\n     <span class="${r.label}"></span>\n   </label>\n   <textarea class="${r.textarea}" id="${r.textarea}"></textarea>\n   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>\n   <div class="${r.actions}">\n     <div class="${r.loader}"></div>\n     <button type="button" class="${r.confirm}"></button>\n     <button type="button" class="${r.deny}"></button>\n     <button type="button" class="${r.cancel}"></button>\n   </div>\n   <div class="${r.footer}"></div>\n   <div class="${r["timer-progress-bar-container"]}">\n     <div class="${r["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(
        /(^|\n)\s*/g,
        ""
      ),
    se = () => {
      o.currentInstance.resetValidationMessage();
    },
    re = (e) => {
      const t = (() => {
        const e = y();
        return (
          !!e &&
          (e.remove(),
          W(
            [document.documentElement, document.body],
            [r["no-backdrop"], r["toast-shown"], r["has-column"]]
          ),
          !0)
        );
      })();
      if ("undefined" == typeof window || "undefined" == typeof document)
        return void d("SweetAlert2 requires document to initialize");
      const n = document.createElement("div");
      (n.className = r.container),
        t && z(n, r["no-transition"]),
        V(n, ie),
        (n.dataset.swal2Theme = e.theme);
      const o =
        "string" == typeof (i = e.target) ? document.querySelector(i) : i;
      var i;
      o.appendChild(n),
        ((e) => {
          const t = C();
          t.setAttribute("role", e.toast ? "alert" : "dialog"),
            t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
            e.toast || t.setAttribute("aria-modal", "true");
        })(e),
        ((e) => {
          "rtl" === window.getComputedStyle(e).direction && z(y(), r.rtl);
        })(o),
        (() => {
          const e = C(),
            t = K(e, r.input),
            n = K(e, r.file),
            o = e.querySelector(`.${r.range} input`),
            i = e.querySelector(`.${r.range} output`),
            s = K(e, r.select),
            a = e.querySelector(`.${r.checkbox} input`),
            l = K(e, r.textarea);
          (t.oninput = se),
            (n.onchange = se),
            (s.onchange = se),
            (a.onchange = se),
            (l.oninput = se),
            (o.oninput = () => {
              se(), (i.value = o.value);
            }),
            (o.onchange = () => {
              se(), (i.value = o.value);
            });
        })();
    },
    ae = (e, t) => {
      e instanceof HTMLElement
        ? t.appendChild(e)
        : "object" == typeof e
        ? le(e, t)
        : e && V(t, e);
    },
    le = (e, t) => {
      e.jquery ? ce(t, e) : V(t, e.toString());
    },
    ce = (e, t) => {
      if (((e.textContent = ""), 0 in t))
        for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
      else e.appendChild(t.cloneNode(!0));
    },
    ue = (e, t) => {
      const n = O(),
        o = S();
      n &&
        o &&
        (t.showConfirmButton || t.showDenyButton || t.showCancelButton
          ? X(n)
          : Z(n),
        _(n, t, "actions"),
        (function (e, t, n) {
          const o = x(),
            i = T(),
            s = P();
          if (!o || !i || !s) return;
          de(o, "confirm", n),
            de(i, "deny", n),
            de(s, "cancel", n),
            (function (e, t, n, o) {
              if (!o.buttonsStyling) return void W([e, t, n], r.styled);
              z([e, t, n], r.styled),
                o.confirmButtonColor &&
                  ((e.style.backgroundColor = o.confirmButtonColor),
                  z(e, r["default-outline"]));
              o.denyButtonColor &&
                ((t.style.backgroundColor = o.denyButtonColor),
                z(t, r["default-outline"]));
              o.cancelButtonColor &&
                ((n.style.backgroundColor = o.cancelButtonColor),
                z(n, r["default-outline"]));
            })(o, i, s, n),
            n.reverseButtons &&
              (n.toast
                ? (e.insertBefore(s, o), e.insertBefore(i, o))
                : (e.insertBefore(s, t),
                  e.insertBefore(i, t),
                  e.insertBefore(o, t)));
        })(n, o, t),
        V(o, t.loaderHtml || ""),
        _(o, t, "loader"));
    };
  function de(e, t, n) {
    const o = c(t);
    Q(e, n[`show${o}Button`], "inline-block"),
      V(e, n[`${t}ButtonText`] || ""),
      e.setAttribute("aria-label", n[`${t}ButtonAriaLabel`] || ""),
      (e.className = r[t]),
      _(e, n, `${t}Button`);
  }
  const pe = (e, t) => {
    const n = y();
    n &&
      (!(function (e, t) {
        "string" == typeof t
          ? (e.style.background = t)
          : t || z([document.documentElement, document.body], r["no-backdrop"]);
      })(n, t.backdrop),
      (function (e, t) {
        if (!t) return;
        t in r
          ? z(e, r[t])
          : (u('The "position" parameter is not valid, defaulting to "center"'),
            z(e, r.center));
      })(n, t.position),
      (function (e, t) {
        if (!t) return;
        z(e, r[`grow-${t}`]);
      })(n, t.grow),
      _(n, t, "container"));
  };
  var me = { innerParams: new WeakMap(), domCache: new WeakMap() };
  const he = [
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
    ],
    ge = (e) => {
      if (!e.input) return;
      if (!Ae[e.input])
        return void d(
          `Unexpected type of input! Expected ${Object.keys(Ae).join(
            " | "
          )}, got "${e.input}"`
        );
      const t = we(e.input);
      if (!t) return;
      const n = Ae[e.input](t, e);
      X(t),
        e.inputAutoFocus &&
          setTimeout(() => {
            R(n);
          });
    },
    fe = (e, t) => {
      const n = C();
      if (!n) return;
      const o = F(n, e);
      if (o) {
        ((e) => {
          for (let t = 0; t < e.attributes.length; t++) {
            const n = e.attributes[t].name;
            ["id", "type", "value", "style"].includes(n) ||
              e.removeAttribute(n);
          }
        })(o);
        for (const e in t) o.setAttribute(e, t[e]);
      }
    },
    be = (e) => {
      if (!e.input) return;
      const t = we(e.input);
      t && _(t, e, "input");
    },
    ye = (e, t) => {
      !e.placeholder &&
        t.inputPlaceholder &&
        (e.placeholder = t.inputPlaceholder);
    },
    ve = (e, t, n) => {
      if (n.inputLabel) {
        const o = document.createElement("label"),
          i = r["input-label"];
        o.setAttribute("for", e.id),
          (o.className = i),
          "object" == typeof n.customClass && z(o, n.customClass.inputLabel),
          (o.innerText = n.inputLabel),
          t.insertAdjacentElement("beforebegin", o);
      }
    },
    we = (e) => {
      const t = C();
      if (t) return K(t, r[e] || r.input);
    },
    Ce = (e, t) => {
      ["string", "number"].includes(typeof t)
        ? (e.value = `${t}`)
        : b(t) ||
          u(
            `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
          );
    },
    Ae = {};
  (Ae.text =
    Ae.email =
    Ae.password =
    Ae.number =
    Ae.tel =
    Ae.url =
    Ae.search =
    Ae.date =
    Ae["datetime-local"] =
    Ae.time =
    Ae.week =
    Ae.month =
      (e, t) => (
        Ce(e, t.inputValue), ve(e, e, t), ye(e, t), (e.type = t.input), e
      )),
    (Ae.file = (e, t) => (ve(e, e, t), ye(e, t), e)),
    (Ae.range = (e, t) => {
      const n = e.querySelector("input"),
        o = e.querySelector("output");
      return (
        Ce(n, t.inputValue),
        (n.type = t.input),
        Ce(o, t.inputValue),
        ve(n, e, t),
        e
      );
    }),
    (Ae.select = (e, t) => {
      if (((e.textContent = ""), t.inputPlaceholder)) {
        const n = document.createElement("option");
        V(n, t.inputPlaceholder),
          (n.value = ""),
          (n.disabled = !0),
          (n.selected = !0),
          e.appendChild(n);
      }
      return ve(e, e, t), e;
    }),
    (Ae.radio = (e) => ((e.textContent = ""), e)),
    (Ae.checkbox = (e, t) => {
      const n = F(C(), "checkbox");
      (n.value = "1"), (n.checked = Boolean(t.inputValue));
      const o = e.querySelector("span");
      return V(o, t.inputPlaceholder || t.inputLabel), n;
    }),
    (Ae.textarea = (e, t) => {
      Ce(e, t.inputValue), ye(e, t), ve(e, e, t);
      return (
        setTimeout(() => {
          if ("MutationObserver" in window) {
            const n = parseInt(window.getComputedStyle(C()).width);
            new MutationObserver(() => {
              if (!document.body.contains(e)) return;
              const o =
                e.offsetWidth +
                ((i = e),
                parseInt(window.getComputedStyle(i).marginLeft) +
                  parseInt(window.getComputedStyle(i).marginRight));
              var i;
              o > n ? (C().style.width = `${o}px`) : Y(C(), "width", t.width);
            }).observe(e, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        e
      );
    });
  const Ee = (e, t) => {
      const n = k();
      n &&
        (J(n),
        _(n, t, "htmlContainer"),
        t.html
          ? (ae(t.html, n), X(n, "block"))
          : t.text
          ? ((n.textContent = t.text), X(n, "block"))
          : Z(n),
        ((e, t) => {
          const n = C();
          if (!n) return;
          const o = me.innerParams.get(e),
            i = !o || t.input !== o.input;
          he.forEach((e) => {
            const o = K(n, r[e]);
            o && (fe(e, t.inputAttributes), (o.className = r[e]), i && Z(o));
          }),
            t.input && (i && ge(t), be(t));
        })(e, t));
    },
    ke = (e, t) => {
      for (const [n, o] of Object.entries(a)) t.icon !== n && W(e, o);
      z(e, t.icon && a[t.icon]), $e(e, t), Be(), _(e, t, "icon");
    },
    Be = () => {
      const e = C();
      if (!e) return;
      const t = window.getComputedStyle(e).getPropertyValue("background-color"),
        n = e.querySelectorAll(
          "[class^=swal2-success-circular-line], .swal2-success-fix"
        );
      for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
    },
    Le = (e, t) => {
      if (!t.icon && !t.iconHtml) return;
      let n = e.innerHTML,
        o = "";
      if (t.iconHtml) o = xe(t.iconHtml);
      else if ("success" === t.icon)
        (o =
          '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
          (n = n.replace(/ style=".*?"/g, ""));
      else if ("error" === t.icon)
        o =
          '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
      else if (t.icon) {
        o = xe({ question: "?", warning: "!", info: "i" }[t.icon]);
      }
      n.trim() !== o.trim() && V(e, o);
    },
    $e = (e, t) => {
      if (t.iconColor) {
        (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
        for (const n of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          G(e, n, "background-color", t.iconColor);
        G(e, ".swal2-success-ring", "border-color", t.iconColor);
      }
    },
    xe = (e) => `<div class="${r["icon-content"]}">${e}</div>`;
  let Pe = !1,
    Te = 0,
    Se = 0,
    Oe = 0,
    Me = 0;
  const je = (e) => {
      const t = C();
      if (e.target === t || A().contains(e.target)) {
        Pe = !0;
        const n = De(e);
        (Te = n.clientX),
          (Se = n.clientY),
          (Oe = parseInt(t.style.insetInlineStart) || 0),
          (Me = parseInt(t.style.insetBlockStart) || 0),
          z(t, "swal2-dragging");
      }
    },
    He = (e) => {
      const t = C();
      if (Pe) {
        let { clientX: n, clientY: o } = De(e);
        (t.style.insetInlineStart = `${Oe + (n - Te)}px`),
          (t.style.insetBlockStart = `${Me + (o - Se)}px`);
      }
    },
    Ie = () => {
      const e = C();
      (Pe = !1), W(e, "swal2-dragging");
    },
    De = (e) => {
      let t = 0,
        n = 0;
      return (
        e.type.startsWith("mouse")
          ? ((t = e.clientX), (n = e.clientY))
          : e.type.startsWith("touch") &&
            ((t = e.touches[0].clientX), (n = e.touches[0].clientY)),
        { clientX: t, clientY: n }
      );
    },
    qe = (e, t) => {
      const n = y(),
        o = C();
      if (n && o) {
        if (t.toast) {
          Y(n, "width", t.width), (o.style.width = "100%");
          const e = S();
          e && o.insertBefore(e, A());
        } else Y(o, "width", t.width);
        Y(o, "padding", t.padding),
          t.color && (o.style.color = t.color),
          t.background && (o.style.background = t.background),
          Z($()),
          Ve(o, t),
          t.draggable && !t.toast
            ? (z(o, r.draggable),
              ((e) => {
                e.addEventListener("mousedown", je),
                  document.body.addEventListener("mousemove", He),
                  e.addEventListener("mouseup", Ie),
                  e.addEventListener("touchstart", je),
                  document.body.addEventListener("touchmove", He),
                  e.addEventListener("touchend", Ie);
              })(o))
            : (W(o, r.draggable),
              ((e) => {
                e.removeEventListener("mousedown", je),
                  document.body.removeEventListener("mousemove", He),
                  e.removeEventListener("mouseup", Ie),
                  e.removeEventListener("touchstart", je),
                  document.body.removeEventListener("touchmove", He),
                  e.removeEventListener("touchend", Ie);
              })(o));
      }
    },
    Ve = (e, t) => {
      const n = t.showClass || {};
      (e.className = `${r.popup} ${ee(e) ? n.popup : ""}`),
        t.toast
          ? (z([document.documentElement, document.body], r["toast-shown"]),
            z(e, r.toast))
          : z(e, r.modal),
        _(e, t, "popup"),
        "string" == typeof t.customClass && z(e, t.customClass),
        t.icon && z(e, r[`icon-${t.icon}`]);
    },
    Ne = (e) => {
      const t = document.createElement("li");
      return z(t, r["progress-step"]), V(t, e), t;
    },
    _e = (e) => {
      const t = document.createElement("li");
      return (
        z(t, r["progress-step-line"]),
        e.progressStepsDistance && Y(t, "width", e.progressStepsDistance),
        t
      );
    },
    Fe = (e, t) => {
      qe(0, t),
        pe(0, t),
        ((e, t) => {
          const n = L();
          if (!n) return;
          const { progressSteps: o, currentProgressStep: i } = t;
          o && 0 !== o.length && void 0 !== i
            ? (X(n),
              (n.textContent = ""),
              i >= o.length &&
                u(
                  "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
                ),
              o.forEach((e, s) => {
                const a = Ne(e);
                if (
                  (n.appendChild(a),
                  s === i && z(a, r["active-progress-step"]),
                  s !== o.length - 1)
                ) {
                  const e = _e(t);
                  n.appendChild(e);
                }
              }))
            : Z(n);
        })(0, t),
        ((e, t) => {
          const n = me.innerParams.get(e),
            o = A();
          if (!o) return;
          if (n && t.icon === n.icon) return Le(o, t), void ke(o, t);
          if (!t.icon && !t.iconHtml) return void Z(o);
          if (t.icon && -1 === Object.keys(a).indexOf(t.icon))
            return (
              d(
                `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
              ),
              void Z(o)
            );
          X(o),
            Le(o, t),
            ke(o, t),
            z(o, t.showClass && t.showClass.icon),
            window
              .matchMedia("(prefers-color-scheme: dark)")
              .addEventListener("change", Be);
        })(e, t),
        ((e, t) => {
          const n = B();
          n &&
            (t.imageUrl
              ? (X(n, ""),
                n.setAttribute("src", t.imageUrl),
                n.setAttribute("alt", t.imageAlt || ""),
                Y(n, "width", t.imageWidth),
                Y(n, "height", t.imageHeight),
                (n.className = r.image),
                _(n, t, "image"))
              : Z(n));
        })(0, t),
        ((e, t) => {
          const n = E();
          n &&
            (J(n),
            Q(n, t.title || t.titleText, "block"),
            t.title && ae(t.title, n),
            t.titleText && (n.innerText = t.titleText),
            _(n, t, "title"));
        })(0, t),
        ((e, t) => {
          const n = H();
          n &&
            (V(n, t.closeButtonHtml || ""),
            _(n, t, "closeButton"),
            Q(n, t.showCloseButton),
            n.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
        })(0, t),
        Ee(e, t),
        ue(0, t),
        ((e, t) => {
          const n = M();
          n &&
            (J(n),
            Q(n, t.footer, "block"),
            t.footer && ae(t.footer, n),
            _(n, t, "footer"));
        })(0, t);
      const n = C();
      "function" == typeof t.didRender && n && t.didRender(n),
        o.eventEmitter.emit("didRender", n);
    },
    Re = () => {
      var e;
      return null === (e = x()) || void 0 === e ? void 0 : e.click();
    },
    Ue = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    ze = (e) => {
      e.keydownTarget &&
        e.keydownHandlerAdded &&
        (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
          capture: e.keydownListenerCapture,
        }),
        (e.keydownHandlerAdded = !1));
    },
    We = (e, t) => {
      var n;
      const o = I();
      if (o.length)
        return (
          (e += t) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
          void o[e].focus()
        );
      null === (n = C()) || void 0 === n || n.focus();
    },
    Ke = ["ArrowRight", "ArrowDown"],
    Ye = ["ArrowLeft", "ArrowUp"],
    Xe = (e, t, n) => {
      e &&
        (t.isComposing ||
          229 === t.keyCode ||
          (e.stopKeydownPropagation && t.stopPropagation(),
          "Enter" === t.key
            ? Ze(t, e)
            : "Tab" === t.key
            ? Je(t)
            : [...Ke, ...Ye].includes(t.key)
            ? Ge(t.key)
            : "Escape" === t.key && Qe(t, e, n)));
    },
    Ze = (e, t) => {
      if (!h(t.allowEnterKey)) return;
      const n = F(C(), t.input);
      if (
        e.target &&
        n &&
        e.target instanceof HTMLElement &&
        e.target.outerHTML === n.outerHTML
      ) {
        if (["textarea", "file"].includes(t.input)) return;
        Re(), e.preventDefault();
      }
    },
    Je = (e) => {
      const t = e.target,
        n = I();
      let o = -1;
      for (let e = 0; e < n.length; e++)
        if (t === n[e]) {
          o = e;
          break;
        }
      e.shiftKey ? We(o, -1) : We(o, 1),
        e.stopPropagation(),
        e.preventDefault();
    },
    Ge = (e) => {
      const t = O(),
        n = x(),
        o = T(),
        i = P();
      if (!(t && n && o && i)) return;
      const s = [n, o, i];
      if (
        document.activeElement instanceof HTMLElement &&
        !s.includes(document.activeElement)
      )
        return;
      const r = Ke.includes(e)
        ? "nextElementSibling"
        : "previousElementSibling";
      let a = document.activeElement;
      if (a) {
        for (let e = 0; e < t.children.length; e++) {
          if (((a = a[r]), !a)) return;
          if (a instanceof HTMLButtonElement && ee(a)) break;
        }
        a instanceof HTMLButtonElement && a.focus();
      }
    },
    Qe = (e, t, n) => {
      h(t.allowEscapeKey) && (e.preventDefault(), n(Ue.esc));
    };
  var et = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  const tt = () => {
      Array.from(document.body.children).forEach((e) => {
        e.hasAttribute("data-previous-aria-hidden")
          ? (e.setAttribute(
              "aria-hidden",
              e.getAttribute("data-previous-aria-hidden") || ""
            ),
            e.removeAttribute("data-previous-aria-hidden"))
          : e.removeAttribute("aria-hidden");
      });
    },
    nt = "undefined" != typeof window && !!window.GestureEvent,
    ot = () => {
      const e = y();
      if (!e) return;
      let t;
      (e.ontouchstart = (e) => {
        t = it(e);
      }),
        (e.ontouchmove = (e) => {
          t && (e.preventDefault(), e.stopPropagation());
        });
    },
    it = (e) => {
      const t = e.target,
        n = y(),
        o = k();
      return (
        !(!n || !o) &&
        !st(e) &&
        !rt(e) &&
        (t === n ||
          (!te(n) &&
            t instanceof HTMLElement &&
            "INPUT" !== t.tagName &&
            "TEXTAREA" !== t.tagName &&
            (!te(o) || !o.contains(t))))
      );
    },
    st = (e) =>
      e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
    rt = (e) => e.touches && e.touches.length > 1;
  let at = null;
  const lt = (e) => {
    null === at &&
      (document.body.scrollHeight > window.innerHeight || "scroll" === e) &&
      ((at = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${
        at +
        (() => {
          const e = document.createElement("div");
          (e.className = r["scrollbar-measure"]), document.body.appendChild(e);
          const t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t;
        })()
      }px`));
  };
  function ct(e, t, n, s) {
    q() ? bt(e, s) : (i(n).then(() => bt(e, s)), ze(o)),
      nt
        ? (t.setAttribute("style", "display:none !important"),
          t.removeAttribute("class"),
          (t.innerHTML = ""))
        : t.remove(),
      D() &&
        (null !== at &&
          ((document.body.style.paddingRight = `${at}px`), (at = null)),
        (() => {
          if (N(document.body, r.iosfix)) {
            const e = parseInt(document.body.style.top, 10);
            W(document.body, r.iosfix),
              (document.body.style.top = ""),
              (document.body.scrollTop = -1 * e);
          }
        })(),
        tt()),
      W(
        [document.documentElement, document.body],
        [r.shown, r["height-auto"], r["no-backdrop"], r["toast-shown"]]
      );
  }
  function ut(e) {
    e = ht(e);
    const t = et.swalPromiseResolve.get(this),
      n = dt(this);
    this.isAwaitingPromise ? e.isDismissed || (mt(this), t(e)) : n && t(e);
  }
  const dt = (e) => {
    const t = C();
    if (!t) return !1;
    const n = me.innerParams.get(e);
    if (!n || N(t, n.hideClass.popup)) return !1;
    W(t, n.showClass.popup), z(t, n.hideClass.popup);
    const o = y();
    return (
      W(o, n.showClass.backdrop), z(o, n.hideClass.backdrop), gt(e, t, n), !0
    );
  };
  function pt(e) {
    const t = et.swalPromiseReject.get(this);
    mt(this), t && t(e);
  }
  const mt = (e) => {
      e.isAwaitingPromise &&
        (delete e.isAwaitingPromise, me.innerParams.get(e) || e._destroy());
    },
    ht = (e) =>
      void 0 === e
        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
        : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
    gt = (e, t, n) => {
      var i;
      const s = y(),
        r = ne(t);
      "function" == typeof n.willClose && n.willClose(t),
        null === (i = o.eventEmitter) || void 0 === i || i.emit("willClose", t),
        r
          ? ft(e, t, s, n.returnFocus, n.didClose)
          : ct(e, s, n.returnFocus, n.didClose);
    },
    ft = (e, t, n, i, s) => {
      o.swalCloseEventFinishedCallback = ct.bind(null, e, n, i, s);
      const r = function (e) {
        var n;
        e.target === t &&
          (null === (n = o.swalCloseEventFinishedCallback) ||
            void 0 === n ||
            n.call(o),
          delete o.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", r),
          t.removeEventListener("transitionend", r));
      };
      t.addEventListener("animationend", r),
        t.addEventListener("transitionend", r);
    },
    bt = (e, t) => {
      setTimeout(() => {
        var n;
        "function" == typeof t && t.bind(e.params)(),
          null === (n = o.eventEmitter) || void 0 === n || n.emit("didClose"),
          e._destroy && e._destroy();
      });
    },
    yt = (e) => {
      let t = C();
      if ((t || new Gn(), (t = C()), !t)) return;
      const n = S();
      q() ? Z(A()) : vt(t, e),
        X(n),
        t.setAttribute("data-loading", "true"),
        t.setAttribute("aria-busy", "true"),
        t.focus();
    },
    vt = (e, t) => {
      const n = O(),
        o = S();
      n &&
        o &&
        (!t && ee(x()) && (t = x()),
        X(n),
        t &&
          (Z(t),
          o.setAttribute("data--to-replace", t.className),
          n.insertBefore(o, t)),
        z([e, n], r.loading));
    },
    wt = (e) => (e.checked ? 1 : 0),
    Ct = (e) => (e.checked ? e.value : null),
    At = (e) =>
      e.files && e.files.length
        ? null !== e.getAttribute("multiple")
          ? e.files
          : e.files[0]
        : null,
    Et = (e, t) => {
      const n = C();
      if (!n) return;
      const o = (e) => {
        "select" === t.input
          ? (function (e, t, n) {
              const o = K(e, r.select);
              if (!o) return;
              const i = (e, t, o) => {
                const i = document.createElement("option");
                (i.value = o),
                  V(i, t),
                  (i.selected = Lt(o, n.inputValue)),
                  e.appendChild(i);
              };
              t.forEach((e) => {
                const t = e[0],
                  n = e[1];
                if (Array.isArray(n)) {
                  const e = document.createElement("optgroup");
                  (e.label = t),
                    (e.disabled = !1),
                    o.appendChild(e),
                    n.forEach((t) => i(e, t[1], t[0]));
                } else i(o, n, t);
              }),
                o.focus();
            })(n, Bt(e), t)
          : "radio" === t.input &&
            (function (e, t, n) {
              const o = K(e, r.radio);
              if (!o) return;
              t.forEach((e) => {
                const t = e[0],
                  i = e[1],
                  s = document.createElement("input"),
                  a = document.createElement("label");
                (s.type = "radio"),
                  (s.name = r.radio),
                  (s.value = t),
                  Lt(t, n.inputValue) && (s.checked = !0);
                const l = document.createElement("span");
                V(l, i),
                  (l.className = r.label),
                  a.appendChild(s),
                  a.appendChild(l),
                  o.appendChild(a);
              });
              const i = o.querySelectorAll("input");
              i.length && i[0].focus();
            })(n, Bt(e), t);
      };
      g(t.inputOptions) || b(t.inputOptions)
        ? (yt(x()),
          f(t.inputOptions).then((t) => {
            e.hideLoading(), o(t);
          }))
        : "object" == typeof t.inputOptions
        ? o(t.inputOptions)
        : d(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
              typeof t.inputOptions
          );
    },
    kt = (e, t) => {
      const n = e.getInput();
      n &&
        (Z(n),
        f(t.inputValue)
          .then((o) => {
            (n.value = "number" === t.input ? `${parseFloat(o) || 0}` : `${o}`),
              X(n),
              n.focus(),
              e.hideLoading();
          })
          .catch((t) => {
            d(`Error in inputValue promise: ${t}`),
              (n.value = ""),
              X(n),
              n.focus(),
              e.hideLoading();
          }));
    };
  const Bt = (e) => {
      const t = [];
      return (
        e instanceof Map
          ? e.forEach((e, n) => {
              let o = e;
              "object" == typeof o && (o = Bt(o)), t.push([n, o]);
            })
          : Object.keys(e).forEach((n) => {
              let o = e[n];
              "object" == typeof o && (o = Bt(o)), t.push([n, o]);
            }),
        t
      );
    },
    Lt = (e, t) => !!t && t.toString() === e.toString(),
    $t = (e, t) => {
      const n = me.innerParams.get(e);
      if (!n.input)
        return void d(
          `The "input" parameter is needed to be set when using returnInputValueOn${c(
            t
          )}`
        );
      const o = e.getInput(),
        i = ((e, t) => {
          const n = e.getInput();
          if (!n) return null;
          switch (t.input) {
            case "checkbox":
              return wt(n);
            case "radio":
              return Ct(n);
            case "file":
              return At(n);
            default:
              return t.inputAutoTrim ? n.value.trim() : n.value;
          }
        })(e, n);
      n.inputValidator
        ? xt(e, i, t)
        : o && !o.checkValidity()
        ? (e.enableButtons(),
          e.showValidationMessage(n.validationMessage || o.validationMessage))
        : "deny" === t
        ? Pt(e, i)
        : Ot(e, i);
    },
    xt = (e, t, n) => {
      const o = me.innerParams.get(e);
      e.disableInput();
      Promise.resolve()
        .then(() => f(o.inputValidator(t, o.validationMessage)))
        .then((o) => {
          e.enableButtons(),
            e.enableInput(),
            o ? e.showValidationMessage(o) : "deny" === n ? Pt(e, t) : Ot(e, t);
        });
    },
    Pt = (e, t) => {
      const n = me.innerParams.get(e || void 0);
      if ((n.showLoaderOnDeny && yt(T()), n.preDeny)) {
        e.isAwaitingPromise = !0;
        Promise.resolve()
          .then(() => f(n.preDeny(t, n.validationMessage)))
          .then((n) => {
            !1 === n
              ? (e.hideLoading(), mt(e))
              : e.close({ isDenied: !0, value: void 0 === n ? t : n });
          })
          .catch((t) => St(e || void 0, t));
      } else e.close({ isDenied: !0, value: t });
    },
    Tt = (e, t) => {
      e.close({ isConfirmed: !0, value: t });
    },
    St = (e, t) => {
      e.rejectPromise(t);
    },
    Ot = (e, t) => {
      const n = me.innerParams.get(e || void 0);
      if ((n.showLoaderOnConfirm && yt(), n.preConfirm)) {
        e.resetValidationMessage(), (e.isAwaitingPromise = !0);
        Promise.resolve()
          .then(() => f(n.preConfirm(t, n.validationMessage)))
          .then((n) => {
            ee($()) || !1 === n
              ? (e.hideLoading(), mt(e))
              : Tt(e, void 0 === n ? t : n);
          })
          .catch((t) => St(e || void 0, t));
      } else Tt(e, t);
    };
  function Mt() {
    const e = me.innerParams.get(this);
    if (!e) return;
    const t = me.domCache.get(this);
    Z(t.loader),
      q() ? e.icon && X(A()) : jt(t),
      W([t.popup, t.actions], r.loading),
      t.popup.removeAttribute("aria-busy"),
      t.popup.removeAttribute("data-loading"),
      (t.confirmButton.disabled = !1),
      (t.denyButton.disabled = !1),
      (t.cancelButton.disabled = !1);
  }
  const jt = (e) => {
    const t = e.popup.getElementsByClassName(
      e.loader.getAttribute("data-button-to-replace")
    );
    t.length
      ? X(t[0], "inline-block")
      : ee(x()) || ee(T()) || ee(P()) || Z(e.actions);
  };
  function Ht() {
    const e = me.innerParams.get(this),
      t = me.domCache.get(this);
    return t ? F(t.popup, e.input) : null;
  }
  function It(e, t, n) {
    const o = me.domCache.get(e);
    t.forEach((e) => {
      o[e].disabled = n;
    });
  }
  function Dt(e, t) {
    const n = C();
    if (n && e)
      if ("radio" === e.type) {
        const e = n.querySelectorAll(`[name="${r.radio}"]`);
        for (let n = 0; n < e.length; n++) e[n].disabled = t;
      } else e.disabled = t;
  }
  function qt() {
    It(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  }
  function Vt() {
    It(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function Nt() {
    Dt(this.getInput(), !1);
  }
  function _t() {
    Dt(this.getInput(), !0);
  }
  function Ft(e) {
    const t = me.domCache.get(this),
      n = me.innerParams.get(this);
    V(t.validationMessage, e),
      (t.validationMessage.className = r["validation-message"]),
      n.customClass &&
        n.customClass.validationMessage &&
        z(t.validationMessage, n.customClass.validationMessage),
      X(t.validationMessage);
    const o = this.getInput();
    o &&
      (o.setAttribute("aria-invalid", "true"),
      o.setAttribute("aria-describedby", r["validation-message"]),
      R(o),
      z(o, r.inputerror));
  }
  function Rt() {
    const e = me.domCache.get(this);
    e.validationMessage && Z(e.validationMessage);
    const t = this.getInput();
    t &&
      (t.removeAttribute("aria-invalid"),
      t.removeAttribute("aria-describedby"),
      W(t, r.inputerror));
  }
  const Ut = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      draggable: !1,
      animation: !0,
      theme: "light",
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    zt = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "draggable",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "theme",
      "willClose",
    ],
    Wt = { allowEnterKey: void 0 },
    Kt = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "draggable",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    Yt = (e) => Object.prototype.hasOwnProperty.call(Ut, e),
    Xt = (e) => -1 !== zt.indexOf(e),
    Zt = (e) => Wt[e],
    Jt = (e) => {
      Yt(e) || u(`Unknown parameter "${e}"`);
    },
    Gt = (e) => {
      Kt.includes(e) && u(`The parameter "${e}" is incompatible with toasts`);
    },
    Qt = (e) => {
      const t = Zt(e);
      t && m(e, t);
    },
    en = (e) => {
      !1 === e.backdrop &&
        e.allowOutsideClick &&
        u(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        ),
        e.theme &&
          !["light", "dark", "auto"].includes(e.theme) &&
          u(`Invalid theme "${e.theme}". Expected "light", "dark", or "auto"`);
      for (const t in e) Jt(t), e.toast && Gt(t), Qt(t);
    };
  function tn(e) {
    const t = y(),
      n = C(),
      o = me.innerParams.get(this);
    if (!n || N(n, o.hideClass.popup))
      return void u(
        "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
      );
    const i = nn(e),
      s = Object.assign({}, o, i);
    en(s),
      (t.dataset.swal2Theme = s.theme),
      Fe(this, s),
      me.innerParams.set(this, s),
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: !1,
          enumerable: !0,
        },
      });
  }
  const nn = (e) => {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        Xt(n) ? (t[n] = e[n]) : u(`Invalid parameter to update: ${n}`);
      }),
      t
    );
  };
  function on() {
    const e = me.domCache.get(this),
      t = me.innerParams.get(this);
    t
      ? (e.popup &&
          o.swalCloseEventFinishedCallback &&
          (o.swalCloseEventFinishedCallback(),
          delete o.swalCloseEventFinishedCallback),
        "function" == typeof t.didDestroy && t.didDestroy(),
        o.eventEmitter.emit("didDestroy"),
        sn(this))
      : rn(this);
  }
  const sn = (e) => {
      rn(e),
        delete e.params,
        delete o.keydownHandler,
        delete o.keydownTarget,
        delete o.currentInstance;
    },
    rn = (e) => {
      e.isAwaitingPromise
        ? (an(me, e), (e.isAwaitingPromise = !0))
        : (an(et, e),
          an(me, e),
          delete e.isAwaitingPromise,
          delete e.disableButtons,
          delete e.enableButtons,
          delete e.getInput,
          delete e.disableInput,
          delete e.enableInput,
          delete e.hideLoading,
          delete e.disableLoading,
          delete e.showValidationMessage,
          delete e.resetValidationMessage,
          delete e.close,
          delete e.closePopup,
          delete e.closeModal,
          delete e.closeToast,
          delete e.rejectPromise,
          delete e.update,
          delete e._destroy);
    },
    an = (e, t) => {
      for (const n in e) e[n].delete(t);
    };
  var ln = Object.freeze({
    __proto__: null,
    _destroy: on,
    close: ut,
    closeModal: ut,
    closePopup: ut,
    closeToast: ut,
    disableButtons: Vt,
    disableInput: _t,
    disableLoading: Mt,
    enableButtons: qt,
    enableInput: Nt,
    getInput: Ht,
    handleAwaitingPromise: mt,
    hideLoading: Mt,
    rejectPromise: pt,
    resetValidationMessage: Rt,
    showValidationMessage: Ft,
    update: tn,
  });
  const cn = (e, t, n) => {
      t.popup.onclick = () => {
        (e && (un(e) || e.timer || e.input)) || n(Ue.close);
      };
    },
    un = (e) =>
      !!(
        e.showConfirmButton ||
        e.showDenyButton ||
        e.showCancelButton ||
        e.showCloseButton
      );
  let dn = !1;
  const pn = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = () => {}),
            t.target === e.container && (dn = !0);
        };
      };
    },
    mn = (e) => {
      e.container.onmousedown = (t) => {
        t.target === e.container && t.preventDefault(),
          (e.popup.onmouseup = function (t) {
            (e.popup.onmouseup = () => {}),
              (t.target === e.popup ||
                (t.target instanceof HTMLElement &&
                  e.popup.contains(t.target))) &&
                (dn = !0);
          });
      };
    },
    hn = (e, t, n) => {
      t.container.onclick = (o) => {
        dn
          ? (dn = !1)
          : o.target === t.container &&
            h(e.allowOutsideClick) &&
            n(Ue.backdrop);
      };
    },
    gn = (e) =>
      e instanceof Element || ((e) => "object" == typeof e && e.jquery)(e);
  const fn = () => {
      if (o.timeout)
        return (
          (() => {
            const e = j();
            if (!e) return;
            const t = parseInt(window.getComputedStyle(e).width);
            e.style.removeProperty("transition"), (e.style.width = "100%");
            const n = (t / parseInt(window.getComputedStyle(e).width)) * 100;
            e.style.width = `${n}%`;
          })(),
          o.timeout.stop()
        );
    },
    bn = () => {
      if (o.timeout) {
        const e = o.timeout.start();
        return oe(e), e;
      }
    };
  let yn = !1;
  const vn = {};
  const wn = (e) => {
    for (let t = e.target; t && t !== document; t = t.parentNode)
      for (const e in vn) {
        const n = t.getAttribute(e);
        if (n) return void vn[e].fire({ template: n });
      }
  };
  o.eventEmitter = new (class {
    constructor() {
      this.events = {};
    }
    _getHandlersByEventName(e) {
      return void 0 === this.events[e] && (this.events[e] = []), this.events[e];
    }
    on(e, t) {
      const n = this._getHandlersByEventName(e);
      n.includes(t) || n.push(t);
    }
    once(e, t) {
      var n = this;
      const o = function () {
        n.removeListener(e, o);
        for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
          s[r] = arguments[r];
        t.apply(n, s);
      };
      this.on(e, o);
    }
    emit(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      this._getHandlersByEventName(e).forEach((e) => {
        try {
          e.apply(this, n);
        } catch (e) {
          console.error(e);
        }
      });
    }
    removeListener(e, t) {
      const n = this._getHandlersByEventName(e),
        o = n.indexOf(t);
      o > -1 && n.splice(o, 1);
    }
    removeAllListeners(e) {
      void 0 !== this.events[e] && (this.events[e].length = 0);
    }
    reset() {
      this.events = {};
    }
  })();
  var Cn = Object.freeze({
    __proto__: null,
    argsToParams: (e) => {
      const t = {};
      return (
        "object" != typeof e[0] || gn(e[0])
          ? ["title", "html", "icon"].forEach((n, o) => {
              const i = e[o];
              "string" == typeof i || gn(i)
                ? (t[n] = i)
                : void 0 !== i &&
                  d(
                    `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`
                  );
            })
          : Object.assign(t, e[0]),
        t
      );
    },
    bindClickHandler: function () {
      (vn[
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "data-swal-template"
      ] = this),
        yn || (document.body.addEventListener("click", wn), (yn = !0));
    },
    clickCancel: () => {
      var e;
      return null === (e = P()) || void 0 === e ? void 0 : e.click();
    },
    clickConfirm: Re,
    clickDeny: () => {
      var e;
      return null === (e = T()) || void 0 === e ? void 0 : e.click();
    },
    enableLoading: yt,
    fire: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return new this(...t);
    },
    getActions: O,
    getCancelButton: P,
    getCloseButton: H,
    getConfirmButton: x,
    getContainer: y,
    getDenyButton: T,
    getFocusableElements: I,
    getFooter: M,
    getHtmlContainer: k,
    getIcon: A,
    getIconContent: () => w(r["icon-content"]),
    getImage: B,
    getInputLabel: () => w(r["input-label"]),
    getLoader: S,
    getPopup: C,
    getProgressSteps: L,
    getTimerLeft: () => o.timeout && o.timeout.getTimerLeft(),
    getTimerProgressBar: j,
    getTitle: E,
    getValidationMessage: $,
    increaseTimer: (e) => {
      if (o.timeout) {
        const t = o.timeout.increase(e);
        return oe(t, !0), t;
      }
    },
    isDeprecatedParameter: Zt,
    isLoading: () => {
      const e = C();
      return !!e && e.hasAttribute("data-loading");
    },
    isTimerRunning: () => !(!o.timeout || !o.timeout.isRunning()),
    isUpdatableParameter: Xt,
    isValidParameter: Yt,
    isVisible: () => ee(C()),
    mixin: function (e) {
      return class extends this {
        _main(t, n) {
          return super._main(t, Object.assign({}, e, n));
        }
      };
    },
    off: (e, t) => {
      e
        ? t
          ? o.eventEmitter.removeListener(e, t)
          : o.eventEmitter.removeAllListeners(e)
        : o.eventEmitter.reset();
    },
    on: (e, t) => {
      o.eventEmitter.on(e, t);
    },
    once: (e, t) => {
      o.eventEmitter.once(e, t);
    },
    resumeTimer: bn,
    showLoading: yt,
    stopTimer: fn,
    toggleTimer: () => {
      const e = o.timeout;
      return e && (e.running ? fn() : bn());
    },
  });
  class An {
    constructor(e, t) {
      (this.callback = e),
        (this.remaining = t),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.started &&
          this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(e) {
      const t = this.running;
      return (
        t && this.stop(),
        (this.remaining += e),
        t && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const En = ["swal-title", "swal-html", "swal-footer"],
    kn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
          On(e, ["name", "value"]);
          const n = e.getAttribute("name"),
            o = e.getAttribute("value");
          n &&
            o &&
            (t[n] =
              "boolean" == typeof Ut[n]
                ? "false" !== o
                : "object" == typeof Ut[n]
                ? JSON.parse(o)
                : o);
        }),
        t
      );
    },
    Bn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-function-param")).forEach((e) => {
          const n = e.getAttribute("name"),
            o = e.getAttribute("value");
          n && o && (t[n] = new Function(`return ${o}`)());
        }),
        t
      );
    },
    Ln = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
          On(e, ["type", "color", "aria-label"]);
          const n = e.getAttribute("type");
          n &&
            ["confirm", "cancel", "deny"].includes(n) &&
            ((t[`${n}ButtonText`] = e.innerHTML),
            (t[`show${c(n)}Button`] = !0),
            e.hasAttribute("color") &&
              (t[`${n}ButtonColor`] = e.getAttribute("color")),
            e.hasAttribute("aria-label") &&
              (t[`${n}ButtonAriaLabel`] = e.getAttribute("aria-label")));
        }),
        t
      );
    },
    $n = (e) => {
      const t = {},
        n = e.querySelector("swal-image");
      return (
        n &&
          (On(n, ["src", "width", "height", "alt"]),
          n.hasAttribute("src") &&
            (t.imageUrl = n.getAttribute("src") || void 0),
          n.hasAttribute("width") &&
            (t.imageWidth = n.getAttribute("width") || void 0),
          n.hasAttribute("height") &&
            (t.imageHeight = n.getAttribute("height") || void 0),
          n.hasAttribute("alt") &&
            (t.imageAlt = n.getAttribute("alt") || void 0)),
        t
      );
    },
    xn = (e) => {
      const t = {},
        n = e.querySelector("swal-icon");
      return (
        n &&
          (On(n, ["type", "color"]),
          n.hasAttribute("type") && (t.icon = n.getAttribute("type")),
          n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")),
          (t.iconHtml = n.innerHTML)),
        t
      );
    },
    Pn = (e) => {
      const t = {},
        n = e.querySelector("swal-input");
      n &&
        (On(n, ["type", "label", "placeholder", "value"]),
        (t.input = n.getAttribute("type") || "text"),
        n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")),
        n.hasAttribute("placeholder") &&
          (t.inputPlaceholder = n.getAttribute("placeholder")),
        n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
      const o = Array.from(e.querySelectorAll("swal-input-option"));
      return (
        o.length &&
          ((t.inputOptions = {}),
          o.forEach((e) => {
            On(e, ["value"]);
            const n = e.getAttribute("value");
            if (!n) return;
            const o = e.innerHTML;
            t.inputOptions[n] = o;
          })),
        t
      );
    },
    Tn = (e, t) => {
      const n = {};
      for (const o in t) {
        const i = t[o],
          s = e.querySelector(i);
        s && (On(s, []), (n[i.replace(/^swal-/, "")] = s.innerHTML.trim()));
      }
      return n;
    },
    Sn = (e) => {
      const t = En.concat([
        "swal-param",
        "swal-function-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      Array.from(e.children).forEach((e) => {
        const n = e.tagName.toLowerCase();
        t.includes(n) || u(`Unrecognized element <${n}>`);
      });
    },
    On = (e, t) => {
      Array.from(e.attributes).forEach((n) => {
        -1 === t.indexOf(n.name) &&
          u([
            `Unrecognized attribute "${
              n.name
            }" on <${e.tagName.toLowerCase()}>.`,
            "" +
              (t.length
                ? `Allowed attributes are: ${t.join(", ")}`
                : "To set the value, use HTML within the element."),
          ]);
      });
    },
    Mn = (e) => {
      const t = y(),
        n = C();
      "function" == typeof e.willOpen && e.willOpen(n),
        o.eventEmitter.emit("willOpen", n);
      const i = window.getComputedStyle(document.body).overflowY;
      Dn(t, n, e),
        setTimeout(() => {
          Hn(t, n);
        }, 10),
        D() &&
          (In(t, e.scrollbarPadding, i),
          (() => {
            const e = y();
            Array.from(document.body.children).forEach((t) => {
              t.contains(e) ||
                (t.hasAttribute("aria-hidden") &&
                  t.setAttribute(
                    "data-previous-aria-hidden",
                    t.getAttribute("aria-hidden") || ""
                  ),
                t.setAttribute("aria-hidden", "true"));
            });
          })()),
        q() ||
          o.previousActiveElement ||
          (o.previousActiveElement = document.activeElement),
        "function" == typeof e.didOpen && setTimeout(() => e.didOpen(n)),
        o.eventEmitter.emit("didOpen", n),
        W(t, r["no-transition"]);
    },
    jn = (e) => {
      const t = C();
      if (e.target !== t) return;
      const n = y();
      t.removeEventListener("animationend", jn),
        t.removeEventListener("transitionend", jn),
        (n.style.overflowY = "auto");
    },
    Hn = (e, t) => {
      ne(t)
        ? ((e.style.overflowY = "hidden"),
          t.addEventListener("animationend", jn),
          t.addEventListener("transitionend", jn))
        : (e.style.overflowY = "auto");
    },
    In = (e, t, n) => {
      (() => {
        if (nt && !N(document.body, r.iosfix)) {
          const e = document.body.scrollTop;
          (document.body.style.top = -1 * e + "px"),
            z(document.body, r.iosfix),
            ot();
        }
      })(),
        t && "hidden" !== n && lt(n),
        setTimeout(() => {
          e.scrollTop = 0;
        });
    },
    Dn = (e, t, n) => {
      z(e, n.showClass.backdrop),
        n.animation
          ? (t.style.setProperty("opacity", "0", "important"),
            X(t, "grid"),
            setTimeout(() => {
              z(t, n.showClass.popup), t.style.removeProperty("opacity");
            }, 10))
          : X(t, "grid"),
        z([document.documentElement, document.body], r.shown),
        n.heightAuto &&
          n.backdrop &&
          !n.toast &&
          z([document.documentElement, document.body], r["height-auto"]);
    };
  var qn = (e, t) =>
      /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid email address"),
    Vn = (e, t) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        e
      )
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid URL");
  function Nn(e) {
    !(function (e) {
      e.inputValidator ||
        ("email" === e.input && (e.inputValidator = qn),
        "url" === e.input && (e.inputValidator = Vn));
    })(e),
      e.showLoaderOnConfirm &&
        !e.preConfirm &&
        u(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      (function (e) {
        (!e.target ||
          ("string" == typeof e.target && !document.querySelector(e.target)) ||
          ("string" != typeof e.target && !e.target.appendChild)) &&
          (u('Target parameter is not valid, defaulting to "body"'),
          (e.target = "body"));
      })(e),
      "string" == typeof e.title &&
        (e.title = e.title.split("\n").join("<br />")),
      re(e);
  }
  let _n;
  var Fn = new WeakMap();
  class Rn {
    constructor() {
      if ((n(this, Fn, void 0), "undefined" == typeof window)) return;
      _n = this;
      for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
        o[i] = arguments[i];
      const s = Object.freeze(this.constructor.argsToParams(o));
      var r, a, l;
      (this.params = s),
        (this.isAwaitingPromise = !1),
        (r = Fn),
        (a = this),
        (l = this._main(_n.params)),
        r.set(e(r, a), l);
    }
    _main(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if ((en(Object.assign({}, t, e)), o.currentInstance)) {
        const e = et.swalPromiseResolve.get(o.currentInstance),
          { isAwaitingPromise: t } = o.currentInstance;
        o.currentInstance._destroy(), t || e({ isDismissed: !0 }), D() && tt();
      }
      o.currentInstance = _n;
      const n = zn(e, t);
      Nn(n),
        Object.freeze(n),
        o.timeout && (o.timeout.stop(), delete o.timeout),
        clearTimeout(o.restoreFocusTimeout);
      const i = Wn(_n);
      return Fe(_n, n), me.innerParams.set(_n, n), Un(_n, i, n);
    }
    then(e) {
      return t(Fn, this).then(e);
    }
    finally(e) {
      return t(Fn, this).finally(e);
    }
  }
  const Un = (e, t, n) =>
      new Promise((i, s) => {
        const r = (t) => {
          e.close({ isDismissed: !0, dismiss: t });
        };
        et.swalPromiseResolve.set(e, i),
          et.swalPromiseReject.set(e, s),
          (t.confirmButton.onclick = () => {
            ((e) => {
              const t = me.innerParams.get(e);
              e.disableButtons(), t.input ? $t(e, "confirm") : Ot(e, !0);
            })(e);
          }),
          (t.denyButton.onclick = () => {
            ((e) => {
              const t = me.innerParams.get(e);
              e.disableButtons(),
                t.returnInputValueOnDeny ? $t(e, "deny") : Pt(e, !1);
            })(e);
          }),
          (t.cancelButton.onclick = () => {
            ((e, t) => {
              e.disableButtons(), t(Ue.cancel);
            })(e, r);
          }),
          (t.closeButton.onclick = () => {
            r(Ue.close);
          }),
          ((e, t, n) => {
            e.toast ? cn(e, t, n) : (pn(t), mn(t), hn(e, t, n));
          })(n, t, r),
          ((e, t, n) => {
            ze(e),
              t.toast ||
                ((e.keydownHandler = (e) => Xe(t, e, n)),
                (e.keydownTarget = t.keydownListenerCapture ? window : C()),
                (e.keydownListenerCapture = t.keydownListenerCapture),
                e.keydownTarget.addEventListener("keydown", e.keydownHandler, {
                  capture: e.keydownListenerCapture,
                }),
                (e.keydownHandlerAdded = !0));
          })(o, n, r),
          ((e, t) => {
            "select" === t.input || "radio" === t.input
              ? Et(e, t)
              : ["text", "email", "number", "tel", "textarea"].some(
                  (e) => e === t.input
                ) &&
                (g(t.inputValue) || b(t.inputValue)) &&
                (yt(x()), kt(e, t));
          })(e, n),
          Mn(n),
          Kn(o, n, r),
          Yn(t, n),
          setTimeout(() => {
            t.container.scrollTop = 0;
          });
      }),
    zn = (e, t) => {
      const n = ((e) => {
          const t =
            "string" == typeof e.template
              ? document.querySelector(e.template)
              : e.template;
          if (!t) return {};
          const n = t.content;
          return (
            Sn(n),
            Object.assign(kn(n), Bn(n), Ln(n), $n(n), xn(n), Pn(n), Tn(n, En))
          );
        })(e),
        o = Object.assign({}, Ut, t, n, e);
      return (
        (o.showClass = Object.assign({}, Ut.showClass, o.showClass)),
        (o.hideClass = Object.assign({}, Ut.hideClass, o.hideClass)),
        !1 === o.animation &&
          ((o.showClass = { backdrop: "swal2-noanimation" }),
          (o.hideClass = {})),
        o
      );
    },
    Wn = (e) => {
      const t = {
        popup: C(),
        container: y(),
        actions: O(),
        confirmButton: x(),
        denyButton: T(),
        cancelButton: P(),
        loader: S(),
        closeButton: H(),
        validationMessage: $(),
        progressSteps: L(),
      };
      return me.domCache.set(e, t), t;
    },
    Kn = (e, t, n) => {
      const o = j();
      Z(o),
        t.timer &&
          ((e.timeout = new An(() => {
            n("timer"), delete e.timeout;
          }, t.timer)),
          t.timerProgressBar &&
            (X(o),
            _(o, t, "timerProgressBar"),
            setTimeout(() => {
              e.timeout && e.timeout.running && oe(t.timer);
            })));
    },
    Yn = (e, t) => {
      if (!t.toast)
        return h(t.allowEnterKey)
          ? void (Xn(e) || Zn(e, t) || We(-1, 1))
          : (m("allowEnterKey"), void Jn());
    },
    Xn = (e) => {
      const t = Array.from(e.popup.querySelectorAll("[autofocus]"));
      for (const e of t)
        if (e instanceof HTMLElement && ee(e)) return e.focus(), !0;
      return !1;
    },
    Zn = (e, t) =>
      t.focusDeny && ee(e.denyButton)
        ? (e.denyButton.focus(), !0)
        : t.focusCancel && ee(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : !(!t.focusConfirm || !ee(e.confirmButton)) &&
          (e.confirmButton.focus(), !0),
    Jn = () => {
      document.activeElement instanceof HTMLElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  if (
    "undefined" != typeof window &&
    /^ru\b/.test(navigator.language) &&
    location.host.match(/\.(ru|su|by|xn--p1ai)$/)
  ) {
    const e = new Date(),
      t = localStorage.getItem("swal-initiation");
    t
      ? (e.getTime() - Date.parse(t)) / 864e5 > 3 &&
        setTimeout(() => {
          document.body.style.pointerEvents = "none";
          const e = document.createElement("audio");
          (e.src =
            "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
            (e.loop = !0),
            document.body.appendChild(e),
            setTimeout(() => {
              e.play().catch(() => {});
            }, 2500);
        }, 500)
      : localStorage.setItem("swal-initiation", `${e}`);
  }
  (Rn.prototype.disableButtons = Vt),
    (Rn.prototype.enableButtons = qt),
    (Rn.prototype.getInput = Ht),
    (Rn.prototype.disableInput = _t),
    (Rn.prototype.enableInput = Nt),
    (Rn.prototype.hideLoading = Mt),
    (Rn.prototype.disableLoading = Mt),
    (Rn.prototype.showValidationMessage = Ft),
    (Rn.prototype.resetValidationMessage = Rt),
    (Rn.prototype.close = ut),
    (Rn.prototype.closePopup = ut),
    (Rn.prototype.closeModal = ut),
    (Rn.prototype.closeToast = ut),
    (Rn.prototype.rejectPromise = pt),
    (Rn.prototype.update = tn),
    (Rn.prototype._destroy = on),
    Object.assign(Rn, Cn),
    Object.keys(ln).forEach((e) => {
      Rn[e] = function () {
        return _n && _n[e] ? _n[e](...arguments) : null;
      };
    }),
    (Rn.DismissReason = Ue),
    (Rn.version = "11.16.0");
  const Gn = Rn;
  return (Gn.default = Gn), Gn;
}),
  void 0 !== this &&
    this.Sweetalert2 &&
    (this.swal =
      this.sweetAlert =
      this.Swal =
      this.SweetAlert =
        this.Sweetalert2);

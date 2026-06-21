/* Raising Development — site behaviour (trilingual, nav, reveal, form) */
(function () {
  "use strict";
  var LOCALES = ["en", "zh-Hant", "zh-Hans"];
  var LANG_HTML = { "en": "en", "zh-Hant": "zh-Hant", "zh-Hans": "zh-Hans" };
  var STORE_KEY = "rd-locale";

  function getStored() { try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; } }
  function store(loc) { try { localStorage.setItem(STORE_KEY, loc); } catch (e) {} }
  function detectDefault() {
    var stored = getStored();
    if (stored && LOCALES.indexOf(stored) > -1) return stored;
    var n = (navigator.language || "en").toLowerCase();
    if (n.indexOf("zh") === 0) {
      if (n.indexOf("hant") > -1 || n.indexOf("tw") > -1 || n.indexOf("hk") > -1 || n.indexOf("mo") > -1) return "zh-Hant";
      return "zh-Hans";
    }
    return "en";
  }
  function applyLocale(loc) {
    if (LOCALES.indexOf(loc) < 0) loc = "en";
    document.documentElement.setAttribute("data-locale", loc);
    document.documentElement.setAttribute("lang", LANG_HTML[loc]);
    store(loc);
    document.querySelectorAll(".lang button[data-set-locale]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-set-locale") === loc);
    });
    var wp = (loc === "en") ? "whitepaper-en.pdf" : "whitepaper-cn.pdf";
    document.querySelectorAll("a[data-whitepaper]").forEach(function (a) { a.setAttribute("href", wp); });
  }

  applyLocale(detectDefault());

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function closeDrawer() {
    var d = document.querySelector(".drawer");
    if (d) d.classList.remove("open");
    document.body.style.overflow = "";
  }

  ready(function () {
    applyLocale(document.documentElement.getAttribute("data-locale") || "en");

    document.querySelectorAll(".lang button[data-set-locale]").forEach(function (b) {
      b.addEventListener("click", function () { applyLocale(b.getAttribute("data-set-locale")); closeDrawer(); });
    });

    var header = document.querySelector(".site-header");
    var onScroll = function () {
      if (!header) return;
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var burger = document.querySelector(".burger");
    var drawer = document.querySelector(".drawer");
    if (burger && drawer) {
      burger.addEventListener("click", function () { drawer.classList.add("open"); document.body.style.overflow = "hidden"; });
      drawer.querySelectorAll("a, .drawer-close").forEach(function (el) { el.addEventListener("click", closeDrawer); });
    }

    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
      reveals.forEach(function (r) { io.observe(r); });
    } else {
      reveals.forEach(function (r) { r.classList.add("in"); });
    }

    var form = document.querySelector("form[data-contact]");
    if (form) initForm(form);
  });

  function initForm(form) {
    var status = form.querySelector(".form-status");
    var endpoint = form.getAttribute("data-endpoint") || "";
    form.addEventListener("submit", function (e) {
      if (!endpoint || endpoint.indexOf("YOUR_") === 0) {
        e.preventDefault();
        var fd = new FormData(form);
        var lines = [];
        fd.forEach(function (v, k) { if (v) lines.push(k + ": " + v); });
        var subject = encodeURIComponent("[Website enquiry] " + (fd.get("name") || ""));
        var body = encodeURIComponent(lines.join("\n"));
        window.location.href = "mailto:contact@raisingdevelopment.com?subject=" + subject + "&body=" + body;
        return;
      }
      e.preventDefault();
      var data = new FormData(form);
      setStatus("", "");
      var btn = form.querySelector("[type=submit]");
      if (btn) btn.disabled = true;
      fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok) { form.reset(); setStatus("ok", form.getAttribute("data-ok") || "Thank you — your message has been sent."); }
          else { setStatus("err", form.getAttribute("data-err") || "Something went wrong. Please email us directly."); }
        })
        .catch(function () { setStatus("err", form.getAttribute("data-err") || "Something went wrong. Please email us directly."); })
        .finally(function () { if (btn) btn.disabled = false; });
    });
    function setStatus(kind, msg) {
      if (!status) return;
      status.className = "form-status" + (kind ? " show " + kind : "");
      status.textContent = msg;
    }
  }
})();

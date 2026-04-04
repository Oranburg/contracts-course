/**
 * K Shared Navigation — generates consistent site-nav across all pages
 *
 * Usage: include this script and call KNav.render() or let it auto-render.
 * Detects depth from <meta name="nav-depth"> or defaults to root.
 */
(function () {
  function getDepth() {
    var meta = document.querySelector('meta[name="nav-depth"]');
    if (meta) return parseInt(meta.getAttribute("content"), 10) || 0;
    // Auto-detect: if URL contains /exercises/slug/, depth is 2
    var path = window.location.pathname;
    if (/\/exercises\/[^/]+\//.test(path)) return 2;
    if (/\/tome\//.test(path)) return 1;
    return 0;
  }

  function prefix(depth) {
    if (depth === 0) return "";
    var p = "";
    for (var i = 0; i < depth; i++) p += "../";
    return p;
  }

  function render() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;

    var depth = getDepth();
    var p = prefix(depth);

    nav.innerHTML =
      '<ul>' +
        '<li><a href="' + (p || '/') + '">Course Home</a></li>' +
        '<li><a href="https://oranburg.law/courses/contracts/">Course Page</a></li>' +
        '<li><a href="https://quaere-1cgr.onrender.com" target="_blank" rel="noopener noreferrer">Quaere</a></li>' +
        '<li><a href="https://oranburg.law">oranburg.law</a></li>' +
        '<li>' +
          '<button class="theme-toggle" onclick="toggleTheme()" aria-label="Switch to light mode">' +
            '<svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
            '<svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
          '</button>' +
        '</li>' +
      '</ul>';

    // Mark current page
    var links = nav.querySelectorAll("a");
    var loc = window.location.pathname;
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href && !href.startsWith("http") && loc.indexOf(href.replace(/\/$/, "")) !== -1 && href !== "/" && href !== "") {
        links[i].setAttribute("aria-current", "page");
      }
    }
    // Mark home if on root
    if (loc === "/" || loc.endsWith("/K/") || loc.endsWith("/K/index.html")) {
      var homeLink = nav.querySelector('a[href="' + (p || '/') + '"]');
      if (homeLink) homeLink.setAttribute("aria-current", "page");
    }
  }

  // Auto-render on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  window.KNav = { render: render };
})();

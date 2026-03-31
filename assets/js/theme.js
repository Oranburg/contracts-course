// Theme toggle (matching oranburg.law implementation)
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  var btns = document.querySelectorAll('.theme-toggle');
  btns.forEach(function (btn) {
    btn.setAttribute('aria-label', 'Switch to ' + (next === 'dark' ? 'light' : 'dark') + ' mode');
  });
}

(function () {
  var theme = document.documentElement.getAttribute('data-theme') || 'dark';
  var btns = document.querySelectorAll('.theme-toggle');
  btns.forEach(function (btn) {
    btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
  });
})();

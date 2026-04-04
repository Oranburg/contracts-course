/**
 * Progress Sync for K (Contract Law) → Quaere backend
 *
 * Include this script in any exercise page. When the exercise calls
 * KSync.complete(), it sends the score to Quaere for teacher tracking.
 *
 * Student email is stored in localStorage after first prompt.
 * If no email, sync is silently skipped.
 *
 * Usage in an exercise's app.js:
 *   KSync.complete({
 *     exerciseId: "battle-of-forms",
 *     exerciseTitle: "Merchant Road — Battle of the Forms",
 *     score: state.score,
 *     total: state.total,
 *     mastery: state.mastery
 *   });
 */
(function () {
  var QUAERE_API = "https://quaere-1cgr.onrender.com/api/activity-progress";
  var COURSE_CODE = "K-CONTRACTS";
  var EMAIL_KEY = "k-student-email";

  function getEmail() {
    try { return localStorage.getItem(EMAIL_KEY); } catch (e) { return null; }
  }

  function setEmail(email) {
    try { localStorage.setItem(EMAIL_KEY, email.trim().toLowerCase()); } catch (e) {}
  }

  function clearEmail() {
    try { localStorage.removeItem(EMAIL_KEY); } catch (e) {}
  }

  /**
   * Render a small email prompt bar. Call once on page load.
   * Appends to the element with the given ID, or to document.body.
   */
  function renderEmailPrompt(containerId) {
    var existing = document.getElementById("ksync-email-bar");
    if (existing) return;

    var bar = document.createElement("div");
    bar.id = "ksync-email-bar";
    bar.style.cssText = "position:fixed;bottom:0;left:0;right:0;z-index:9999;background:var(--bg-secondary,#1a1a2e);border-top:1px solid var(--border,#333);padding:8px 16px;display:flex;align-items:center;gap:8px;font-family:var(--font-body,'Roboto',sans-serif);font-size:13px;";

    var email = getEmail();
    if (email) {
      bar.innerHTML =
        '<span style="color:var(--muted,#888)">Tracking as: <strong style="color:var(--text,#ddd)">' + email + '</strong></span>'
        + ' <button onclick="KSync.editEmail()" style="background:none;border:none;color:var(--accent,#c9a227);cursor:pointer;font-size:12px">edit</button>'
        + ' <button onclick="KSync.clearAndRefresh()" style="background:none;border:none;color:var(--muted,#888);cursor:pointer;font-size:12px">clear</button>';
    } else {
      bar.innerHTML =
        '<span style="color:var(--muted,#888)">Enter email for progress tracking:</span>'
        + ' <input id="ksync-email-input" type="email" placeholder="your@email.edu" style="background:var(--bg-soft,#222);border:1px solid var(--border,#444);border-radius:4px;padding:4px 8px;color:var(--text,#ddd);font-size:13px;width:180px">'
        + ' <button onclick="KSync.saveEmail()" style="background:var(--accent,#c9a227);color:#000;border:none;border-radius:4px;padding:4px 12px;cursor:pointer;font-size:12px">Save</button>';
    }

    var container = containerId ? document.getElementById(containerId) : null;
    (container || document.body).appendChild(bar);
  }

  function saveEmail() {
    var input = document.getElementById("ksync-email-input");
    if (!input) return;
    var val = input.value.trim();
    if (!val || val.indexOf("@") === -1) return;
    setEmail(val);
    var bar = document.getElementById("ksync-email-bar");
    if (bar) bar.remove();
    renderEmailPrompt();
  }

  function editEmail() {
    clearEmail();
    var bar = document.getElementById("ksync-email-bar");
    if (bar) bar.remove();
    renderEmailPrompt();
  }

  function clearAndRefresh() {
    clearEmail();
    var bar = document.getElementById("ksync-email-bar");
    if (bar) bar.remove();
    renderEmailPrompt();
  }

  /**
   * Send completion data to Quaere. Call from renderSummary().
   */
  function complete(opts) {
    // Write to localStorage for roadmap progress dots
    if (opts.chapterNum) {
      try {
        localStorage.setItem("k-ch-" + opts.chapterNum + "-complete", "true");
      } catch (e) {}
    }

    var email = getEmail();
    if (!email) return;

    var body = {
      studentEmail: email,
      courseCode: COURSE_CODE,
      moduleId: opts.exerciseId || "unknown",
      chapterNum: opts.chapterNum || 0,
      chapterTitle: opts.exerciseTitle || opts.exerciseId || "Unknown Exercise",
      completed: true,
      scores: {
        score: opts.score || 0,
        total: opts.total || 0,
        percent: opts.total ? Math.round((opts.score / opts.total) * 100) : 0,
        mastery: opts.mastery || null,
      },
      counselNotes: opts.notes || null,
    };

    try {
      fetch(QUAERE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).catch(function () {});
    } catch (e) {
      // Silent fail
    }
  }

  // Auto-render email bar on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { renderEmailPrompt(); });
  } else {
    renderEmailPrompt();
  }

  // Public API
  window.KSync = {
    complete: complete,
    getEmail: getEmail,
    setEmail: setEmail,
    clearEmail: clearEmail,
    saveEmail: saveEmail,
    editEmail: editEmail,
    clearAndRefresh: clearAndRefresh,
    renderEmailPrompt: renderEmailPrompt,
  };
})();

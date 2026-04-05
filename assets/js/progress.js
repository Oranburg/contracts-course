/**
 * K Progress — localStorage reader for the course roadmap
 *
 * Stores per-chapter completion and renders progress on index.html.
 * Exercises write: localStorage.setItem("k-ch-{N}-complete", "true")
 * This script reads those keys and updates the roadmap UI.
 */
(function () {
  var PREFIX = "k-ch-";
  var SUFFIX = "-complete";

  /** Check if chapter N is complete */
  function isComplete(chapterNum) {
    try {
      return localStorage.getItem(PREFIX + chapterNum + SUFFIX) === "true";
    } catch (e) {
      return false;
    }
  }

  /** Mark chapter N as complete */
  function markComplete(chapterNum) {
    try {
      localStorage.setItem(PREFIX + chapterNum + SUFFIX, "true");
    } catch (e) {}
  }

  /** Clear chapter N completion */
  function clearChapter(chapterNum) {
    try {
      localStorage.removeItem(PREFIX + chapterNum + SUFFIX);
    } catch (e) {}
  }

  /** Count completed chapters from an array of chapter numbers */
  function countComplete(chapterNums) {
    var count = 0;
    for (var i = 0; i < chapterNums.length; i++) {
      if (isComplete(chapterNums[i])) count++;
    }
    return count;
  }

  /**
   * Update the roadmap UI on index.html.
   * Looks for elements with data-chapter="N" and applies status classes.
   * Updates module headers with completion counts.
   */
  function updateRoadmap() {
    // Update individual chapter rows
    var rows = document.querySelectorAll("[data-chapter]");
    for (var i = 0; i < rows.length; i++) {
      var ch = parseInt(rows[i].getAttribute("data-chapter"), 10);
      if (isComplete(ch)) {
        rows[i].classList.add("ch-complete");
        rows[i].classList.remove("ch-pending");
      }
    }

    // Update module headers with completion counts
    var modules = document.querySelectorAll("[data-module-chapters]");
    for (var j = 0; j < modules.length; j++) {
      var nums = modules[j].getAttribute("data-module-chapters").split(",").map(Number);
      var done = countComplete(nums);
      var total = nums.length;
      var counter = modules[j].querySelector(".module-progress-count");
      if (counter) {
        if (done === 0) {
          counter.textContent = "";
        } else if (done === total) {
          counter.textContent = "Complete";
          counter.classList.add("module-done");
        } else {
          counter.textContent = done + " of " + total;
        }
      }
      // Add module-complete class if all done
      if (done === total && modules[j].closest(".roadmap-module")) {
        modules[j].closest(".roadmap-module").classList.add("module-all-complete");
      }
    }

    // Update progress dashboard
    var dashboard = document.getElementById("progress-dashboard");
    if (dashboard) {
      var allChapters = [];
      for (var k = 1; k <= 28; k++) allChapters.push(k);
      var completed = countComplete(allChapters);
      if (completed > 0) {
        dashboard.style.display = "block";
        var pct = Math.round((completed / 28) * 100);
        var countEl = document.getElementById("progress-count");
        var barEl = document.getElementById("progress-bar-fill");
        if (countEl) countEl.textContent = completed + " of 28 chapters (" + pct + "%)";
        if (barEl) barEl.style.width = pct + "%";
      }
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateRoadmap);
  } else {
    updateRoadmap();
  }

  // Public API
  window.KProgress = {
    isComplete: isComplete,
    markComplete: markComplete,
    clearChapter: clearChapter,
    countComplete: countComplete,
    updateRoadmap: updateRoadmap
  };
})();

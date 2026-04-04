/* eslint-disable no-unused-vars */
/**
 * Exercise data file — copy this template to a new exercise directory
 * and fill in the EXERCISE object. The shared engine (engine.js) reads
 * this and handles all rendering.
 */
var EXERCISE = {
  slug: "template",
  title: "Exercise Title",
  kicker: "Module N • Topic",
  subtitle: "Location, Middle-earth",
  chapterNum: 0,
  law: "R2d § N",
  narrative: "The fact pattern goes here.",
  image: "",  // path to chapter image, e.g. "../../assets/images/K-scene-name.png"
  prevChapter: null,  // { title: "Previous Chapter", url: "../prev-slug/" }
  nextChapter: null,  // { title: "Next Chapter", url: "../next-slug/" }
  tome: [
    "Doctrine primer quote 1.",
    "Doctrine primer quote 2.",
    "Doctrine primer quote 3."
  ],
  artifacts: [
    { id: "a1", name: "Artifact Name", text: "Evidence text shown in modal." }
  ],
  steps: [
    {
      type: "desk",
      irac: "Facts",
      prompt: "Open the artifacts in the Investigation Desk."
    },
    {
      type: "mcq",
      irac: "Rule + Application",
      prompt: "Question text here.",
      options: [
        { text: "Correct answer.", correct: true, feedback: "Explanation." },
        { text: "Wrong answer.", correct: false, feedback: "Explanation." },
        { text: "Wrong answer.", correct: false, feedback: "Explanation." }
      ]
    }
  ]
};

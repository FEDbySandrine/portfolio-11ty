// Support Test
const supportsContainerQueries = "container" in document.documentElement.style;

// Conditional Import
if (!supportsContainerQueries) {
  import("https://cdn.jsdelivr.net/npm/container-query-polyfill@0.2.4/dist/container-query-polyfill.modern.js");
}

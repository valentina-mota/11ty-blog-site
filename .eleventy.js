const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItLinkAttributes = require("markdown-it-link-attributes");

module.exports = function (eleventyConfig) {
  // static
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // filtro data
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Markdown: abilita HTML e attributi
  const md = markdownIt({ html: true })
    .use(markdownItAttrs) // consente {.classe} e {attr="..."}
    .use(markdownItLinkAttributes, {
      // aggiunge target/rel a tutti i link esterni http/https
      pattern: /^https?:\/\//,
      attrs: {
        target: "_blank",
        rel: "noopener noreferrer"
      }
    });

  eleventyConfig.setLibrary("md", md);

  return {
    dir: { input: "src", output: "_site" },
  };
};

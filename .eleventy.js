import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import * as filters from "./docs/_config/filters.js";
import * as shortcodes from "./docs/_config/shortcodes.js";
import * as collections from "./docs/_config/collections.js";

export default async function (config) {
  config.addPassthroughCopy({ "./public/": "/" });
  config.addPlugin(syntaxHighlight);

  // filters
  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });
  // collections
  Object.keys(collections).forEach((name) => {
    config.addCollection(name, collections[name]);
  });
  // shortcodes
  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "docs",
      output: "_docs",
    },
  };
}

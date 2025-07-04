import { sort } from "./helpers.js";

export function layout(collection) {
  return collection
    .getFilteredByGlob("docs/layout/**/*.md")
    .sort(sort("title"));
}

export function utilities(collection) {
  return collection
    .getFilteredByGlob("docs/utilities/**/*.md")
    .sort(sort("title"));
}

export function guides(collection) {
  return collection
    .getFilteredByGlob("docs/guides/**/*.md")
    .sort(sort("title"));
}

export function docs(collection) {
  return collection
    .getAll()
    .filter((c) => c.data.parent)
    .sort((a, b) => {
      if (a.data.parent === "layout") {
        if (b.data.parent === "layout")
          return a.data.title < b.data.title ? -1 : 1;
        return 1;
      }
      if (a.data.parent === "utilities") {
        if (b.data.parent === "utilities")
          return a.data.title < b.data.title ? -1 : 1;
        return 1;
      }
      if (a.data.parent === "guides") {
        if (b.data.parent === "guides")
          return a.data.title < b.data.title ? -1 : 1;
        return 1;
      }
      return 0;
    });
}

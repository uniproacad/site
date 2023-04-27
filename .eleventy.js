const { DateTime } = require("luxon");
module.exports = function(eleventyConfig){
   eleventyConfig.addPassthroughCopy("./src/css");
   eleventyConfig.addPassthroughCopy("./src/fonts");
   eleventyConfig.addPassthroughCopy("./src/images");
   eleventyConfig.addPassthroughCopy("./src/js");
   eleventyConfig.addPassthroughCopy("./src/scss");
   eleventyConfig.addPassthroughCopy("./src/admin");
   eleventyConfig.addPassthroughCopy("./src/_redirects");
   eleventyConfig.addPassthroughCopy({ "./src/favicon.ico": "/favicon.ico"});
   eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt"});
   eleventyConfig.addCollection('posts', function(collection) {
        return collection.getFilteredByGlob('./src/blog/posts/**/*.md').sort((a, b) => b.date - a.date);
    });
   eleventyConfig.addFilter("dateToISO", function(date, format) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toFormat(format);
  });
   return{
      passthroughFileCopy: true,
      markdownTemplateEngine:"njk",
      templateFormats:["html", "njk", "md"],
      dir:{
         input: "src",
         output: "_site",
         includes: "_includes",
         layouts: "_layouts"
      }
   };
};
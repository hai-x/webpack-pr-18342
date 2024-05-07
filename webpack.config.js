const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    src1: { import: "./src1/index.js", runtime: 'runtime-entry1' },
    src2: { import: "./src2/index.js", runtime: 'runtime-entry2' },
    src3: { import: "./src3/index.js", runtime: 'runtime-entry3' }
  },
  watchOptions: {
    aggregateTimeout: 5000,
  }
};
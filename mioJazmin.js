// *** My little library of Test mio-jazmin ***

import chalk from "chalk"; // assigning in the package.json: "type": "module",

/*
// Another option depending on the environment and the version of node is:
require = require('esm')(module) // and run: node --experimental-modules index.js
const chalk = require('chalk')
*/

// ** Selection of colors for the console using the small chalk library **
const consoleBlue = function (text) {
  console.log(chalk.blue(text));
};
const consoleGreen = function (text) {
  console.error(chalk.green(text));
};
const consoleRed = function (text) {
  console.error(chalk.red(text));
};
const consoleMagenta = function (text) {
  console.error(chalk.magenta(text));
};
// ** ------------------------------------------------------------------ **

// ** Library code **
export const describe = function (strTitle, cb) {
  consoleBlue(strTitle);
  cb();
  return;
};
export const it = function (strSubTitle, cb) {
  describe.text = strSubTitle;
  cb();
  return;
};
export function expect(cb) {
  describe.test = cb;
  return;
}
expect.toBe = function (value) {
  console.log(describe.test);
  var test;
  if (Array.isArray(describe.test) && Array.isArray(value)) {
    test = "[" + describe.test.join(",") + "]";
    value = "[" + value.join(",") + "]";
  } else if (
    typeof describe.test === "object" &&
    !Array.isArray(describe.test) &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    test = JSON.stringify(describe.test);
    value = JSON.stringify(value);
  } else {
    test = describe.test;
  }
  if (value === test) {
    consoleMagenta(describe.text);
    consoleGreen("expect " + value);
    consoleGreen("recive " + JSON.stringify(describe.test));
  } else {
    consoleRed(describe.text);
    consoleGreen("expect " + value);
    consoleRed("recive " + JSON.stringify(describe.test));
  }
  return;
};

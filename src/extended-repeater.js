const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const s = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.hasOwnProperty("separator")
    ? String(options.separator)
    : "+";
  const addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.hasOwnProperty("additionSeparator")
    ? String(options.additionSeparator)
    : "|";

  let result = "";
  let add = "";

  for (let index = 0; index < additionRepeatTimes; index++) {
    add += add === "" ? `${addition}` : `${additionSeparator}${addition}`;
  }

  for (let i = 0; i < repeatTimes; i++) {
    result += result === "" ? `${s}${add}` : `${separator}${s}${add}`;
  }

  return result;
}

repeater("STRING", {
  repeatTimes: 3,
  separator: "**",
  addition: "PLUS",
  additionRepeatTimes: 3,
  additionSeparator: "00",
});

module.exports = {
  repeater,
};

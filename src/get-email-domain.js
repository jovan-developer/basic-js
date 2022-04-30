const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email
    .split("")
    .reverse()
    .join("")
    .split("@")[0]
    .split("")
    .reverse("")
    .join("");
}

module.exports = {
  getEmailDomain,
};

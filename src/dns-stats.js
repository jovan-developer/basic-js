const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let count = {};

  const domenStat = (domen) => {
    let arr = domen.split(".").reverse();
    let strJoin = "";

    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      strJoin += `.${item}`;
      if (count[strJoin]) count[strJoin] += 1;
      else count[strJoin] = 1;
    }
  };

  for (let i = 0; i < domains.length; i++) {
    domenStat(domains[i]);
  }

  return count
}

getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);

module.exports = {
  getDNSStats,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(mod = true) {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    this.mod = mod;
  }

  encrypt(message, key) {
    if (message !== undefined && key !== undefined) {
      let result = "";
      let msg = message.toLowerCase().split("");
      let k = key.toLowerCase().split("");
      let idx = 0;

      for (let i = 0; i < msg.length; i++) {
        if (idx >= k.length) {
          idx = 0;
        }

        const el = this.alphabet.indexOf(msg[i]);

        if (el === -1) {
          result += msg[i];
        } else {
          const keyValue = this.alphabet.indexOf(k[idx]);
          const val = keyValue + el;
          let resultIdx = 0;
          if (val > 0) {
            resultIdx = val % 26;
          }

          console.log(el, keyValue, resultIdx, this.alphabet[resultIdx]);
          result += this.alphabet[resultIdx];
          idx++;
        }
      }
      result = result.toUpperCase();
      return this.mod ? result : result.split("").reverse("").join("");
    } else {
      throw new Error("Incorrect arguments!");
    }
  }
  decrypt(message, key) {
    if (message !== undefined && key !== undefined) {
      let result = "";
      let msg = message.toLowerCase().split("");
      let k = key.toLowerCase().split("");
      let idx = 0;

      for (let i = 0; i < msg.length; i++) {
        if (idx >= k.length) {
          idx = 0;
        }

        const el = this.alphabet.indexOf(msg[i]);

        if (el === -1) {
          result += msg[i];
        } else {
          const keyValue = this.alphabet.indexOf(k[idx]);
          const val = (el - keyValue) % 26;
          let resultIdx = 0;
          resultIdx = val > 0 ? val : (val + 26) % 26;

          console.log(el, keyValue, resultIdx, this.alphabet[resultIdx]);
          result += this.alphabet[resultIdx];
          idx++;
        }
      }
      result = result.toUpperCase();
      return this.mod ? result : result.split("").reverse("").join("");
    } else {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};

const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  processText(text, key, encrypted) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];

      if (this.alphabet.includes(char)) {
        const textIndex = this.alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);

        let newIndex;
        if (encrypted) {
          newIndex = (textIndex + keyIndexInAlphabet) % 26;
        } else {
          newIndex = (textIndex - keyIndexInAlphabet + 26) % 26;
        }

        result += this.alphabet[newIndex];
        keyIndex += 1;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.processText(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    return this.processText(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};

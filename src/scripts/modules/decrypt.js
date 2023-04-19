import digest from "./digest.js";

/**
 * @param {string} message 
 * @returns {string}
 */
export default function decrypt(message) {
  const patterns = [/ai/, /enter/, /imes/, /ober/, /ufat/];

  const replacements = ["a", "e", "i", "o", "u"];

  return digest(message, patterns, replacements);
}

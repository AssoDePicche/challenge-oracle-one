import digest from "./digest.js";

/**
 * @param {string} message
 * @returns {string}
 */
export default function encrypt(message) {
  const patterns = [/e/, /o/, /i/, /a/, /u/];

  const replacements = ["enter", "ober", "imes", "ai", "ufat"];

  return digest(message, patterns, replacements);
}

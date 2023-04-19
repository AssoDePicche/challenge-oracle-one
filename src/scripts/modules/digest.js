/**
 * @param {string} message
 * @param {array<string>} patterns
 * @param {array<string>} replacements
 * @returns {string}
 */
export default function digest(message, patterns, replacements) {
  let text = message.toLowerCase();

  for (let index = 0; index < message.length; index++) {
    text = text.replace(patterns[index], replacements[index]);
  }

  return text;
}
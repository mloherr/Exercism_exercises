// @ts-check
//
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  const firstLetterFront = word.charAt(0);
  const firstLetterFrontCapitalized = firstLetterFront.toUpperCase();
  const newWordFront = word.slice(1);
  const newWordFrontCapitalized = newWordFront.toLowerCase();
  return firstLetterFrontCapitalized + newWordFrontCapitalized;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const newLine = line.trim();
  return newLine.substring(newLine.length - 1);
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const firstLetter = word.charAt(0);
  const capitalizedFirstLetter = firstLetter.toUpperCase();
  const newWord = word.slice(1);
  const newWordCapitalized = newWord.toLowerCase();

  return capitalizedFirstLetter + newWordCapitalized + ', please';
}

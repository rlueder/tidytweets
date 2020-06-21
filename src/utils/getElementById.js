// @flow

/**
 * @function getElementById
 * @param {Document} DOCUMENT
 * @param {string} ID
 * @returns {HTMLElement} HTMLElement
 */

const getElementById = (DOCUMENT: Document, ID: string): HTMLElement => {
  const HTMLElement = DOCUMENT.getElementById(ID);
  if (!HTMLElement) throw new Error(`Unable to find element #${ID}.`);
  return HTMLElement;
};

export default getElementById;

import { en, es, pl, pt } from "./translations";

/**
 * @name getTranslations
 * @type {Function}
 * @symmary Takes a language code and returns translations, returns English by default in case language is not supported.
 * @param {string} language
 * @returns {Function}
 */

const getTranslations = (language: string) => {
  switch (language) {
    case "en":
      return en();
    case "es":
      return es();
    case "pl":
      return pl;
    case "pt":
      return pt;
    default:
      return en();
  }
};

export default getTranslations;

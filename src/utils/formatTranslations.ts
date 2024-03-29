import flatMapDeep from "lodash/flatMapDeep";

/**
 * @name formatTranslations
 * @type {Function}
 * @summary Takes an array of translations and returns a flat string expected by react-intl
 * @see {@link https://formatjs.io/docs/react-intl/components/#formattedmessage}
 * @param {Array<Object>} translations
 * @return {string}
 */

// TODO this works but could probably be DRYer

const formatTranslations = (translations: Array<Object>) => {
  const result: { [key: string]: string } = {};
  const keys = flatMapDeep(translations, (item) =>
    Object.values(item).map((val: Object) =>
      Object.keys(val).map((str) => `${Object.keys(item)}.${str}`)
    )
  );
  // assign values
  for (const key of keys) {
    let value = "";
    const str = key.split(".");
    translations.map((obj: { [key: string]: any }) => {
      const el: { [key: string]: string } = obj[str[0]];
      if (el) {
        value = el[str[1]];
      }
      return null;
    });
    result[key] = value;
  }
  return result;
};

export default formatTranslations;

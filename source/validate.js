/**
 * @param {Object} options the options to validate.
 * @param {Object} defaults the default options.
 * @returns {Object} validated the validated options.
 */
export function validate(options, defaults) {
  const validated = {};
  Object.keys(defaults).forEach(key => {
    validated[key] = options[key] || defaults[key];
  });
  return validated;
}

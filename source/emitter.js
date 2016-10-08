import fetch from 'node-fetch';

import { validate } from './validate';

/**
 * @type {Object} defaults the default request options.
 */
const defaults = {
  endpoint: '/api/packets',
  address: 'localhost',
  port: '3000',
  protocol: 'http',
};


/**
 * creates a method for emmiting data to an api.
 *
 * @param  {Object} options - the api options.
 * @returns {Function} returns a function for emmiting to the api.
 */
export default function (options) {
  const { protocol, address, port, endpoint } = validate(options, defaults);

  return async function (body) {
    body = JSON.stringify(body);
    try {
      return await fetch(
        `${protocol}://${address}:${port}${endpoint}`, {
          headers: { 'content-type': 'application/json' },
          method: 'POST', body,
        }
      );
    } catch (error) {
      throw error;
    }
  }
}

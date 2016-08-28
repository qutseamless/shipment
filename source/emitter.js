import 'babel-polyfill';

import fetch from 'node-fetch';

import { validate } from './validate';

/**
 * @type {Object} defaults the default request options.
 */
const defaults = {
  endpoint: '/data',
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
export function emmiter(options) {
  const { protocol, address, port, endpoint } = validate(options, defaults);

  /** the configured emmiter */
  return body => new Promise(async resolve => {
    body = JSON.stringify(body);
    try {
      console.log(`sending: ${body}`);
      const response = await fetch(
        `${protocol}://${address}:${port}${endpoint}`, {
          headers: { 'content-type': 'application/json' },
          method: 'POST',
          body,
        }
      );
      console.log(`response: ${await response.text()}`);
      resolve();
    } catch (error) {
      throw error;
    }
  });
}

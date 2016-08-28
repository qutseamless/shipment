import 'babel-polyfill';

import { validate } from '../validate';
import { move } from './location';

/**
 * converts km/h to m/s.
 * @param {Number} kmph the speed in km/h.
 * @return {Number} return the speed in m/s.
 */
function calcSpeed(kmph) {
  return kmph * 3.6;
}


/**
 * converts minutes to milliseconds.
 * @param {Number} minutes the amount in minutes.
 * @return {Number} return the amount in milliseconds.
 */
function calcTime(mins) {
  return mins * 60000;
}


/**
 * @type {Object} optionsDefault the default values for the location/travel
 * of the shipment.
 */
const defaults = {
  id: 1234,
  speed: 60, // km/h
  interval: 0.1, // minutes
  duration: 2, // minutes
  location: {
    lat: -27.465501,
    long: 153.002685,
  },
};


/**
 * generates a new location after randomly moving in a random direction at a
 * specified speed.
 * @param  {Object} options the options for the generator.
 * @return {Object} return the new location of the generator.
 */
export function shipment(emmit, options) {
  /** validate input */
  const validated = validate(options, defaults);
  let { speed, interval, duration, location } = validated;
  const { id } = validated;

  /** convert options */
  speed = calcSpeed(speed);
  interval = calcTime(interval);
  duration = calcTime(duration) / interval;

  return new Promise(resolve => {
    let count = 0;
    const travel = callback => setTimeout(async () => {
      await emmit({ id, location, timestamp: Date.now() });

      location = move(location, speed);
      count++;

      if (count === duration) {
        resolve();
        return;
      }

      callback(callback);
    }, interval);
    travel(travel);
  });
}

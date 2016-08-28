/**
 * a helper for calculating the new location of the shipment.
 * @param {Object} location the old location of the shipment.
 * @param {Number} x the offset to move.
 * @param {Number} y the offset to move.
 * @return {Object} return the new location of the shipment.
 */
const calcLocation = (location, x, y) => {
  const RADIUS = 6378137; const PI = Math.PI;

  /** calc offset */
  const latOffset = x / RADIUS;
  const longOffset = y / (RADIUS * Math.cos(location.lat * PI / 180));

  return {
    lat: location.lat + latOffset * 180 / PI,
    long: location.long + longOffset * 180 / PI,
  };
};


/**
 * helper for moving the shipment in a random direction.
 * @param {Object} location the old location of the shipment.
 * @param {Number} speed the speed to move the shipment.
 * @return {Object} return the new location of the shipment.
 */
export function move(location, speed) {
  const direction = Math.floor(Math.random() * 3);

  switch (direction) {
    case 1:
      return calcLocation(location, speed, 0);
    case 2:
      return calcLocation(location, speed, speed);
    default:
      return calcLocation(location, speed, -speed);
  }
}


/* eslint
  no-mixed-operators: 0,
  no-constant-condition: 0
*/

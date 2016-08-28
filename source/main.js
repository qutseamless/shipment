import 'babel-polyfill';

import { emitter } from './emitter';
import { shipment } from './shipment';


console.log('starting shipment');

/**
 * specify emmiter options here...
 */
const emmiterOptions = {};


/**
 * start emmiting.
 */
const emmit = emmiter(emmiterOptions);


/**
 * specify shipment options here...
 */
const shipmentOptions = {};


/**
 * create delievery
 */
shipment(emmit, shipmentOptions)
  .then(() => console.log('shipment complete'));

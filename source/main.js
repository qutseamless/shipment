import emitter from './emitter';
import shipment from './shipment';


console.log('starting shipment');

/**
 * specify emmiter options here...
 */
const emmiterOptions = {};


/**
 * start emmiting.
 */
const packetEmmiter = emitter(emmiterOptions);

/**
 * specify shipment options here...
 */
const shipmentOptions = {
  deviceId: 61234,
};


/**
 * create delievery
 */
shipment(packetEmmiter, shipmentOptions);

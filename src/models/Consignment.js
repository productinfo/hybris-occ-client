/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * OCC No description provided (generated by Swagger Codegen
 * https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git Do not edit the class
 * manually.
 *
 */

import ApiClient from '../ApiClient'
import Address from './Address'
import ConsignmentEntry from './ConsignmentEntry'
import PointOfService from './PointOfService'

/**
* The Consignment model module.
* @module models/Consignment
* @version v2
*/
export default class Consignment {
    /**
    * Constructs a new <code>Consignment</code>.
    * @alias module:models/Consignment
    * @class
    */

    constructor() {
        /**
    *
    * @member {String} code
    */
        this.code = undefined
        /**
    *
    * @member {String} trackingID
    */
        this.trackingID = undefined
        /**
    *
    * @member {String} status
    */
        this.status = undefined
        /**
    *
    * @member {String} statusDate
    */
        this.statusDate = undefined
        /**
    *
    * @member {Array.<module:models/ConsignmentEntry>} entries
    */
        this.entries = undefined
        /**
    * @member {module:models/Address} shippingAddress
    */
        this.shippingAddress = undefined
        /**
    * @member {module:models/PointOfService} deliveryPointOfService
    */
        this.deliveryPointOfService = undefined
    }

    /**
    * Constructs a <code>Consignment</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/Consignment} obj Optional instance to populate.
    * @return {module:models/Consignment} The populated
    * <code>Consignment</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Consignment()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('trackingID')) {
                obj.trackingID = ApiClient.convertToType(data.trackingID, 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj.status = ApiClient.convertToType(data.status, 'String')
            }
            if (data.hasOwnProperty('statusDate')) {
                obj.statusDate = ApiClient.convertToType(data.statusDate, 'String')
            }
            if (data.hasOwnProperty('entries')) {
                obj.entries = ApiClient.convertToType(data.entries, [ConsignmentEntry])
            }
            if (data.hasOwnProperty('shippingAddress')) {
                obj.shippingAddress = Address.constructFromObject(data.shippingAddress)
            }
            if (data.hasOwnProperty('deliveryPointOfService')) {
                obj.deliveryPointOfService = PointOfService.constructFromObject(data.deliveryPointOfService)
            }
        }
        return obj
    }

}
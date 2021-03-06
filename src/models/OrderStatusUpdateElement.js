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

/**
* The OrderStatusUpdateElement model module.
* @module models/OrderStatusUpdateElement
* @version v2
*/
export default class OrderStatusUpdateElement {
    /**
    * Constructs a new <code>OrderStatusUpdateElement</code>.
    * @alias module:models/OrderStatusUpdateElement
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
    * @member {String} status
    */
        this.status = undefined
        /**
    *
    * @member {String} baseSiteId
    */
        this.baseSiteId = undefined
    }

    /**
    * Constructs a <code>OrderStatusUpdateElement</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/OrderStatusUpdateElement} obj Optional instance
    * to populate.
    * @return {module:models/OrderStatusUpdateElement} The populated
    * <code>OrderStatusUpdateElement</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderStatusUpdateElement()

            if (data.hasOwnProperty('code')) {
                obj.code = ApiClient.convertToType(data.code, 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj.status = ApiClient.convertToType(data.status, 'String')
            }
            if (data.hasOwnProperty('baseSiteId')) {
                obj.baseSiteId = ApiClient.convertToType(data.baseSiteId, 'String')
            }
        }
        return obj
    }



}

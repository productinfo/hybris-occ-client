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
* The GeoPoint model module.
* @module models/GeoPoint
* @version v2
*/
export default class GeoPoint {
    /**
    * Constructs a new <code>GeoPoint</code>.
    * @alias module:models/GeoPoint
    * @class
    */

    constructor() {
        /**
    *
    * @member {Number} latitude
    */
        this.latitude = undefined
        /**
    *
    * @member {Number} longitude
    */
        this.longitude = undefined
    }

    /**
    * Constructs a <code>GeoPoint</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/GeoPoint} obj Optional instance to populate.
    * @return {module:models/GeoPoint} The populated
    * <code>GeoPoint</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoPoint()

            if (data.hasOwnProperty('latitude')) {
                obj.latitude = ApiClient.convertToType(data.latitude, 'Number')
            }
            if (data.hasOwnProperty('longitude')) {
                obj.longitude = ApiClient.convertToType(data.longitude, 'Number')
            }
        }
        return obj
    }

}

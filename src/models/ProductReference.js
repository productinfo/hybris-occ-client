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
import ProductOCC1 from './ProductOCC1'

/**
* The ProductReference model module.
* @module models/ProductReference
* @version v2
*/
export default class ProductReference {
    /**
    * Constructs a new <code>ProductReference</code>.
    * @alias module:models/ProductReference
    * @class
    */

    constructor() {
        /**
    *
    * @member {Boolean} preselected
    */
        this.preselected = undefined
        /**
    *
    * @member {String} referenceType
    */
        this.referenceType = undefined
        /**
    *
    * @member {String} description
    */
        this.description = undefined
        /**
    *
    * @member {Number} quantity
    */
        this.quantity = undefined
        /**
    * @member {module:models/ProductOCC1} target
    */
        this.target = undefined
    }

    /**
    * Constructs a <code>ProductReference</code> from a plain JavaScript
    * object, optionally creating a new instance. Copies all relevant properties
    * from <code>data</code> to <code>obj</code> if supplied or a new instance
    * if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/ProductReference} obj Optional instance to
    * populate.
    * @return {module:models/ProductReference} The populated
    * <code>ProductReference</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductReference()

            if (data.hasOwnProperty('preselected')) {
                obj.preselected = ApiClient.convertToType(data.preselected, 'Boolean')
            }
            if (data.hasOwnProperty('referenceType')) {
                obj.referenceType = ApiClient.convertToType(data.referenceType, 'String')
            }
            if (data.hasOwnProperty('description')) {
                obj.description = ApiClient.convertToType(data.description, 'String')
            }
            if (data.hasOwnProperty('quantity')) {
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number')
            }
            if (data.hasOwnProperty('target')) {
                obj.target = ProductOCC1.constructFromObject(data.target)
            }
        }
        return obj
    }



}

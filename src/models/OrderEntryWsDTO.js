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
import DeliveryModeWsDTO from './DeliveryModeWsDTO'
import PointOfServiceWsDTO from './PointOfServiceWsDTO'
import PriceWsDTO from './PriceWsDTO'
import ProductOCC1 from './ProductOCC1'

/**
* The OrderEntryWsDTO model module.
* @module models/OrderEntryWsDTO
* @version v2
*/
export default class OrderEntryWsDTO {
    /**
    * Constructs a new <code>OrderEntryWsDTO</code>.
    * @alias module:models/OrderEntryWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {Number} entryNumber
    */
        this.entryNumber = undefined
        /**
    *
    * @member {Number} quantity
    */
        this.quantity = undefined
        /**
    * @member {module:models/PriceWsDTO} basePrice
    */
        this.basePrice = undefined
        /**
    * @member {module:models/PriceWsDTO} totalPrice
    */
        this.totalPrice = undefined
        /**
    * @member {module:models/ProductOCC1} product
    */
        this.product = undefined
        /**
    *
    * @member {Boolean} updateable
    */
        this.updateable = undefined
        /**
    * @member {module:models/DeliveryModeWsDTO} deliveryMode
    */
        this.deliveryMode = undefined
        /**
    * @member {module:models/PointOfServiceWsDTO} deliveryPointOfService
    */
        this.deliveryPointOfService = undefined
    }

    /**
    * Constructs a <code>OrderEntryWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/OrderEntryWsDTO} obj Optional instance to populate.
    * @return {module:models/OrderEntryWsDTO} The populated
    * <code>OrderEntryWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderEntryWsDTO()

            if (data.hasOwnProperty('entryNumber')) {
                obj.entryNumber = ApiClient.convertToType(data.entryNumber, 'Number')
            }
            if (data.hasOwnProperty('quantity')) {
                obj.quantity = ApiClient.convertToType(data.quantity, 'Number')
            }
            if (data.hasOwnProperty('basePrice')) {
                obj.basePrice = PriceWsDTO.constructFromObject(data.basePrice)
            }
            if (data.hasOwnProperty('totalPrice')) {
                obj.totalPrice = PriceWsDTO.constructFromObject(data.totalPrice)
            }
            if (data.hasOwnProperty('product')) {
                obj.product = ProductOCC1.constructFromObject(data.product)
            }
            if (data.hasOwnProperty('updateable')) {
                obj.updateable = ApiClient.convertToType(data.updateable, 'Boolean')
            }
            if (data.hasOwnProperty('deliveryMode')) {
                obj.deliveryMode = DeliveryModeWsDTO.constructFromObject(data.deliveryMode)
            }
            if (data.hasOwnProperty('deliveryPointOfService')) {
                obj.deliveryPointOfService = PointOfServiceWsDTO.constructFromObject(data.deliveryPointOfService)
            }
        }
        return obj
    }



}

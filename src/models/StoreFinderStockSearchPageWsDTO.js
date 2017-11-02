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
import PaginationWsDTO from './PaginationWsDTO'
import PointOfServiceStockWsDTO from './PointOfServiceStockWsDTO'
import ProductOCC1 from './ProductOCC1'
import SortWsDTO from './SortWsDTO'

/**
* The StoreFinderStockSearchPageWsDTO model module.
* @module models/StoreFinderStockSearchPageWsDTO
* @version v2
*/
export default class StoreFinderStockSearchPageWsDTO {
    /**
    * Constructs a new <code>StoreFinderStockSearchPageWsDTO</code>.
    * @alias module:models/StoreFinderStockSearchPageWsDTO
    * @class
    */

    constructor() {
        /**
    *
    * @member {Array.<module:models/PointOfServiceStockWsDTO>} stores
    */
        this.stores = undefined
        /**
    *
    * @member {Array.<module:models/SortWsDTO>} sorts
    */
        this.sorts = undefined
        /**
    * @member {module:models/PaginationWsDTO} pagination
    */
        this.pagination = undefined
        /**
    *
    * @member {String} locationText
    */
        this.locationText = undefined
        /**
    *
    * @member {Number} sourceLatitude
    */
        this.sourceLatitude = undefined
        /**
    *
    * @member {Number} sourceLongitude
    */
        this.sourceLongitude = undefined
        /**
    *
    * @member {Number} boundNorthLatitude
    */
        this.boundNorthLatitude = undefined
        /**
    *
    * @member {Number} boundEastLongitude
    */
        this.boundEastLongitude = undefined
        /**
    *
    * @member {Number} boundSouthLatitude
    */
        this.boundSouthLatitude = undefined
        /**
    *
    * @member {Number} boundWestLongitude
    */
        this.boundWestLongitude = undefined
        /**
    * @member {module:models/ProductOCC1} product
    */
        this.product = undefined
    }

    /**
    * Constructs a <code>StoreFinderStockSearchPageWsDTO</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/StoreFinderStockSearchPageWsDTO} obj Optional
    * instance to populate.
    * @return {module:models/StoreFinderStockSearchPageWsDTO} The populated
    * <code>StoreFinderStockSearchPageWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreFinderStockSearchPageWsDTO()

            if (data.hasOwnProperty('stores')) {
                obj.stores = ApiClient.convertToType(data.stores, [PointOfServiceStockWsDTO])
            }
            if (data.hasOwnProperty('sorts')) {
                obj.sorts = ApiClient.convertToType(data.sorts, [SortWsDTO])
            }
            if (data.hasOwnProperty('pagination')) {
                obj.pagination = PaginationWsDTO.constructFromObject(data.pagination)
            }
            if (data.hasOwnProperty('locationText')) {
                obj.locationText = ApiClient.convertToType(data.locationText, 'String')
            }
            if (data.hasOwnProperty('sourceLatitude')) {
                obj.sourceLatitude = ApiClient.convertToType(data.sourceLatitude, 'Number')
            }
            if (data.hasOwnProperty('sourceLongitude')) {
                obj.sourceLongitude = ApiClient.convertToType(data.sourceLongitude, 'Number')
            }
            if (data.hasOwnProperty('boundNorthLatitude')) {
                obj.boundNorthLatitude = ApiClient.convertToType(data.boundNorthLatitude, 'Number')
            }
            if (data.hasOwnProperty('boundEastLongitude')) {
                obj.boundEastLongitude = ApiClient.convertToType(data.boundEastLongitude, 'Number')
            }
            if (data.hasOwnProperty('boundSouthLatitude')) {
                obj.boundSouthLatitude = ApiClient.convertToType(data.boundSouthLatitude, 'Number')
            }
            if (data.hasOwnProperty('boundWestLongitude')) {
                obj.boundWestLongitude = ApiClient.convertToType(data.boundWestLongitude, 'Number')
            }
            if (data.hasOwnProperty('product')) {
                obj.product = ProductOCC1.constructFromObject(data.product)
            }
        }
        return obj
    }



}

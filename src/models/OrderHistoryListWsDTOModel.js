/**
 * OCC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import OrderHistoryWsDTOModel from './OrderHistoryWsDTOModel';
import PaginationWsDTOModel from './PaginationWsDTOModel';
import SortWsDTOModel from './SortWsDTOModel';





/**
* The OrderHistoryListWsDTOModel model module.
* @module models/OrderHistoryListWsDTOModel
* @version v2
*/
export default class OrderHistoryListWsDTOModel {
    /**
    * Constructs a new <code>OrderHistoryListWsDTOModel</code>.
    * @alias module:models/OrderHistoryListWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>OrderHistoryListWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderHistoryListWsDTOModel} obj Optional instance to populate.
    * @return {module:models/OrderHistoryListWsDTOModel} The populated <code>OrderHistoryListWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderHistoryListWsDTOModel();

            
            
            

            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [OrderHistoryWsDTOModel]);
            }
            if (data.hasOwnProperty('sorts')) {
                obj['sorts'] = ApiClient.convertToType(data['sorts'], [SortWsDTOModel]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PaginationWsDTOModel.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Array.<module:models/OrderHistoryWsDTOModel>} orders
    */
    orders = undefined;
    /**
    * 
    * @member {Array.<module:models/SortWsDTOModel>} sorts
    */
    sorts = undefined;
    /**
    * @member {module:models/PaginationWsDTOModel} pagination
    */
    pagination = undefined;








}


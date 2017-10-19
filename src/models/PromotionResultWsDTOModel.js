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
import PromotionOrderEntryConsumedWsDTOModel from './PromotionOrderEntryConsumedWsDTOModel';
import PromotionWsDTOModel from './PromotionWsDTOModel';





/**
* The PromotionResultWsDTOModel model module.
* @module models/PromotionResultWsDTOModel
* @version v2
*/
export default class PromotionResultWsDTOModel {
    /**
    * Constructs a new <code>PromotionResultWsDTOModel</code>.
    * @alias module:models/PromotionResultWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PromotionResultWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PromotionResultWsDTOModel} obj Optional instance to populate.
    * @return {module:models/PromotionResultWsDTOModel} The populated <code>PromotionResultWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionResultWsDTOModel();

            
            
            

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('promotion')) {
                obj['promotion'] = PromotionWsDTOModel.constructFromObject(data['promotion']);
            }
            if (data.hasOwnProperty('consumedEntries')) {
                obj['consumedEntries'] = ApiClient.convertToType(data['consumedEntries'], [PromotionOrderEntryConsumedWsDTOModel]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:models/PromotionWsDTOModel} promotion
    */
    promotion = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionOrderEntryConsumedWsDTOModel>} consumedEntries
    */
    consumedEntries = undefined;








}


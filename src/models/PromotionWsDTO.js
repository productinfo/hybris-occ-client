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

import ApiClient from '../ApiClient';
import ImageWsDTO from './ImageWsDTO';
import PromotionRestrictionWsDTO from './PromotionRestrictionWsDTO';

/**
* The PromotionWsDTO model module.
* @module models/PromotionWsDTO
* @version v2
*/
export default class PromotionWsDTO {
    /**
    * Constructs a new <code>PromotionWsDTO</code>.
    * @alias module:models/PromotionWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>PromotionWsDTO</code> from a plain JavaScript object,
    * optionally creating a new instance. Copies all relevant properties from
    * <code>data</code> to <code>obj</code> if supplied or a new instance if
    * not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/PromotionWsDTO} obj Optional instance to populate.
    * @return {module:models/PromotionWsDTO} The populated
    * <code>PromotionWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionWsDTO();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('promotionType')) {
                obj['promotionType'] = ApiClient.convertToType(data['promotionType'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('couldFireMessages')) {
                obj['couldFireMessages'] = ApiClient.convertToType(data['couldFireMessages'], ['String']);
            }
            if (data.hasOwnProperty('firedMessages')) {
                obj['firedMessages'] = ApiClient.convertToType(data['firedMessages'], ['String']);
            }
            if (data.hasOwnProperty('productBanner')) {
                obj['productBanner'] = ImageWsDTO.constructFromObject(data['productBanner']);
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('promotionGroup')) {
                obj['promotionGroup'] = ApiClient.convertToType(data['promotionGroup'], 'String');
            }
            if (data.hasOwnProperty('restrictions')) {
                obj['restrictions'] = ApiClient.convertToType(data['restrictions'], [PromotionRestrictionWsDTO]);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {String} title
    */
    title = undefined;
    /**
    * 
    * @member {String} promotionType
    */
    promotionType = undefined;
    /**
    * 
    * @member {String} startDate
    */
    startDate = undefined;
    /**
    * 
    * @member {String} endDate
    */
    endDate = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * 
    * @member {Array.<String>} couldFireMessages
    */
    couldFireMessages = undefined;
    /**
    * 
    * @member {Array.<String>} firedMessages
    */
    firedMessages = undefined;
    /**
    * @member {module:models/ImageWsDTO} productBanner
    */
    productBanner = undefined;
    /**
    * 
    * @member {Boolean} enabled
    */
    enabled = undefined;
    /**
    * 
    * @member {Number} priority
    */
    priority = undefined;
    /**
    * 
    * @member {String} promotionGroup
    */
    promotionGroup = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionRestrictionWsDTO>} restrictions
    */
    restrictions = undefined;

}

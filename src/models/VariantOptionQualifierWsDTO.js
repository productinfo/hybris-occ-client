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

/**
* The VariantOptionQualifierWsDTO model module.
* @module models/VariantOptionQualifierWsDTO
* @version v2
*/
export default class VariantOptionQualifierWsDTO {
    /**
    * Constructs a new <code>VariantOptionQualifierWsDTO</code>.
    * @alias module:models/VariantOptionQualifierWsDTO
    * @class
    */

    constructor() {
        
    }

    /**
    * Constructs a <code>VariantOptionQualifierWsDTO</code> from a plain
    * JavaScript object, optionally creating a new instance. Copies all relevant
    * properties from <code>data</code> to <code>obj</code> if supplied or a new
    * instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of
    * interest.
    * @param {module:models/VariantOptionQualifierWsDTO} obj Optional instance
    * to populate.
    * @return {module:models/VariantOptionQualifierWsDTO} The populated
    * <code>VariantOptionQualifierWsDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariantOptionQualifierWsDTO();

            if (data.hasOwnProperty('qualifier')) {
                obj['qualifier'] = ApiClient.convertToType(data['qualifier'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ImageWsDTO.constructFromObject(data['image']);
            }
        }
        return obj;
    }

    /**
    * 
    * @member {String} qualifier
    */
    qualifier = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} value
    */
    value = undefined;
    /**
    * @member {module:models/ImageWsDTO} image
    */
    image = undefined;

}

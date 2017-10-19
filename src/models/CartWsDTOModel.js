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
import AddressWsDTOModel from './AddressWsDTOModel';
import DeliveryModeWsDTOModel from './DeliveryModeWsDTOModel';
import DeliveryOrderEntryGroupWsDTOModel from './DeliveryOrderEntryGroupWsDTOModel';
import OrderEntryWsDTOModel from './OrderEntryWsDTOModel';
import PaymentDetailsWsDTOModel from './PaymentDetailsWsDTOModel';
import PickupOrderEntryGroupWsDTOModel from './PickupOrderEntryGroupWsDTOModel';
import PriceWsDTOModel from './PriceWsDTOModel';
import PrincipalWsDTOModel from './PrincipalWsDTOModel';
import PromotionResultWsDTOModel from './PromotionResultWsDTOModel';
import VoucherWsDTOModel from './VoucherWsDTOModel';





/**
* The CartWsDTOModel model module.
* @module models/CartWsDTOModel
* @version v2
*/
export default class CartWsDTOModel {
    /**
    * Constructs a new <code>CartWsDTOModel</code>.
    * @alias module:models/CartWsDTOModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>CartWsDTOModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CartWsDTOModel} obj Optional instance to populate.
    * @return {module:models/CartWsDTOModel} The populated <code>CartWsDTOModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartWsDTOModel();

            
            
            

            if (data.hasOwnProperty('totalUnitCount')) {
                obj['totalUnitCount'] = ApiClient.convertToType(data['totalUnitCount'], 'Number');
            }
            if (data.hasOwnProperty('potentialOrderPromotions')) {
                obj['potentialOrderPromotions'] = ApiClient.convertToType(data['potentialOrderPromotions'], [PromotionResultWsDTOModel]);
            }
            if (data.hasOwnProperty('potentialProductPromotions')) {
                obj['potentialProductPromotions'] = ApiClient.convertToType(data['potentialProductPromotions'], [PromotionResultWsDTOModel]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expirationTime')) {
                obj['expirationTime'] = ApiClient.convertToType(data['expirationTime'], 'String');
            }
            if (data.hasOwnProperty('saveTime')) {
                obj['saveTime'] = ApiClient.convertToType(data['saveTime'], 'String');
            }
            if (data.hasOwnProperty('savedBy')) {
                obj['savedBy'] = PrincipalWsDTOModel.constructFromObject(data['savedBy']);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('net')) {
                obj['net'] = ApiClient.convertToType(data['net'], 'Boolean');
            }
            if (data.hasOwnProperty('totalPriceWithTax')) {
                obj['totalPriceWithTax'] = PriceWsDTOModel.constructFromObject(data['totalPriceWithTax']);
            }
            if (data.hasOwnProperty('totalPrice')) {
                obj['totalPrice'] = PriceWsDTOModel.constructFromObject(data['totalPrice']);
            }
            if (data.hasOwnProperty('totalTax')) {
                obj['totalTax'] = PriceWsDTOModel.constructFromObject(data['totalTax']);
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = PriceWsDTOModel.constructFromObject(data['subTotal']);
            }
            if (data.hasOwnProperty('deliveryCost')) {
                obj['deliveryCost'] = PriceWsDTOModel.constructFromObject(data['deliveryCost']);
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [OrderEntryWsDTOModel]);
            }
            if (data.hasOwnProperty('totalItems')) {
                obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Number');
            }
            if (data.hasOwnProperty('deliveryMode')) {
                obj['deliveryMode'] = DeliveryModeWsDTOModel.constructFromObject(data['deliveryMode']);
            }
            if (data.hasOwnProperty('deliveryAddress')) {
                obj['deliveryAddress'] = AddressWsDTOModel.constructFromObject(data['deliveryAddress']);
            }
            if (data.hasOwnProperty('paymentInfo')) {
                obj['paymentInfo'] = PaymentDetailsWsDTOModel.constructFromObject(data['paymentInfo']);
            }
            if (data.hasOwnProperty('appliedOrderPromotions')) {
                obj['appliedOrderPromotions'] = ApiClient.convertToType(data['appliedOrderPromotions'], [PromotionResultWsDTOModel]);
            }
            if (data.hasOwnProperty('appliedProductPromotions')) {
                obj['appliedProductPromotions'] = ApiClient.convertToType(data['appliedProductPromotions'], [PromotionResultWsDTOModel]);
            }
            if (data.hasOwnProperty('productDiscounts')) {
                obj['productDiscounts'] = PriceWsDTOModel.constructFromObject(data['productDiscounts']);
            }
            if (data.hasOwnProperty('orderDiscounts')) {
                obj['orderDiscounts'] = PriceWsDTOModel.constructFromObject(data['orderDiscounts']);
            }
            if (data.hasOwnProperty('totalDiscounts')) {
                obj['totalDiscounts'] = PriceWsDTOModel.constructFromObject(data['totalDiscounts']);
            }
            if (data.hasOwnProperty('site')) {
                obj['site'] = ApiClient.convertToType(data['site'], 'String');
            }
            if (data.hasOwnProperty('store')) {
                obj['store'] = ApiClient.convertToType(data['store'], 'String');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('calculated')) {
                obj['calculated'] = ApiClient.convertToType(data['calculated'], 'Boolean');
            }
            if (data.hasOwnProperty('appliedVouchers')) {
                obj['appliedVouchers'] = ApiClient.convertToType(data['appliedVouchers'], [VoucherWsDTOModel]);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = PrincipalWsDTOModel.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('pickupOrderGroups')) {
                obj['pickupOrderGroups'] = ApiClient.convertToType(data['pickupOrderGroups'], [PickupOrderEntryGroupWsDTOModel]);
            }
            if (data.hasOwnProperty('deliveryOrderGroups')) {
                obj['deliveryOrderGroups'] = ApiClient.convertToType(data['deliveryOrderGroups'], [DeliveryOrderEntryGroupWsDTOModel]);
            }
            if (data.hasOwnProperty('pickupItemsQuantity')) {
                obj['pickupItemsQuantity'] = ApiClient.convertToType(data['pickupItemsQuantity'], 'Number');
            }
            if (data.hasOwnProperty('deliveryItemsQuantity')) {
                obj['deliveryItemsQuantity'] = ApiClient.convertToType(data['deliveryItemsQuantity'], 'Number');
            }
        }
        return obj;
    }

    /**
    * 
    * @member {Number} totalUnitCount
    */
    totalUnitCount = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionResultWsDTOModel>} potentialOrderPromotions
    */
    potentialOrderPromotions = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionResultWsDTOModel>} potentialProductPromotions
    */
    potentialProductPromotions = undefined;
    /**
    * 
    * @member {String} name
    */
    name = undefined;
    /**
    * 
    * @member {String} description
    */
    description = undefined;
    /**
    * 
    * @member {String} expirationTime
    */
    expirationTime = undefined;
    /**
    * 
    * @member {String} saveTime
    */
    saveTime = undefined;
    /**
    * @member {module:models/PrincipalWsDTOModel} savedBy
    */
    savedBy = undefined;
    /**
    * 
    * @member {String} code
    */
    code = undefined;
    /**
    * 
    * @member {Boolean} net
    */
    net = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} totalPriceWithTax
    */
    totalPriceWithTax = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} totalPrice
    */
    totalPrice = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} totalTax
    */
    totalTax = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} subTotal
    */
    subTotal = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} deliveryCost
    */
    deliveryCost = undefined;
    /**
    * 
    * @member {Array.<module:models/OrderEntryWsDTOModel>} entries
    */
    entries = undefined;
    /**
    * 
    * @member {Number} totalItems
    */
    totalItems = undefined;
    /**
    * @member {module:models/DeliveryModeWsDTOModel} deliveryMode
    */
    deliveryMode = undefined;
    /**
    * @member {module:models/AddressWsDTOModel} deliveryAddress
    */
    deliveryAddress = undefined;
    /**
    * @member {module:models/PaymentDetailsWsDTOModel} paymentInfo
    */
    paymentInfo = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionResultWsDTOModel>} appliedOrderPromotions
    */
    appliedOrderPromotions = undefined;
    /**
    * 
    * @member {Array.<module:models/PromotionResultWsDTOModel>} appliedProductPromotions
    */
    appliedProductPromotions = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} productDiscounts
    */
    productDiscounts = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} orderDiscounts
    */
    orderDiscounts = undefined;
    /**
    * @member {module:models/PriceWsDTOModel} totalDiscounts
    */
    totalDiscounts = undefined;
    /**
    * 
    * @member {String} site
    */
    site = undefined;
    /**
    * 
    * @member {String} store
    */
    store = undefined;
    /**
    * 
    * @member {String} guid
    */
    guid = undefined;
    /**
    * 
    * @member {Boolean} calculated
    */
    calculated = undefined;
    /**
    * 
    * @member {Array.<module:models/VoucherWsDTOModel>} appliedVouchers
    */
    appliedVouchers = undefined;
    /**
    * @member {module:models/PrincipalWsDTOModel} user
    */
    user = undefined;
    /**
    * 
    * @member {Array.<module:models/PickupOrderEntryGroupWsDTOModel>} pickupOrderGroups
    */
    pickupOrderGroups = undefined;
    /**
    * 
    * @member {Array.<module:models/DeliveryOrderEntryGroupWsDTOModel>} deliveryOrderGroups
    */
    deliveryOrderGroups = undefined;
    /**
    * 
    * @member {Number} pickupItemsQuantity
    */
    pickupItemsQuantity = undefined;
    /**
    * 
    * @member {Number} deliveryItemsQuantity
    */
    deliveryItemsQuantity = undefined;








}


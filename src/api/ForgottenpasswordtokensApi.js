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
* Forgottenpasswordtokens service.
* @module api/ForgottenpasswordtokensApi
* @version v2
*/
export default class ForgottenpasswordtokensApi {

    /**
    * Constructs a new ForgottenpasswordtokensApi.
    * @alias module:api/ForgottenpasswordtokensApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to
    * use, default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * postForgottenPasswordToken Generates a token to restore customer&#39;s
     * forgotten password.  Security: Allowed only for client or trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId Customer&#39;s user id. Customer user id is
     * case insensitive.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing HTTP response
     */
    forgottenpasswordtokensWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
            userId: opts.userId
        }

        const authNames = ['auth']
        const contentTypes = ['application/x-www-form-urlencoded']
        const accepts = ['application/json']
        const returnType = 'string'

        return this.apiClient.callApi(
            '/forgottenpasswordtokens', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * postForgottenPasswordToken Generates a token to restore customer&#39;s
     * forgotten password.  Security: Allowed only for client or trusted client
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId Customer&#39;s user id. Customer user id is
     * case insensitive.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postForgottenPasswordToken(opts) {
        return this.forgottenpasswordtokensWithHttpInfo(opts)
            .then((response) => {
                return response.data
            })
    }

}

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
import TitleListWsDTO from '../models/TitleListWsDTO'

/**
* Titles service.
* @module api/TitlesApi
* @version v2
*/
export default class TitlesApi {

    /**
    * Constructs a new TitlesApi.
    * @alias module:api/TitlesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to
    * use, default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * getTitles Lists all localized titles.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an
     * object containing data of type {@link module:models/TitleListWsDTO} and
     * HTTP response
     */
    titlesWithHttpInfo(opts) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
        }
        const queryParams = {
            fields: opts.fields
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['auth']
        const contentTypes = ['application/json']
        const accepts = ['application/json']
        const returnType = TitleListWsDTO

        return this.apiClient.callApi(
            '/titles', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * getTitles Lists all localized getTitles.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Response configuration (list of fields, which
     * should be returned in response)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data
     * of type {@link module:models/TitleListWsDTO}
     */
    getTitles(opts) {
        return this.titlesWithHttpInfo(opts)
            .then((response) => {
                return response.data
            })
    }

}

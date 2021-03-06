/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

import expect from 'expect.js'
import Occ from '../config'

let instance
const deliveryCountries = Occ.deliveryCountries

beforeEach(() => {
    instance = new Occ.DeliverycountriesApi()
})

describe('DeliverycountriesApi', () => {
    describe('getDeliveryCountries', () => {
        it('should call getDeliveryCountries successfully', (done) => {
            instance.getDeliveryCountries()
                .then((res) => {
                    expect(res.countries).to.eql(deliveryCountries)
                    done()
                })
        })
    })
})

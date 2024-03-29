/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MerchantDetails } from './merchant-details';
import { PaymentChannelCategory } from './payment-channel-category';
import { TransactionDetails } from './transaction-details';
import { UserDetails } from './user-details';

/**
 * 
 * @export
 * @interface PaymentOptionResponse
 */
export interface PaymentOptionResponse {
    /**
     * 
     * @type {string}
     * @memberof PaymentOptionResponse
     */
    'paymentToken'?: string | null;
    /**
     * 
     * @type {MerchantDetails}
     * @memberof PaymentOptionResponse
     */
    'merchantDetails'?: MerchantDetails;
    /**
     * 
     * @type {TransactionDetails}
     * @memberof PaymentOptionResponse
     */
    'transactionDetails'?: TransactionDetails;
    /**
     * 
     * @type {Array<PaymentChannelCategory>}
     * @memberof PaymentOptionResponse
     */
    'channelCategories'?: Array<PaymentChannelCategory> | null;
    /**
     * 
     * @type {UserDetails}
     * @memberof PaymentOptionResponse
     */
    'userDetails'?: UserDetails;
    /**
     * 
     * @type {string}
     * @memberof PaymentOptionResponse
     */
    'respCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentOptionResponse
     */
    'respDesc'?: string | null;
}


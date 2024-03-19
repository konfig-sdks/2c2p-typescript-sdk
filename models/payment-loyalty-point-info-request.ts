/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BrowserDetails } from './browser-details';

/**
 * 
 * @export
 * @interface PaymentLoyaltyPointInfoRequest
 */
export interface PaymentLoyaltyPointInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'providerID'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'profileID'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'referenceID'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'cardNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'expiryMonth'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'expiryYear'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'paymentToken': string;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'locale'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'clientID'?: string;
    /**
     * 
     * @type {BrowserDetails}
     * @memberof PaymentLoyaltyPointInfoRequest
     */
    'browserDetails'?: BrowserDetails;
}


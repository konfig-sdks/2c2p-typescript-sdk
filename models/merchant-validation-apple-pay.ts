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
 * @interface MerchantValidationApplePay
 */
export interface MerchantValidationApplePay {
    /**
     * 
     * @type {string}
     * @memberof MerchantValidationApplePay
     */
    'validationUrl'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantValidationApplePay
     */
    'paymentToken': string;
    /**
     * 
     * @type {string}
     * @memberof MerchantValidationApplePay
     */
    'locale'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MerchantValidationApplePay
     */
    'clientID'?: string;
    /**
     * 
     * @type {BrowserDetails}
     * @memberof MerchantValidationApplePay
     */
    'browserDetails'?: BrowserDetails;
}


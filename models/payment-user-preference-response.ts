/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentUserPreference } from './payment-user-preference';

/**
 * 
 * @export
 * @interface PaymentUserPreferenceResponse
 */
export interface PaymentUserPreferenceResponse {
    /**
     * 
     * @type {string}
     * @memberof PaymentUserPreferenceResponse
     */
    'paymentToken'?: string | null;
    /**
     * 
     * @type {PaymentUserPreference}
     * @memberof PaymentUserPreferenceResponse
     */
    'user'?: PaymentUserPreference;
    /**
     * 
     * @type {string}
     * @memberof PaymentUserPreferenceResponse
     */
    'respCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentUserPreferenceResponse
     */
    'respDesc'?: string | null;
}


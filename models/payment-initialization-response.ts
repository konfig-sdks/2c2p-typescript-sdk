/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentInitialization } from './payment-initialization';

/**
 * 
 * @export
 * @interface PaymentInitializationResponse
 */
export interface PaymentInitializationResponse {
    /**
     * 
     * @type {PaymentInitialization}
     * @memberof PaymentInitializationResponse
     */
    'initialization'?: PaymentInitialization;
    /**
     * 
     * @type {string}
     * @memberof PaymentInitializationResponse
     */
    'respCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentInitializationResponse
     */
    'respDesc'?: string | null;
}

/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PaymentNonRedirectResponse
 */
export interface PaymentNonRedirectResponse {
    /**
     * 
     * @type {string}
     * @memberof PaymentNonRedirectResponse
     */
    'invoiceNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentNonRedirectResponse
     */
    'channelCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentNonRedirectResponse
     */
    'respCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentNonRedirectResponse
     */
    'respDesc'?: string | null;
}


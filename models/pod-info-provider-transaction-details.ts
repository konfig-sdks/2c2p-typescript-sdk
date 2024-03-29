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
 * @interface PodInfoProviderTransactionDetails
 */
export interface PodInfoProviderTransactionDetails {
    /**
     * 
     * @type {string}
     * @memberof PodInfoProviderTransactionDetails
     */
    'description'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PodInfoProviderTransactionDetails
     */
    'amount'?: number;
    /**
     * 
     * @type {string}
     * @memberof PodInfoProviderTransactionDetails
     */
    'currencyCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PodInfoProviderTransactionDetails
     */
    'invoiceNo'?: string | null;
}


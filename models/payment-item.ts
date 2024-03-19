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
 * @interface PaymentItem
 */
export interface PaymentItem {
    /**
     * 
     * @type {string}
     * @memberof PaymentItem
     */
    'code'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentItem
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PaymentItem
     */
    'quantity'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentItem
     */
    'price'?: number;
}


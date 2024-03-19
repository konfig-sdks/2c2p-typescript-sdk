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
 * @interface PaymentOptionDetailsValidationCardType
 */
export interface PaymentOptionDetailsValidationCardType {
    /**
     * 
     * @type {number}
     * @memberof PaymentOptionDetailsValidationCardType
     */
    'sequenceNo'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentOptionDetailsValidationCardType
     */
    'name'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PaymentOptionDetailsValidationCardType
     */
    'prefixes'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentOptionDetailsValidationCardType
     */
    'regex'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentOptionDetailsValidationCardType
     */
    'iconUrl'?: string | null;
}


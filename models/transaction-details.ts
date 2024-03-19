/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentItem } from './payment-item';
import { Recurring } from './recurring';

/**
 * 
 * @export
 * @interface TransactionDetails
 */
export interface TransactionDetails {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetails
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetails
     */
    'amount'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetails
     */
    'currencyCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetails
     */
    'invoiceNo'?: string | null;
    /**
     * 
     * @type {Recurring}
     * @memberof TransactionDetails
     */
    'recurring'?: Recurring;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetails
     */
    'dateTime'?: string | null;
    /**
     * 
     * @type {Array<PaymentItem>}
     * @memberof TransactionDetails
     */
    'paymentItems'?: Array<PaymentItem> | null;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionDetails
     */
    'showFxRate'?: boolean;
}


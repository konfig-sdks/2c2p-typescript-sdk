/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TransactionStatusInfo } from './transaction-status-info';
import { TransactionStatusMerchant } from './transaction-status-merchant';
import { TransactionStatusPayment } from './transaction-status-payment';

/**
 * 
 * @export
 * @interface TransactionStatusAdditionalInfo
 */
export interface TransactionStatusAdditionalInfo {
    /**
     * 
     * @type {TransactionStatusMerchant}
     * @memberof TransactionStatusAdditionalInfo
     */
    'merchantDetails'?: TransactionStatusMerchant;
    /**
     * 
     * @type {TransactionStatusInfo}
     * @memberof TransactionStatusAdditionalInfo
     */
    'transactionDetails'?: TransactionStatusInfo;
    /**
     * 
     * @type {TransactionStatusPayment}
     * @memberof TransactionStatusAdditionalInfo
     */
    'paymentResultDetails'?: TransactionStatusPayment;
}


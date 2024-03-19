/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TransactionStatusRewards } from './transaction-status-rewards';

/**
 * 
 * @export
 * @interface TransactionStatusLoyaltyInfo
 */
export interface TransactionStatusLoyaltyInfo {
    /**
     * 
     * @type {string}
     * @memberof TransactionStatusLoyaltyInfo
     */
    'paymentScheme'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TransactionStatusLoyaltyInfo
     */
    'redeemAmount'?: number;
    /**
     * 
     * @type {Array<TransactionStatusRewards>}
     * @memberof TransactionStatusLoyaltyInfo
     */
    'rewards'?: Array<TransactionStatusRewards> | null;
}


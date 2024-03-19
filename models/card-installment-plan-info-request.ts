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
 * @interface CardInstallmentPlanInfoRequest
 */
export interface CardInstallmentPlanInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof CardInstallmentPlanInfoRequest
     */
    'cardNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CardInstallmentPlanInfoRequest
     */
    'bankCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CardInstallmentPlanInfoRequest
     */
    'paymentToken': string;
    /**
     * 
     * @type {string}
     * @memberof CardInstallmentPlanInfoRequest
     */
    'locale'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CardInstallmentPlanInfoRequest
     */
    'clientID'?: string;
    /**
     * 
     * @type {BrowserDetails}
     * @memberof CardInstallmentPlanInfoRequest
     */
    'browserDetails'?: BrowserDetails;
}

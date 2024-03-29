/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MerchantConfigurationPaymentFxRate } from './merchant-configuration-payment-fx-rate';

/**
 * 
 * @export
 * @interface MerchantConfigurationPaymentFx
 */
export interface MerchantConfigurationPaymentFx {
    /**
     * 
     * @type {MerchantConfigurationPaymentFxRate}
     * @memberof MerchantConfigurationPaymentFx
     */
    'mcp'?: MerchantConfigurationPaymentFxRate;
    /**
     * 
     * @type {MerchantConfigurationPaymentFxRate}
     * @memberof MerchantConfigurationPaymentFx
     */
    'dcc'?: MerchantConfigurationPaymentFxRate;
    /**
     * 
     * @type {MerchantConfigurationPaymentFxRate}
     * @memberof MerchantConfigurationPaymentFx
     */
    'apmMcc'?: MerchantConfigurationPaymentFxRate;
}


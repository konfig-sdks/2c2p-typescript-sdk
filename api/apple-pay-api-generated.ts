/* tslint:disable */
/* eslint-disable */
/*
PGW Payment API 4.3

Rest API for PGW payment purpose - LATEST

The version of the OpenAPI document: 4.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BrowserDetails } from '../models';
// @ts-ignore
import { MerchantValidationApplePay } from '../models';
// @ts-ignore
import { MerchantValidationApplePayResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ApplePayApi - axios parameter creator
 * @export
 */
export const ApplePayApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 
         * @param {MerchantValidationApplePay} [merchantValidationApplePay] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateMerchant: async (merchantValidationApplePay?: MerchantValidationApplePay, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/applepay/merchantvalidation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: merchantValidationApplePay,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/payment/4.3/applepay/merchantvalidation',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(merchantValidationApplePay, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApplePayApi - functional programming interface
 * @export
 */
export const ApplePayApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApplePayApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {ApplePayApiValidateMerchantRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateMerchant(requestParameters: ApplePayApiValidateMerchantRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantValidationApplePayResponse>> {
            const merchantValidationApplePay: MerchantValidationApplePay = {
                validationUrl: requestParameters.validationUrl,
                paymentToken: requestParameters.paymentToken,
                locale: requestParameters.locale,
                clientID: requestParameters.clientID,
                browserDetails: requestParameters.browserDetails
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateMerchant(merchantValidationApplePay, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApplePayApi - factory interface
 * @export
 */
export const ApplePayApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApplePayApiFp(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {ApplePayApiValidateMerchantRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateMerchant(requestParameters: ApplePayApiValidateMerchantRequest, options?: AxiosRequestConfig): AxiosPromise<MerchantValidationApplePayResponse> {
            return localVarFp.validateMerchant(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for validateMerchant operation in ApplePayApi.
 * @export
 * @interface ApplePayApiValidateMerchantRequest
 */
export type ApplePayApiValidateMerchantRequest = {
    
} & MerchantValidationApplePay

/**
 * ApplePayApiGenerated - object-oriented interface
 * @export
 * @class ApplePayApiGenerated
 * @extends {BaseAPI}
 */
export class ApplePayApiGenerated extends BaseAPI {
    /**
     * 
     * @summary 
     * @param {ApplePayApiValidateMerchantRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplePayApiGenerated
     */
    public validateMerchant(requestParameters: ApplePayApiValidateMerchantRequest, options?: AxiosRequestConfig) {
        return ApplePayApiFp(this.configuration).validateMerchant(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

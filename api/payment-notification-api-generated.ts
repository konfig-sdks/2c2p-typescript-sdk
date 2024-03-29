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
import { PaymentNotificationRequest } from '../models';
// @ts-ignore
import { PaymentResponseBase } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PaymentNotificationApi - axios parameter creator
 * @export
 */
export const PaymentNotificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 
         * @param {PaymentNotificationRequest} [paymentNotificationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processNotification: async (paymentNotificationRequest?: PaymentNotificationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/paymentnotification`;
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
                requestBody: paymentNotificationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/payment/4.3/paymentnotification',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(paymentNotificationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentNotificationApi - functional programming interface
 * @export
 */
export const PaymentNotificationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentNotificationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {PaymentNotificationApiProcessNotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processNotification(requestParameters: PaymentNotificationApiProcessNotificationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentResponseBase>> {
            const paymentNotificationRequest: PaymentNotificationRequest = {
                plateform: requestParameters.plateform,
                recipientID: requestParameters.recipientID,
                recipientName: requestParameters.recipientName,
                paymentToken: requestParameters.paymentToken,
                locale: requestParameters.locale,
                clientID: requestParameters.clientID,
                browserDetails: requestParameters.browserDetails
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.processNotification(paymentNotificationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PaymentNotificationApi - factory interface
 * @export
 */
export const PaymentNotificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentNotificationApiFp(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {PaymentNotificationApiProcessNotificationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processNotification(requestParameters: PaymentNotificationApiProcessNotificationRequest, options?: AxiosRequestConfig): AxiosPromise<PaymentResponseBase> {
            return localVarFp.processNotification(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for processNotification operation in PaymentNotificationApi.
 * @export
 * @interface PaymentNotificationApiProcessNotificationRequest
 */
export type PaymentNotificationApiProcessNotificationRequest = {
    
} & PaymentNotificationRequest

/**
 * PaymentNotificationApiGenerated - object-oriented interface
 * @export
 * @class PaymentNotificationApiGenerated
 * @extends {BaseAPI}
 */
export class PaymentNotificationApiGenerated extends BaseAPI {
    /**
     * 
     * @summary 
     * @param {PaymentNotificationApiProcessNotificationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentNotificationApiGenerated
     */
    public processNotification(requestParameters: PaymentNotificationApiProcessNotificationRequest, options?: AxiosRequestConfig) {
        return PaymentNotificationApiFp(this.configuration).processNotification(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

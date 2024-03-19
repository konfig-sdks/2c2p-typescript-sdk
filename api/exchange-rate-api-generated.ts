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
import { PayloadRequest } from '../models';
// @ts-ignore
import { PaymentApmMccExchangeRateResponse } from '../models';
// @ts-ignore
import { PaymentBaseRequest } from '../models';
// @ts-ignore
import { PaymentExchangeRateConverterRequest } from '../models';
// @ts-ignore
import { PaymentExchangeRateConverterResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ExchangeRateApi - axios parameter creator
 * @export
 */
export const ExchangeRateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary APM MCC Exchange Rate
         * @param {PaymentBaseRequest} [paymentBaseRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apmMcc: async (paymentBaseRequest?: PaymentBaseRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/exchangerate/apmmccexchangerate`;
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
                requestBody: paymentBaseRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/payment/4.3/exchangerate/apmmccexchangerate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(paymentBaseRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 
         * @param {PaymentExchangeRateConverterRequest} [paymentExchangeRateConverterRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRate: async (paymentExchangeRateConverterRequest?: PaymentExchangeRateConverterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/exchangerate`;
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
                requestBody: paymentExchangeRateConverterRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/payment/4.3/exchangerate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(paymentExchangeRateConverterRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary JWT Request Endpoint
         * @param {PayloadRequest} [payloadRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestEndpoint: async (payloadRequest?: PayloadRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/exchangerate/secure`;
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
                requestBody: payloadRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/payment/4.3/exchangerate/secure',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(payloadRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExchangeRateApi - functional programming interface
 * @export
 */
export const ExchangeRateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExchangeRateApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary APM MCC Exchange Rate
         * @param {ExchangeRateApiApmMccRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apmMcc(requestParameters: ExchangeRateApiApmMccRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentApmMccExchangeRateResponse>> {
            const paymentBaseRequest: PaymentBaseRequest = {
                paymentToken: requestParameters.paymentToken,
                locale: requestParameters.locale,
                clientID: requestParameters.clientID,
                browserDetails: requestParameters.browserDetails
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.apmMcc(paymentBaseRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 
         * @param {ExchangeRateApiGetRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRate(requestParameters: ExchangeRateApiGetRateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaymentExchangeRateConverterResponse>> {
            const paymentExchangeRateConverterRequest: PaymentExchangeRateConverterRequest = {
                bin: requestParameters.bin,
                paymentToken: requestParameters.paymentToken,
                locale: requestParameters.locale,
                clientID: requestParameters.clientID,
                browserDetails: requestParameters.browserDetails
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRate(paymentExchangeRateConverterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary JWT Request Endpoint
         * @param {ExchangeRateApiRequestEndpointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestEndpoint(requestParameters: ExchangeRateApiRequestEndpointRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayloadRequest>> {
            const payloadRequest: PayloadRequest = {
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestEndpoint(payloadRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExchangeRateApi - factory interface
 * @export
 */
export const ExchangeRateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExchangeRateApiFp(configuration)
    return {
        /**
         * 
         * @summary APM MCC Exchange Rate
         * @param {ExchangeRateApiApmMccRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apmMcc(requestParameters: ExchangeRateApiApmMccRequest, options?: AxiosRequestConfig): AxiosPromise<PaymentApmMccExchangeRateResponse> {
            return localVarFp.apmMcc(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 
         * @param {ExchangeRateApiGetRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRate(requestParameters: ExchangeRateApiGetRateRequest, options?: AxiosRequestConfig): AxiosPromise<PaymentExchangeRateConverterResponse> {
            return localVarFp.getRate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary JWT Request Endpoint
         * @param {ExchangeRateApiRequestEndpointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestEndpoint(requestParameters: ExchangeRateApiRequestEndpointRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PayloadRequest> {
            return localVarFp.requestEndpoint(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for apmMcc operation in ExchangeRateApi.
 * @export
 * @interface ExchangeRateApiApmMccRequest
 */
export type ExchangeRateApiApmMccRequest = {
    
} & PaymentBaseRequest

/**
 * Request parameters for getRate operation in ExchangeRateApi.
 * @export
 * @interface ExchangeRateApiGetRateRequest
 */
export type ExchangeRateApiGetRateRequest = {
    
} & PaymentExchangeRateConverterRequest

/**
 * Request parameters for requestEndpoint operation in ExchangeRateApi.
 * @export
 * @interface ExchangeRateApiRequestEndpointRequest
 */
export type ExchangeRateApiRequestEndpointRequest = {
    
} & PayloadRequest

/**
 * ExchangeRateApiGenerated - object-oriented interface
 * @export
 * @class ExchangeRateApiGenerated
 * @extends {BaseAPI}
 */
export class ExchangeRateApiGenerated extends BaseAPI {
    /**
     * 
     * @summary APM MCC Exchange Rate
     * @param {ExchangeRateApiApmMccRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeRateApiGenerated
     */
    public apmMcc(requestParameters: ExchangeRateApiApmMccRequest, options?: AxiosRequestConfig) {
        return ExchangeRateApiFp(this.configuration).apmMcc(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 
     * @param {ExchangeRateApiGetRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeRateApiGenerated
     */
    public getRate(requestParameters: ExchangeRateApiGetRateRequest, options?: AxiosRequestConfig) {
        return ExchangeRateApiFp(this.configuration).getRate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary JWT Request Endpoint
     * @param {ExchangeRateApiRequestEndpointRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangeRateApiGenerated
     */
    public requestEndpoint(requestParameters: ExchangeRateApiRequestEndpointRequest = {}, options?: AxiosRequestConfig) {
        return ExchangeRateApiFp(this.configuration).requestEndpoint(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
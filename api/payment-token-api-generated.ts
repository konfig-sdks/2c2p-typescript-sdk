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
import { PayloadRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PaymentTokenApi - axios parameter creator
 * @export
 */
export const PaymentTokenApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 
         * @param {PayloadRequest} [payloadRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateToken: async (payloadRequest?: PayloadRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/paymenttoken`;
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
                pathTemplate: '/payment/4.3/paymenttoken',
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
 * PaymentTokenApi - functional programming interface
 * @export
 */
export const PaymentTokenApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentTokenApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {PaymentTokenApiGenerateTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateToken(requestParameters: PaymentTokenApiGenerateTokenRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayloadRequest>> {
            const payloadRequest: PayloadRequest = {
                payload: requestParameters.payload
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateToken(payloadRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PaymentTokenApi - factory interface
 * @export
 */
export const PaymentTokenApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentTokenApiFp(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {PaymentTokenApiGenerateTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateToken(requestParameters: PaymentTokenApiGenerateTokenRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PayloadRequest> {
            return localVarFp.generateToken(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateToken operation in PaymentTokenApi.
 * @export
 * @interface PaymentTokenApiGenerateTokenRequest
 */
export type PaymentTokenApiGenerateTokenRequest = {
    
} & PayloadRequest

/**
 * PaymentTokenApiGenerated - object-oriented interface
 * @export
 * @class PaymentTokenApiGenerated
 * @extends {BaseAPI}
 */
export class PaymentTokenApiGenerated extends BaseAPI {
    /**
     * 
     * @summary 
     * @param {PaymentTokenApiGenerateTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentTokenApiGenerated
     */
    public generateToken(requestParameters: PaymentTokenApiGenerateTokenRequest = {}, options?: AxiosRequestConfig) {
        return PaymentTokenApiFp(this.configuration).generateToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

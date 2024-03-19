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
import { RedirectFrontEndPostPaymentRedirectRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RedirectFrontEndApi - axios parameter creator
 * @export
 */
export const RedirectFrontEndApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 
         * @param {string} [payResponse] 
         * @param {string} [isLeaveApp] 
         * @param {RedirectFrontEndPostPaymentRedirectRequest} [redirectFrontEndPostPaymentRedirectRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPaymentRedirect: async (payResponse?: string, isLeaveApp?: string, redirectFrontEndPostPaymentRedirectRequest?: RedirectFrontEndPostPaymentRedirectRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/payment/4.3/redirectfrontend`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Handle Buffer data
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // File instances in browsers and Node.js have the
                        // "name" property "Duck typing" files to handle browser
                        // File class or Node.js File class
                        // Web: https://developer.mozilla.org/en-US/docs/Web/API/File
                        // Node.js: https://nodejs.org/api/buffer.html#new-bufferfilesources-filename-options
                        if (isBrowser()) {
                            // FormData in browser can accept File/Blob directly
                            localVarFormParams.append(name, data, data.name);
                        } else {
                            // FormData in Node.js can only accept raw Buffer so convert before passing
                            const bytes = await data.arrayBuffer()
                            const buffer = Buffer.from(bytes)
                            localVarFormParams.append(name, buffer, data.name);
                        }
                    }
                } else {
                    if (isPrimitiveType) {
                        /**
                         * FormData can only accept string or Blob so we need to convert
                         * non-string primitives to string. We also need to convert
                         */
                        if (typeof data === "object") {
                          localVarFormParams.append(name, JSON.stringify(data));
                        } else {
                          localVarFormParams.append(name, data);
                        }
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)], { type: "application/json" }))
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());


            if (payResponse !== undefined) {
                await addFormParam('payResponse', payResponse, false, true)
            }
    
            if (isLeaveApp !== undefined) {
                await addFormParam('isLeaveApp', isLeaveApp, false, true)
            }
    
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: redirectFrontEndPostPaymentRedirectRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/payment/4.3/redirectfrontend',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RedirectFrontEndApi - functional programming interface
 * @export
 */
export const RedirectFrontEndApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RedirectFrontEndApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {RedirectFrontEndApiPostPaymentRedirectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPaymentRedirect(requestParameters: RedirectFrontEndApiPostPaymentRedirectRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const redirectFrontEndPostPaymentRedirectRequest: RedirectFrontEndPostPaymentRedirectRequest = {
                payResponse: requestParameters.payResponse,
                isLeaveApp: requestParameters.isLeaveApp
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.postPaymentRedirect(requestParameters.payResponse, requestParameters.isLeaveApp, redirectFrontEndPostPaymentRedirectRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RedirectFrontEndApi - factory interface
 * @export
 */
export const RedirectFrontEndApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RedirectFrontEndApiFp(configuration)
    return {
        /**
         * 
         * @summary 
         * @param {RedirectFrontEndApiPostPaymentRedirectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPaymentRedirect(requestParameters: RedirectFrontEndApiPostPaymentRedirectRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.postPaymentRedirect(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for postPaymentRedirect operation in RedirectFrontEndApi.
 * @export
 * @interface RedirectFrontEndApiPostPaymentRedirectRequest
 */
export type RedirectFrontEndApiPostPaymentRedirectRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof RedirectFrontEndApiPostPaymentRedirect
    */
    readonly payResponse?: string
    
    /**
    * 
    * @type {string}
    * @memberof RedirectFrontEndApiPostPaymentRedirect
    */
    readonly isLeaveApp?: string
    
} & RedirectFrontEndPostPaymentRedirectRequest

/**
 * RedirectFrontEndApiGenerated - object-oriented interface
 * @export
 * @class RedirectFrontEndApiGenerated
 * @extends {BaseAPI}
 */
export class RedirectFrontEndApiGenerated extends BaseAPI {
    /**
     * 
     * @summary 
     * @param {RedirectFrontEndApiPostPaymentRedirectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedirectFrontEndApiGenerated
     */
    public postPaymentRedirect(requestParameters: RedirectFrontEndApiPostPaymentRedirectRequest = {}, options?: AxiosRequestConfig) {
        return RedirectFrontEndApiFp(this.configuration).postPaymentRedirect(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
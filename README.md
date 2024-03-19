<div align="center">

[![Visit 2c2p](./header.png)](https://2c2p.com&#x2F;)

# [2c2p](https://2c2p.com&#x2F;)<a id="2c2p"></a>

Rest API for PGW payment purpose - LATEST

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`twoctwop.applePay.validateMerchant`](#twoctwopapplepayvalidatemerchant)
  * [`twoctwop.cache.cleanCache`](#twoctwopcachecleancache)
  * [`twoctwop.cancelTransaction.post`](#twoctwopcanceltransactionpost)
  * [`twoctwop.cardInstallmentPlanInfo.create`](#twoctwopcardinstallmentplaninfocreate)
  * [`twoctwop.cardTokenInfo.getCardTokenInfo`](#twoctwopcardtokeninfogetcardtokeninfo)
  * [`twoctwop.exchangeRate.apmMcc`](#twoctwopexchangerateapmmcc)
  * [`twoctwop.exchangeRate.getRate`](#twoctwopexchangerategetrate)
  * [`twoctwop.exchangeRate.requestEndpoint`](#twoctwopexchangeraterequestendpoint)
  * [`twoctwop.initialization.requestCreation`](#twoctwopinitializationrequestcreation)
  * [`twoctwop.loyaltyPointInfo.postLoyaltyPointInfo`](#twoctwoployaltypointinfopostloyaltypointinfo)
  * [`twoctwop.payment.createPayment`](#twoctwoppaymentcreatepayment)
  * [`twoctwop.paymentInquiry.postPaymentDetails`](#twoctwoppaymentinquirypostpaymentdetails)
  * [`twoctwop.paymentInstruction.submitInstruction`](#twoctwoppaymentinstructionsubmitinstruction)
  * [`twoctwop.paymentNotification.processNotification`](#twoctwoppaymentnotificationprocessnotification)
  * [`twoctwop.paymentOption.createPaymentOption`](#twoctwoppaymentoptioncreatepaymentoption)
  * [`twoctwop.paymentOptionDetails.postOptionDetails`](#twoctwoppaymentoptiondetailspostoptiondetails)
  * [`twoctwop.paymentSimulate.executePaymentSimulation`](#twoctwoppaymentsimulateexecutepaymentsimulation)
  * [`twoctwop.paymentToken.generateToken`](#twoctwoppaymenttokengeneratetoken)
  * [`twoctwop.redirectBackEnd.postPaymentRedirect`](#twoctwopredirectbackendpostpaymentredirect)
  * [`twoctwop.redirectFrontEnd.postPaymentRedirect`](#twoctwopredirectfrontendpostpaymentredirect)
  * [`twoctwop.transactionStatus.updateTransactionStatus`](#twoctwoptransactionstatusupdatetransactionstatus)
  * [`twoctwop.userPreference.saveUserPreference`](#twoctwopuserpreferencesaveuserpreference)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=2C2P&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { TwoCTwoP } from "2c2p-typescript-sdk";

const twoctwop = new TwoCTwoP({
  // Defining the base path is optional and defaults to https://sandbox-pgw.2c2p.com
  // basePath: "https://sandbox-pgw.2c2p.com",
});

const validateMerchantResponse = await twoctwop.applePay.validateMerchant({
  paymentToken: "paymentToken_example",
});

console.log(validateMerchantResponse);
```

## Reference<a id="reference"></a>


### `twoctwop.applePay.validateMerchant`<a id="twoctwopapplepayvalidatemerchant"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateMerchantResponse = await twoctwop.applePay.validateMerchant({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### validationUrl: `string`<a id="validationurl-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MerchantValidationApplePayResponse](./models/merchant-validation-apple-pay-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/applepay/merchantvalidation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.cache.cleanCache`<a id="twoctwopcachecleancache"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cleanCacheResponse = await twoctwop.cache.cleanCache();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/cache/cleancache` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.cancelTransaction.post`<a id="twoctwopcanceltransactionpost"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await twoctwop.cancelTransaction.post({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentNonRedirectResponse](./models/payment-non-redirect-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/canceltransaction` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.cardInstallmentPlanInfo.create`<a id="twoctwopcardinstallmentplaninfocreate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await twoctwop.cardInstallmentPlanInfo.create({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### cardNo: `string`<a id="cardno-string"></a>

##### bankCode: `string`<a id="bankcode-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentOptionDetailsResponse](./models/payment-option-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/cardinstallmentplaninfo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.cardTokenInfo.getCardTokenInfo`<a id="twoctwopcardtokeninfogetcardtokeninfo"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCardTokenInfoResponse = await twoctwop.cardTokenInfo.getCardTokenInfo({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentCardTokenResponseV43](./models/payment-card-token-response-v43.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/cardtokeninfo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.exchangeRate.apmMcc`<a id="twoctwopexchangerateapmmcc"></a>

APM MCC Exchange Rate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const apmMccResponse = await twoctwop.exchangeRate.apmMcc({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentApmMccExchangeRateResponse](./models/payment-apm-mcc-exchange-rate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/exchangerate/apmmccexchangerate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.exchangeRate.getRate`<a id="twoctwopexchangerategetrate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRateResponse = await twoctwop.exchangeRate.getRate({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### bin: `string`<a id="bin-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentExchangeRateConverterResponse](./models/payment-exchange-rate-converter-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/exchangerate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.exchangeRate.requestEndpoint`<a id="twoctwopexchangeraterequestendpoint"></a>

JWT Request Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestEndpointResponse = await twoctwop.exchangeRate.requestEndpoint({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayloadRequest](./models/payload-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/exchangerate/secure` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.initialization.requestCreation`<a id="twoctwopinitializationrequestcreation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestCreationResponse = await twoctwop.initialization.requestCreation();
```

#### 🔄 Return<a id="🔄-return"></a>

[PaymentInitializationResponse](./models/payment-initialization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/initialization` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.loyaltyPointInfo.postLoyaltyPointInfo`<a id="twoctwoployaltypointinfopostloyaltypointinfo"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postLoyaltyPointInfoResponse =
  await twoctwop.loyaltyPointInfo.postLoyaltyPointInfo({
    paymentToken: "paymentToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### providerID: `string`<a id="providerid-string"></a>

##### profileID: `string`<a id="profileid-string"></a>

##### referenceID: `string`<a id="referenceid-string"></a>

##### cardNo: `string`<a id="cardno-string"></a>

##### expiryMonth: `string`<a id="expirymonth-string"></a>

##### expiryYear: `string`<a id="expiryyear-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentLoyaltyPointInfoResponse](./models/payment-loyalty-point-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/loyaltypointinfo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.payment.createPayment`<a id="twoctwoppaymentcreatepayment"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPaymentResponse = await twoctwop.payment.createPayment({
  paymentToken: "paymentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### payment: [`PaymentParamsRequestV43`](./models/payment-params-request-v43.ts)<a id="payment-paymentparamsrequestv43modelspayment-params-request-v43ts"></a>

##### responseReturnUrl: `string`<a id="responsereturnurl-string"></a>

##### clientIP: `string`<a id="clientip-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentResponse](./models/payment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/payment` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentInquiry.postPaymentDetails`<a id="twoctwoppaymentinquirypostpaymentdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postPaymentDetailsResponse =
  await twoctwop.paymentInquiry.postPaymentDetails({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayloadRequest](./models/payload-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymentinquiry` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentInstruction.submitInstruction`<a id="twoctwoppaymentinstructionsubmitinstruction"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitInstructionResponse =
  await twoctwop.paymentInstruction.submitInstruction({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayloadRequest](./models/payload-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymentinstruction` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentNotification.processNotification`<a id="twoctwoppaymentnotificationprocessnotification"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processNotificationResponse =
  await twoctwop.paymentNotification.processNotification({
    paymentToken: "paymentToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### plateform: `string`<a id="plateform-string"></a>

##### recipientID: `string`<a id="recipientid-string"></a>

##### recipientName: `string`<a id="recipientname-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentResponseBase](./models/payment-response-base.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymentnotification` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentOption.createPaymentOption`<a id="twoctwoppaymentoptioncreatepaymentoption"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPaymentOptionResponse =
  await twoctwop.paymentOption.createPaymentOption({
    paymentToken: "paymentToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentOptionResponse](./models/payment-option-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymentoption` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentOptionDetails.postOptionDetails`<a id="twoctwoppaymentoptiondetailspostoptiondetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postOptionDetailsResponse =
  await twoctwop.paymentOptionDetails.postOptionDetails({
    categoryCode: "categoryCode_example",
    groupCode: "groupCode_example",
    paymentToken: "paymentToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryCode: `string`<a id="categorycode-string"></a>

##### groupCode: `string`<a id="groupcode-string"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentOptionDetailsResponse](./models/payment-option-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymentoptiondetails` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentSimulate.executePaymentSimulation`<a id="twoctwoppaymentsimulateexecutepaymentsimulation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executePaymentSimulationResponse =
  await twoctwop.paymentSimulate.executePaymentSimulation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayloadRequest](./models/payload-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymentsimulate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.paymentToken.generateToken`<a id="twoctwoppaymenttokengeneratetoken"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateTokenResponse = await twoctwop.paymentToken.generateToken({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayloadRequest](./models/payload-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/paymenttoken` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.redirectBackEnd.postPaymentRedirect`<a id="twoctwopredirectbackendpostpaymentredirect"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postPaymentRedirectResponse =
  await twoctwop.redirectBackEnd.postPaymentRedirect({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentResponse: `string`<a id="paymentresponse-string"></a>

##### isLeaveApp: `string`<a id="isleaveapp-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/redirectbackend` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.redirectFrontEnd.postPaymentRedirect`<a id="twoctwopredirectfrontendpostpaymentredirect"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postPaymentRedirectResponse =
  await twoctwop.redirectFrontEnd.postPaymentRedirect({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payResponse: `string`<a id="payresponse-string"></a>

##### isLeaveApp: `string`<a id="isleaveapp-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/redirectfrontend` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.transactionStatus.updateTransactionStatus`<a id="twoctwoptransactionstatusupdatetransactionstatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTransactionStatusResponse =
  await twoctwop.transactionStatus.updateTransactionStatus({
    paymentToken: "paymentToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### additionalInfo: `boolean`<a id="additionalinfo-boolean"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TransactionStatusResponse](./models/transaction-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/transactionstatus` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `twoctwop.userPreference.saveUserPreference`<a id="twoctwopuserpreferencesaveuserpreference"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const saveUserPreferenceResponse =
  await twoctwop.userPreference.saveUserPreference({
    paymentToken: "paymentToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentToken: `string`<a id="paymenttoken-string"></a>

##### locale: `string`<a id="locale-string"></a>

##### clientID: `string`<a id="clientid-string"></a>

##### browserDetails: [`BrowserDetails`](./models/browser-details.ts)<a id="browserdetails-browserdetailsmodelsbrowser-detailsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentUserPreferenceResponse](./models/payment-user-preference-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payment/4.3/userpreference` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

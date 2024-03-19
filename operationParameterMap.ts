type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/payment/4.3/applepay/merchantvalidation-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'validationUrl'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/cache/cleancache-POST': {
        parameters: [
        ]
    },
    '/payment/4.3/canceltransaction-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/cardinstallmentplaninfo-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'cardNo'
            },
            {
                name: 'bankCode'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/cardtokeninfo-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/exchangerate/apmmccexchangerate-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/exchangerate-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'bin'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/exchangerate/secure-POST': {
        parameters: [
            {
                name: 'payload'
            },
        ]
    },
    '/payment/4.3/initialization-POST': {
        parameters: [
        ]
    },
    '/payment/4.3/loyaltypointinfo-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'providerID'
            },
            {
                name: 'profileID'
            },
            {
                name: 'referenceID'
            },
            {
                name: 'cardNo'
            },
            {
                name: 'expiryMonth'
            },
            {
                name: 'expiryYear'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/payment-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'payment'
            },
            {
                name: 'responseReturnUrl'
            },
            {
                name: 'clientIP'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/paymentinquiry-POST': {
        parameters: [
            {
                name: 'payload'
            },
        ]
    },
    '/payment/4.3/paymentinstruction-POST': {
        parameters: [
            {
                name: 'payload'
            },
        ]
    },
    '/payment/4.3/paymentnotification-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'plateform'
            },
            {
                name: 'recipientID'
            },
            {
                name: 'recipientName'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/paymentoption-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/paymentoptiondetails-POST': {
        parameters: [
            {
                name: 'categoryCode'
            },
            {
                name: 'groupCode'
            },
            {
                name: 'paymentToken'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/paymentsimulate-POST': {
        parameters: [
            {
                name: 'payload'
            },
        ]
    },
    '/payment/4.3/paymenttoken-POST': {
        parameters: [
            {
                name: 'payload'
            },
        ]
    },
    '/payment/4.3/redirectbackend-POST': {
        parameters: [
            {
                name: 'paymentResponse'
            },
            {
                name: 'isLeaveApp'
            },
        ]
    },
    '/payment/4.3/redirectfrontend-POST': {
        parameters: [
            {
                name: 'payResponse'
            },
            {
                name: 'isLeaveApp'
            },
        ]
    },
    '/payment/4.3/transactionstatus-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'additionalInfo'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
    '/payment/4.3/userpreference-POST': {
        parameters: [
            {
                name: 'paymentToken'
            },
            {
                name: 'locale'
            },
            {
                name: 'clientID'
            },
            {
                name: 'browserDetails'
            },
        ]
    },
}
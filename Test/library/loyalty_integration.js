// START loyalty
var DEBUG = true;
APIKey = "bec49b9e-815b-48ed-bb47-c26b68e59d5d";

function getContentAggregator(){

}

function sendRequest(shellCommand) {
    DAMP.log(">>> curl otto start");
    var res = DAMP.shell("sh", shellCommand);
    DAMP.log(">>> curl result:" + res);
    DAMP.log(">>> curl end");
    apiLog['original_res'] = res;
    return res.replace('RETCODE:0', '');
}

function generateShellCommand(obj) {
    var shellCommand = "curl --location --request " + obj.getMethod() + " '" + obj.geturl() + "'";
    var headers = obj.getHeader();
    var body = obj.getBody();
    if (headers) {
        for (var key in headers) {
            if (Array.isArray(headers[key])) {
                headers[key].forEach(function (value) {
                    shellCommand += " --header '" + key + ": " + value + "'";
                });
            } else {
                 shellCommand += " --header '" + key + ": " + headers[key] + "'";
            }
        }
    }
    if (body) {
        shellCommand += " --data '" + JSON.stringify(body) + "'";
    }

    return shellCommand;
}

function setHeaderRequest(data) {
    return header = {
        "DeviceId": data['header']["DeviceId"],
        "InstitutionId": data['header']["InstitutionId"],
        "Geolocation": data['header']["Geolocation"],
        "ChannelId": data['header']["ChannelId"],
        "AppsId": data['header']["AppsId"],
        "Timestamp": data['header']["Timestamp"],
        "APIKey": APIKey,
        "Signature": data['header']['Signature'],
        "accessToken": data['header']['accessToken']
    };
}

function setResponeLogin(data){
    return {
        "responseCode" : data.responseCode,
        "responseMessage" : data.responseMessage,
        "customerId" : data.customerId,
        "channelCode" : data.channelCode,
        "issuerCode" : data.issuerCode,
        "additionalData" : data.addtionalData
    }
}

function setResponseRegister(data){
    return header = {
        "responseCode" : data.responseCode,
        "responseMessage" : data.responseMessage,
        "customerId" : data.customerId,
        "accountType" : data.accountType,
        "issuerCode" : data.issuerCode,
        "additionalData" : data.addtionalData
    }
}

function setResponseEarning(data){

}

function setResponseEarningStatus(data){

}

function setResponseBalance(data){

}

function setResponseSplitBill(data){

}

function setResponseSplitBillReversal(data){

}

function setResponseWebintegrasi(data){

}

function setResponseWidgetIntegrasi(data){

}

function setResponsePages(data){

}






function setRespCode(code) {
    if (code.equals('00') || code.equals('200')) {
        return '00';
    }
    if (code.equals('09')) {
        return '68';
    }
    if (code.equals('01')) {
        return '12';
    }
    if (code.equals('06')) {
        return '30';
    }
    if (code.equals('61')) {
        return '05';
    }
    if (code.equals('81')) {
        return '63';
    }
    if (code.equals('82')) {
        return '02';
    }
    if (code.equals('159')) {
        return '56';
    }
    if (code.equals('68')) {
        return '65';
    }
    if (code.equals('53')) {
        return '61';
    }
    if (code.equals('63')) {
        return '94';
    }
    if (code.equals('80')) {
        return '91';
    }
}
// END loyalty

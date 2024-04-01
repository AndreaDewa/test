// START loyalty
var DEBUG = true;

//send req to otto api
function sendRequestOttopoint(shellCommand) {
    DAMP.log(">>> curl otto start");
    var res = DAMP.shell("sh", shellCommand);
    DAMP.log(">>> curl result:" + res);
    DAMP.log(">>> curl end");
    apiLog['out_req'] = body, header;
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
        "Signature": data['header']['Signature']
    };
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
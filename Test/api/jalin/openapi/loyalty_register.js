function runProcess(e, r, apiLog) {
    DAMP.setAppID('1000');
    var upstreamStart = new Date();
    /* START CODE */

    r = ottopointRegister(r);
    
    /* END CODE */
    var upstreamEnd = new Date();
    apiLog.upstream_elapsed = upstreamEnd.getTime() - upstreamStart.getTime();
    DAMP.WSResponse(r);
}

function ottopointRegister(r){
    try {
        var reqBody = JSON.parse(r['raw']);
        var respo = setResponseRegister(reqBody);
        var strAD = req.additionaldata;
        var parts = strAD.split('|');
        parts.shift();
        var jsonObj = {};
        var keyMappings = {
            "PN": "phone",
            "FN": "firstname",
            "LN": "lastname",
            "EL": "email",
            "GR": "gender",
            "BD": "birthdate"
        };
        parts.forEach(function (part) {
            var keyValue = part.split('=');
            var key = keyValue[0];
            var value = keyValue[1];
            if (keyMappings[key]) {
                jsonObj[keyMappings[key]] = value;
            }
        });

        var jsonStr = JSON.stringify(jsonObj);
        var body = jsonStr;
        var header = setHeaderRequest(r);
        var shellCommand;

        // query get loyalty agg code
        // if loyalty agg code == 9010 => ottopoint

        try {
            var obj = new constObjOttopoint("/loyalty/v2/register/register-user", body, header, "POST");
            shellCommand = generateShellCommand(obj);
            console.log(shellCommand);
        } catch (ex) {
            r.response = JSON.stringify({ responseError: ex.toString() });
            r.responseCode = "401";
        }
        var req = sendRequest(shellCommand)
        if (req.includes('RETCODE:')) {
            if (req.includes('RETCODE:28')) {
                r.responseCode = "68";
            } else {
                r.responseCode = "91";
            }
        } else if (req.includes('502 Server Error')) {
            r.responseCode = "91";
            r.debug = "originalResponse: " + req;
        } else {
            req = JSON.parse(req);
            req.meta.code = setRespCode(req.meta.code);
            if (req.meta.code == '00') {
                respo.responseCode = req.meta.code;
                respo.responseMessage = req.meta.message;
                respo.customerId = req.data.customerId;
                respo.additionalData = "RES|EL="+req.data.email+"|IP="+req.data.point;
            }
            if (req.meta.code == '61') {
                respo.responseCode = req.meta.code;
                respo.responseMessage = req.meta.message;
                respo.additionalData = "";
            }
            r.response = JSON.stringify(respo);
            apiLog['out_req'] = body, header;
        }
    } catch (ex) {
        r.response = JSON.stringify({ responseError: ex.toString() });
        r.responseCode = "401";
    }
}

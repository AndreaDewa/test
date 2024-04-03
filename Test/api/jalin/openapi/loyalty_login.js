function runProcess(e, r, apiLog) {
    DAMP.setAppID('1000');
    var upstreamStart = new Date();
    /* START CODE */

    //cari penbeda layanan loyalty 
    //jika otto maka =>
    r = ottopointLogin(r);


    /* END CODE */
    var upstreamEnd = new Date();
    apiLog.upstream_elapsed = upstreamEnd.getTime() - upstreamStart.getTime();
    DAMP.WSResponse(r);
}

function ottopointLogin(r){
    try {
        var reqBody = JSON.parse(r['raw']);
        var respo = setResponeLogin(reqBody)
        var strAD = reqBody.additionalData;
        var str = strAD.split('|').find(part => part.startsWith("PN="));
        var phoneNumber = str.substring(3);
        var jsonObj = {
            "phoneNumber": phoneNumber,
            "expireTime": "48h"   //???
        };
        var jsonStr = JSON.stringify(jsonObj);
        var body = jsonStr
        var header = setHeaderRequest(r);
        var shellCommand;

        try {
            var obj = new constObjOttopoint("/loyalty/v2/login/user", body, header, "POST");
            shellCommand = generateShellCommand(obj);
        } catch (ex) {
            r.response = JSON.stringify({ responseError: ex.toString() })
            r.responseCode = "401"
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
                if (req.data.accountStatus = 'linked') {
                    var token = req.data.token;
                    respo.responseCode = req.meta.code;
                    respo.responseMessage = "SUCCESSFUL";
                    respo.additionalData = "RES|AS=" + req.data.accountStatus + "|UT=" + token;
                }
                if (req.accountStatus = 'eligible') {
                    respo.responseCode = req.meta.code;
                    respo.responseMessage = "SUCCESSFUL";
                    respo.additionalData = "RES|AS=" + req.data.accountStatus;
                }
                else {
                    respo.responseCode = req.meta.code;
                    respo.responseMessage = "SUCCESSFUL";
                    respo.additionalData = "RES|AS=" + req.data.accountStatus;
                }
            }
            r.response = JSON.stringify(respo);
            apiLog['out_req'] = body, header;
        }
    } catch (ex) {
        r.response = JSON.stringify({ responseError: ex.toString() })
        r.responseCode = "401"
    }
}

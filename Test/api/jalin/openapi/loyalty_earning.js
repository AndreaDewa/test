
function runProcess(e, r, apiLog) {
    DAMP.setAppID('1000');
    var upstreamStart = new Date();
    /* START CODE */
    try {
        var body = JSON.parse(r['raw']);
        var header = setHeaderRequest(r);
        var shellCommand;
        try {
            var obj = new ObjOttopoint("/transaction/v2/earningpoint", body, header, "POST");
            shellCommand = generateShellCommand(obj);
            console.log(shellCommand);
        } catch (ex) {
            r.response = JSON.stringify({ responseError: ex.toString() })
            r.responseCode = "401"
        }
        var req = sendRequestOttopoint(shellCommand)
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
            // var status = req.accountStatus;
            // var token = req.token;
            r.response = JSON.stringify(req);
        }
    } catch (ex) {
        r.response = JSON.stringify({ responseError: ex.toString() })
        r.responseCode = "401"
    }
    /* END CODE */
    var upstreamEnd = new Date();
    apiLog.upstream_elapsed = upstreamEnd.getTime() - upstreamStart.getTime();
    DAMP.WSResponse(r);
}
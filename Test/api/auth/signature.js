function runProcess(e, r, apiLog){
    DAMP.setAppID('1000');
    var upstreamStart = new Date();
    /* START CODE */

    try {
        if (r['headers']["x-client-key"] && r['headers']["x-private-key"] && r['headers']["x-timestamp"]) {
            if (validateXtimestamp(r['headers']["x-timestamp"])) {
                var q1 = synchro.query("\
                            select *\
                            from snap_clients\
                            where \"client_id\" = '" + r['headers']["x-client-key"] + "'\
                            and client_private_key = '" + r['headers']["x-private-key"] + "' \
                            ");
                DAMP.log(">>> snap_clients:" + JSON.stringify(q1));
                if (q1 && q1[0]) {
                    var signature = Snap.Signature.createSignSha256WithRSA(
                        q1[0]['client_private_key'],
                        r['headers']["x-client-key"] + "|" + r['headers']["x-timestamp"]
                    );
                    r.response = JSON.stringify({"signature": signature})
                } else {
                    r.response = JSON.stringify({"message": "unauthorized"});
                    r.responseCode = '401';
                }
            } else {
                r.response = JSON.stringify({"message": "invalid timestamp"});
                r.responseCode = '400';
            }
        } else {
            r.response = JSON.stringify({"message": "invalid request"});
            r.responseCode = '400';
        }
    } catch (e) {
        r.response = JSON.stringify({"message": e + ""});
        r.responseCose = '500';
    }

    /* END CODE */
    var upstreamEnd = new Date();
    apiLog.upstream_elapsed = upstreamEnd.getTime() - upstreamStart.getTime();
    DAMP.WSResponse(r);
}
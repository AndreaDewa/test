function runProcess(e, r, apiLog){
    DAMP.setAppID('1000');
    var upstreamStart = new Date();
    /* START CODE */

    var is_correct;
    try {
        if (r['headers']["x-client-key"] && r['headers']["x-timestamp"] && r["headers"]["x-signature"]) {
            var q1 = synchro.query("\
    					        select *\
    					        from snap_clients\
    					        where \"client_id\" = '"+ r["headers"]["x-client-key"] +"'\
    						");
            if (q1 && q1[0]) {
                is_correct = Snap.Signature.verifySignSha256WithRSA(
                    q1[0]["client_public_key"],
                    r["headers"]["x-signature"],
                    r["headers"]["x-client-key"] + "|" +r["headers"]["x-timestamp"]
                );
                if (!is_correct) {
                    r.responseCode = '401';
                    r.response = JSON.stringify({"message": "invalid signature"});
                } else {
                    var body = JSON.parse(r['raw'])
                    var token = OAuth2.token(
                        new Snap.OAuth2Server.Request({
                            body: {
                                grant_type: body.granttype
                            },
                            headers: {
                                "authorization": "Basic " + Snap.Hashes.Base64.encode(q1[0]['client_id'] + ":" + q1[0]['client_secret']),
                                "content-type": "application/x-www-form-urlencoded",
                                "content-length": ""
                            },
                            method: "POST",
                            query: {}
                        }),
                        new Snap.OAuth2Server.Response({
                            body: null,
                            headers: {},
                            status: null
                        })
                    );
                    r.response = JSON.stringify(token)
                }
            } else {
                r.response = JSON.stringify({"message": "unauthorized", "error_code": "47"});
                r.responseCode = '401';
            }
        } else {
            r.response = JSON.stringify({"message": "invalid request", "error_code": "51"});
            r.responseCode = '400';
        }
    } catch (ex) {
        r.response = JSON.stringify({"message": "" + e});
        r.responseCose = '500';
    }

    /* END CODE */
    var upstreamEnd = new Date();
    apiLog.upstream_elapsed = upstreamEnd.getTime() - upstreamStart.getTime();
    DAMP.WSResponse(r);
}
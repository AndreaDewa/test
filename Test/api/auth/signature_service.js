function runProcess(e, r, apiLog){
    DAMP.setAppID('1000');
    var upstreamStart = new Date();
    /* START CODE */
    var APIKey = "bec49b9e-815b-48ed-bb47-c26b68e59d5d";

    try {
        // if (validateRequest(r) == 0) {
            if (r['headers']["DeviceId"] && 
                r['headers']["InstitutionId"] && 
                r['headers']["Geolocation"] && 
                r['headers']["ChannelId"] && 
                r['headers']["AppsId"] && 
                r['headers']["AccessToken"] && 
                r['headers']["Timestamp"]){
                if (validateXtimestamp(r['headers']["Timestamp"])) {
                    OAuth2.authenticate(
                        new Snap.OAuth2Server.Request({
                            body: {},
                            headers: {
                                "authorization": "Bearer " + r["headers"]["AccessToken"] || ""
                            },
                            method: "GET",
                            query: {}
                        }),
                        new Snap.OAuth2Server.Response({
                            body: null,
                            headers: {},
                            status: null
                        })
                    );
                    var body = (r["raw"] || "{}");
                    var data = {
                                "DeviceId" : r['headers']["DeviceId"],
                                "InstitutionId" : r['headers']["InstitutionId"],
                                "Geolocation" : r['headers']["Geolocation"],
                                "ChannelId" : r['headers']["ChannelId"],
                                "AppsId" : r['headers']["AppsId"],
                                "Timestamp" : r['headers']["Timestamp"],
                                "APIKey" : APIKey
                                };
                    var signature = generateSignature(body, data);
                    if (signature) {
                        r.response = JSON.stringify({"signature": signature});
                    } else {
                        r.response = JSON.stringify({"message": "unathorized"});
                        r.responseCode = '401';
                    }
                } else {
                    r.response = JSON.stringify({"message": "bad request"});
                    r.responseCode = '400';
                }
            } else {
                r.response = JSON.stringify({"message": "bad request"});
                r.responseCode = '400';
            }
        // } else {
        //     r.response = JSON.stringify({"message": "bad request"});
        //     r.responseCode = '400';
        // }
    } catch (ex) {
        r.response = JSON.stringify({"message": "" + ex});
        r.responseCode = '500';
    }

    /* END CODE */
    var upstreamEnd = new Date();
    apiLog.upstream_elapsed = upstreamEnd.getTime() - upstreamStart.getTime();
    DAMP.WSResponse(r);
}


function generateSignature(body, data) {
    // sort and format to json
    var bodyJSN = JSON.stringify(sortObject(body));

    // regex
    var regx = /[^a-zA-Z0-9{}:.,]/g;

    // lowercase
    var bodyJSONTrimed = bodyJSN.replace(regx, "").toLowerCase();

    // combine information
    var combine = bodyJSONTrimed + "&" + data.deviceID + "&" + 
    data.institutionID + "&" + data.geolocation + "&" + 
    data.channelID + "&" + data.appsID + "&" + data.timeStamp +
    "&" + data.APIKey;

    // encryption
    var hash = CryptoJS.HmacSHA512(combine, data.APIKey);
    return hash.toString(CryptoJS.enc.Hex);
}

function sortObject(unordered, sortArrays = false) {
    if (!unordered || typeof unordered !== 'object') {
        return unordered;
    }

    if (Array.isArray(unordered)) {
        const newArr = unordered.map((item) => sortObject(item, sortArrays));
        if (sortArrays) {
        newArr.sort();
        }
        return newArr;
    }

    const ordered = {};
    Object.keys(unordered)
        .sort()
        .forEach((key) => {
        ordered[key] = sortObject(unordered[key], sortArrays);
        });
    return ordered;
}
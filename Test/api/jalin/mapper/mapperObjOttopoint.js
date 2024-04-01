class ObjOttopoint {
    constructor(path, body, header, method) {
        this.url = "https://apijalin-stg.ottopoint.id" + path;
        this.body = body;
        this.header = header;
        this.method = method;

        this.geturl = function () {
            return this.url;
        };

        this.getBody = function () {
            return this.body;
        };

        this.getHeader = function () {
            return this.header;
        };

        this.getMethod = function () {
            return this.method;
        };
    }
}

// Common use
// function generateShellCommand(obj) {
//     var shellCommand = "curl --location --request " + obj.getMethod() + " '" + obj.geturl() + "'";
//     var headers = obj.getHeader();
//     var body = obj.getBody();

//     if (headers) {
//         for (var key in headers) {
//             if (Array.isArray(headers[key])) {
//                 headers[key].forEach(function (value) {
//                     shellCommand += " --header '" + key + ": " + value + "'";
//                 });
//             } else {
//                 shellCommand += " --header '" + key + ": " + headers[key] + "'";
//             }
//         }
//     }

//     if (body) {
//         shellCommand += " --data '" + JSON.stringify(body) + "'";
//     }

//     return shellCommand;
// }

// Example
var path = "/loyalty/v2/login/user";
var method = "POST";
var headers = {
    DeviceId: "869552045462447",
    InstitutionId: "PSM0001",
    Geolocation: "-6.236942520911433, 106.825000507283605",
    ChannelId: "H2H",
    AppsId: "A3A71D176C9CB9EF84F13A5A6A315",
    Timestamp: "98769786",
    Signature: "hvkuyfuhvgf776rygii9",
    AccessToken: "y79hjgdckydyf75365",
    "Content-Type": "application/json",
    // "Custom-Headers": ["Header1", "Header2", "Header3"], // Example of an array value
};
var body = {
    phone: "085664827732",
    expireTime: "48h",
};

var obj = new ObjOttopoint(path, body, headers, method);
var shellCommand = generateShellCommand(obj);
console.log(shellCommand);


// Sample Output

// curl --location --request POST 'https://apijalin-stg.ottopoint.id/loyalty/v2/login/user'
// --header 'DeviceId: 869552045462447'
// --header 'InstitutionId: PSM0001'
// --header 'Geolocation: -6.236942520911433, 106.825000507283605'
// --header 'ChannelId: H2H'
// --header 'AppsId: A3A71D176C9CB9EF84F13A5A6A315'
// --header 'Timestamp: 98769786'
// --header 'Signature: hvkuyfuhvgf776rygii9'
// --header 'AccessToken: y79hjgdckydyf75365'
// --header 'Content-Type: application/json'
// --data '{"phone":"085664827732","expireTime":"48h"}'

var ___wt;
var global = this;
var self = this;
var window = this;
var process = {env: {}};
var console = {};
var module = {};
var navigator = {};
console.debug = print;
console.warn = print;
console.log = print;
console.error = print;
console.trace = print;
var ctr = 0;
var hitMinute = [];
var hitHour = [];
var hitDay = [];
var globalApiKey = 'null';
var requestCounter = 0;

DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/ES6Shim.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/other.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/OAuth2Server.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/Hashes.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/SnapSignature.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/ValidateTypes.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/Validator.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/SqlString.js"));
DAMP.jsEval(DAMP.readFile("/opt/amp/libraries/CryptoJS.js"));

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

function getWebProcessor() {
  if (DAMP)
    DAMP.web_init('___wt');
  try {
    var wp={
      WP:___wt,
      cache:0,
      cfast:0,
      cslow:0,
      cerr:0,
      cavg:0,
      ctot:0,
      stop:function() {
        this.WP.stop();
      },
      get:function (url) {
        return this.WP.get(url);
      },
      getHeaders:function() {
        return JSON.parse(this.WP.getheaders());
      },
      getx:function (url) {
        if (this.cache>0) {
          var r=DAMP.cacheLoad(url, this.cache);
          if (r) {
            return r;
          }
        }
        var r;
        var ec=0;
        while (true) {
          var t=new Date().getTime();
          try {
            ec++;
            r=this.WP.get(url);
            t=new Date().getTime()-t;
            if (url.indexOf('PRELOAD')<0) {
              this.cavg+=t;
              this.ctot++;
              if (t<200) this.cfast++; else this.cslow++;
            }
            break;
          } catch(e) {
            t=new Date().getTime()-t;
            if (url.indexOf('PRELOAD')<0) {
              this.cavg+=t;
              this.ctot++;
              this.cerr++;
            }
            DAMP.log(e+' ['+url+']');
            var em=e+'';
            if (ec>2) {
              if (em.indexOf('timed out')>=0 ) throw e;
              if (em.indexOf('NoRouteToHostException')>=0 ) throw e;
              if (em.indexOf('Connection refused')>=0 ) throw e;
            }
            if (ec<5) {
              DAMP.sleep(ec*1000);
              continue;
            }
            if (em.indexOf('timed out')>=0) throw e;
            if (em.indexOf('HTTP response code:')>=0) throw e;
            if (ec>10) throw e;
            if (DAMP.submit) {
              DAMP.sleep(5000);
              continue;
            } else throw e;
          }
        }
        if (r.indexOf('192.168.184.4')>=0) r=this.WP.get(url);
        if (this.cache>0) {
          DAMP.cacheSave(url,r);
        }
        return r;
      },
      stdSSL:function(p) {
        this.WP.stdSSL(p);
      },
      setPostParams:function(p) {
        if (!(p instanceof String)) p=JSON.stringify(p);
        this.WP.setPostParams(p);
      },
      getCookies:function() {
        return this.WP.getCookies();
      },
      setHeaders:function(p) {
        if (!(p instanceof String)) p=JSON.stringify(p);
        this.WP.setHeaders(p);
      },
      getDoc:function (url) {
        var r=this.get(url);
        return this.getDoc0(r);
      },
      getDoc0:function (r) {
        var results = {};
        var ctag=results;
        var parentl=[];
        HTMLParser(r, {
          start: function( tag, attrs, unary ) {
            var parent=ctag;
            parentl.push(ctag);
            ctag={};
            if (parent.tags); else parent.tags={};
            if (parent.tags[tag]); else parent.tags[tag]=[];
            var t=parent.tags[tag];
            t[t.length]=ctag;
            var at2={};
            for (var c in attrs) {
              at2[attrs[c].name]=attrs[c].value;
            }
            ctag.tag=tag;
            ctag.attrs=at2;
            if (unary)
              ctag=parentl.pop();
          },
          end: function( tag ) {
            ctag=parentl.pop();
          },
          chars: function( text ) {
            if (ctag.chars==null) ctag.chars='';
            ctag.chars+=text;
          },
          comment: function( text ) {
            ctag.comment=text;
          }
        });
        results.text=r;
        return results;
      }
    };
    wp.WP.stdSSL(false);
    wp.WP.setConfig('preloadThreadCount','20');
    wp.WP.setConfig('preloadMaxResult','1500');
    wp.WP.setConfig('preloadLowThreshold','1000');
    wp.WP.setConfig('connectTimeout','15000');
    wp.WP.setConfig('readTimeOut','65000');
    return wp;
  } finally {
    ___wt={};
  }
}

var sync = {
  query: function(dbn, q, async, sdbn, sq, fdbn, fq, ass) {
    if (q == "") return;
    var r = DAMP.qry(dbn, q, async, sdbn, sq, fdbn, fq, ass);
    if (err != "null") throw new Error(err);
    return result;
  }
}

var synchro = {
  query: function(s, t) {
    var tt = t || "[TGT]";
    var r = sync.query(tt, s);
    return r;
  },
  save: function(tbn, r4, tgt) {
    var tgts = tgt || "[TGT]";
    if (r4.length > 500) {
      while (r4.length > 500) {
        var r5 = r4.splice(0, 500);
        synchro.save(tbn, r5, tgts);
      }
      synchro.save(tbn, r4, tgts);
      return;
    }
    ctr += r4.length;

    DAMP.upsert(tgts, '0',
        JSON.stringify(
            [
              {
                tbl_name: tbn,
                rows: r4
              }
            ]
        )
    );
    if (DAMP.submit) {
      DAMP.submit(
          JSON.stringify(
              {
                columnNames: [
                  '__record_report',

                ],
                columnTypes: [
                  'VARCHAR'
                ],
                rows: [
                  [
                    r4.length,
                  ]
                ]
              }
          )
      );
    }
  }
}

var apiLog;
var __consumerIp = {};
var __ips = {};
var __configCount = 0;
var __username;
var __access;
var __vw_authority1 = {};
var __vw_authority2 = {};
var __vw_authority3 = {};
DAMP.setAppID('1000');
function updateConfig() {
  var ips = {};
  // check configure is updated
  var qConf = synchro.query("select updated_count from config_update where updated_count > " + __configCount + " limit 1");
  if (qConf.length == 1) {
    // renew consumer ip
    var qIp = synchro.query("select * from ( \
      select consumer_id, ip, 'c:' || consumer_id as username, 'consumer ip' as src from api_consumer_ip aci \
      union select b.consumer_id, a.ip, b.username, 'username ip' as src from api_consumer_login_ip a left join api_consumer_login b on b.id  = a.login_id \
      union select acl.consumer_id, aci.ip, acl.username, 'consumer lookup ip' as src from api_consumer_login acl left join api_consumer_ip aci on aci.consumer_id = acl.consumer_id \
      ) ip order by ip.username");
    for (var i = 0; i < qIp.length; i++) {
      ips[qIp[i]['ip']] = qIp[i];
    }
    __ips = ips;
    // renew authority
    var qAut = synchro.query("select * from vw_authority where enabled = 1");
    for (var j = 0; j < qAut.length; j++) {
      var uid = qAut[j]['uid'];
      var u = qAut[j]['username'];
      var p = qAut[j]['password'];
      var d = qAut[j]['dest_table_name'];
      var o = {
        "ratelimit_level": qAut[j]['ratelimit_level'],
        "ratelimit_mode": qAut[j]['ratelimit_mode'],
        "ratelimit": qAut[j]['ratelimit'],
        "cid": qAut[j]['cid'],
        "username": qAut[j]['username']
      }
      __vw_authority1[d +">"+ u +">"+ p] = o;
      __vw_authority2[d +">"+ u] = o;
      __vw_authority3[d +">"+ uid] = o;
    }
  }
}
function checkUserFromIp(x_client_ip) {
  var segmentOF_x_client_ip = x_client_ip.split(".");
  var x_client_ip1 = segmentOF_x_client_ip[0] + ".*.*.*";
  var x_client_ip2 = segmentOF_x_client_ip[0] + "." + segmentOF_x_client_ip[1] + ".*.*";
  var x_client_ip3 = segmentOF_x_client_ip[0] + "." + segmentOF_x_client_ip[1] + "." + segmentOF_x_client_ip[2] + ".*";
  var u = __ips[x_client_ip] || __ips[x_client_ip1] || __ips[x_client_ip2] || __ips[x_client_ip3] || null;
  return u;
}
function checkAuthorize2(e, r) {
  var x_client_ip = r['headers']['x-consumer-ipx'] ? r['headers']['x-consumer-ipx'] : r['headers']['x-real-ip'];
  updateConfig();
  // check endpoint is public
  if (disableIPfilterEndpoints.indexOf(r['headers']['x-endpoint']) > -1 && allowUnauthAccessEndpoints.indexOf(r['headers']['x-endpoint']) > -1) {
    DAMP.log(">>> ip filter disabled & allow unauth");
    return 1;
  } else if (disableIPfilterEndpoints.indexOf(r['headers']['x-endpoint']) > -1) {
    DAMP.log(">>> ip filter disabled, check auth");
    return checkAuthorize(e, r, true);
  } else {
    // check ip is registered
    var uu = checkUserFromIp(x_client_ip);
    if (uu) {
      __username = uu["username"];
      if (allowUnauthAccessEndpoints.indexOf(r['headers']['x-endpoint']) > -1) {
        apiLog.user_name = __username;
        return 1;
      } else {
        return checkAuthorize(e, r);
      }
    } else {
      return 2; // ip not allowed
    }
  }
}
function checkAuthorize(e, r, disableIPfilter) {
  __access = null;
  var ret = 0;
  if (r['headers'] && r['headers']['x-endpoint']) {
    var dtbn = r['headers']['x-endpoint'];
    dtbn = dtbn.replaceAll("sandbox-", "");
    if (r['params']['auth_basic_username'] && r['params']['auth_basic_password']) { // basic auth
      var username = r['params']['auth_basic_username'].split('>').join('');
      var password = r['params']['auth_basic_password'].split('>').join('');
      var kk = dtbn + '>' + username + '>' + password;
      __access = __vw_authority1[kk];
      if (__access) {
        return checkRateLimiter(disableIPfilter);
      } else {
        return 9;
      }
    } else if (r['params']['auth_bearer_token']) { // auth bearer
      // decode token
      try {
        var decodedToken = JsonWebToken.decode(r['params']['auth_bearer_token']);
        if (decodedToken.payload.exp < moment().unix()) {
          return 3;
        }
        var username = decodedToken.payload.username.split('>').join('');
        apiLog.user_name = username;
        var kk = dtbn + '>' + username;
        __access = __vw_authority2[kk];
        if (__access) {
          return checkRateLimiter(disableIPfilter);
        } else {
          return 9;
        }
      } catch (eToken) {
        DAMP.log('>>invalid token')
      }
    } else if (r['headers']['uid']) {
      var kk = dtbn + '>' + r['headers']['uid'];
      __access = __vw_authority3[dtbn + '>' + r['headers']['uid']];
      if (__access) {
        apiLog.user_name = __access['username'];
        return checkRateLimiter(disableIPfilter);
      } else {
        return 9;
      }
    }
  }
  return ret;
}
function checkCID(cid) {
  if (__access['enable_cid'] === 't') {
    if (__access['cid'] === cid) {
      return checkRateLimiter();
    } else {
      return 9;
    }
  } else {
    return checkRateLimiter();
  }
}
var rateLimiterKey = null;
function checkRateLimiter(disableIPfilter) {
  DAMP.log(">>> __username:" + __username);
  DAMP.log(">>> __access['username']:" + __access['username']);
  if (__username == __access['username'] || __username.replace("c:", "") == __access['cid'] || disableIPfilter) {
    var ret = 1; // OK
    rateLimiterKey = getRateLimiterKey(__access);
    if (rateLimiterKey) {
      var rateCounter = synchro.query("select * from rate_limiter where key_ = '" + rateLimiterKey + "'");
      var rate = {
        'key_': rateLimiterKey,
        'val_': 1,
        'user_': __access['username']
      }
      if (rateCounter[0]) {
        rate.val_ = parseInt(rateCounter[0]['val_']) + 1;
      }
      if (rate.val_ > parseInt(__access['ratelimit'])) {
        ret = 4; // limit exceeded
      } else {
        try {
          synchro.save('rate_limiter:key_', [rate]);
        } catch (ee) {
          DAMP.log('>>> failed to save rate limit:' + ee)
        }
      }
    }
  } else {
    ret = 2;
  }
  return ret;
}
function getRateLimiterKey() {
  var a = null;
  if (__access['ratelimit_level'] === 'consumer') {
    a = __access['cid'];
  } else if (__access['ratelimit_level'] === 'user') {
    a = __access['username'];
  }
  if (a) {
    switch (__access['ratelimit_mode']) {
      case 'minute':
        return a + getCurrentMinute();
      case 'hour':
        return a + getCurrentHour();
      case 'day':
        return a + getCurrentDay();
      case 'month':
        return a + getCurrentMonth();
      default:
        return null;
    }
  }
  return null;
}
function checkRateLimiterOnJob() {
  var username = __access['username'];
  var ratelimit = parseInt(__access['ratelimit']);
  if (ratelimit > 0) {
    var ret = 0;
    var timeRange = null;
    switch (__access['ratelimit_mode']) {
      case 'minute':
        timeRange = getCurrentMinute();
        if (typeof hitMinute[username] === 'undefined') {
          hitMinute[username] = [];
          hitMinute[username][timeRange] = 1;
          ret = 1;
        } else {
          if (typeof hitMinute[username][timeRange] === 'undefined') {
            hitMinute[username][timeRange] = 1;
            ret = 1;
          } else {
            if (hitMinute[username][timeRange] >= ratelimit) {
              ret = 4;
            } else {
              ret = 1;
              hitMinute[username][timeRange] += 1;
            }
          }
        }
        break;
      case 'hour':
        timeRange = getCurrentHour();
        if (typeof hitHour[username] === 'undefined') {
          hitHour[username] = [];
          hitHour[username][timeRange] = 1;
          ret = 1;
        } else {
          if (typeof hitHour[username][timeRange] === 'undefined') {
            hitHour[username][timeRange] = 1;
            ret = 1;
          } else {
            if (hitHour[username][timeRange] >= ratelimit) {
              ret = 4;
            } else {
              ret = 1;
              hitHour[username][timeRange] += 1;
            }
          }
        }
        break;
      case 'day':
        timeRange = getCurrentDay();
        if (typeof hitDay[username] === 'undefined') {
          hitDay[username] = [];
          hitDay[username][timeRange] = 1;
          ret = 1;
        } else {
          if (typeof hitDay[username][timeRange] === 'undefined') {
            hitDay[username][timeRange] = 1;
            ret = 1;
          } else {
            if (hitDay[username][timeRange] >= ratelimit) {
              ret = 4;
            } else {
              ret = 1;
              hitDay[username][timeRange] += 1;
            }
          }
        }
        break;
      default:
        break;
    }
    return ret;
  } else {
    return 1;
  }
}

function init_ws(e, r) {
  r['headers']['x-endpoint'] = r['headers']['x-endpoint'].toLowerCase();
  // start ganti type data array map list java ke object javascript
  var __headers = {};
  var __params = {};
  for (var _h in r.headers) {
    __headers[_h] = r.headers[_h];
  }
  for (var _p in r.params) {
    __params[_p] = r.params[_p];
  }
  r.headers = __headers;
  r.params = __params;
  // end ganti type data array map list java ke object javascript

  if (e.use == "provide") {
    var tsStart = new Date();
    var reqId = MD5(instanceName + tString(tsStart) + r['request_id'] + getRandomInt(512));
    var params = r['params'];
    var x_client_ip = r['headers']['x-consumer-ipx'] ? r['headers']['x-consumer-ipx'] : r['headers']['x-real-ip'];
    x_client_ip = x_client_ip ? x_client_ip : r['headers']['remote_addr']
    apiLog = {
      end_point: r['headers']['x-endpoint'],
      method: r['headers']['method'],
      http_status: 200,
      ts_start: tString(tsStart),
      req_id: reqId,
      user_agent: r['headers']['user-agent'],
      client_ip: x_client_ip,
      remote_host: r['headers']['remote_host'],
      user_name: r['params']['auth_basic_username'],
      req_size: r['headers']['content-length'],
      params: dump(params),
      send_to_upstream: 0,
      instance_name: instanceName
    };
    if (apiLog.params.length > 2020) {
      apiLog.params = apiLog.params.substring(0, 2000);
    }
    if (r['headers'] && r['headers']['x-endpoint']) {
      // r['headers']['x-endpoint'] = r['headers']['x-endpoint'].split('/').join('-')
      /*
      * 1 authenticated & authorized
      * 2 ip not alowed
      * 3 token expired
      * 4 rate limit exceed
      * 5 unauthorized
      * else authenticated
      */
      var checkAuthorizeResult = checkAuthorize2(e, r);
      DAMP.log(">>> checkAuthorizeResult:" + checkAuthorizeResult);
      if (checkAuthorizeResult === 1) {
        runProcess(e, r, apiLog);
      } else if (checkAuthorizeResult === 2) {
        r.responseCode = '401';
        r.response = JSON.stringify({ message: x_client_ip + " NOT ALLOWED" });
        DAMP.WSResponse(r);
      } else if (checkAuthorizeResult === 3) {
        r.responseCode = '401';
        r.response = JSON.stringify({ message: "TOKEN EXPIRED" });
        DAMP.WSResponse(r);
      } else if (checkAuthorizeResult === 4) {
        r.responseCode = '403';
        r.response = JSON.stringify({ message: "RATE LIMIT EXCEEDED" });
        DAMP.WSResponse(r);
      } else {
        r.responseCode = '401';
        r.response = JSON.stringify({ message: "Unauthorized" });
        DAMP.WSResponse(r);
      }

      if (apiLog) {
        if (r.responseCode) {
          apiLog.http_status = r.responseCode;
        }
        if (!apiLog.http_status) {
          apiLog.http_status = 200
        }
        var tsEnd = new Date();
        apiLog.duration = tsEnd.getTime() - tsStart.getTime();
        apiLog.ts_end = tString(tsEnd);
        try {
          apiLog.res_size = JSON.stringify(r['response']).length;
        } catch (e) {
          apiLog.res_size = 0;
        }
        var request1 = {
          "headers": JSON.stringify(arrayToObject(r['headers'])),
          "params": JSON.stringify(arrayToObject(r['params'])),
          "raw": r['raw']
        }
        var reqRes = {
          id: reqId,
          req: JSON.stringify(request1),
          res: r['response'],
          original_res: apiLog['original_res'],
          out_req: JSON.stringify(apiLog['out_req'])
        }
        delete apiLog['original_res'];
        delete apiLog['out_req'];
        try {
          DAMP.log(">>> " + JSON.stringify(apiLog));
          synchro.save('api_log', [apiLog]);
          synchro.save('api_log_req_res', [reqRes]);
        } catch (e) {
          DAMP.log('ERROR saving log:' + e);
        }
      }
    } else {
      r.response = JSON.stringify({ "message": "invalid route" });
      r.responseCode = '404';
      DAMP.WSResponse(r);
    }
  }
}

function PublishServiceWS(e) {
  DAMP.WSStart(e.name);
  try {
    for (;;) {
      var r = DAMP.WSFetchRequest(e.name);
      r.params["auth_bearer_token"] = "";
      r.params["auth_basic_username"] = "";
      r.params["auth_basic_password"] = "";
      if(typeof r.headers["authorization"] != "undefined") {
        var authorization = r.headers["authorization"];
        if(authorization && authorization.indexOf("Bearer") != -1) {
          var token = authorization.match(/Bearer (.*)/);
          if(token) {
            r.params["auth_bearer_token"] = token[1];
          }
        }
        if(authorization && authorization.indexOf("Basic") != -1) {
          var token = authorization.match(/Basic (.*)/);
          if(token) {
            var token_b64 = token[1];
            var basic = Base64.decode(token_b64).split(":");
            if(basic) {
              r.params["auth_basic_username"] = basic[0];
              r.params["auth_basic_password"] = basic[1];
            }
          }
        }
      }
      init_ws(e, r);
    }
  } finally {
    DAMP.WSStop(e.name);
  }
}

/*
*  V2 START
*/

function runProcess(e, r, apiLog) {
  try {
    DAMP.log(r['headers']['x-endpoint'])
    return runFunction(r['headers']['x-endpoint'], [e, r, apiLog]);
  } catch (e) {
    if (e == "invalid route") {
      r.response = JSON.stringify({ "message": "invalid route" });
      r.responseCode = '404';
    } else {
      r.response = JSON.stringify({ "message": "" + e });
      r.responseCode = '500';
    }
    DAMP.WSResponse(r);
  }
}

function runFunction(name, arguments) {
  var camelCased = name.toLowerCase().replace(/\/([a-z])/g, function (g) { return g[1].toUpperCase(); });
  camelCased = camelCased.replace(/\-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  camelCased = "endpointFunc" + camelCased;
  DAMP.log("RUN FUNCTION: " + camelCased)
  var fn = window[camelCased];
  if (typeof fn !== 'function')
    throw "invalid route";

  return fn.apply(window, arguments);
}

/*
*  V2 END
*/

// START SNAP
var Snap = {
  Helper: {
    generateClientId: function() {
      return Snap.Hashes.MD5.hex(Snap.Helper.Uuid())
    },
    generateSecretKey: function(client_id) {
      return Snap.Signature.createSignHmacSha512(client_id, "snap");
    },
    Uuid: function() {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
    },
    pgEscapeString: function(val) {
      var CHARS_ESCAPE_MAP = {
        '\0': '\\0',
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\r': '\\r',
        '\'': '\'\'',
        '\\': '\\\\',
        '"': '\\"',
        '\x1a': '\\Z',
      };
      var CHARS_GLOBAL_REGEXP = /[\0\b\t\n\r\x1a"'\\]/g; // eslint-disable-line no-control-regex
      CHARS_GLOBAL_REGEXP.lastIndex = 0;
      var chunkIndex = CHARS_GLOBAL_REGEXP.lastIndex;
      var escapedVal = '';
      var match;
      while ((match = CHARS_GLOBAL_REGEXP.exec(val))) {
        escapedVal += val.slice(chunkIndex, match.index) + CHARS_ESCAPE_MAP[match[0]];
        chunkIndex = CHARS_GLOBAL_REGEXP.lastIndex;
      }
      if (chunkIndex === 0) {
        return "'"+val+"'";
      }

      if (chunkIndex < val.length) {
        return "'"+escapedVal + val.slice(chunkIndex)+"'";
      }
      return "'"+escapedVal+"'";
    }
  },
  Signature: SnapSignature.init(),
  OAuth2Server: OAuth2Server.init(),
  Hashes: Hashes.init(),
  Moment: moment,
  Db: synchro,
  ValidateTypes: ValidateTypes.init(),
  Validator: Validator.init(),
  SqlString: SqlString.init(),
}

var OAuth2 = new Snap.OAuth2Server({
  model: {
    getAccessToken: function(token) {
      var token = Snap.Db.query("\
      select\
      *\
      from snap_tokens\
      where token_accesstoken = '" + token + "'\
      ");
      if(token.length <= 0) {
        return false;
      }
      token = token[0];
      var accesstoken_expires_at = Snap.Moment(token.token_accesstoken_expires_at, "YYYY-MM-DD HH:mm:ss").toDate();
      return {
        accessToken: token.token_accesstoken,
        accessTokenExpiresAt: accesstoken_expires_at,
        scope: undefined,
        client: {
          id: token.client_id
        },
        user: {
          username: undefined
        }
      };
    },
    getClient: function(client_id, client_secret) {
      var client = Snap.Db.query("\
      select *\
      from snap_clients\
      where client_id = '" + client_id + "'\
      and client_secret='" + client_secret + "' \
      ");
      if (client.length <= 0) {
        return false;
      }
      client = client[0];
      client.client_grants = client.client_grants.split(",");
      return {
        clientId: client.client_id,
        clientSecret: client.client_secret,
        grants: client.client_grants,
        redirectUris: []
      };
    },
    saveToken: function(token, client, user) {
      var a = Snap.Moment();
      var b = Snap.Moment(token.accessTokenExpiresAt)
      var expires_in = b.diff(a, 'seconds');

      Snap.Db.save("snap_tokens", [{
        'client_id': client.clientId,
        'token_accesstoken': token.accessToken,
        'token_accesstoken_created_at': a.toDate(),
        'token_accesstoken_expires_at': token.accessTokenExpiresAt,
        'token_token_type': "bearer",
        'token_expires_in': expires_in
      }]);
      return {
        accessToken: token.accessToken,
        accessTokenExpiresAt: token.accessTokenExpiresAt,
        scope: undefined,
        client: {
          id: client.clientId
        },
        user: {
          username: undefined
        }
      };
    },
    getUserFromClient: function(client) {
      var client = Snap.Db.query("\
      select *\
      from snap_clients\
      where client_id = '" + client.clientId + "'\
      and client_secret='" + client.clientSecret + "' \
      ");
      return client.length;
    }
  },
  accessTokenLifetime: 3600
});
// END SNAP
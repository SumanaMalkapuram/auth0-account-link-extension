module.exports=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=55)}([function(n,t,e){var r=e(39)("wks"),o=e(44),i=e(1).Symbol,u="function"==typeof i;(n.exports=function(n){return r[n]||(r[n]=u&&i[n]||(u?i:o)("Symbol."+n))}).store=r},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t){var e=n.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},function(n,t,e){var r=e(14);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(102);t.default=(0,r.config)()},function(n,t,e){var r=e(1),o=e(2),i=e(12),u=e(6),c=function(n,t,e){var s,a,f,l=n&c.F,d=n&c.G,p=n&c.S,h=n&c.P,v=n&c.B,_=n&c.W,y=d?o:o[t]||(o[t]={}),g=y.prototype,m=d?r:p?r[t]:(r[t]||{}).prototype;d&&(e=t);for(s in e)(a=!l&&m&&void 0!==m[s])&&s in y||(f=a?m[s]:e[s],y[s]=d&&"function"!=typeof m[s]?e[s]:v&&a?i(f,r):_&&m[s]==f?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t.prototype=n.prototype,t}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[s]=f,n&c.R&&g&&!g[s]&&u(g,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,n.exports=c},function(n,t,e){var r=e(15),o=e(38);n.exports=e(8)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t){n.exports={}},function(n,t,e){n.exports=!e(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(n,t,e){"use strict";var r=e(107);r.emitErrs=!0;var o=new r.Logger({transports:[new r.transports.Console({timestamp:!0,level:"debug",handleExceptions:!0,json:!1,colorize:!0})],exitOnError:!1});n.exports=o},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(10);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(3),o=e(72),i=e(92),u=Object.defineProperty;t.f=e(8)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return u(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var r=e(32),o=e(18);n.exports=function(n){return r(o(n))}},function(n,t,e){var r=e(11),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(n,t){try{return n[t]}catch(n){}};n.exports=function(n){var t,e,c;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=u(t=Object(n),o))?e:i?r(t):"Object"==(c=r(t))&&"function"==typeof t.callee?"Arguments":c}},function(n,t){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t,e){var r=e(14),o=e(1).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t,e){"use strict";function r(n){var t,e;this.promise=new n(function(n,r){if(void 0!==t||void 0!==e)throw TypeError("Bad Promise constructor");t=n,e=r}),this.resolve=o(t),this.reject=o(e)}var o=e(10);n.exports.f=function(n){return new r(n)}},function(n,t,e){var r=e(85),o=e(30);n.exports=Object.keys||function(n){return r(n,o)}},function(n,t,e){var r=e(15).f,o=e(13),i=e(0)("toStringTag");n.exports=function(n,t,e){n&&!o(n=e?n:n.prototype,i)&&r(n,i,{configurable:!0,value:t})}},function(n,t,e){var r=e(39)("keys"),o=e(44);n.exports=function(n){return r[n]||(r[n]=o(n))}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){"use strict";var r=e(90)(!0);e(33)(String,"String",function(n){this._t=String(n),this._i=0},function(){var n,t=this._t,e=this._i;return e>=t.length?{value:void 0,done:!0}:(n=r(t,e),this._i+=n.length,{value:n,done:!1})})},function(n,t,e){e(95);for(var r=e(1),o=e(6),i=e(7),u=e(0)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(n,t){n.exports=require("auth0-extension-hapi-tools@1.2.0")},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.uninstall=t.install=void 0;var o=e(61),i=r(o),u=e(50),c=r(u),s="auth0-account-link-extension",a=function(n){return n.find(function(n){return n.name===s})},f=function(n,t){var e=n.create,r=n.update;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=n.find(function(n){return n.name===s});return o?r({id:o.id},t):(console.log("Made it to create",(0,i.default)({stage:"login_success"},t)),e((0,i.default)({stage:"login_success"},t)))}},l=function(n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=a(t);e&&n.delete({id:e.id})}},d=function(n,t){return console.log("Generating rule and attempting to use API"),(0,c.default)((0,i.default)({username:s},t)).then(function(n){return console.log("Made it here with the rule: ",n.substr(0,30)),n}).then(function(n){return{name:s,script:n,enabled:!0}}).then(function(t){return n.getAll().then(f(n,t))})},p=function(n){return n.getAll().then(l(n))};t.install=d,t.uninstall=p},function(n,t){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(n,t,e){var r=e(1).document;n.exports=r&&r.documentElement},function(n,t,e){var r=e(11);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==r(n)?n.split(""):Object(n)}},function(n,t,e){"use strict";var r=e(34),o=e(5),i=e(88),u=e(6),c=e(13),s=e(7),a=e(76),f=e(23),l=e(84),d=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};n.exports=function(n,t,e,v,_,y,g){a(e,t,v);var m,x,b,T=function(n){if(!p&&n in k)return k[n];switch(n){case"keys":case"values":return function(){return new e(this,n)}}return function(){return new e(this,n)}},O=t+" Iterator",w="values"==_,S=!1,k=n.prototype,j=k[d]||k["@@iterator"]||_&&k[_],P=j||T(_),E=_?w?T("entries"):P:void 0,L="Array"==t?k.entries||j:j;if(L&&(b=l(L.call(new n)))!==Object.prototype&&b.next&&(f(b,O,!0),r||c(b,d)||u(b,d,h)),w&&j&&"values"!==j.name&&(S=!0,P=function(){return j.call(this)}),r&&!g||!p&&!S&&k[d]||u(k,d,P),s[t]=P,s[O]=h,_)if(m={values:w?P:T("values"),keys:y?P:T("keys"),entries:E},g)for(x in m)x in k||i(k,x,m[x]);else o(o.P+o.F*(p||S),t,m);return m}},function(n,t){n.exports=!0},function(n,t){t.f={}.propertyIsEnumerable},function(n,t){n.exports=function(n){try{return{e:!1,v:n()}}catch(n){return{e:!0,v:n}}}},function(n,t,e){var r=e(21);n.exports=function(n,t){var e=r.f(n);return(0,e.resolve)(t),e.promise}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});n.exports=function(n){return o[n]||(o[n]={})}},function(n,t,e){var r=e(3),o=e(10),i=e(0)("species");n.exports=function(n,t){var e,u=r(n).constructor;return void 0===u||void 0==(e=r(u)[i])?t:o(e)}},function(n,t,e){var r,o,i,u=e(12),c=e(73),s=e(31),a=e(19),f=e(1),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,_=0,y={},g=function(){var n=+this;if(y.hasOwnProperty(n)){var t=y[n];delete y[n],t()}},m=function(n){g.call(n.data)};d&&p||(d=function(n){for(var t=[],e=1;arguments.length>e;)t.push(arguments[e++]);return y[++_]=function(){c("function"==typeof n?n:Function(n),t)},r(_),_},p=function(n){delete y[n]},"process"==e(11)(l)?r=function(n){l.nextTick(u(g,n,1))}:v&&v.now?r=function(n){v.now(u(g,n,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=m,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(n){f.postMessage(n+"","*")},f.addEventListener("message",m,!1)):r="onreadystatechange"in a("script")?function(n){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),g.call(n)}}:function(n){setTimeout(u(g,n,1),0)}),n.exports={set:d,clear:p}},function(n,t,e){var r=e(25),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t,e){var r=e(18);n.exports=function(n){return Object(r(n))}},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},function(n,t,e){var r=e(17),o=e(0)("iterator"),i=e(7);n.exports=e(2).getIteratorMethod=function(n){if(void 0!=n)return n[o]||n["@@iterator"]||i[r(n)]}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}var o=e(4),i=r(o),u=e(53),c=r(u),s=e(9),a=r(s),f=function(n){n?(a.default.error("Hapi initialization failed."),a.default.error(n)):a.default.info("Hapi initialization completed.")},l=function(n,t,r){return i.default.setProvider(function(t){return n(t)||e.i({NODE_ENV:"production",CLIENT_VERSION:"1.0.0"})[t]}),(0,c.default)(r||f)};n.exports=l},function(n,t,e){"use strict";n.exports=function(n){return{method:"GET",path:"/link",handler:{file:"index.html"}}}},function(n,t,e){"use strict";var r=e(29);n.exports=function(n){return{method:"DELETE",path:"/.extensions/on-uninstall",config:{auth:!1,pre:[n.handlers.validateHookToken("/.extensions/on-uninstall"),n.handlers.managementClient]},handler:function(n,t){console.log("Starting uninstall..."),(0,r.uninstall)(n.pre.auth0.rules).then(function(n){return t().code(204)}).catch(function(n){throw console.error("Something went wrong, ",n),n}).catch(function(n){return t.error(n)})}}}},function(n,t,e){"use strict";var r=e(29),o=e(4),i=function(n){return n&&n.__esModule?n:{default:n}}(o);n.exports=function(n){return{method:"POST",path:"/.extensions/on-install",config:{auth:!1,pre:[n.handlers.validateHookToken("/.extensions/on-install"),n.handlers.managementClient]},handler:function(n,t){console.log("Starting install..."),(0,r.install)(n.pre.auth0.rules,{extensionURL:(0,i.default)("PUBLIC_WT_URL")}).then(function(n){return t().code(204)}).catch(function(n){throw console.error("Something went wrong, ",n),n}).catch(function(n){return t.error(n)})}}}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(62),i=r(o),u=e(59),c=r(u),s=e(60),a=r(s),f=e(103),l=(r(f),e(4)),d=(r(l),e(51)),p=r(d),h=(0,p.default)(),v=function(n,t){return(0,c.default)(n).reduce(function(n,t){var e=(0,i.default)(t,2),r=e[0],o=e[1];return n.replace("@@"+r+"@@",o)},t.toString())};t.default=function(n){var t=n.username,e=void 0===t?"Unknown":t,r=n.extensionURL,o=void 0===r?"":r,i={updateTime:(new Date).toISOString(),extensionURL:o.replace(/\/$/g,""),username:e};return a.default.resolve(h).then(function(n){return v(i,n)})}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"function (user, context, callback) {\n    /**\n     * This rule has been automatically generated by\n     * @@username@@ at @@updateTime@@\n     */\n    var request = require('request@2.56.0');\n    var Promise = require('native-or-bluebird@1.2.0');\n\n    var CONTINUE_PROTOCOL = 'redirect-callback';\n    var config = {\n      endpoints: {\n        linking: '@@extensionURL@@',\n        userApi: auth0.baseUrl + '/users'\n      },\n      token: {\n        clientId: configuration.AUTH0_CLIENT_ID,\n        clientSecret: configuration.AUTH0_CLIENT_SECRET,\n        issuer: configuration.ISSUER\n      }\n    };\n\n    createStrategy().then(callbackWithSuccess).catch(callbackWithFailure);\n\n    function createStrategy() {\n      if (shouldLink()) {\n        return linkAccounts();\n      } else if (shouldPrompt()) {\n        return promptUser();\n      }\n\n      return continueAuth();\n\n      function shouldLink() {\n        return !!context.request.query.link_account_token;\n      }\n\n      function shouldPrompt() {\n        return !insideRedirect() && !redirectingToContinue() && firstLogin();\n\n        // Check if we're inside a redirect\n        // in order to avoid a redirect loop\n        // TODO: May no longer be necessary\n        function insideRedirect() {\n          return context.request.query.redirect_uri &&\n            context.request.query.redirect_uri.indexOf(config.endpoints.linking) !== -1;\n        }\n\n        // Check if this is the first login of the user\n        // since merging already active accounts can be a\n        // destructive action\n        function firstLogin() {\n          return context.stats.loginsCount === 0;\n        }\n\n        // Check if we're coming back from a redirect\n        // in order to avoid a redirect loop. User will\n        // be sent to /continue at this point. We need\n        // to assign them to their primary user if so.\n        function redirectingToContinue() {\n          return context.protocol === CONTINUE_PROTOCOL;\n        }\n      }\n    }\n\n    function linkAccounts() {\n      var secondAccountToken = context.request.query.link_account_token;\n      var uri = config.endpoints.userApi+'/'+user.user_id+'/identities';\n\n      return apiCall({\n        method: 'POST',\n        url: uri,\n        headers: {\n          Authorization: 'Bearer ' + createToken(config.token),\n          'Content-Type': 'application/json',\n          'Cache-Control': 'no-cache'\n        },\n        json: { link_with: secondAccountToken }\n      });\n    }\n\n    function continueAuth() {\n      return Promise.resolve();\n    }\n\n    function promptUser() {\n      return searchUsersWithSameEmail().then(function transformUsers(users) {\n        return users.map(function(user) {\n          return {\n            userId: user.user_id,\n            email: user.email,\n            picture: user.picture,\n            connections: user.identities.map(function(identity) {\n              return identity.connection;\n            })\n          };\n        });\n      }).then(function redirectToExtension(targetUsers) {\n        if (targetUsers.length > 0) {\n          context.redirect = {\n            url: buildRedirectUrl(createToken(config.token, targetUsers), context.request.query)\n          };\n        }\n      });\n    }\n\n    function callbackWithSuccess(_) {\n      // TODO: Ask about this\n      console.info(\"Successfully linked accounts for user: \", user.email);\n      callback(null, user, context);\n\n      return _;\n    }\n\n    function callbackWithFailure(err) {\n      console.error(err.message, err.stack);\n\n      callback(err, user, context);\n    }\n\n    function createToken(tokenInfo, targetUsers) {\n      var options = {\n        expiresInMinutes: 5,\n        audience: tokenInfo.clientId,\n        issuer: qualifyDomain(tokenInfo.issuer)\n      };\n\n      var userSub = {\n        sub: user.user_id,\n        email: user.email,\n        targetUsers: targetUsers,\n        base: auth0.baseUrl\n      };\n\n      return jwt.sign(userSub, tokenInfo.clientSecret, options);\n    }\n\n    function searchUsersWithSameEmail() {\n      return apiCall({\n        url: config.endpoints.userApi,\n        qs: {\n          search_engine: 'v2',\n          q: 'email:\"' + user.email + '\" -user_id:\"' + user.user_id + '\"'\n        }\n      });\n    }\n\n    // Consider moving this logic out of the rule and into the extension\n    function buildRedirectUrl(token, q) {\n      return config.endpoints.linking + '?' +\n        [\n          'child_token=' + token,\n          'client=' + q.client_id,\n          'redirect_uri=' + q.redirect_uri,\n          'scope=' + q.scope,\n          'response_type=' + q.response_type,\n          'auth0Client=' + q.auth0Client\n        ].join('&');\n    }\n\n    function qualifyDomain(domain) {\n      return 'https://'+domain+'/';\n    }\n\n    function apiCall(options) {\n      return new Promise(function(resolve, reject) {\n        var reqOptions = Object.assign({\n          url: options.url,\n          headers: {\n            Authorization: 'Bearer ' + auth0.accessToken,\n            Accept: 'application/json'\n          },\n          json: true\n        }, options);\n\n        request(reqOptions, function handleResponse(err, response, body) {\n          if (err) {\n            reject(err);\n          } else if (response.statusCode < 200 || response.statusCode >= 300) {\n            console.error(\"API call failed: \", body);\n            reject(new Error(body));\n          } else {\n            resolve(response.body);\n          }\n        });\n      });\n    }\n  }"}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(28),i=e(4),u=r(i),c=e(9),s=r(c),a=function(n,t,e){n.decorate("server","handlers",{managementClient:o.handlers.managementApiClient({domain:(0,u.default)("AUTH0_DOMAIN"),clientId:(0,u.default)("AUTH0_CLIENT_ID"),clientSecret:(0,u.default)("AUTH0_CLIENT_SECRET"),logger:s.default.error}),validateHookToken:o.handlers.validateHookToken((0,u.default)("AUTH0_DOMAIN"),(0,u.default)("WT_URL"),(0,u.default)("EXTENSION_SECRET"))}),e()};a.attributes={name:"handlers"},t.default=a},function(n,t,e){"use strict";(function(n){function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(106),i=r(o),u=e(104),c=r(u),s=e(105),a=r(s),f=e(4),l=r(f),d=e(9),p=r(d),h=e(54),v=r(h),_=e(52),y=r(_),g=function(t){var e=new c.default.Server;return e.connection({host:"localhost",port:(0,l.default)("PORT"),routes:{cors:!0,validate:{},files:{relativeTo:i.default.join(n,"../public")}}}),e.register(a.default,function(){}),e.route({method:"GET",path:"/js/{file*}",handler:{directory:{path:n+"/../public/js"}}}),e.register([y.default,v.default],function(n){p.default.debug=function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];e.log(["debug"],t.join(" "))},p.default.info=function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];e.log(["info"],t.join(" "))},p.default.error=function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];e.log(["error"],t.join(" "))},n&&t(n),t(null,e)}),e};t.default=g}).call(t,"/")},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(47),i=r(o),u=e(49),c=r(u),s=e(48),a=r(s),f=function(n,t){return t.route(n(t))},l=function(n,t,e){f(i.default,n),f(c.default,n),f(a.default,n),e()};l.attributes={name:"routes"},t.default=l},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}var o=e(28),i=r(o),u=e(46),c=r(u),s=e(9),a=r(s),f=e(4),l=r(f),d=i.default.createServer(function(n,t){return a.default.info("Starting Account Link Extension - Version:","1.0.0"),a.default.info(" > WT_URL:",n("WT_URL")),a.default.info(" > PUBLIC_WT_URL:",(0,l.default)("PUBLIC_WT_URL")),(0,c.default)(n,t)});n.exports=function(n,t,e){l.default.setValue("PUBLIC_WT_URL",i.default.urlHelpers.getWebtaskUrl(t)),d(n,t,e)}},function(n,t,e){n.exports={default:e(63),__esModule:!0}},function(n,t,e){n.exports={default:e(64),__esModule:!0}},function(n,t,e){n.exports={default:e(65),__esModule:!0}},function(n,t,e){n.exports={default:e(66),__esModule:!0}},function(n,t,e){n.exports={default:e(67),__esModule:!0}},function(n,t,e){"use strict";t.__esModule=!0;var r=e(58),o=function(n){return n&&n.__esModule?n:{default:n}}(r);t.default=o.default||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}t.__esModule=!0;var o=e(57),i=r(o),u=e(56),c=r(u);t.default=function(){function n(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var u,s=(0,c.default)(n);!(r=(u=s.next()).done)&&(e.push(u.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return e}return function(t,e){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(n,t,e){e(27),e(26),n.exports=e(93)},function(n,t,e){e(27),e(26),n.exports=e(94)},function(n,t,e){e(96),n.exports=e(2).Object.assign},function(n,t,e){e(99),n.exports=e(2).Object.entries},function(n,t,e){e(97),e(26),e(27),e(98),e(100),e(101),n.exports=e(2).Promise},function(n,t){n.exports=function(){}},function(n,t){n.exports=function(n,t,e,r){if(!(n instanceof t)||void 0!==r&&r in n)throw TypeError(e+": incorrect invocation!");return n}},function(n,t,e){var r=e(16),o=e(42),i=e(91);n.exports=function(n){return function(t,e,u){var c,s=r(t),a=o(s.length),f=i(u,a);if(n&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((n||f in s)&&s[f]===e)return n||f||0;return!n&&-1}}},function(n,t,e){var r=e(12),o=e(75),i=e(74),u=e(3),c=e(42),s=e(45),a={},f={},t=n.exports=function(n,t,e,l,d){var p,h,v,_,y=d?function(){return n}:s(n),g=r(e,l,t?2:1),m=0;if("function"!=typeof y)throw TypeError(n+" is not iterable!");if(i(y)){for(p=c(n.length);p>m;m++)if((_=t?g(u(h=n[m])[0],h[1]):g(n[m]))===a||_===f)return _}else for(v=y.call(n);!(h=v.next()).done;)if((_=o(v,g,h.value,t))===a||_===f)return _};t.BREAK=a,t.RETURN=f},function(n,t,e){n.exports=!e(8)&&!e(20)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(n,t){n.exports=function(n,t,e){var r=void 0===e;switch(t.length){case 0:return r?n():n.call(e);case 1:return r?n(t[0]):n.call(e,t[0]);case 2:return r?n(t[0],t[1]):n.call(e,t[0],t[1]);case 3:return r?n(t[0],t[1],t[2]):n.call(e,t[0],t[1],t[2]);case 4:return r?n(t[0],t[1],t[2],t[3]):n.call(e,t[0],t[1],t[2],t[3])}return n.apply(e,t)}},function(n,t,e){var r=e(7),o=e(0)("iterator"),i=Array.prototype;n.exports=function(n){return void 0!==n&&(r.Array===n||i[o]===n)}},function(n,t,e){var r=e(3);n.exports=function(n,t,e,o){try{return o?t(r(e)[0],e[1]):t(e)}catch(t){var i=n.return;throw void 0!==i&&r(i.call(n)),t}}},function(n,t,e){"use strict";var r=e(81),o=e(38),i=e(23),u={};e(6)(u,e(0)("iterator"),function(){return this}),n.exports=function(n,t,e){n.prototype=r(u,{next:o(1,e)}),i(n,t+" Iterator")}},function(n,t,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(n){}n.exports=function(n,t){if(!t&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},n(i)}catch(n){}return e}},function(n,t){n.exports=function(n,t){return{value:t,done:!!n}}},function(n,t,e){var r=e(1),o=e(41).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==e(11)(u);n.exports=function(){var n,t,e,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();n;){o=n.fn,n=n.next;try{o()}catch(r){throw n?e():t=void 0,r}}t=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(c&&c.resolve){var d=c.resolve();e=function(){d.then(a)}}else e=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};t&&(t.next=o),n||(n=o,e()),t=o}}},function(n,t,e){"use strict";var r=e(22),o=e(83),i=e(35),u=e(43),c=e(32),s=Object.assign;n.exports=!s||e(20)(function(){var n={},t={},e=Symbol(),r="abcdefghijklmnopqrst";return n[e]=7,r.split("").forEach(function(n){t[n]=n}),7!=s({},n)[e]||Object.keys(s({},t)).join("")!=r})?function(n,t){for(var e=u(n),s=arguments.length,a=1,f=o.f,l=i.f;s>a;)for(var d,p=c(arguments[a++]),h=f?r(p).concat(f(p)):r(p),v=h.length,_=0;v>_;)l.call(p,d=h[_++])&&(e[d]=p[d]);return e}:s},function(n,t,e){var r=e(3),o=e(82),i=e(30),u=e(24)("IE_PROTO"),c=function(){},s=function(){var n,t=e(19)("iframe"),r=i.length;for(t.style.display="none",e(31).appendChild(t),t.src="javascript:",n=t.contentWindow.document,n.open(),n.write("<script>document.F=Object<\/script>"),n.close(),s=n.F;r--;)delete s.prototype[i[r]];return s()};n.exports=Object.create||function(n,t){var e;return null!==n?(c.prototype=r(n),e=new c,c.prototype=null,e[u]=n):e=s(),void 0===t?e:o(e,t)}},function(n,t,e){var r=e(15),o=e(3),i=e(22);n.exports=e(8)?Object.defineProperties:function(n,t){o(n);for(var e,u=i(t),c=u.length,s=0;c>s;)r.f(n,e=u[s++],t[e]);return n}},function(n,t){t.f=Object.getOwnPropertySymbols},function(n,t,e){var r=e(13),o=e(43),i=e(24)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(n){return n=o(n),r(n,i)?n[i]:"function"==typeof n.constructor&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?u:null}},function(n,t,e){var r=e(13),o=e(16),i=e(70)(!1),u=e(24)("IE_PROTO");n.exports=function(n,t){var e,c=o(n),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;t.length>s;)r(c,e=t[s++])&&(~i(a,e)||a.push(e));return a}},function(n,t,e){var r=e(22),o=e(16),i=e(35).f;n.exports=function(n){return function(t){for(var e,u=o(t),c=r(u),s=c.length,a=0,f=[];s>a;)i.call(u,e=c[a++])&&f.push(n?[e,u[e]]:u[e]);return f}}},function(n,t,e){var r=e(6);n.exports=function(n,t,e){for(var o in t)e&&n[o]?n[o]=t[o]:r(n,o,t[o]);return n}},function(n,t,e){n.exports=e(6)},function(n,t,e){"use strict";var r=e(1),o=e(2),i=e(15),u=e(8),c=e(0)("species");n.exports=function(n){var t="function"==typeof o[n]?o[n]:r[n];u&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},function(n,t,e){var r=e(25),o=e(18);n.exports=function(n){return function(t,e){var i,u,c=String(o(t)),s=r(e),a=c.length;return s<0||s>=a?n?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?n?c.charAt(s):i:n?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(n,t,e){var r=e(25),o=Math.max,i=Math.min;n.exports=function(n,t){return n=r(n),n<0?o(n+t,0):i(n,t)}},function(n,t,e){var r=e(14);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var r=e(3),o=e(45);n.exports=e(2).getIterator=function(n){var t=o(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return r(t.call(n))}},function(n,t,e){var r=e(17),o=e(0)("iterator"),i=e(7);n.exports=e(2).isIterable=function(n){var t=Object(n);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(r(t))}},function(n,t,e){"use strict";var r=e(68),o=e(78),i=e(7),u=e(16);n.exports=e(33)(Array,"Array",function(n,t){this._t=u(n),this._i=0,this._k=t},function(){var n=this._t,t=this._k,e=this._i++;return!n||e>=n.length?(this._t=void 0,o(1)):"keys"==t?o(0,e):"values"==t?o(0,n[e]):o(0,[e,n[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(n,t,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(80)})},function(n,t){},function(n,t,e){"use strict";var r,o,i,u,c=e(34),s=e(1),a=e(12),f=e(17),l=e(5),d=e(14),p=e(10),h=e(69),v=e(71),_=e(40),y=e(41).set,g=e(79)(),m=e(21),x=e(36),b=e(37),T=s.TypeError,O=s.process,w=s.Promise,S="process"==f(O),k=function(){},j=o=m.f,P=!!function(){try{var n=w.resolve(1),t=(n.constructor={})[e(0)("species")]=function(n){n(k,k)};return(S||"function"==typeof PromiseRejectionEvent)&&n.then(k)instanceof t}catch(n){}}(),E=c?function(n,t){return n===t||n===w&&t===u}:function(n,t){return n===t},L=function(n){var t;return!(!d(n)||"function"!=typeof(t=n.then))&&t},M=function(n,t){if(!n._n){n._n=!0;var e=n._c;g(function(){for(var r=n._v,o=1==n._s,i=0;e.length>i;)!function(t){var e,i,u=o?t.ok:t.fail,c=t.resolve,s=t.reject,a=t.domain;try{u?(o||(2==n._h&&U(n),n._h=1),!0===u?e=r:(a&&a.enter(),e=u(r),a&&a.exit()),e===t.promise?s(T("Promise-chain cycle")):(i=L(e))?i.call(e,c,s):c(e)):s(r)}catch(n){s(n)}}(e[i++]);n._c=[],n._n=!1,t&&!n._h&&C(n)})}},C=function(n){y.call(s,function(){var t,e,r,o=n._v,i=A(n);if(i&&(t=x(function(){S?O.emit("unhandledRejection",o,n):(e=s.onunhandledrejection)?e({promise:n,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),n._h=S||A(n)?2:1),n._a=void 0,i&&t.e)throw t.v})},A=function(n){if(1==n._h)return!1;for(var t,e=n._a||n._c,r=0;e.length>r;)if(t=e[r++],t.fail||!A(t.promise))return!1;return!0},U=function(n){y.call(s,function(){var t;S?O.emit("rejectionHandled",n):(t=s.onrejectionhandled)&&t({promise:n,reason:n._v})})},I=function(n){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=n,t._s=2,t._a||(t._a=t._c.slice()),M(t,!0))},R=function(n){var t,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===n)throw T("Promise can't be resolved itself");(t=L(n))?g(function(){var r={_w:e,_d:!1};try{t.call(n,a(R,r,1),a(I,r,1))}catch(n){I.call(r,n)}}):(e._v=n,e._s=1,M(e,!1))}catch(n){I.call({_w:e,_d:!1},n)}}};P||(w=function(n){h(this,w,"Promise","_h"),p(n),r.call(this);try{n(a(R,this,1),a(I,this,1))}catch(n){I.call(this,n)}},r=function(n){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(87)(w.prototype,{then:function(n,t){var e=j(_(this,w));return e.ok="function"!=typeof n||n,e.fail="function"==typeof t&&t,e.domain=S?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(n){return this.then(void 0,n)}}),i=function(){var n=new r;this.promise=n,this.resolve=a(R,n,1),this.reject=a(I,n,1)},m.f=j=function(n){return E(w,n)?new i(n):o(n)}),l(l.G+l.W+l.F*!P,{Promise:w}),e(23)(w,"Promise"),e(89)("Promise"),u=e(2).Promise,l(l.S+l.F*!P,"Promise",{reject:function(n){var t=j(this);return(0,t.reject)(n),t.promise}}),l(l.S+l.F*(c||!P),"Promise",{resolve:function(n){return n instanceof w&&E(n.constructor,this)?n:b(this,n)}}),l(l.S+l.F*!(P&&e(77)(function(n){w.all(n).catch(k)})),"Promise",{all:function(n){var t=this,e=j(t),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,u=1;v(n,!1,function(n){var c=i++,s=!1;e.push(void 0),u++,t.resolve(n).then(function(n){s||(s=!0,e[c]=n,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(n){var t=this,e=j(t),r=e.reject,o=x(function(){v(n,!1,function(n){t.resolve(n).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(n,t,e){var r=e(5),o=e(86)(!0);r(r.S,"Object",{entries:function(n){return o(n)}})},function(n,t,e){"use strict";var r=e(5),o=e(2),i=e(1),u=e(40),c=e(37);r(r.P+r.R,"Promise",{finally:function(n){var t=u(this,o.Promise||i.Promise),e="function"==typeof n;return this.then(e?function(e){return c(t,n()).then(function(){return e})}:n,e?function(e){return c(t,n()).then(function(){throw e})}:n)}})},function(n,t,e){"use strict";var r=e(5),o=e(21),i=e(36);r(r.S,"Promise",{try:function(n){var t=o.f(this),e=i(n);return(e.e?t.reject:t.resolve)(e.v),t.promise}})},function(n,t){n.exports=require("auth0-extension-tools@1.2.1")},function(n,t){n.exports=require("crypto")},function(n,t){n.exports=require("hapi@13.5.0")},function(n,t){n.exports=require("inert")},function(n,t){n.exports=require("path")},function(n,t){n.exports=require("winston@1.0.0")}]);
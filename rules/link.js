/* global configuration, auth0, jwt */

/**
 *  This file is meant to be included as a string template
 */
// @@RULE_START@@ -- DO NOT MODIFY THIS LINE OR THE LINE IMMEDIATELY BELOW
export default () => {
  const template = `function (user, context, callback) {
    /**
     * This rule has been automatically generated by
     * @@username@@ at @@updateTime@@
     */
    var request = require('request@2.56.0');
    var Promise = require('native-or-bluebird@1.2.0');

    var CONTINUE_PROTOCOL = 'redirect-callback';
    var config = {
      endpoints: {
        linking: '@@extensionURL@@',
        userApi: auth0.baseUrl + '/users'
      },
      token: {
        clientId: configuration.AUTH0_CLIENT_ID,
        clientSecret: configuration.AUTH0_CLIENT_SECRET,
        issuer: configuration.ISSUER
      }
    };

    createStrategy().then(callbackWithSuccess).catch(callbackWithFailure);

    function createStrategy() {
      if (shouldLink()) {
        return linkAccounts();
      } else if (shouldPrompt()) {
        return promptUser();
      }

      return continueAuth();

      function shouldLink() {
        return !!context.request.query.link_account_token;
      }

      function shouldPrompt() {
        return !insideRedirect() && !redirectingToContinue() && firstLogin();

        // Check if we're inside a redirect
        // in order to avoid a redirect loop
        // TODO: May no longer be necessary
        function insideRedirect() {
          return context.request.query.redirect_uri &&
            context.request.query.redirect_uri.indexOf(config.endpoints.linking) !== -1;
        }

        // Check if this is the first login of the user
        // since merging already active accounts can be a
        // destructive action
        function firstLogin() {
          return context.stats.loginsCount === 0;
        }

        // Check if we're coming back from a redirect
        // in order to avoid a redirect loop. User will
        // be sent to /continue at this point. We need
        // to assign them to their primary user if so.
        function redirectingToContinue() {
          return context.protocol === CONTINUE_PROTOCOL;
        }
      }
    }

    function linkAccounts() {
      var secondAccountToken = context.request.query.link_account_token;
      var uri = config.endpoints.userApi+'/'+user.user_id+'/identities';

      return apiCall({
        method: 'POST',
        url: uri,
        headers: {
          Authorization: 'Bearer ' + createToken(config.token),
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        json: { link_with: secondAccountToken }
      });
    }

    function continueAuth() {
      return Promise.resolve();
    }

    function promptUser() {
      return searchUsersWithSameEmail().then(function transformUsers(users) {
        return users.map(function(user) {
          return {
            userId: user.user_id,
            email: user.email,
            picture: user.picture,
            connections: user.identities.map(function(identity) {
              return identity.connection;
            })
          };
        });
      }).then(function redirectToExtension(targetUsers) {
        if (targetUsers.length > 0) {
          context.redirect = {
            url: buildRedirectUrl(createToken(config.token, targetUsers), context.request.query)
          };
        }
      });
    }

    function callbackWithSuccess(_) {
      // TODO: Ask about this
      console.info("Successfully linked accounts for user: ", user.email);
      callback(null, user, context);

      return _;
    }

    function callbackWithFailure(err) {
      console.error(err.message, err.stack);

      callback(err, user, context);
    }

    function createToken(tokenInfo, targetUsers) {
      var options = {
        expiresInMinutes: 5,
        audience: tokenInfo.clientId,
        issuer: qualifyDomain(tokenInfo.issuer)
      };

      var userSub = {
        sub: user.user_id,
        email: user.email,
        targetUsers: targetUsers,
        base: auth0.baseUrl
      };

      return jwt.sign(userSub, tokenInfo.clientSecret, options);
    }

    function searchUsersWithSameEmail() {
      return apiCall({
        url: config.endpoints.userApi,
        qs: {
          search_engine: 'v2',
          q: 'email:"' + user.email + '" -user_id:"' + user.user_id + '"'
        }
      });
    }

    // Consider moving this logic out of the rule and into the extension
    function buildRedirectUrl(token, q) {
      return config.endpoints.linking + '?' +
        [
          'child_token=' + token,
          'client=' + q.client_id,
          'redirect_uri=' + q.redirect_uri,
          'scope=' + q.scope,
          'response_type=' + q.response_type,
          'auth0Client=' + q.auth0Client
        ].join('&');
    }

    function qualifyDomain(domain) {
      return 'https://'+domain+'/';
    }

    function apiCall(options) {
      return new Promise(function(resolve, reject) {
        var reqOptions = Object.assign({
          url: options.url,
          headers: {
            Authorization: 'Bearer ' + auth0.accessToken,
            Accept: 'application/json'
          },
          json: true
        }, options);

        request(reqOptions, function handleResponse(err, response, body) {
          if (err) {
            reject(err);
          } else if (response.statusCode < 200 || response.statusCode >= 300) {
            console.error("API call failed: ", body);
            reject(new Error(body));
          } else {
            resolve(response.body);
          }
        });
      });
    }
  }`;

  return template;
};

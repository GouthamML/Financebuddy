declare var mcs;

export function mcsConfig(){
  return {
        "logLevel": mcs.LOG_LEVEL.INFO,
        "logHTTP": true,
        "mobileBackends": {
          "WS_IncidentReport_SS": {
            "default": true,
            "baseUrl": "https://mymcs-gse00011679.mobileenv.us2.oraclecloud.com:443",
            "applicationKey": "a6627064-742f-4bcf-a348-20ba6756fb67",
              "authorization": {
              "basicAuth": {
                "backendId": "ada9bf27-62f5-445f-bcea-748fc17306a9",
                "anonymousToken": "R1NFMDAwMTE2NzlfTVlNQ1NfTU9CSUxFX0FOT05ZTU9VU19BUFBJRDpxak9iazVxbV9lcjZ6dg=="
              },
              "oAuth": {
                "clientId": "YOUR_CLIENT_ID",
                "clientSecret": "YOUR_ClIENT_SECRET",
                "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
              },
              "facebookAuth":{
                "facebookAppId": "YOUR_FACEBOOK_APP_ID",
                "backendId": "YOUR_BACKEND_ID",
                "anonymousToken": "YOUR_BACKEND_ANONYMOUS_TOKEN"
              },
              "ssoAuth":{
                "clientId": "YOUR_CLIENT_ID",
                "clientSecret": "YOUR_ClIENT_SECRET",
                "tokenEndpoint": "YOUR_TOKEN_ENDPOINT"
              },
              "tokenAuth":{
                "backendId": "YOUR_BACKEND_ID"
              }
            }
          }
        },
        "syncExpress": {
          "handler": "OracleRestHandler",
          "policies": [
            {
              "path": '/mobile/custom/firstApi/tasks/:id(\\d+)?',
            },
            {
              "path": '/mobile/custom/secondApi/tasks/:id(\\d+)?',
            }
          ]
        }

      }
};

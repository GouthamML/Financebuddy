
import { Injectable } from "@angular/core";
import { Headers, Http, URLSearchParams } from "@angular/http";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { defer } from "rxjs/Observable/defer";
import { fromPromise } from "rxjs/Observable/fromPromise";
import { mcsConfig} from "../config/oracle_mobile_cloud_config";
declare var mcs;

@Injectable()
export class MCSService {
  public mbe : any;

  constructor() {
    mcs.MobileBackendManager.setConfig(mcsConfig());
    this.mbe = mcs.MobileBackendManager.getMobileBackend('WS_IncidentReport_SS');
    this.mbe.setAuthenticationType("basicAuth");
  }

  public authenticate(loginData) {
     return fromPromise(this.mbe.Authorization.authenticate(loginData.username, loginData.password));
   };

   public authenticateAnonymous() {
      return fromPromise(this.mbe.Authorization.authenticateAnonymous());
   };

   public logout(){
      this.mbe.authorization.logout();
   };

   public invokeCustomAPI(uri,method,payload?) {
     return fromPromise(this.mbe.CustomCode.invokeCustomCodeJSONRequest(uri , method , payload));
   }
   
}

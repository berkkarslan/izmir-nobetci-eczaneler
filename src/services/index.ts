import { createContext, useContext } from "react";
//import {NavService} from './navigation';
//import {TranslateService} from './translate';
import { ApiService } from "./api";

export const services = {
  //t: new TranslateService(), // should be first
  //nav: new NavService(),
  api: new ApiService(),
  //onStart: new OnStartService(), // should be last
};

type ContextServices = typeof services;
const ServicesContext = createContext<ContextServices>(services);


export const useServices = (): ContextServices => useContext(ServicesContext);

export const initServices = async (): Promise<any> => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key];

      if (s.init) {
        await s.init();
      }
    }
  }
};

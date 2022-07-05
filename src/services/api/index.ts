import {ServerApi} from './server';
export class ApiService implements IService {
  private inited = false;
  server: ServerApi;

  constructor() {
    this.server = new ServerApi();
  }

  init = async (): Promise<any> => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}

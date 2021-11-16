import axios, { AxiosInstance } from "axios";
import Endpoints from "../../utils/Endpoints";

interface ClientOptions {
  isSandbox?: boolean
  apiCredentials?: Credentials
}

interface Credentials {
  clientId: string
  clientSecret: string
}

export class Client {
  private _client: AxiosInstance
  private options: ClientOptions

  constructor(options : ClientOptions) {
    this.options = Object.assign(
      { isSandbox: false },
      options
    )

    this._init()
  }

  private _init() {
    this._client = axios.create({
      baseURL: this.options.isSandbox ? Endpoints.SANBOX_URL : Endpoints.PROD_URL
    })
  }

  // Exemplo
  getPayments(options: any) {
    // return new Payments(this, options)
  }
}

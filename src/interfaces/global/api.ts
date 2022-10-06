export interface ResponseBody {
  status: boolean;
  data?: object;
  message?: string;
  error?: Error;
}

export interface ClientAPIConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data: object;
}

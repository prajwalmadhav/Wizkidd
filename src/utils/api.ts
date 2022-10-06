import axios from 'axios';
import { ClientAPIConfig, ResponseBody } from '../interfaces';

// API Routes
const baseRoute = '/api/v1';

const apiRoutes = {
  userAuth: baseRoute + '/auth',
};

// All API calls will be made from here
const makeAPICall = async (config: ClientAPIConfig) => {
  const response = await axios(config);

  const responseBody: ResponseBody = response.data;

  return responseBody.data;
};

export { apiRoutes, makeAPICall };

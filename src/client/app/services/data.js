import axios from 'axios';

import Constants from '../config/constants';

class Data {

  static getDucks() {
    return axios.get(`${Constants.BASE_URL}/ducks`);
  }
}

export default Data;

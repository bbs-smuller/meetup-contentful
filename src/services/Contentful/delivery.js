import axios from 'axios'
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT, CONTENTFUL_DELIVERY_TOKEN } from 'react-native-dotenv'

class Delivery {
  static get(endpoint, params = {}) {
    return axios.get(endpoint, {
      params: {
        ...params,
        access_token: CONTENTFUL_DELIVERY_TOKEN,
      },
      baseURL: this.baseUrl(),
    })
  }

  static baseUrl() {
    return `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`
  }
}

export default Delivery

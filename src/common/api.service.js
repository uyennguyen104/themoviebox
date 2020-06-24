import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL, API_TOKEN } from "@/common/config";

const defaultParams = {
  api_key: API_TOKEN,
};

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const HomeService = {
  fetchMovies(params) {
    return ApiService.query(`movie/${params.type}`, {
      params: Object.assign({}, { page: params.page }, defaultParams),
    });
  },
  getMovieList(params) {
    return ApiService.query('genre/movie/list', {
      params: Object.assign({}, params, defaultParams),
    });
  },
  getTVList(params) {
    return ApiService.query('genre/tv/list', {
      params: Object.assign({}, params, defaultParams),
    });
  },
};

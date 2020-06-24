import {
  HomeService,
} from "@/common/api.service";
import {
  FETCH_MOVIES,
  GET_MOVIE_LIST,
  GET_TV_LIST,
} from "./actions.type";
import {
  SET_MOVIE_LIST,
  SET_TV_LIST,
} from "./mutations.type";

const state = {
  movieList: [],
  tvList: [],
};

const getters = {
  movieList(state) {
    return state.movieList;
  },
  tvList(state) {
    return state.tvList;
  },
};

const actions = {
  [FETCH_MOVIES](context, params) {
    return new Promise((resolve, reject) => {
      HomeService.fetchMovies(params)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [GET_MOVIE_LIST](context, params) {
    return new Promise((resolve, reject) => {
      HomeService.getMovieList(params)
        .then(({ data }) => {
          context.commit(SET_MOVIE_LIST, data.genres);
          resolve(data.genres);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [GET_TV_LIST](context, params) {
    return new Promise((resolve, reject) => {
      HomeService.getTVList(params)
        .then(({ data }) => {
          context.commit(SET_TV_LIST, data.genres);
          resolve(data.genres);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_MOVIE_LIST](state, genres) {
    state.movieList = genres;
  },
  [SET_TV_LIST](state, genres) {
    state.tvList = genres;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};

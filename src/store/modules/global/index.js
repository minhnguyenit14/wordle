import { GLOBAL_MUTATIONS_NAME } from './types';

// initial state
const state = () => ({
  keywordData: undefined,
  charHover: undefined,
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  [GLOBAL_MUTATIONS_NAME.SET_KEYWORD_DATA](state, keywordData) {
    state.keywordData = keywordData;
  },
  [GLOBAL_MUTATIONS_NAME.SET_HOVER_CHAR](state, hoverChar) {
    state.hoverChar = hoverChar;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

/* eslint-disable no-fallthrough */

import { fromJS, List } from 'immutable';

import { ADD_QUESTIONNAIRE, ADD_DUMMY_QUESTIONNAIRE } from 'containers/HomePage/constants';

// state.appstate =>
// The initial state of the App
const questionnaireList = List([]);

function appReducer(state = questionnaireList, action) {
  switch (action.type) {

    case ADD_QUESTIONNAIRE:
    case ADD_DUMMY_QUESTIONNAIRE:
      return state
        .push(fromJS(action.payload.questionnaire));

    default:
      return state;
  }
}

export default appReducer;

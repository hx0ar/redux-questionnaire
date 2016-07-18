/* eslint-disable no-fallthrough */

import { fromJS } from 'immutable';
import {
  SELECT_QUESTIONNAIRE,
  UPDATE_ANSWER,
} from './constants';

// state.questionnaire =>
const questionnaire = fromJS({
  currentQuestionnaire: null,
});

function qreReducer(state = questionnaire, action) {
  switch (action.type) {

    case SELECT_QUESTIONNAIRE:
      return state
        .set('currentQuestionnaire', action.payload.questionnaire);

    case UPDATE_ANSWER:
      let current = state.get('currentQuestionnaire');
      let found = -1;
      let question = current.oQuestionList.find((obj, ix) => { found = ix; return obj.sId === action.payload.questionId; });
      if (found >= 0 && question) {
        question.sAnswer = action.payload.sAnswer;
        current.oQuestionList[found] = question;
        return state
          .setIn('currentQuestionnaire', current);
      }
      return state;

    default:
      return state;
  }
}

export default qreReducer;

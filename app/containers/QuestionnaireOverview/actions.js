
import {
  SELECT_QUESTIONNAIRE,
  UPDATE_ANSWER,
} from './constants';

export function selectQuestionnaire(questionnaire) {
  return {
    type: SELECT_QUESTIONNAIRE,
    payload: {
      questionnaire,
    },
  };
}

export function updateAnswer(questionId, sAnswer) {
  return {
    type: UPDATE_ANSWER,
    payload: {
      questionId,
      sAnswer,
    },
  };
}

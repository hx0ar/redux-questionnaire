
import {
  ADD_QUESTIONNAIRE,
  ADD_DUMMY_QUESTIONNAIRE,
} from './constants';
import { GetTestData } from '../../models/TestData.js';

export function addQuestionnaire(questionnaire) {
  return {
    type: ADD_QUESTIONNAIRE,
    payload: {
      questionnaire,
    },
  };
}

export function loadDummyQuestionnaire(count) {
  return {
    type: ADD_DUMMY_QUESTIONNAIRE,
    payload: {
      questionnaire: GetTestData(count),
    },
  };
}

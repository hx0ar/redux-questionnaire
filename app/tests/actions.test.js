import expect from 'expect';

import {
  ADD_DUMMY_QUESTIONNAIRE,
} from 'containers/HomePage/constants';

import {
  loadDummyQuestionnaire,
} from 'containers/HomePage/actions';

describe('HomePage Actions', () => {
  describe('loadDummyQuestionnaire', () => {
    it('should load questionnaire from dummy data', () => {
      const expectedResult = {
        type: ADD_DUMMY_QUESTIONNAIRE,
      };

      expect(loadDummyQuestionnaire(0)).toEqual(expectedResult);
    });
  });

});

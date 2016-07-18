import expect from 'expect';
import appReducer from 'containers/App/reducer';
import {
  loadDummyQuestionnaire,
} from 'containers/HomePage/actions';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = List([]),
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadDummyQuestionnaire action correctly', () => {
    const expectedResult = state
      .push(fromJS());

    expect(appReducer(state, loadDummyQuestionnaire())).toEqual(expectedResult);
  });

});

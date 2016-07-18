import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectQuestionnaireList,
} from 'containers/App/selectors';

describe('selectQuestionnaireList', () => {
  const selector = selectQuestionnaireList();
  it('should select the questionnaire list from app state', () => {
    const qlist = List([]);
    const mockedState = fromJS({
      appstate: qlist,
    });
    expect(selector(mockedState)).toEqual(qlist);
  });
});

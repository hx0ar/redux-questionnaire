import { createSelector } from 'reselect';

const selectQuestionnaire = () => (state) => state.get('questionnaire');

const selectCurrentQuestionnaire = () => createSelector(
  selectQuestionnaire(),
  (qreState) => qreState.get('currentQuestionnaire')
);

export {
  selectCurrentQuestionnaire,
};

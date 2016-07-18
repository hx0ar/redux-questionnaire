import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { selectQuestionnaireList } from 'containers/App/selectors';
import * as actionCreators from './actions';
import QNav from 'components/QNav';
import QuestionnairesTable from 'components/QuestionnairesTable';

import styles from './styles.css';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    actions: React.PropTypes.object,
    changeRoute: React.PropTypes.func,
    questionnaireList: React.PropTypes.object,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  addNewQuestionnaire = () => {
    const count = this.props.questionnaireList.size || 0;
    this.props.actions.loadDummyQuestionnaire(count);
  };

  openQuestionnaire = (sId) => {
    this.props.changeRoute(`/questionnaire/?sId=${sId}`);
  };

  render = () => {
    return (
      <section>
        <QNav />
        <QuestionnairesTable
          questionnaireList={this.props.questionnaireList}
          addNewQuestionnaire={::this.addNewQuestionnaire}
          openQuestionnaire={::this.openQuestionnaire}
        />
      </section>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createStructuredSelector({
  questionnaireList: selectQuestionnaireList(),
}), mapDispatchToProps)(HomePage);

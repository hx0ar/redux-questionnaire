import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { selectQuestionnaire } from './actions';
import { selectQuestionnaireList, selectLocationState } from 'containers/App/selectors';

import QNav from 'components/QNav';
import SectionBlock from 'components/SectionBlock';
import { Well, Grid, Row, Col } from 'react-bootstrap';
import styles from './styles.css';

export default class QuestionnaireOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    questionnaireList: React.PropTypes.object,
    changeRoute: React.PropTypes.func,
    selectCurrent: React.PropTypes.func,
    location: React.PropTypes.object,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  state = { questionnaire: null };

  componentWillMount() {
    const queryId = this.props.location.locationBeforeTransitions.query.sId;
    const qre = this.props.questionnaireList.find(obj => obj.sId === queryId);
    //console.log(this.props.location.locationBeforeTransitions.query.sId, qre, this.props.questionnaireList);
    if (!queryId || !qre) {
      this.props.changeRoute('/');
      return null;
    } else {
      this.setState({ questionnaire: qre }); // eslint-disable-line react/no-did-mount-set-state
      this.props.selectCurrent(qre);
    }
  };

  openSection = (sId) => {
    this.props.changeRoute(`/section/?sId=${sId}`);
  };

  render = () => {
    return (
      <section>
        <QNav />
        <Grid>
          <Row>
            <Col sm={12}>
            <Well>
              <div>
                This Questionnaire has {this.state.questionnaire.GetQuestionCount()} questions. {this.state.questionnaire.GetUnansweredQuestions().length} of them are unanswered.<br/>
                The questions are spread over {this.state.questionnaire.GetSectionCount()} sections and {this.state.questionnaire.GetSubSections().length} sub sections.<br/>
              </div>
            </Well>
            </Col>
          </Row>
          <Row>
          {this.state.questionnaire.GetSectionList().map((section, i) => (
            <Col sm={6} key={i} onClick={() => this.openSection(section.sId)}>
              <SectionBlock
                section={section}
              />
            </Col>
          ))}
          </Row>
        </Grid>
      </section>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    selectCurrent: (q) => dispatch(selectQuestionnaire(q)),
    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createStructuredSelector({
  questionnaireList: selectQuestionnaireList(),
  location: selectLocationState(),
}), mapDispatchToProps)(QuestionnaireOverview);

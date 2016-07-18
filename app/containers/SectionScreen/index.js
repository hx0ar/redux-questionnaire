import React from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import { selectQuestionnaireList, selectLocationState } from 'containers/App/selectors';
import { selectCurrentQuestionnaire } from 'containers/QuestionnaireOverview/selectors';
import { updateAnswer } from 'containers/QuestionnaireOverview/actions';

import QNav from 'components/QNav';
import QuestionBlock from 'components/QuestionBlock';
import { Well, Grid, Row, Col, Button } from 'react-bootstrap';
import styles from './styles.css';

export default class SectionScreen extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    questionnaireList: React.PropTypes.object,
    changeRoute: React.PropTypes.func,
    location: React.PropTypes.object,
    currentQuestionnaire: React.PropTypes.object,
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  goToSubSection = (sId) => {
    this.props.changeRoute(`/section/?sId=${sId}`);
  };

  updateAnswerInQre = (qId, sAnswer) => {
    this.props.dispatch(updateAnswer(qId, sAnswer));
  };

  render = () => {
    const current = this.props.currentQuestionnaire;
    const sId = this.props.location.locationBeforeTransitions.query.sId;
    const subSectionsArr = current.GetSubSections();
    let lastIx = 0;
    const subSection = subSectionsArr.find((obj, ix) => { lastIx = ix; return obj.item.sId === sId; });
    //console.log(subSection, subSectionsArr, sId);
    if (!subSection) { return null; }
    const nextId = subSectionsArr[lastIx + 1] ? subSectionsArr[lastIx + 1].item.sId : 0;
    const section = current.GetSectionList().find(obj => obj.sMainSection === subSection.item.sMainSection);
    //console.log(section);
    return (
      <section>
        <QNav />
        <Grid>
          <Row>
            <Col sm={12}>
            <Well>
              <div>
                This Section has {section.sectionQuestions.length} questions. {section.unansweredQuestions.length} of them are unanswered.<br/>
                The questions are spread over {section.subsections.length} sub sections.<br/>
              </div>
            </Well>
            </Col>
          </Row>
          <Row>
          {subSection.subsectionsQuestions.map((question, i) => (
            <Col sm={12} key={i}>
              <QuestionBlock
                key={question.sId}
                question={question}
                updateAnswerInQre={::this.updateAnswerInQre}
              />
            </Col>
          ))}
          </Row>
        </Grid>
        <Button bsStyle="primary" onClick={() => { if (nextId) this.goToSubSection(nextId); }}>Next sub section</Button>
      </section>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(createStructuredSelector({
  questionnaireList: selectQuestionnaireList(),
  currentQuestionnaire: selectCurrentQuestionnaire(),
  location: selectLocationState(),
}), mapDispatchToProps)(SectionScreen);

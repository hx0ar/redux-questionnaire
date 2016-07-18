import React from 'react';
import { Table, Button } from 'react-bootstrap';

import styles from './styles.css';

export class QuestionnairesTable extends React.Component {

  static propTypes = {
    questionnaireList: React.PropTypes.object, //Map
    addNewQuestionnaire: React.PropTypes.func,
    openQuestionnaire: React.PropTypes.func,
  };

  render() {
    return (
      <div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Section count</th>
              <th>Sub-section count</th>
              <th>Question count</th>
              <th>ToDo count</th>
            </tr>
          </thead>
          <tbody>
          {this.props.questionnaireList ? this.props.questionnaireList.map((qre, i) => (
            <tr key={i} onClick={() => this.props.openQuestionnaire(qre.sId)}>
              <td>Customer {i-0+1}</td>
              <td>{qre.GetSectionCount()}</td>
              <td>{qre.GetSubSections().length}</td>
              <td>{qre.GetQuestionCount()}</td>
              <td></td>
            </tr>
          )) : null}

          </tbody>
        </Table>
        <Button bsStyle="primary" onClick={this.props.addNewQuestionnaire}>Add Questionnaire</Button>
      </div>
    );
  }
}

export default QuestionnairesTable;

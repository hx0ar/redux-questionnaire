import React from 'react';
import { Panel, Button } from 'react-bootstrap';

import styles from './styles.css';

export class SectionBlock extends React.Component {

  static propTypes = {
    section: React.PropTypes.object, //Map
  };

  render() {
    return (
      <Panel>
        <h2>{this.props.section.sMainSection}</h2>
        <h5>{Math.ceil(this.props.section.progressPct * 100)}%</h5>
        <h4>
          {this.props.section.sectionQuestions.length}/{this.props.section.unansweredQuestions.length} questions unanswered
        </h4>
      </Panel>
    );
  }
}

export default SectionBlock;

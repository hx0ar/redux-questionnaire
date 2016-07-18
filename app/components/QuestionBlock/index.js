import React from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl } from 'react-bootstrap';

import styles from './styles.css';

export class QuestionBlock extends React.Component {

  static propTypes = {
    updateAnswerInQre: React.PropTypes.func,
    question: React.PropTypes.object,
  };

  state = { selectedValue: '' };

  componentDidMount() {
    this.setState({ selectedValue: this.props.question.sAnswer }); // eslint-disable-line react/no-did-mount-set-state
  };

  handleChange = () => {
    const value = ReactDOM.findDOMNode(this.refs.answer).value;
    this.setState({selectedValue: value});
    this.props.updateAnswerInQre(this.props.question.sId, value);
  };

  render = () => {
    return (
      <div>
        <h4>{this.props.question.sQuestion}</h4>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" ref="answer" placeholder="answer" onChange={this.handleChange} value={this.state.selectedValue} />
        </FormGroup>
      </div>
    );
  }
}

export default QuestionBlock;

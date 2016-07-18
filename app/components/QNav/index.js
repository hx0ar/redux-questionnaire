import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import styles from './styles.css';

export class QNav extends React.Component {

  render() {

    return (
      <Breadcrumb>
        <Breadcrumb.Item href="javascript:void(0);">
          Questionnaire List
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {this.props.title}
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default QNav;

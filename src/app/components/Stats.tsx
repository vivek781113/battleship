import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Flotilla } from './Flotilla';
import { Scores } from './Scores';

export const Stats: React.FC<any> = () => {
  return (
    <Col lg={2} lgOffset={2} md={3} mdOffset={2} sm={12} xs={12}>
      <Row>
        <div className="scoresPanel">
          <Col md={12} sm={4} xs={12}>
            <Scores />
          </Col>
          <Col md={12} sm={8} xs={12}>
            <Flotilla />
          </Col>
        </div>
      </Row>
    </Col>
  );
};

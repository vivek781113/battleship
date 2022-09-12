import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Flotilla } from './Flotilla';
import { Scores } from './Scores';

export const Stats: React.FC = () => {
  return (
    <div className="scoresPanel">
      <div>
        <Scores />
      </div>
      <div>
        <Flotilla />
      </div>
    </div>
  );
};
